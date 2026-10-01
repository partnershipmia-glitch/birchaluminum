ALTER TABLE public.facilities
  ADD COLUMN IF NOT EXISTS annual_capacity_lb numeric,
  ADD COLUMN IF NOT EXISTS capacity_source_url text,
  ADD COLUMN IF NOT EXISTS activity_status text;

COMMENT ON COLUMN public.facilities.annual_capacity_lb IS 'Publicly stated plant-specific annual capacity normalized to pounds; NULL when not publicly verified.';
COMMENT ON COLUMN public.facilities.capacity_source_url IS 'Public source supporting facility capacity or status.';
COMMENT ON COLUMN public.facilities.activity_status IS 'Detailed activity state used by the capacity map; falls back to status when NULL.';

ALTER TABLE public.facilities
  ADD CONSTRAINT facilities_activity_status_check
  CHECK (activity_status IS NULL OR activity_status IN ('operating', 'construction', 'idled', 'closed')) NOT VALID;

GRANT SELECT ON public.facilities TO anon, authenticated;
GRANT ALL ON public.facilities TO service_role;