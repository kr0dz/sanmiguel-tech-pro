import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { SoftwareInstallationPage, SOFTWARE_FAQ } from "@/components/SoftwareInstallationPage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/en/software-installation-san-miguel-de-allende";
const spanishPath = "/instalacion-de-programas-san-miguel-de-allende";
const title = "Remote Software Installation in San Miguel de Allende";
const description = "Remote installation of Soft Restaurant 10, Office, Microsoft 365, AutoCAD, SketchUp, Adobe and other Windows or Mac programs.";

export const Route = createFileRoute("/en/software-installation-san-miguel-de-allende")({
  component: () => (
    <SiteShell>
      <SoftwareInstallationPage locale="en" />
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
      { rel: "alternate", hrefLang: "es-MX", href: absoluteUrl(spanishPath) },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(spanishPath) },
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
              name: "Remote software installation in San Miguel de Allende",
              serviceType: "Remote software installation and configuration for Windows and macOS",
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
                  serviceUrl: absoluteUrl("/en/request-diagnosis?source=software-page&service=software-installation"),
                  availableLanguage: ["en", "es"],
                  serviceLocation: { "@type": "VirtualLocation", url: absoluteUrl(path) },
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Programs and applications",
                itemListElement: ["Soft Restaurant 10", "Microsoft Office", "Microsoft 365", "AutoCAD", "SketchUp", "Adobe Acrobat"].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: `Remote installation of ${name}` },
                })),
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${absoluteUrl(path)}#faq`,
              mainEntity: SOFTWARE_FAQ.en.map((item) => ({
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
