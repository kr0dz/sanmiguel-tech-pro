import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactPage } from "@/components/pages/ContactPage";
import { absoluteUrl } from "@/lib/site";

const path = "/contacto";
const englishPath = "/en/contact";
const title = "Contacto y Soporte Técnico en San Miguel de Allende | San Miguel Tech";
const description = "Contacta a San Miguel Tech por WhatsApp o envía una solicitud de diagnóstico para computadoras, Apple, programas, Wi-Fi y negocios en San Miguel de Allende.";

export const Route = createFileRoute("/contacto")({
  component: () => <SiteShell><ContactPage locale="es" /></SiteShell>,
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
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(englishPath) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(path) },
    ],
  }),
});
