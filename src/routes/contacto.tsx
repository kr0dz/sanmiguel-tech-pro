import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contacto")({
  component: () => <SiteShell><ContactPage locale="es" /></SiteShell>,
  head: () => ({
    meta: [
      { title: "Contacto | San Miguel Tech" },
      { name: "description", content: "Contacta a San Miguel Tech por WhatsApp, correo o teléfono para soporte técnico en San Miguel de Allende." },
      { property: "og:title", content: "Contacto | San Miguel Tech" },
      { property: "og:description", content: "WhatsApp, correo y teléfono para soporte técnico local." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [
      { rel: "canonical", href: "/contacto" },
      { rel: "alternate", hrefLang: "es", href: "/contacto" },
      { rel: "alternate", hrefLang: "en", href: "/en/contact" },
    ],
  }),
});