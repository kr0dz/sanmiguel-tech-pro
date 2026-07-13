import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TermsPage } from "@/components/pages/LegalPage";
import { absoluteUrl } from "@/lib/site";

const path = "/terminos-del-servicio";
const englishPath = "/en/terms";
const title = "Términos del Servicio Técnico | San Miguel Tech";
const description = "Consulta las condiciones generales de diagnóstico, autorización, presupuestos, datos, piezas, software, soporte remoto y visitas de San Miguel Tech.";

export const Route = createFileRoute("/terminos-del-servicio")({
  component: () => <SiteShell><TermsPage locale="es" /></SiteShell>,
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
