
- Industry Monitor data lives in database tables; facility capacity uses a nullable normalized annual-pound value plus a public source while preserving display wording. Why: extend without redesign and never estimate missing capacity.
- News refresh edge function is public but self-throttled to one run per ~5.5h with a DB lock. Why: safe pg_cron call without a secret.
