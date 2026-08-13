import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const WHATSAPP_URL_ES = "https://wa.me/447915374776?text=%C2%A1Hola%21%20%F0%9F%91%8B%20Necesito%20ayuda%20con%20un%20servicio%20de%20tecnolog%C3%ADa%20en%20San%20Miguel%20de%20Allende.%20%C2%BFMe%20pueden%20ayudar%3F%20%F0%9F%92%BB%0A%0A%5BTECH%5D";
const WHATSAPP_URL_EN = "https://wa.me/447915374776?text=Hi%21%20%F0%9F%91%8B%20I%20need%20help%20with%20a%20technology%20service%20in%20San%20Miguel%20de%20Allende.%20Can%20you%20help%20me%3F%20%F0%9F%92%BB%0A%0A%5BTECH%5D";

function isEnglishRequest(request: Request): boolean {
  const requestUrl = new URL(request.url);
  const requestedText = requestUrl.searchParams.get("text")?.trim().toLowerCase() ?? "";

  if (requestedText.startsWith("hi") || requestedText.startsWith("hello")) {
    return true;
  }

  const referer = request.headers.get("referer");
  if (!referer) return false;

  try {
    const pathname = new URL(referer).pathname;
    return pathname === "/en" || pathname.startsWith("/en/");
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/whatsapp")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const destination = isEnglishRequest(request) ? WHATSAPP_URL_EN : WHATSAPP_URL_ES;

        return new Response(null, {
          status: 302,
          headers: {
            Location: destination,
            "Cache-Control": "no-store, private",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});
