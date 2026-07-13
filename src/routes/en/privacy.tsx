import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PrivacyPage } from "@/components/pages/LegalPage";

export const Route = createFileRoute("/en/privacy")({
  component: () => <SiteShell><PrivacyPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Privacy Policy | San Miguel Tech" },
      { name: "description", content: "Privacy policy for San Miguel Tech." },
      { property: "og:url", content: "/en/privacy" },
    ],
    links: [{ rel: "canonical", href: "/en/privacy" }],
  }),
});