import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PrivacyPage } from "@/components/pages/LegalPage";
import { absoluteUrl } from "@/lib/site";

const path = "/aviso-de-privacidad";
const englishPath = "/en/privacy";
const title = "Aviso de Privacidad | San Miguel Tech";
const description = "Consulta cómo San Miguel Tech utiliza y protege la información enviada mediante solicitudes de diagnóstico, WhatsApp, soporte remoto y servicios técnicos.";

export const Route = createFileRoute("/aviso-de-privacidad")({
  component: () => <SiteShell><PrivacyPage locale="es" /></SiteShell>,
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
      { rel: "alternate", hrefLang: "es-MX", href: absoluteUrl(path) },
      { rel: "alternate", hrefLang: "en", href: absoluteUrl(englishPath) },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(path) },
    ],
  }),
});
