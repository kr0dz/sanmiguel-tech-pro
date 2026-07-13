import { Link, useRouterState } from "@tanstack/react-router";
import { tFor, localeFromPath } from "@/i18n/dict";
import { SITE } from "@/lib/site";

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const t = tFor(locale).footer;
  const year = new Date().getFullYear();
  const isES = locale === "es";
  return (
    <footer className="mt-24 border-t border-border bg-graphite text-graphite-foreground">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-semibold tracking-tight">
            San Miguel <span className="text-brand-soft">Tech</span>
          </div>
          <p className="mt-2 text-sm text-graphite-foreground/70 max-w-md">{t.tagline}</p>
          <p className="mt-4 text-xs text-graphite-foreground/60 max-w-md leading-relaxed">
            {t.independent}
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-graphite-foreground/60 mb-3">
            {isES ? "Sitio" : "Site"}
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-brand-soft" to={isES ? "/servicios" : "/en/services"}>{tFor(locale).nav.services}</Link></li>
            <li><Link className="hover:text-brand-soft" to={isES ? "/nosotros" : "/en/about"}>{tFor(locale).nav.about}</Link></li>
            <li><Link className="hover:text-brand-soft" to={isES ? "/preguntas-frecuentes" : "/en/faq"}>{isES ? "Preguntas frecuentes" : "FAQ"}</Link></li>
            <li><Link className="hover:text-brand-soft" to={isES ? "/contacto" : "/en/contact"}>{tFor(locale).nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-graphite-foreground/60 mb-3">
            {isES ? "Contacto" : "Contact"}
          </div>
          <ul className="space-y-2 text-sm">
            <li>{SITE.serviceArea}</li>
            <li><a className="hover:text-brand-soft" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><Link className="hover:text-brand-soft" to={isES ? "/aviso-de-privacidad" : "/en/privacy"}>{t.legal.privacy}</Link></li>
            <li><Link className="hover:text-brand-soft" to={isES ? "/terminos-del-servicio" : "/en/terms"}>{t.legal.terms}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-graphite-foreground/60 flex flex-wrap items-center justify-between gap-2">
          <span>© {year} {SITE.name}. {t.rights}</span>
          <span>{SITE.domain}</span>
        </div>
      </div>
    </footer>
  );
}