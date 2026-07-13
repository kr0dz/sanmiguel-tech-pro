# Vercel environment configuration

Configure these variables in the Vercel project for both **Preview** and **Production** environments.

| Variable | Exposure | Purpose |
|---|---|---|
| `VITE_SUPABASE_URL` | Browser-safe | Supabase project URL used by the public form and browser authentication |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Browser-safe | Supabase publishable key used by the browser client |
| `SUPABASE_URL` | Server only | Supabase project URL used by SSR and server functions |
| `SUPABASE_PUBLISHABLE_KEY` | Server only | Supabase publishable key used to validate authenticated requests |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret, server only | Admin operations that intentionally bypass RLS |

Never expose `SUPABASE_SERVICE_ROLE_KEY` through a variable whose name starts with `VITE_`.

After changing any `VITE_` variable, redeploy because Vite injects it during the build.
