# Dependency status

The application no longer imports or requires Lovable packages at build time or runtime.

The remaining platform responsibilities are:

- **GitHub:** source control and pull requests
- **Vercel:** builds, previews, production hosting, domains, and environment variables
- **Supabase:** database, authentication, and protected admin data

Lovable may still retain a historical connection to the repository until its GitHub App access is removed, but the application no longer depends on that connection to build or run.
