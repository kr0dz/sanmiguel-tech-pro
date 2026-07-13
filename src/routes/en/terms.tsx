import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TermsPage } from "@/components/pages/LegalPage";

export const Route = createFileRoute("/en/terms")({
  component: () => <SiteShell><TermsPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Terms of Service | San Miguel Tech" },
      { name: "description", content: "Terms of service for San Miguel Tech." },
      { property: "og:url", content: "/en/terms" },
    ],
    links: [{ rel: "canonical", href: "/en/terms" }],
  }),
});