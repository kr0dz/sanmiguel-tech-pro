import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPage } from "@/components/ServicesPage";
import { absoluteUrl } from "@/lib/site";

const path = "/servicios";
const title = "Servicios de Soporte Técnico en San Miguel de Allende";
const description = "Reparación de computadoras, soporte Apple, upgrades, instalación de programas, Wi-Fi y soporte remoto o a domicilio en San Miguel de Allende.";

export const Route = createFileRoute(path)({
  component: () => <SiteShell><ServicesPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl(path) },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "es-MX", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl("/en/services") },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(path) },
    ],
  }),
});
