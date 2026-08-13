import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const DEFAULT_MESSAGE = "Hola San Miguel Tech, necesito ayuda con un equipo.";
const WHATSAPP_NUMBER = "447915374776";

export const Route = createFileRoute("/whatsapp")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const number = WHATSAPP_NUMBER.replace(/\D/g, "");

        if (!/^\d{8,15}$/.test(number)) {
          return new Response("WhatsApp is temporarily unavailable.", {
            status: 503,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
              "Cache-Control": "no-store",
            },
          });
        }

        const requestUrl = new URL(request.url);
        const requestedMessage = requestUrl.searchParams.get("text")?.trim();
        const message = (requestedMessage || DEFAULT_MESSAGE).slice(0, 500);
        const destination = new URL(`https://wa.me/${number}`);
        destination.searchParams.set("text", message);

        return new Response(null, {
          status: 302,
          headers: {
            Location: destination.toString(),
            "Cache-Control": "no-store, private",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});
