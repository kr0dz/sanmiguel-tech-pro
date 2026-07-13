import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPage } from "@/components/ServicesPage";

export const Route = createFileRoute("/en/services")({
  component: () => <SiteShell><ServicesPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Tech Services | San Miguel Tech" },
      { name: "description", content: "Apple, Windows, upgrades, remote support, Wi-Fi and business technology in San Miguel de Allende." },
      { property: "og:title", content: "Tech Services | San Miguel Tech" },
      { property: "og:description", content: "Full-service technical support in San Miguel de Allende." },
      { property: "og:url", content: "/en/services" },
    ],
    links: [
      { rel: "canonical", href: "/en/services" },
      { rel: "alternate", hrefLang: "es", href: "/servicios" },
      { rel: "alternate", hrefLang: "en", href: "/en/services" },
    ],
  }),
});