import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl } from "@/lib/site";

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/servicios", changefreq: "weekly", priority: "0.9" },
  { path: "/instalacion-de-programas-san-miguel-de-allende", changefreq: "weekly", priority: "0.9" },
  { path: "/solicitar-diagnostico", changefreq: "monthly", priority: "0.8" },
  { path: "/nosotros", changefreq: "monthly", priority: "0.6" },
  { path: "/contacto", changefreq: "monthly", priority: "0.7" },
  { path: "/preguntas-frecuentes", changefreq: "monthly", priority: "0.7" },
  { path: "/aviso-de-privacidad", changefreq: "yearly", priority: "0.2" },
  { path: "/terminos-del-servicio", changefreq: "yearly", priority: "0.2" },
  { path: "/en", changefreq: "weekly", priority: "0.8" },
  { path: "/en/services", changefreq: "weekly", priority: "0.8" },
  { path: "/en/software-installation-san-miguel-de-allende", changefreq: "weekly", priority: "0.8" },
  { path: "/en/request-diagnosis", changefreq: "monthly", priority: "0.7" },
  { path: "/en/about", changefreq: "monthly", priority: "0.5" },
  { path: "/en/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/en/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/en/privacy", changefreq: "yearly", priority: "0.2" },
  { path: "/en/terms", changefreq: "yearly", priority: "0.2" },
] as const;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(({ path, changefreq, priority }) => [
            "  <url>",
            `    <loc>${absoluteUrl(path)}</loc>`,
            `    <changefreq>${changefreq}</changefreq>`,
            `    <priority>${priority}</priority>`,
            "  </url>",
          ].join("\n"))
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
          },
        });
      },
    },
  },
});
