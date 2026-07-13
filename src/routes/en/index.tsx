import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/HomePage";
import { SITE, absoluteUrl } from "@/lib/site";

const path = "/en";
const title = "Computer Technician in San Miguel de Allende | San Miguel Tech";
const description = "Computer technician in San Miguel de Allende for Apple and Windows: repairs, upgrades, software installation, Wi-Fi and remote or on-site support.";

export const Route = createFileRoute("/en/")({
  component: () => (
    <SiteShell>
      <HomePage locale="en" />
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
      { rel: "alternate", hrefLang: "es-MX", href: SITE.baseUrl },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "x-default", href: SITE.baseUrl },
    ],
  }),
});
