# San Miguel Tech

Bilingual local-technology service website for San Miguel de Allende.

## Stack

- TanStack Start
- React 19
- Vite
- Tailwind CSS
- Supabase
- Vercel

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add your own Supabase values. Never commit real secrets.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

Production deployments are created from `main`. Feature branches receive Vercel Preview deployments before merge.
