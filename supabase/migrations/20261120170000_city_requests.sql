-- "Şehrimi iste": a user in a province without restaurant data asks for it.
-- Only counts are kept (no user id, no device id). The table is closed to the app;
-- the only way in is request_city(), which checks the name and caps abuse.

create table if not exists public.city_requests (
  id bigint generated always as identity primary key,
  city text not null check (char_length(city) between 2 and 40),
  created_at timestamptz not null default now()
);

alter table public.city_requests enable row level security;

create index if not exists city_requests_city_idx on public.city_requests (city);

create or replace function public.request_city(p_city text)
returns void
language plpgsql
security definer
set search_path to ''
as $$
declare
  v_city text := trim(p_city);
begin
  if v_city is null or char_length(v_city) < 2 or char_length(v_city) > 40 then
    raise exception 'bad_city';
  end if;
  -- letters (Turkish included), spaces and dashes only
  if v_city !~ '^[[:alpha:] .-]+$' then
    raise exception 'bad_city';
  end if;
  -- simple flood guard: at most 2000 requests a day in total
  if (select count(*) from public.city_requests where created_at > now() - interval '1 day') >= 2000 then
    return;
  end if;
  insert into public.city_requests (city) values (v_city);
end;
$$;

revoke all on function public.request_city(text) from public;
grant execute on function public.request_city(text) to anon, authenticated;

-- For the team: which cities to add next.
-- select city, count(*) from public.city_requests group by city order by count(*) desc;
