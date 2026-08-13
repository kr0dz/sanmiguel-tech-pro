import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const WHATSAPP_URL = "https://wa.me/447915374776?text=%C2%A1Hola%21%20%F0%9F%91%8B%20Necesito%20ayuda%20con%20un%20servicio%20de%20tecnolog%C3%ADa%20en%20San%20Miguel%20de%20Allende.%20%C2%BFMe%20pueden%20ayudar%3F%20%F0%9F%92%BB%0A%0A%5BTECH%5D";

export const Route = createFileRoute("/whatsapp")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 302,
          headers: {
            Location: WHATSAPP_URL,
            "Cache-Control": "no-store, private",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});
