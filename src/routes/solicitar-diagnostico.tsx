import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { DiagnosisPage } from "@/components/pages/DiagnosisPage";
import { absoluteUrl } from "@/lib/site";

const path = "/solicitar-diagnostico";
const englishPath = "/en/request-diagnosis";
const title = "Solicitar Diagnóstico Técnico en San Miguel de Allende | San Miguel Tech";
const description = "Envía los datos de tu Mac, PC, programa, Wi-Fi, impresora o equipo de negocio y recibe una evaluación inicial para soporte técnico en San Miguel de Allende.";

export const Route = createFileRoute("/solicitar-diagnostico")({
  component: () => <SiteShell><DiagnosisPage locale="es" /></SiteShell>,
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
  }),
});
