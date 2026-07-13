import {
  Apple,
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  Gauge,
  HardDrive,
  Home,
  MemoryStick,
  MonitorSmartphone,
  Printer,
  Settings,
  Wifi,
  Wrench,
} from "lucide-react";
import { tFor, type Locale } from "@/i18n/dict";
import { Section } from "@/components/ui/Section";
import { diagnosisHref, whatsappPath } from "@/lib/site";
import heroImg from "@/assets/hero-workbench.jpg";

const PROBLEM_ICONS = [Gauge, Apple, MemoryStick, HardDrive, Wifi, Printer, Download, Settings, Building2];

export function HomePage({ locale }: { locale: Locale }) {
  const t = tFor(locale);
  const isES = locale === "es";
  const servicesPath = isES ? "/servicios" : "/en/services";
  const softwarePath = isES
    ? "/instalacion-de-programas-san-miguel-de-allende"
    : "/en/software-installation-san-miguel-de-allende";
  const waMsg = isES
    ? "Hola San Miguel Tech, necesito ayuda con un equipo."
    : "Hi San Miguel Tech, I need help with a device.";

  const serviceCards = [
    { icon: Apple, title: isES ? "Apple" : "Apple", text: isES ? "Mac, iPhone, iPad, iCloud y migraciones" : "Mac, iPhone, iPad, iCloud and migrations", id: "apple" },
    { icon: MemoryStick, title: isES ? "Upgrades" : "Upgrades", text: isES ? "SSD, RAM, mantenimiento y componentes" : "SSD, RAM, maintenance and components", id: "upgrades" },
    { icon: Download, title: isES ? "Programas" : "Software", text: isES ? "Soft Restaurant 10, Office, AutoCAD y más" : "Soft Restaurant 10, Office, AutoCAD and more", id: "software" },
    { icon: Wrench, title: isES ? "Reparación" : "Repair", text: isES ? "Diagnóstico de hardware y sistema" : "Hardware and system diagnosis", id: isES ? "reparacion" : "repair" },
    { icon: MonitorSmartphone, title: isES ? "Soporte remoto" : "Remote support", text: isES ? "Soluciones sin trasladar el equipo" : "Solutions without moving the device", id: isES ? "remoto" : "remote" },
    { icon: Wifi, title: isES ? "Wi-Fi y hogar" : "Wi-Fi and home", text: isES ? "Redes, impresoras, TV y conectividad" : "Networks, printers, TV and connectivity", id: "wifi" },
    { icon: Building2, title: isES ? "Negocios" : "Business", text: isES ? "Oficinas, hoteles y rentas vacacionales" : "Offices, hotels and vacation rentals", id: isES ? "negocios" : "business" },
  ];

  return (
    <>
      <section className="overflow-hidden bg-white">
        <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">{t.hero.eyebrow}</div>
            <h1 className="max-w-3xl text-[44px] font-semibold leading-[0.96] sm:text-6xl lg:text-[76px]">
              {t.hero.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{t.hero.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={diagnosisHref(locale, "home-hero", "general")} className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-white shadow-sm">
                {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href={whatsappPath(waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full border border-black/[0.09] bg-white px-6 text-sm font-medium">
                {t.hero.ctaWhatsapp}
              </a>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {t.hero.trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-brand/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-black/[0.06] bg-[#f5f5f7] shadow-[0_30px_90px_rgba(0,0,0,0.13)]">
              <img
                src={heroImg}
                alt={isES ? "Mesa de trabajo de servicio técnico con MacBook, computadora y herramientas" : "Technical service workbench with MacBook, computer and tools"}
                width={1600}
                height={1200}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Section tone="soft" eyebrow={isES ? "PROBLEMAS COMUNES" : "COMMON PROBLEMS"} title={t.problems.title} lede={t.problems.lede}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.slice(0, 9).map((label, index) => {
            const Icon = PROBLEM_ICONS[index] ?? Settings;
            const software = label.toLowerCase().includes(isES ? "programa" : "software");
            const href = software ? softwarePath : diagnosisHref(locale, "home-problem", software ? "software" : "general");
            return (
              <a key={label} href={href} className="apple-card group flex min-h-24 items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="pt-2 text-sm font-medium leading-relaxed group-hover:text-brand">{label}</span>
              </a>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={isES ? "SERVICIOS" : "SERVICES"} title={isES ? "Todo lo que necesitas, organizado por servicio." : "Everything you need, organized by service."} lede={isES ? "Explora cada categoría con problemas frecuentes, alcance del servicio y modalidad de atención." : "Explore each category with common problems, service scope and available support mode."}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map(({ icon: Icon, title, text, id }) => (
            <a key={id} href={`${servicesPath}#${id}`} className="apple-card group p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.09)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                {isES ? "Ver detalles" : "See details"} <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="graphite" eyebrow={isES ? "EXPERIENCIA APPLE" : "APPLE EXPERIENCE"} title={t.apple.title} lede={t.apple.lede}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <a href={diagnosisHref(locale, "home-apple", "apple")} className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-graphite">
              {t.apple.cta}
            </a>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-graphite-foreground/55">{t.apple.disclaimer}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[isES ? "MacBook, iMac y Mac mini" : "MacBook, iMac and Mac mini", isES ? "iPhone y iPad" : "iPhone and iPad", isES ? "macOS y actualizaciones" : "macOS and updates", isES ? "Migración entre equipos" : "Device migration", isES ? "Apple ID e iCloud" : "Apple ID and iCloud", isES ? "Respaldos y recuperación" : "Backups and recovery", isES ? "Optimización" : "Optimization", isES ? "Upgrades compatibles" : "Compatible upgrades"].map((item) => (
              <div key={item} className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-graphite-foreground/80">{item}</div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="upgrades" eyebrow="UPGRADES" title={t.upgrades.title}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="apple-card p-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{isES ? "ANTES" : "BEFORE"}</div>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              {t.upgrades.before.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
          <div className="apple-card bg-brand-soft/60 p-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">{isES ? "DESPUÉS" : "AFTER"}</div>
            <ul className="mt-5 space-y-4 text-sm">
              {t.upgrades.after.map((item) => <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{item}</li>)}
            </ul>
          </div>
        </div>
        <a href={diagnosisHref(locale, "home-upgrades", "upgrades")} className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white">
          {t.upgrades.cta}
        </a>
      </Section>

      <Section id="software" tone="soft" eyebrow={isES ? "PROGRAMAS" : "SOFTWARE"} title={isES ? "Instalación remota de programas" : "Remote software installation"} lede={isES ? "Configuramos programas de trabajo y negocio sin que tengas que trasladar la computadora." : "We configure work and business programs without requiring you to move the computer."}>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {["Soft Restaurant 10", "Microsoft Office y 365", "AutoCAD y SketchUp", "Adobe Acrobat y Creative Cloud", isES ? "Correo, navegadores y videollamadas" : "Email, browsers and video meetings", isES ? "Drivers, impresoras y periféricos" : "Drivers, printers and peripherals"].map((item) => (
              <div key={item} className="apple-card flex items-start gap-3 p-5 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {item}
              </div>
            ))}
          </div>
          <div className="apple-card bg-white p-7">
            <MonitorSmartphone className="h-8 w-8 text-brand" />
            <h3 className="mt-5 text-2xl font-semibold">{isES ? "Exclusivamente remoto" : "Remote only"}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{isES ? "El equipo debe encender y contar con internet estable. Tú autorizas el acceso temporal y puedes ver toda la sesión." : "The computer must power on and have stable internet. You authorize temporary access and can see the entire session."}</p>
            <a href={softwarePath} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
              {isES ? "Ver programas y proceso" : "View programs and process"} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      <Section eyebrow={isES ? "MODALIDADES" : "SERVICE MODES"} title={t.modes.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {[{ icon: MonitorSmartphone, ...t.modes.remote }, { icon: Home, ...t.modes.onsite }, { icon: Wrench, ...t.modes.shop }].map(({ icon: Icon, title, text }) => (
            <div key={title} className="apple-card p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft" eyebrow={isES ? "NEGOCIOS" : "BUSINESS"} title={t.business.title} lede={t.business.lede}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.business.benefits.map((item) => (
            <div key={item} className="apple-card flex items-start gap-3 p-5 text-sm"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{item}</div>
          ))}
        </div>
        <a href={diagnosisHref(locale, "home-business", "business")} className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white">
          {t.business.cta}
        </a>
      </Section>

      <Section tone="graphite">
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{isES ? "Cuéntanos qué está pasando." : "Tell us what is happening."}</h2>
            <p className="mt-3 max-w-xl text-graphite-foreground/70">{isES ? "Te orientamos con la modalidad adecuada y los siguientes pasos." : "We will guide you to the right service mode and next steps."}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={diagnosisHref(locale, "home-footer", "general")} className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-graphite">{t.hero.ctaPrimary}</a>
            <a href={whatsappPath(waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white">WhatsApp</a>
          </div>
        </div>
      </Section>
    </>
  );
}
