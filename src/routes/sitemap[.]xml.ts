import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const entries = [
  "/", "/servicios", "/solicitar-diagnostico", "/nosotros", "/contacto",
  "/preguntas-frecuentes", "/aviso-de-privacidad", "/terminos-del-servicio",
  "/en", "/en/services", "/en/request-diagnosis", "/en/about", "/en/contact",
  "/en/faq", "/en/privacy", "/en/terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});