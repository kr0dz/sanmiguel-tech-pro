import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const WHATSAPP_URL_ES = "/solicitar-diagnostico";
const WHATSAPP_URL_EN = "/en/request-diagnosis";

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
