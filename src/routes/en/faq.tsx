import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqPage, faqJsonLd } from "@/components/pages/FaqPage";

export const Route = createFileRoute("/en/faq")({
  component: () => <SiteShell><FaqPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "FAQ | San Miguel Tech" },
      { name: "description", content: "Frequently asked questions about repair, upgrades, remote support and tech service in San Miguel de Allende." },
      { property: "og:title", content: "FAQ | San Miguel Tech" },
      { property: "og:description", content: "Answers about our local tech services." },
      { property: "og:url", content: "/en/faq" },
    ],
    links: [
      { rel: "canonical", href: "/en/faq" },
      { rel: "alternate", hrefLang: "es", href: "/preguntas-frecuentes" },
      { rel: "alternate", hrefLang: "en", href: "/en/faq" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd("en")) }],
  }),
});