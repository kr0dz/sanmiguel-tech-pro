import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { DiagnosisPage } from "@/components/pages/DiagnosisPage";
import { absoluteUrl } from "@/lib/site";

const path = "/en/request-diagnosis";
const spanishPath = "/solicitar-diagnostico";
const title = "Request a Tech Diagnosis in San Miguel de Allende | San Miguel Tech";
const description = "Send details about your Mac, PC, software, Wi-Fi, printer or business equipment and receive an initial assessment for tech support in San Miguel de Allende.";

export const Route = createFileRoute("/en/request-diagnosis")({
  component: () => <SiteShell><DiagnosisPage locale="en" /></SiteShell>,
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
  }),
});
