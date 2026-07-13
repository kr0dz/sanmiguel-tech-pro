import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqPage, faqJsonLd } from "@/components/pages/FaqPage";
import { absoluteUrl } from "@/lib/site";

const path = "/preguntas-frecuentes";
const englishPath = "/en/faq";
const title = "Preguntas sobre Reparación y Soporte Técnico | San Miguel Tech";
const description = "Respuestas sobre reparación de computadoras, Apple, instalación de programas, soporte remoto, visitas, costos, privacidad y servicio en San Miguel de Allende.";

export const Route = createFileRoute("/preguntas-frecuentes")({
  component: () => <SiteShell><FaqPage locale="es" /></SiteShell>,
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd("es")) }],
  }),
});
