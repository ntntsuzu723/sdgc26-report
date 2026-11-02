-- SDGC26 レポートのリアクション保存先。Supabase の SQL Editor に全文を貼り付けて Run してください。
-- 履歴を残すため、取り消しても行は消さず deleted_at に日時を入れます。

create table if not exists public.rx_reactions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null,               -- 匿名ID（ブラウザごと）
  session_id  text not null,
  kind        text not null check (kind in ('like','stamp','comment')),
  lang        text,
  block_index integer,
  char_offset integer,
  quote       text,
  stamp       text,
  body        text,
  created_at  timestamptz not null default now(),
  deleted_at  timestamptz
);

create unique index if not exists rx_reactions_one_like
  on public.rx_reactions (user_id, session_id) where kind = 'like' and deleted_at is null;
create index if not exists rx_reactions_user_time on public.rx_reactions (user_id, created_at);

-- 表は直接読み書きさせない（書き込みは下の関数のみ。user_id も外に出さない）
alter table public.rx_reactions enable row level security;
revoke all on public.rx_reactions from public, anon, authenticated;

create or replace function public._rx_guard() returns uuid
language plpgsql security definer set search_path = '' as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'sign-in required' using errcode = '28000'; end if;
  if (select count(*) from public.rx_reactions where user_id = uid and created_at > now() - interval '1 minute') >= 30
     or (select count(*) from public.rx_reactions where user_id = uid and created_at > now() - interval '1 day') >= 500 then
    raise exception 'rate limited' using errcode = 'P0001', hint = 'rate';
  end if;
  return uid;
end $$;

create or replace function public.rx_list(p_offset integer default 0, p_limit integer default 1000)
returns table (id uuid, sid text, kind text, lang text, pk integer, "off" integer, q text, stamp text, "text" text, ts bigint, mine boolean)
language sql stable security definer set search_path = '' as $$
  select r.id, r.session_id, r.kind, r.lang, r.block_index, r.char_offset, r.quote, r.stamp, r.body,
         (extract(epoch from r.created_at) * 1000)::bigint,
         coalesce(r.user_id = auth.uid(), false)
  from public.rx_reactions r
  where r.deleted_at is null
  order by r.created_at, r.id
  offset greatest(p_offset, 0) limit least(greatest(p_limit, 1), 1000)
$$;

create or replace function public.rx_add(
  p_id uuid, p_session text, p_lang text, p_pk integer, p_off integer, p_quote text,
  p_stamp text default null, p_text text default null
) returns void
language plpgsql security definer set search_path = '' as $$
declare uid uuid := public._rx_guard(); t text := nullif(btrim(p_text), '');
begin
  if p_session !~ '^[A-Za-z0-9_-]{1,40}$' or p_lang not in ('ja','en')
     or p_pk not between 0 and 100000 or p_off not between 0 and 1000000
     or char_length(coalesce(p_quote,'')) not between 1 and 400
     or (p_stamp is null) = (t is null)
     or (p_stamp is not null and p_stamp not in ('hit','aha','use','dig','q'))
     or char_length(coalesce(t,'')) > 280 then
    raise exception 'invalid reaction' using errcode = '22023';
  end if;
  insert into public.rx_reactions (id, user_id, session_id, kind, lang, block_index, char_offset, quote, stamp, body)
  values (p_id, uid, p_session, case when t is null then 'stamp' else 'comment' end, p_lang, p_pk, p_off, p_quote, p_stamp, t)
  on conflict (id) do nothing;
end $$;

create or replace function public.rx_remove(p_id uuid) returns void
language sql security definer set search_path = '' as $$
  update public.rx_reactions set deleted_at = now()
  where id = p_id and user_id = auth.uid() and deleted_at is null
$$;

create or replace function public.rx_set_like(p_session text, p_on boolean) returns void
language plpgsql security definer set search_path = '' as $$
declare uid uuid := public._rx_guard();
begin
  if p_session !~ '^[A-Za-z0-9_-]{1,40}$' then raise exception 'invalid session' using errcode = '22023'; end if;
  if p_on then
    insert into public.rx_reactions (user_id, session_id, kind) values (uid, p_session, 'like')
    on conflict (user_id, session_id) where kind = 'like' and deleted_at is null do nothing;
  else
    update public.rx_reactions set deleted_at = now()
    where user_id = uid and session_id = p_session and kind = 'like' and deleted_at is null;
  end if;
end $$;

revoke all on function public._rx_guard() from public, anon, authenticated;
revoke all on function public.rx_list(integer, integer) from public, anon, authenticated;
revoke all on function public.rx_add(uuid, text, text, integer, integer, text, text, text) from public, anon, authenticated;
revoke all on function public.rx_remove(uuid) from public, anon, authenticated;
revoke all on function public.rx_set_like(text, boolean) from public, anon, authenticated;
grant execute on function public.rx_list(integer, integer) to anon, authenticated;
grant execute on function public.rx_add(uuid, text, text, integer, integer, text, text, text) to authenticated;
grant execute on function public.rx_remove(uuid) to authenticated;
grant execute on function public.rx_set_like(text, boolean) to authenticated;

-- これまでClaude版に付いていたハート1件を引き継ぐ
insert into public.rx_reactions (id, user_id, session_id, kind, created_at)
values ('00000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-000000000001', 's02', 'like', '2026-10-31T22:17:04Z')
on conflict do nothing;
