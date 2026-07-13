import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { tFor, localeFromPath, alternatePath, type Locale } from "@/i18n/dict";
import { cn } from "@/lib/utils";

function navItems(locale: Locale) {
  const t = tFor(locale).nav;
  return locale === "es"
    ? [
        { to: "/", label: t.home },
        { to: "/servicios", label: t.services, hash: "" },
        { to: "/servicios", label: t.apple, hash: "apple" },
        { to: "/servicios", label: t.upgrades, hash: "upgrades" },
        { to: "/instalacion-de-programas-san-miguel-de-allende", label: t.software },
        { to: "/servicios", label: t.business, hash: "negocios" },
        { to: "/servicios", label: t.remote, hash: "remoto" },
        { to: "/nosotros", label: t.about },
        { to: "/contacto", label: t.contact },
      ]
    : [
        { to: "/en", label: t.home },
        { to: "/en/services", label: t.services, hash: "" },
        { to: "/en/services", label: t.apple, hash: "apple" },
        { to: "/en/services", label: t.upgrades, hash: "upgrades" },
        { to: "/en/software-installation-san-miguel-de-allende", label: t.software },
        { to: "/en/services", label: t.business, hash: "business" },
        { to: "/en/services", label: t.remote, hash: "remote" },
        { to: "/en/about", label: t.about },
        { to: "/en/contact", label: t.contact },
      ];
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const t = tFor(locale);
  const items = navItems(locale);
  const [open, setOpen] = useState(false);
  const diagnosisTo = locale === "es" ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const altHref = alternatePath(locale, pathname);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/70">
      <div className="container-page flex items-center justify-between h-16 gap-4">
        <Link
          to={locale === "es" ? "/" : "/en"}
          className="font-semibold text-[17px] tracking-tight text-foreground"
        >
          San Miguel <span className="text-brand">Tech</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 text-sm" aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          {items.map((item) => (
            <Link
              key={`${item.to}-${"hash" in item ? item.hash : item.label}`}
              to={item.to}
              hash={"hash" in item ? item.hash : undefined}
              className="px-2.5 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={altHref}
            className="hidden sm:inline-flex items-center justify-center h-9 px-3 rounded-md border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent/40 transition"
            hrefLang={locale === "es" ? "en" : "es"}
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {t.nav.lang}
          </a>
          <Link
            to={diagnosisTo}
            className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-md bg-brand text-brand-foreground text-sm font-medium shadow-sm hover:opacity-95 transition"
          >
            {t.nav.cta}
          </Link>
          <button
            className="xl:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={locale === "es" ? "Abrir menú" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-page py-3 flex flex-col gap-1 text-sm">
            {items.map((item) => (
              <Link
                key={`${item.to}-${"hash" in item ? item.hash : item.label}`}
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={altHref}
                className="inline-flex items-center justify-center h-10 px-3 rounded-md border border-border text-sm text-muted-foreground"
              >
                {t.nav.lang}
              </a>
              <Link
                to={diagnosisTo}
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex items-center justify-center h-10 rounded-md bg-brand text-brand-foreground text-sm font-medium"
              >
                {t.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
