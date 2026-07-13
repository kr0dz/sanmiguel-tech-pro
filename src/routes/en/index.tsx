import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/HomePage";

export const Route = createFileRoute("/en/")({
  component: () => (
    <SiteShell>
      <HomePage locale="en" />
    </SiteShell>
  ),
  head: () => ({
    meta: [
      { title: "Computer Technician in San Miguel de Allende | San Miguel Tech" },
      { name: "description", content: "Repairs, upgrades and tech support for Apple devices, Windows computers, homes and businesses in San Miguel de Allende." },
      { property: "og:title", content: "Computer Technician in San Miguel de Allende | San Miguel Tech" },
      { property: "og:description", content: "Repairs, upgrades and tech support for Apple devices, Windows computers, homes and businesses in San Miguel de Allende." },
      { property: "og:url", content: "/en" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "es", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
});