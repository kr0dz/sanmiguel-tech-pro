import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PrivacyPage } from "@/components/pages/LegalPage";
import { absoluteUrl } from "@/lib/site";

const path = "/en/privacy";
const spanishPath = "/aviso-de-privacidad";
const title = "Privacy Policy | San Miguel Tech";
const description = "Learn how San Miguel Tech uses and protects information submitted through diagnosis requests, WhatsApp, remote support and technology services.";

export const Route = createFileRoute("/en/privacy")({
  component: () => <SiteShell><PrivacyPage locale="en" /></SiteShell>,
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
