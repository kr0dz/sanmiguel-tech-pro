import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TermsPage } from "@/components/pages/LegalPage";
import { absoluteUrl } from "@/lib/site";

const path = "/en/terms";
const spanishPath = "/terminos-del-servicio";
const title = "Technology Service Terms | San Miguel Tech";
const description = "Review the general conditions for diagnosis, authorization, quotes, data, parts, software, remote support and on-site visits from San Miguel Tech.";

export const Route = createFileRoute("/en/terms")({
  component: () => <SiteShell><TermsPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl(path) },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "es-MX", href: absoluteUrl(spanishPath) },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(spanishPath) },
    ],
  }),
});
