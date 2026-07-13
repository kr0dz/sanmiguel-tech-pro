import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/nosotros")({
  component: () => <SiteShell><AboutPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Nosotros | San Miguel Tech" },
      { name: "description", content: "Servicio técnico independiente en San Miguel de Allende, con experiencia en Apple, Windows, redes y negocios." },
      { property: "og:title", content: "Nosotros | San Miguel Tech" },
      { property: "og:description", content: "Servicio técnico independiente y de confianza en San Miguel de Allende." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [
      { rel: "canonical", href: "/nosotros" },
      { rel: "alternate", hrefLang: "es", href: "/nosotros" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
});