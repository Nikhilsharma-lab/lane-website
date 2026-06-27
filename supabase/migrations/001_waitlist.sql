-- Waitlist table for uselane.app pre-launch signups
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'direct',
  created_at timestamptz not null default now()
);

-- RLS: anon can only INSERT, nothing else
alter table public.waitlist enable row level security;

create policy "anon_insert_only"
  on public.waitlist
  for insert
  to anon
  with check (true);
