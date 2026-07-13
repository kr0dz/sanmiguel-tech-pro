# Migration from Lovable to GitHub + Vercel

This branch removes the application's build-time and runtime dependency on Lovable while preserving TanStack Start SSR, Supabase, and the existing public/admin routes.

## What changed

- Replaced `@lovable.dev/vite-tanstack-config` with the official TanStack Start, React, Tailwind, and Vite plugins.
- Removed Lovable error reporting and repository instructions.
- Switched installs from the Lovable-generated Bun lockfile to npm on Vercel.
- Kept the existing custom TanStack Start server entry.
- Moved Supabase configuration entirely to Vercel environment variables.
- Added `.env.example` and strengthened secret exclusions in `.gitignore`.
- Corrected the document language for Spanish and English routes.

## Required Vercel environment variables

Set these for both **Preview** and **Production**:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

The service-role key must never use a `VITE_` prefix.

## Validation before merge

- Vercel Preview build completes successfully.
- Home, services, English routes, and direct URL reloads work.
- Diagnosis form creates a `service_requests` row.
- Admin login and protected admin page work.
- No secrets appear in client JavaScript or Git history.
