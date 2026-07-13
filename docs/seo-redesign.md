# SEO and Apple-style redesign

This branch includes an Apple-inspired responsive visual system, compact service navigation, a detailed service catalog, remote-only software installation, diagnosis lead-source tags, a new favicon and expanded bilingual SEO.

Before merging, run this migration in Supabase SQL Editor:

```text
supabase/migrations/20260713073500_add_lead_source_tracking.sql
```

It adds `lead_source`, `service_interest`, `source_path` and the secure `submit_service_request_v2` RPC.
