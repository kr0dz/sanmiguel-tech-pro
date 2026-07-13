import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ServicesPage } from "@/components/ServicesPage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/en/services";
const title = "Computer Repair and Tech Services in San Miguel de Allende";
const description = "Apple and Windows support, computer repair, upgrades, software installation, Wi-Fi, remote assistance and business technology in San Miguel de Allende.";
const services = [
  "Apple device support",
  "Windows computer repair and optimization",
  "SSD and RAM upgrades",
  "Software and application installation",
  "Remote technical support",
  "Wi-Fi, router and printer setup",
  "Technology for businesses, hotels and vacation rentals",
];

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
