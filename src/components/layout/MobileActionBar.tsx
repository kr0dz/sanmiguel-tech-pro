import { Phone, MessageCircle, Wrench } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { localeFromPath, tFor } from "@/i18n/dict";
import { SITE, whatsappUrl } from "@/lib/site";

export function MobileActionBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const t = tFor(locale).mobileBar;
  const isES = locale === "es";
  const msg = isES ? "Hola San Miguel Tech" : "Hi San Miguel Tech";
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur">
      <div className="grid grid-cols-3 text-xs">
        <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex flex-col items-center py-2 gap-0.5 text-muted-foreground">
          <Phone className="h-4 w-4" />
          {t.call}
        </a>
        <a href={whatsappUrl(msg)} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-2 gap-0.5 text-muted-foreground">
          <MessageCircle className="h-4 w-4" />
          {t.whatsapp}
        </a>
        <Link to={isES ? "/solicitar-diagnostico" : "/en/request-diagnosis"} className="flex flex-col items-center py-2 gap-0.5 text-brand font-medium">
          <Wrench className="h-4 w-4" />
          {t.diagnose}
        </Link>
      </div>
    </nav>
  );
}