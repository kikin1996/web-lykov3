create table if not exists houses (
  id text primary key,
  name text,
  status text default 'Volný',
  price integer default 0,
  price_without_vat integer default 0,
  usable_area text,
  plot_area text,
  rooms integer,
  bathrooms integer,
  hero_image text,
  floorplan_image text,
  herb_icon text,
  house_card_pdf text,
  description text
);

create table if not exists analytics (
  id bigserial primary key,
  path text,
  visited_at timestamptz default now()
);

create or replace function daily_visits(days_back integer)
returns table(day text, count bigint)
language sql
as $$
  select
    to_char(visited_at::date, 'YYYY-MM-DD') as day,
    count(*) as count
  from analytics
  where visited_at >= now() - (days_back || ' days')::interval
  group by visited_at::date
  order by visited_at::date;
$$;

create or replace function top_pages(limit_count integer)
returns table(path text, count bigint)
language sql
as $$
  select path, count(*) as count
  from analytics
  group by path
  order by count desc
  limit limit_count;
$$;
