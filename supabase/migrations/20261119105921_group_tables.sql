-- Grup Masası: friends decide together, each on their own phone.
-- Tables are reachable only through the functions below (no direct table access).
-- A table is found by its 6-character code; each member gets a secret token on join,
-- and every call checks code + token. Tables expire after 6 hours.

create table public.group_tables (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code ~ '^[A-Z2-9]{6}$'),
  dish_ids text[] not null check (cardinality(dish_ids) between 4 and 20),
  city text check (char_length(city) <= 40),
  status text not null default 'lobby' check (status in ('lobby', 'voting', 'done')),
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '6 hours'
);

create table public.group_members (
  id uuid primary key default gen_random_uuid(),
  table_id uuid not null references public.group_tables (id) on delete cascade,
  token uuid not null unique default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 30),
  is_host boolean not null default false,
  done boolean not null default false,
  joined_at timestamptz not null default now()
);
create index group_members_table_idx on public.group_members (table_id);

create table public.group_votes (
  member_id uuid not null references public.group_members (id) on delete cascade,
  table_id uuid not null references public.group_tables (id) on delete cascade,
  dish_id text not null check (char_length(dish_id) <= 80),
  liked boolean not null,
  primary key (member_id, dish_id)
);
create index group_votes_table_idx on public.group_votes (table_id);

alter table public.group_tables enable row level security;
alter table public.group_members enable row level security;
alter table public.group_votes enable row level security;
revoke all on public.group_tables, public.group_members, public.group_votes from anon, authenticated;

-- Internal: the member row for code + token on a live table, or nothing.
create or replace function public._group_member(p_code text, p_token uuid)
returns public.group_members
language sql stable security definer set search_path = ''
as $$
  select m.* from public.group_members m
  join public.group_tables t on t.id = m.table_id
  where t.code = upper(p_code) and m.token = p_token and t.expires_at > now()
$$;
revoke all on function public._group_member(text, uuid) from public, anon, authenticated;

create or replace function public.group_create(p_name text, p_dish_ids text[], p_city text)
returns json
language plpgsql security definer set search_path = ''
as $$
declare
  v_code text;
  v_table uuid;
  v_token uuid;
  v_alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  i int;
begin
  if p_name is null or char_length(trim(p_name)) = 0 or char_length(trim(p_name)) > 30 then
    raise exception 'bad_name';
  end if;
  -- tidy up long-expired tables
  delete from public.group_tables where expires_at < now() - interval '1 day';
  loop
    v_code := '';
    for i in 1..6 loop
      v_code := v_code || substr(v_alphabet, 1 + floor(random() * length(v_alphabet))::int, 1);
    end loop;
    begin
      insert into public.group_tables (code, dish_ids, city) values (v_code, p_dish_ids, left(p_city, 40))
      returning id into v_table;
      exit;
    exception when unique_violation then
      -- code taken, try another
    end;
  end loop;
  insert into public.group_members (table_id, name, is_host) values (v_table, trim(p_name), true)
  returning token into v_token;
  return json_build_object('code', v_code, 'token', v_token);
end;
$$;

create or replace function public.group_join(p_code text, p_name text)
returns json
language plpgsql security definer set search_path = ''
as $$
declare
  v_table public.group_tables;
  v_token uuid;
begin
  if p_name is null or char_length(trim(p_name)) = 0 or char_length(trim(p_name)) > 30 then
    raise exception 'bad_name';
  end if;
  select * into v_table from public.group_tables where code = upper(trim(p_code)) and expires_at > now();
  if not found then raise exception 'not_found'; end if;
  if v_table.status <> 'lobby' then raise exception 'already_started'; end if;
  if (select count(*) from public.group_members where table_id = v_table.id) >= 8 then
    raise exception 'table_full';
  end if;
  insert into public.group_members (table_id, name) values (v_table.id, trim(p_name))
  returning token into v_token;
  return json_build_object('code', v_table.code, 'token', v_token);
end;
$$;

