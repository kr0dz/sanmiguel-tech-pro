import { MessageCircle } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { localeFromPath } from "@/i18n/dict";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const msg = locale === "es"
    ? "Hola San Miguel Tech, necesito ayuda con un equipo."
    : "Hi San Miguel Tech, I need help with a device.";
  return (
    <a
      href={whatsappUrl(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center h-12 w-12 rounded-full bg-[oklch(0.65_0.15_150)] text-white shadow-lg hover:scale-105 transition"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}