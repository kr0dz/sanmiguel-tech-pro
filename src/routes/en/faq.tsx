import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqPage, faqJsonLd } from "@/components/pages/FaqPage";
import { absoluteUrl } from "@/lib/site";

const path = "/en/faq";
const spanishPath = "/preguntas-frecuentes";
const title = "Computer Repair and Tech Support FAQ | San Miguel Tech";
const description = "Answers about computer repair, Apple devices, software installation, remote support, visits, pricing, privacy and service in San Miguel de Allende.";

export const Route = createFileRoute("/en/faq")({
  component: () => <SiteShell><FaqPage locale="en" /></SiteShell>,
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd("en")) }],
  }),
});
