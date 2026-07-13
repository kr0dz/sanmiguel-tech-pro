# San Miguel Tech — Repository Notes

This project is maintained directly through GitHub and deployed to Vercel.

## Workflow

- Create changes on a feature branch.
- Keep `main` deployable at all times.
- Open a pull request and validate the Vercel Preview before merging.
- Do not commit secrets, `.env` files, Supabase service-role keys, or customer data.
- Use environment variables in Vercel for Preview and Production.

## Required checks

Before merging changes that affect routing, SSR, Supabase, or SEO, verify:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Public routes render through SSR.
- `/solicitar-diagnostico` can submit to Supabase.
- `/admin` remains protected and non-indexable.
- Canonical, hreflang, sitemap, and robots directives use the production domain.
