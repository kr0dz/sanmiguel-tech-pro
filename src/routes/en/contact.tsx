import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/en/contact")({
  component: () => <SiteShell><ContactPage locale="en" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Contact | San Miguel Tech" },
      { name: "description", content: "Reach San Miguel Tech via WhatsApp, email or phone for tech support in San Miguel de Allende." },
      { property: "og:title", content: "Contact | San Miguel Tech" },
      { property: "og:description", content: "WhatsApp, email and phone for local tech support." },
      { property: "og:url", content: "/en/contact" },
    ],
    links: [
      { rel: "canonical", href: "/en/contact" },
      { rel: "alternate", hrefLang: "es", href: "/contacto" },
      { rel: "alternate", hrefLang: "en", href: "/en/contact" },
    ],
  }),
});