import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqPage, faqJsonLd } from "@/components/pages/FaqPage";

export const Route = createFileRoute("/preguntas-frecuentes")({
  component: () => <SiteShell><FaqPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes | San Miguel Tech" },
      { name: "description", content: "Preguntas frecuentes sobre reparación, upgrades, soporte remoto y servicio técnico en San Miguel de Allende." },
      { property: "og:title", content: "Preguntas frecuentes | San Miguel Tech" },
      { property: "og:description", content: "Respuestas sobre nuestros servicios técnicos locales." },
      { property: "og:url", content: "/preguntas-frecuentes" },
    ],
    links: [
      { rel: "canonical", href: "/preguntas-frecuentes" },
      { rel: "alternate", hrefLang: "es", href: "/preguntas-frecuentes" },
      { rel: "alternate", hrefLang: "en", href: "/en/faq" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd("es")) }],
  }),
});