create or replace function public.group_start(p_code text, p_token uuid)
returns void
language plpgsql security definer set search_path = ''
as $$
declare v_me public.group_members;
begin
  v_me := public._group_member(p_code, p_token);
  if v_me.id is null then raise exception 'not_member'; end if;
  if not v_me.is_host then raise exception 'not_host'; end if;
  if (select count(*) from public.group_members where table_id = v_me.table_id) < 2 then
    raise exception 'need_two';
  end if;
  update public.group_tables set status = 'voting' where id = v_me.table_id and status = 'lobby';
end;
$$;

create or replace function public.group_vote(p_code text, p_token uuid, p_dish_id text, p_liked boolean)
returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_me public.group_members;
  v_table public.group_tables;
begin
  v_me := public._group_member(p_code, p_token);
  if v_me.id is null then raise exception 'not_member'; end if;
  select * into v_table from public.group_tables where id = v_me.table_id;
  if v_table.status <> 'voting' then raise exception 'not_voting'; end if;
  if not (p_dish_id = any (v_table.dish_ids)) then raise exception 'bad_dish'; end if;
  insert into public.group_votes (member_id, table_id, dish_id, liked)
  values (v_me.id, v_me.table_id, p_dish_id, p_liked)
  on conflict (member_id, dish_id) do update set liked = excluded.liked;
  -- finished every dish?
  if (select count(*) from public.group_votes where member_id = v_me.id) >= cardinality(v_table.dish_ids) then
    update public.group_members set done = true where id = v_me.id;
    if not exists (select 1 from public.group_members where table_id = v_me.table_id and not done) then
      update public.group_tables set status = 'done' where id = v_me.table_id;
    end if;
  end if;
end;
$$;

-- Host can show the results before everyone is done.
create or replace function public.group_end(p_code text, p_token uuid)
returns void
language plpgsql security definer set search_path = ''
as $$
declare v_me public.group_members;
begin
  v_me := public._group_member(p_code, p_token);
  if v_me.id is null then raise exception 'not_member'; end if;
  if not v_me.is_host then raise exception 'not_host'; end if;
  update public.group_tables set status = 'done' where id = v_me.table_id;
end;
$$;

create or replace function public.group_state(p_code text, p_token uuid)
returns json
language plpgsql stable security definer set search_path = ''
as $$
declare
  v_me public.group_members;
  v_table public.group_tables;
begin
  v_me := public._group_member(p_code, p_token);
  if v_me.id is null then raise exception 'not_member'; end if;
  select * into v_table from public.group_tables where id = v_me.table_id;
  return json_build_object(
    'code', v_table.code,
    'status', v_table.status,
    'dish_ids', v_table.dish_ids,
    'city', v_table.city,
    'me', json_build_object('name', v_me.name, 'is_host', v_me.is_host, 'done', v_me.done),
    'my_votes', coalesce((select json_agg(v.dish_id) from public.group_votes v where v.member_id = v_me.id), '[]'::json),
    'members', coalesce((
      select json_agg(json_build_object(
        'name', m.name, 'is_host', m.is_host, 'done', m.done,
        'voted', (select count(*) from public.group_votes v where v.member_id = m.id)
      ) order by m.joined_at)
      from public.group_members m where m.table_id = v_table.id), '[]'::json),
    -- likes per dish: only once the table is done, so nobody is swayed while voting
    'results', case when v_table.status = 'done' then coalesce((
      select json_agg(json_build_object('dish_id', r.dish_id, 'likes', r.likes) order by r.likes desc, r.dish_id)
      from (
        select d as dish_id, (select count(*) from public.group_votes v where v.table_id = v_table.id and v.dish_id = d and v.liked) as likes
        from unnest(v_table.dish_ids) d
      ) r), '[]'::json) else null end
  );
end;
$$;

revoke all on function public.group_create(text, text[], text), public.group_join(text, text),
  public.group_start(text, uuid), public.group_vote(text, uuid, text, boolean),
  public.group_end(text, uuid), public.group_state(text, uuid) from public;
grant execute on function public.group_create(text, text[], text), public.group_join(text, text),
  public.group_start(text, uuid), public.group_vote(text, uuid, text, boolean),
  public.group_end(text, uuid), public.group_state(text, uuid) to anon, authenticated;
