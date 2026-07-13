import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PrivacyPage } from "@/components/pages/LegalPage";

export const Route = createFileRoute("/aviso-de-privacidad")({
  component: () => <SiteShell><PrivacyPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Aviso de privacidad | San Miguel Tech" },
      { name: "description", content: "Aviso de privacidad de San Miguel Tech." },
      { property: "og:url", content: "/aviso-de-privacidad" },
    ],
    links: [{ rel: "canonical", href: "/aviso-de-privacidad" }],
  }),
});