import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { DiagnosisPage } from "@/components/pages/DiagnosisPage";

export const Route = createFileRoute("/solicitar-diagnostico")({
  component: () => <SiteShell><DiagnosisPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Solicitar diagnóstico | San Miguel Tech" },
      { name: "description", content: "Solicita un diagnóstico para tu Mac, PC, Wi-Fi o equipo de oficina en San Miguel de Allende." },
      { property: "og:title", content: "Solicitar diagnóstico | San Miguel Tech" },
      { property: "og:description", content: "Cuéntanos qué está pasando con tu equipo y recibe una evaluación inicial." },
      { property: "og:url", content: "/solicitar-diagnostico" },
    ],
    links: [
      { rel: "canonical", href: "/solicitar-diagnostico" },
      { rel: "alternate", hrefLang: "es", href: "/solicitar-diagnostico" },
      { rel: "alternate", hrefLang: "en", href: "/en/request-diagnosis" },
    ],
  }),
});