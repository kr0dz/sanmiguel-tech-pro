import { MessageCircle } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { localeFromPath } from "@/i18n/dict";
import { whatsappPath } from "@/lib/site";

export function WhatsAppFab() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const msg = locale === "es"
    ? "Hola San Miguel Tech, necesito ayuda con un equipo."
    : "Hi San Miguel Tech, I need help with a device.";

  return (
    <a
      href={whatsappPath(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={locale === "es" ? "Contactar a San Miguel Tech por WhatsApp" : "Contact San Miguel Tech on WhatsApp"}
      className="fixed bottom-6 right-6 z-40 hidden h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 lg:inline-flex"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
