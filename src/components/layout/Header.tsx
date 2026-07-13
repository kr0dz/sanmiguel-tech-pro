import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  Apple,
  Building2,
  ChevronDown,
  Download,
  MemoryStick,
  Menu,
  MonitorSmartphone,
  Wifi,
  Wrench,
  X,
} from "lucide-react";
import { tFor, localeFromPath, alternatePath, type Locale } from "@/i18n/dict";
import { diagnosisHref } from "@/lib/site";

function serviceItems(locale: Locale) {
  const isES = locale === "es";
  const services = isES ? "/servicios" : "/en/services";
  return [
    {
      icon: Apple,
      href: `${services}#apple`,
      title: isES ? "Apple" : "Apple",
      text: isES ? "MacBook, iMac, iPhone y iPad" : "MacBook, iMac, iPhone and iPad",
    },
    {
      icon: MemoryStick,
      href: `${services}#upgrades`,
      title: isES ? "Computadoras y upgrades" : "Computers and upgrades",
      text: isES ? "SSD, RAM, optimización y componentes" : "SSD, RAM, optimization and components",
    },
    {
      icon: Download,
      href: isES
        ? "/instalacion-de-programas-san-miguel-de-allende"
        : "/en/software-installation-san-miguel-de-allende",
      title: isES ? "Instalación de programas" : "Software installation",
      text: isES ? "Office, AutoCAD, Soft Restaurant 10 y más" : "Office, AutoCAD, Soft Restaurant 10 and more",
    },
    {
      icon: Wrench,
      href: `${services}#${isES ? "reparacion" : "repair"}`,
      title: isES ? "Diagnóstico y reparación" : "Diagnosis and repair",
      text: isES ? "Fallas de hardware, sistema y rendimiento" : "Hardware, system and performance issues",
    },
    {
      icon: MonitorSmartphone,
      href: `${services}#${isES ? "remoto" : "remote"}`,
      title: isES ? "Soporte remoto" : "Remote support",
      text: isES ? "Configuración y solución sin trasladar el equipo" : "Setup and troubleshooting without moving the device",
    },
    {
      icon: Wifi,
      href: `${services}#wifi`,
      title: isES ? "Wi-Fi y hogar" : "Wi-Fi and home",
      text: isES ? "Redes, impresoras, Smart TV y conectividad" : "Networks, printers, Smart TVs and connectivity",
    },
    {
      icon: Building2,
      href: `${services}#${isES ? "negocios" : "business"}`,
      title: isES ? "Tecnología para negocios" : "Technology for businesses",
      text: isES ? "Oficinas, hoteles y rentas vacacionales" : "Offices, hotels and vacation rentals",
    },
  ];
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const isES = locale === "es";
  const t = tFor(locale);
  const services = serviceItems(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const altHref = alternatePath(locale, pathname);
  const diagnosis = diagnosisHref(locale, "header", "general");

  const mainItems = isES
    ? [
        { href: "/", label: "Inicio" },
        { href: "/nosotros", label: "Nosotros" },
        { href: "/contacto", label: "Contacto" },
      ]
    : [
        { href: "/en", label: "Home" },
        { href: "/en/about", label: "About" },
        { href: "/en/contact", label: "Contact" },
      ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-background/82 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/72">
      <div className="container-page flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          to={isES ? "/" : "/en"}
          className="text-[17px] font-semibold tracking-[-0.025em] text-foreground"
          onClick={() => setMobileOpen(false)}
        >
          San Miguel <span className="text-brand">Tech</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={isES ? "Navegación principal" : "Main navigation"}>
          <Link
            to={isES ? "/" : "/en"}
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-black/[0.04] hover:text-foreground"
          >
            {isES ? "Inicio" : "Home"}
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-black/[0.04] hover:text-foreground"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              {isES ? "Servicios" : "Services"}
              <ChevronDown className={`h-3.5 w-3.5 transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-[calc(100%+0.75rem)] w-[720px] -translate-x-1/2 rounded-[28px] border border-black/[0.07] bg-white/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-1">
                  {services.map(({ icon: Icon, href, title, text }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-start gap-3 rounded-[20px] p-4 transition hover:bg-[#f5f5f7]"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f2f2f4] text-brand transition group-hover:bg-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">{title}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{text}</span>
                      </span>
                    </a>
                  ))}
                </div>
                <a
                  href={isES ? "/servicios" : "/en/services"}
                  onClick={() => setServicesOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-[20px] bg-[#f5f5f7] px-5 py-3 text-sm font-medium text-foreground"
                >
                  {isES ? "Ver todos los servicios" : "View all services"}
                  <span className="text-brand">→</span>
                </a>
              </div>
            )}
          </div>

          {mainItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-black/[0.04] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={altHref}
            hrefLang={isES ? "en" : "es"}
            className="hidden h-9 items-center justify-center rounded-full border border-black/[0.08] px-3 text-xs font-medium text-muted-foreground transition hover:bg-white sm:inline-flex"
          >
            {t.nav.lang}
          </a>
          <a
            href={diagnosis}
            className="hidden h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white shadow-sm transition hover:brightness-95 sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/70 text-foreground lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={isES ? "Abrir menú" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/[0.06] bg-[#f5f5f7]/98 lg:hidden">
          <div className="container-page max-h-[calc(100dvh-3.5rem)] overflow-y-auto py-4 pb-28">
            <div className="rounded-[24px] bg-white p-2 shadow-sm">
              <a href={isES ? "/" : "/en"} onClick={() => setMobileOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-medium">
                {isES ? "Inicio" : "Home"}
              </a>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-4 py-3 text-base font-medium">
                  {isES ? "Servicios" : "Services"}
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="grid gap-1 px-2 pb-2 sm:grid-cols-2">
                  {services.map(({ icon: Icon, href, title }) => (
                    <a key={href} href={href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-2xl bg-[#f5f5f7] px-3 py-3 text-sm">
                      <Icon className="h-4 w-4 text-brand" />
                      {title}
                    </a>
                  ))}
                </div>
              </details>
              {mainItems.slice(1).map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-2xl px-4 py-3 text-base font-medium">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-[auto_1fr] gap-2">
              <a href={altHref} className="inline-flex h-12 items-center justify-center rounded-full border border-black/[0.08] bg-white px-4 text-sm font-medium">
                {t.nav.lang}
              </a>
              <a href={diagnosis} className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white">
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
