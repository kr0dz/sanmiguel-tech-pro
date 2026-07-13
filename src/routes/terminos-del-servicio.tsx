import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TermsPage } from "@/components/pages/LegalPage";

export const Route = createFileRoute("/terminos-del-servicio")({
  component: () => <SiteShell><TermsPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Términos del servicio | San Miguel Tech" },
      { name: "description", content: "Términos del servicio de San Miguel Tech." },
      { property: "og:url", content: "/terminos-del-servicio" },
    ],
    links: [{ rel: "canonical", href: "/terminos-del-servicio" }],
  }),
});