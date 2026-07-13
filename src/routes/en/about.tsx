import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/en/about")({
  component: () => <SiteShell><AboutPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "About | San Miguel Tech" },
      { name: "description", content: "Independent tech service in San Miguel de Allende with experience across Apple, Windows, networks and business systems." },
      { property: "og:title", content: "About | San Miguel Tech" },
      { property: "og:description", content: "Trusted independent tech service in San Miguel de Allende." },
      { property: "og:url", content: "/en/about" },
    ],
    links: [
      { rel: "canonical", href: "/en/about" },
      { rel: "alternate", hrefLang: "es", href: "/nosotros" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
    ],
  }),
});