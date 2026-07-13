import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPage } from "@/components/ServicesPage";

export const Route = createFileRoute("/servicios")({
  component: () => <SiteShell><ServicesPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Servicios de soporte técnico | San Miguel Tech" },
      { name: "description", content: "Servicios de reparación, upgrades, diagnóstico, soporte remoto, Wi-Fi y tecnología para negocios en San Miguel de Allende." },
      { property: "og:title", content: "Servicios de soporte técnico | San Miguel Tech" },
      { property: "og:description", content: "Reparación, upgrades, diagnóstico, soporte remoto, Wi-Fi y tecnología para negocios en San Miguel de Allende." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [
      { rel: "canonical", href: "/servicios" },
      { rel: "alternate", hrefLang: "es", href: "/servicios" },
      { rel: "alternate", hrefLang: "en", href: "/en/services" },
    ],
  }),
});