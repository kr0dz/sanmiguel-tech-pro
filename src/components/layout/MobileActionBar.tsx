import { MessageCircle, Wrench, Laptop } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { localeFromPath, tFor } from "@/i18n/dict";
import { diagnosisHref, whatsappPath } from "@/lib/site";

export function MobileActionBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const t = tFor(locale).mobileBar;
  const isES = locale === "es";
  const msg = isES ? "Hola San Miguel Tech" : "Hi San Miguel Tech";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2 lg:hidden"
      aria-label={isES ? "Acciones rápidas" : "Quick actions"}
    >
      <div className="mx-auto grid max-w-md grid-cols-3 rounded-[24px] border border-black/[0.08] bg-white/92 p-1.5 text-[11px] shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
        <Link
          to={isES ? "/servicios" : "/en/services"}
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-[18px] text-muted-foreground transition active:bg-[#f5f5f7]"
        >
          <Laptop className="h-4 w-4" />
          {isES ? "Servicios" : "Services"}
        </Link>
        <a
          href={whatsappPath(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-[18px] text-muted-foreground transition active:bg-[#f5f5f7]"
        >
          <MessageCircle className="h-4 w-4" />
          {t.whatsapp}
        </a>
        <a
          href={diagnosisHref(locale, "mobile-bar", "general")}
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-[18px] bg-brand text-white shadow-sm"
        >
          <Wrench className="h-4 w-4" />
          {t.diagnose}
        </a>
      </div>
    </nav>
  );
}
