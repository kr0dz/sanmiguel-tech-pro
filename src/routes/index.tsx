import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/HomePage";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Técnico en San Miguel de Allende | San Miguel Tech" },
      {
        name: "description",
        content:
          "Reparación, upgrades y soporte tecnológico para equipos Apple, computadoras Windows, hogares y negocios en San Miguel de Allende.",
      },
      { property: "og:title", content: "Técnico en San Miguel de Allende | San Miguel Tech" },
      {
        property: "og:description",
        content:
          "Reparación, upgrades y soporte tecnológico para equipos Apple, computadoras Windows, hogares y negocios en San Miguel de Allende.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "es", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          url: SITE.baseUrl,
          telephone: SITE.phone,
          areaServed: SITE.serviceArea,
          description:
            "Servicio técnico independiente para equipos Apple, Windows, redes y negocios en San Miguel de Allende.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Miguel de Allende",
            addressRegion: "Guanajuato",
            addressCountry: "MX",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
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
