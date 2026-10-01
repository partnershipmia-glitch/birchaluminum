create type public.app_role as enum ('admin','moderator','user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null, role app_role not null, unique(user_id, role));
grant select on public.user_roles to authenticated; grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role) returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.user_roles where user_id=_user_id and role=_role) $$;
create policy "own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create table public.commodities (id uuid primary key default gen_random_uuid(), code text unique not null, name text not null, category text not null, unit text not null, basis text not null, source text not null, sort int not null default 0, active boolean not null default true, created_at timestamptz not null default now());
grant select on public.commodities to anon, authenticated; grant insert, update, delete on public.commodities to authenticated; grant all on public.commodities to service_role;
alter table public.commodities enable row level security;
create policy "read commodities" on public.commodities for select using (true);
create policy "admin write commodities" on public.commodities for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create table public.price_points (id uuid primary key default gen_random_uuid(), commodity_id uuid not null references public.commodities(id) on delete cascade, price numeric(12,4) not null check (price >= 0), recorded_at timestamptz not null default now(), note text, created_at timestamptz not null default now());
create index on public.price_points (commodity_id, recorded_at desc);
grant select on public.price_points to anon, authenticated; grant insert, update, delete on public.price_points to authenticated; grant all on public.price_points to service_role;
alter table public.price_points enable row level security;
create policy "read prices" on public.price_points for select using (true);
create policy "admin write prices" on public.price_points for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create table public.news_sources (id uuid primary key default gen_random_uuid(), name text not null, site_url text not null, feed_url text, active boolean not null default true);
grant select on public.news_sources to anon, authenticated; grant all on public.news_sources to service_role;
alter table public.news_sources enable row level security;
create policy "read sources" on public.news_sources for select using (true);

create table public.news_articles (id uuid primary key default gen_random_uuid(), source_id uuid references public.news_sources(id) on delete set null, source_name text not null, url text unique not null, title text not null, summary text, category text, published_at timestamptz not null default now(), summarized boolean not null default false, created_at timestamptz not null default now());
create index on public.news_articles (published_at desc);
grant select on public.news_articles to anon, authenticated; grant all on public.news_articles to service_role;
alter table public.news_articles enable row level security;
create policy "read articles" on public.news_articles for select using (true);

create table public.comments (id uuid primary key default gen_random_uuid(), article_id uuid not null references public.news_articles(id) on delete cascade, parent_id uuid references public.comments(id) on delete cascade, user_id uuid not null references auth.users(id) on delete cascade, author_name text not null, body text not null check (char_length(body) between 1 and 2000), hidden boolean not null default false, created_at timestamptz not null default now());
create index on public.comments (article_id, created_at);
grant select on public.comments to anon, authenticated; grant insert, update, delete on public.comments to authenticated; grant all on public.comments to service_role;
alter table public.comments enable row level security;
create policy "read visible comments" on public.comments for select using (not hidden or user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
create policy "insert own comment" on public.comments for insert to authenticated with check (user_id = auth.uid() and hidden = false);
create policy "delete own or admin" on public.comments for delete to authenticated using (user_id = auth.uid() or public.has_role(auth.uid(),'admin'));
create policy "admin moderate" on public.comments for update to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create or replace function public.comment_spam_guard() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if (select count(*) from public.comments where user_id = new.user_id and created_at > now() - interval '1 minute') >= 3 then
    raise exception 'Too many comments. Please wait a minute.';
  end if;
  if new.body ~* '(https?://.*){3,}' then raise exception 'Too many links in comment.'; end if;
  return new;
end $$;
create trigger comment_spam_guard before insert on public.comments for each row execute function public.comment_spam_guard();

create table public.comment_reports (id uuid primary key default gen_random_uuid(), comment_id uuid not null references public.comments(id) on delete cascade, user_id uuid not null references auth.users(id) on delete cascade, reason text, created_at timestamptz not null default now(), unique(comment_id, user_id));
grant select, insert on public.comment_reports to authenticated; grant all on public.comment_reports to service_role;
alter table public.comment_reports enable row level security;
create policy "insert own report" on public.comment_reports for insert to authenticated with check (user_id = auth.uid());
create policy "admin read reports" on public.comment_reports for select to authenticated using (public.has_role(auth.uid(),'admin') or user_id = auth.uid());
create or replace function public.auto_hide_reported() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if (select count(*) from public.comment_reports where comment_id = new.comment_id) >= 3 then
    update public.comments set hidden = true where id = new.comment_id;
  end if;
  return new;
end $$;
create trigger auto_hide_reported after insert on public.comment_reports for each row execute function public.auto_hide_reported();

create table public.facilities (id uuid primary key default gen_random_uuid(), name text not null, company text not null, kind text not null check (kind in ('smelter','recycler')), status text not null check (status in ('operating','construction')), city text, state text not null, lat double precision not null, lng double precision not null, capacity text, products text, completion text, website text, linkedin text, created_at timestamptz not null default now());
grant select on public.facilities to anon, authenticated; grant insert, update, delete on public.facilities to authenticated; grant all on public.facilities to service_role;
alter table public.facilities enable row level security;
create policy "read facilities" on public.facilities for select using (true);
create policy "admin write facilities" on public.facilities for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));

create table public.job_state (job text primary key, locked_until timestamptz, paused_reason text, last_run timestamptz);
grant all on public.job_state to service_role;
alter table public.job_state enable row level security;