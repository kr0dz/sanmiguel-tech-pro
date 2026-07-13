import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SoftwareInstallationPage, SOFTWARE_FAQ } from "@/components/SoftwareInstallationPage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/instalacion-de-programas-san-miguel-de-allende";
const englishPath = "/en/software-installation-san-miguel-de-allende";
const title = "Instalación Remota de Programas en San Miguel de Allende";
const description = "Instalación remota de Soft Restaurant 10, Office, Microsoft 365, AutoCAD, SketchUp, Adobe y otros programas para Windows y Mac.";

export const Route = createFileRoute("/instalacion-de-programas-san-miguel-de-allende")({
  component: () => (
    <SiteShell>
      <SoftwareInstallationPage locale="es" />
    </SiteShell>
  ),
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
          "@graph": [
            {
              "@type": "Service",
              "@id": `${absoluteUrl(path)}#service`,
              name: "Instalación remota de programas en San Miguel de Allende",
              serviceType: "Instalación y configuración remota de programas para Windows y macOS",
              description,
              url: absoluteUrl(path),
              areaServed: {
                "@type": "City",
                name: SITE.locality,
                containedInPlace: { "@type": "State", name: SITE.region },
              },
              provider: {
                "@type": "LocalBusiness",
                "@id": `${SITE.baseUrl}/#business`,
                name: SITE.name,
                url: SITE.baseUrl,
              },
              availableChannel: [
                {
                  "@type": "ServiceChannel",
                  serviceUrl: absoluteUrl("/solicitar-diagnostico?source=software-page&service=software-installation"),
                  availableLanguage: ["es", "en"],
                  serviceLocation: { "@type": "VirtualLocation", url: absoluteUrl(path) },
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Programas y aplicaciones",
                itemListElement: ["Soft Restaurant 10", "Microsoft Office", "Microsoft 365", "AutoCAD", "SketchUp", "Adobe Acrobat"].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: `Instalación remota de ${name}` },
                })),
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl(path)}#faq`,
              mainEntity: SOFTWARE_FAQ.es.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});
