import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/HomePage";
import { SITE, absoluteUrl } from "@/lib/site";

const title = "Técnico en San Miguel de Allende | Reparación y Soporte";
const description = "Técnico en San Miguel de Allende para Apple y Windows: reparación, upgrades, instalación de programas, Wi-Fi y soporte remoto o a domicilio.";

const serviceNames = [
  "Reparación de computadoras",
  "Soporte para equipos Apple",
  "Instalación de programas y software",
  "Upgrades de SSD y memoria RAM",
  "Soporte remoto",
  "Configuración de Wi-Fi y redes",
  "Soporte tecnológico para negocios",
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE.baseUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: SITE.baseUrl },
      { rel: "alternate", hrefLang: "es-MX", href: SITE.baseUrl },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl("/en") },
      { rel: "alternate", hrefLang: "x-default", href: SITE.baseUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE.baseUrl}/#business`,
          name: SITE.name,
          url: SITE.baseUrl,
          description,
          areaServed: {
            "@type": "City",
            name: SITE.locality,
            containedInPlace: {
              "@type": "State",
              name: SITE.region,
            },
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: SITE.locality,
            addressRegion: SITE.region,
            addressCountry: SITE.country,
          },
          knowsLanguage: ["Spanish", "English"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios técnicos en San Miguel de Allende",
            itemListElement: serviceNames.map((name) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name,
                areaServed: SITE.locality,
              },
            })),
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <HomePage locale="es" />
    </SiteShell>
  );
}
