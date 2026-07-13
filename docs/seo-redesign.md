# SEO and Apple-style redesign

The branch includes the Apple-inspired responsive redesign, compact services dropdown, detailed service catalog, remote-only software installation, diagnosis source tags, mobile improvements and a new favicon.

Before merging, run `supabase/migrations/20260713073500_add_lead_source_tracking.sql` in Supabase SQL Editor. It adds `lead_source`, `service_interest`, `source_path` and the secure `submit_service_request_v2` RPC.

The current Vercel Preview build completes successfully.
