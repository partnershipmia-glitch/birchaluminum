
- Industry Monitor data (commodities, prices, news sources, facilities) lives in database tables so new items are added as rows, not code. Why: extend without redesign.
- News refresh edge function is public but self-throttled to one run per ~5.5h with a DB lock. Why: safe pg_cron call without a secret.
