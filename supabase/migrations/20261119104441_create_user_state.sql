-- One row per Kaydırak account: the settings and history that follow the user to a new phone.
create table public.user_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text check (char_length(display_name) <= 60),
  persona text check (char_length(persona) <= 30),
  language text check (language in ('tr', 'en')),
  city text check (char_length(city) <= 40),
  recent_selections text[] not null default '{}' check (cardinality(recent_selections) <= 50),
  impact jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_state enable row level security;

create policy "Own row: read" on public.user_state
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "Own row: insert" on public.user_state
  for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Own row: update" on public.user_state
  for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Own row: delete" on public.user_state
  for delete to authenticated using ((select auth.uid()) = user_id);

revoke all on public.user_state from anon;
grant select, insert, update, delete on public.user_state to authenticated;
