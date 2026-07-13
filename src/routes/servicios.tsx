import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPage } from "@/components/ServicesPage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/servicios";
const title = "Servicios de Soporte Técnico en San Miguel de Allende";
const description = "Reparación de computadoras, soporte Apple, upgrades, instalación de programas, Wi-Fi, soporte remoto y tecnología para negocios en San Miguel de Allende.";
const services = [
  "Soporte para equipos Apple",
  "Reparación y optimización de computadoras Windows",
  "Upgrades de SSD y memoria RAM",
  "Instalación de programas y software",
  "Soporte remoto",
  "Configuración de Wi-Fi, routers e impresoras",
  "Tecnología para negocios, hoteles y rentas vacacionales",
];

export const Route = createFileRoute("/servicios")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absoluteUrl(path)}#services`,
          name: title,
          description,
          url: absoluteUrl(path),
          about: {
            "@type": "LocalBusiness",
            "@id": `${SITE.baseUrl}/#business`,
            name: SITE.name,
            areaServed: SITE.locality,
          },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: services.map((name, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name,
                areaServed: SITE.locality,
                provider: { "@id": `${SITE.baseUrl}/#business` },
              },
            })),
          },
        }),
      },
    ],
  }),
});
