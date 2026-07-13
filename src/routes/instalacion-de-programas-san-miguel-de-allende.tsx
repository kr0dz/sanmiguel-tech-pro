import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SoftwareInstallationPage, SOFTWARE_FAQ } from "@/components/SoftwareInstallationPage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/instalacion-de-programas-san-miguel-de-allende";
const englishPath = "/en/software-installation-san-miguel-de-allende";
const title = "Instalación de Programas en San Miguel de Allende | San Miguel Tech";
const description = "Instalación y configuración de programas para Windows y Mac en San Miguel de Allende. Office, antivirus, drivers y soporte remoto o presencial.";

export const Route = createFileRoute(path)({
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
              name: "Instalación de programas en San Miguel de Allende",
              serviceType: "Instalación y configuración de software para Windows y macOS",
              description,
              url: absoluteUrl(path),
              areaServed: {
                "@type": "City",
                name: SITE.locality,
                containedInPlace: {
                  "@type": "State",
                  name: SITE.region,
                },
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
                  serviceUrl: absoluteUrl("/solicitar-diagnostico"),
                  availableLanguage: ["es", "en"],
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl(path)}#faq`,
              mainEntity: SOFTWARE_FAQ.es.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
});
