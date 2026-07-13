import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPage } from "@/components/ServicesPage";
import { absoluteUrl } from "@/lib/site";

const path = "/en/services";
const title = "Computer Repair and Tech Services in San Miguel de Allende";
const description = "Apple and Windows support, computer repair, upgrades, software installation, Wi-Fi and remote or on-site service in San Miguel de Allende.";

export const Route = createFileRoute("/en/services")({
  component: () => <SiteShell><ServicesPage locale="en" /></SiteShell>,
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
      { rel: "alternate", hrefLang: "es-MX", href: absoluteUrl("/servicios") },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl("/servicios") },
    ],
  }),
});
