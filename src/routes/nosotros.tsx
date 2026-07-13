import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutPage } from "@/components/pages/AboutPage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/nosotros";
const englishPath = "/en/about";
const title = "Soporte Técnico Local en San Miguel de Allende | San Miguel Tech";
const description = "Conoce San Miguel Tech: soporte técnico independiente y bilingüe para residentes, familias, negocios, hoteles y rentas vacacionales en San Miguel de Allende.";

export const Route = createFileRoute("/nosotros")({
  component: () => <SiteShell><AboutPage locale="es" /></SiteShell>,
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${absoluteUrl(path)}#about`,
          url: absoluteUrl(path),
          name: title,
          description,
          about: {
            "@type": "LocalBusiness",
            "@id": `${SITE.baseUrl}/#business`,
            name: SITE.name,
            url: SITE.baseUrl,
            areaServed: SITE.locality,
          },
        }),
      },
    ],
  }),
});
