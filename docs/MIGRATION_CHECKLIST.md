# Migration validation checklist

Complete this checklist on the Vercel Preview deployment before merging into `main`.

- [ ] Preview deployment reaches `READY`.
- [ ] `/`, `/servicios`, `/nosotros`, and `/contacto` render normally.
- [ ] `/en` and English routes use English content and `lang="en-US"`.
- [ ] Spanish routes use `lang="es-MX"`.
- [ ] Directly reloading an internal route does not return 404.
- [ ] `/solicitar-diagnostico` submits a test request to Supabase.
- [ ] The submitted row appears in `service_requests`.
- [ ] `/admin/login` authenticates correctly.
- [ ] `/admin` rejects unauthenticated access.
- [ ] No service-role key appears in browser source or network responses.
- [ ] Production remains unchanged until the pull request is merged.
