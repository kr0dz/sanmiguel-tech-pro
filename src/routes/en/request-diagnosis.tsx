import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { DiagnosisPage } from "@/components/pages/DiagnosisPage";

export const Route = createFileRoute("/en/request-diagnosis")({
  component: () => <SiteShell><DiagnosisPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Request a Diagnosis | San Miguel Tech" },
      { name: "description", content: "Request a diagnosis for your Mac, PC, Wi-Fi or office equipment in San Miguel de Allende." },
      { property: "og:title", content: "Request a Diagnosis | San Miguel Tech" },
      { property: "og:description", content: "Tell us what's happening with your device and receive an initial evaluation." },
      { property: "og:url", content: "/en/request-diagnosis" },
    ],
    links: [
      { rel: "canonical", href: "/en/request-diagnosis" },
      { rel: "alternate", hrefLang: "es", href: "/solicitar-diagnostico" },
      { rel: "alternate", hrefLang: "en", href: "/en/request-diagnosis" },
    ],
  }),
});