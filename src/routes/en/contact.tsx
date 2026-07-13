import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactPage } from "@/components/pages/ContactPage";
import { absoluteUrl } from "@/lib/site";

const path = "/en/contact";
const spanishPath = "/contacto";
const title = "Contact a Computer Technician in San Miguel de Allende | San Miguel Tech";
const description = "Contact San Miguel Tech through WhatsApp or submit a diagnosis request for computers, Apple devices, software, Wi-Fi and business technology in San Miguel de Allende.";

export const Route = createFileRoute("/en/contact")({
  component: () => <SiteShell><ContactPage locale="en" /></SiteShell>,
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
      { rel: "alternate", hrefLang: "es-MX", href: absoluteUrl(spanishPath) },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(spanishPath) },
    ],
  }),
});
