import { Link } from "@tanstack/react-router";
import {
  Gauge, HardDrive, Cpu, MemoryStick, ShieldCheck, Wifi, Printer,
  Settings, Bug, Building2, ArrowRight, CheckCircle2, Apple,
  Wrench, Home, MonitorSmartphone, Download,
} from "lucide-react";
import { tFor, type Locale } from "@/i18n/dict";
import { Section } from "@/components/ui/Section";
import { whatsappPath } from "@/lib/site";
import heroImg from "@/assets/hero-workbench.jpg";

const PROBLEM_ICONS = [Gauge, Apple, MemoryStick, HardDrive, ShieldCheck, Wifi, Printer, Download, Settings, Bug, Building2];

export function HomePage({ locale }: { locale: Locale }) {
  const t = tFor(locale);
  const isES = locale === "es";
  const diagPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const servicesPath = isES ? "/servicios" : "/en/services";
  const softwarePath = isES
    ? "/instalacion-de-programas-san-miguel-de-allende"
    : "/en/software-installation-san-miguel-de-allende";
  const waMsg = isES
    ? "Hola San Miguel Tech, quiero solicitar un diagnóstico."
    : "Hi San Miguel Tech, I'd like to request a diagnosis.";

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-page pt-14 md:pt-20 pb-16 md:pb-24 grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-4">{t.hero.eyebrow}</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
              {t.hero.h1}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t.hero.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={diagPath} className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-brand text-brand-foreground text-sm font-medium shadow-sm hover:opacity-95 transition">
                {t.hero.ctaPrimary} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href={whatsappPath(waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-border text-foreground text-sm font-medium hover:bg-accent/50 transition">
                {t.hero.ctaWhatsapp}
              </a>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-muted-foreground">
              {t.hero.trust.map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" /> {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-25px_oklch(0.35_0.05_240/0.35)]">
              <img src={heroImg} alt={isES ? "Mesa de trabajo de servicio técnico con MacBook, computadora abierta y herramientas de precisión" : "Technical service workbench with a MacBook, open desktop and precision tools"} width={1600} height={1200} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Section tone="soft" eyebrow={isES ? "PROBLEMAS COMUNES" : "COMMON PROBLEMS"} title={t.problems.title} lede={t.problems.lede}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((label, i) => {
            const Icon = PROBLEM_ICONS[i] ?? Cpu;
            const target = label.toLowerCase().includes(isES ? "programa" : "software") ? softwarePath : diagPath;
            return (
              <Link key={label} to={target} className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-brand/60 hover:shadow-sm transition">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-foreground group-hover:text-brand pt-2">{label}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section eyebrow={isES ? "SERVICIOS" : "SERVICES"} title={isES ? "Soluciones integrales de tecnología" : "End-to-end technology solutions"} lede={isES ? "Apple, Windows, instalación de programas, redes y equipos de negocios: un solo técnico de confianza en San Miguel de Allende." : "Apple, Windows, software installation, networks and business systems: one trusted technician in San Miguel de Allende."}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Apple, title: isES ? "Soporte para equipos Apple" : "Apple device support", hash: "apple" },
            { icon: MemoryStick, title: isES ? "Computadoras y upgrades" : "Computers and upgrades", hash: "upgrades" },
            { icon: Download, title: isES ? "Instalación de programas" : "Software installation", hash: "software" },
            { icon: Wrench, title: isES ? "Diagnóstico y reparación" : "Diagnosis and repair", hash: isES ? "reparacion" : "repair" },
            { icon: MonitorSmartphone, title: isES ? "Soporte remoto" : "Remote support", hash: isES ? "remoto" : "remote" },
            { icon: Wifi, title: isES ? "Wi-Fi, redes y hogar" : "Wi-Fi, networks and home", hash: "wifi" },
            { icon: Building2, title: isES ? "Tecnología para negocios" : "Technology for businesses", hash: isES ? "negocios" : "business" },
          ].map(({ icon: Icon, title, hash }) => (
            <Link key={title} to={servicesPath} hash={hash} className="group rounded-xl border border-border bg-card p-6 hover:border-brand/60 hover:shadow-sm transition">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand mb-4">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm text-brand inline-flex items-center gap-1">
                {isES ? "Ver detalles" : "See details"} <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="apple" tone="graphite">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand-soft mb-3">
              {isES ? "EXPERIENCIA APPLE" : "APPLE EXPERIENCE"}
            </div>
            <h2 className="text-3xl md:text-[40px] leading-tight font-semibold tracking-tight">{t.apple.title}</h2>
            <p className="mt-4 text-graphite-foreground/75 max-w-xl">{t.apple.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={diagPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-soft text-graphite text-sm font-medium hover:opacity-95">
                {t.apple.cta}
              </Link>
            </div>
            <p className="mt-6 text-xs text-graphite-foreground/55 max-w-md">{t.apple.disclaimer}</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {[
              isES ? "Diagnóstico de MacBook, iMac y Mac mini" : "MacBook, iMac and Mac mini diagnosis",
              isES ? "Configuración de iPhone y iPad" : "iPhone and iPad setup",
              isES ? "Actualización de macOS" : "macOS upgrades",
              isES ? "Migración entre equipos" : "Device migration",
              isES ? "Apple ID e iCloud" : "Apple ID and iCloud",
              isES ? "Respaldos y recuperación" : "Backups and recovery",
              isES ? "Optimización de equipos lentos" : "Slow-device optimization",
              isES ? "Upgrades en modelos compatibles" : "Upgrades on compatible models",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-graphite-foreground/80">{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="upgrades" eyebrow="UPGRADES" title={t.upgrades.title}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{isES ? "Antes" : "Before"}</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {t.upgrades.before.map((b) => <li key={b}>— {b}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-brand/40 bg-brand-soft/40 p-6">
            <div className="text-xs uppercase tracking-widest text-brand mb-4">{isES ? "Después" : "After"}</div>
            <ul className="space-y-3 text-sm text-foreground">
              {t.upgrades.after.map((b) => <li key={b} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />{b}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <Link to={diagPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium">
            {t.upgrades.cta}
          </Link>
        </div>
      </Section>

      <Section id="software" tone="soft" eyebrow={isES ? "PROGRAMAS Y SOFTWARE" : "PROGRAMS AND SOFTWARE"} title={isES ? "Instalación de programas en San Miguel de Allende" : "Software installation in San Miguel de Allende"} lede={isES ? "Instalamos, actualizamos y configuramos software legítimo para Windows y macOS, de forma remota o presencial." : "We install, update and configure legitimate software for Windows and macOS, remotely or on-site."}>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              isES ? "Microsoft 365 y Office con licencia válida" : "Microsoft 365 and Office with a valid license",
              isES ? "Zoom, Teams, navegadores y herramientas de trabajo" : "Zoom, Teams, browsers and work tools",
              isES ? "Antivirus, seguridad y actualizaciones" : "Antivirus, security and updates",
              isES ? "Drivers, impresoras y periféricos" : "Drivers, printers and peripherals",
              isES ? "Programas de diseño, edición y productividad" : "Design, editing and productivity software",
              isES ? "Migración y configuración de programas en un equipo nuevo" : "Software migration and setup on a new computer",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-border bg-card p-4 text-sm flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-brand/30 bg-brand-soft/40 p-6">
            <Download className="h-7 w-7 text-brand" />
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{isES ? "Software seguro y bien configurado" : "Safe, properly configured software"}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{isES ? "Trabajamos con licencias legítimas y respetamos los requisitos de cada programa. No instalamos software pirateado ni activadores ilegales." : "We work with legitimate licenses and respect each program's requirements. We do not install pirated software or illegal activators."}</p>
            <Link to={softwarePath} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
              {isES ? "Ver servicio de instalación de programas" : "View software installation service"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="soft" eyebrow={isES ? "PROCESO" : "PROCESS"} title={t.how.title}>
        <ol className="grid gap-5 md:grid-cols-4">
          {t.how.steps.map((s, i) => (
            <li key={s.t} className="rounded-xl border border-border bg-card p-5">
              <div className="text-brand text-sm font-medium">0{i + 1}</div>
              <h3 className="mt-2 text-base font-medium tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={isES ? "MODALIDADES" : "SERVICE MODES"} title={t.modes.title}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: MonitorSmartphone, ...t.modes.remote },
            { icon: Home, ...t.modes.onsite },
            { icon: Wrench, ...t.modes.shop },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand mb-4">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id={isES ? "negocios" : "business"} tone="soft" eyebrow={isES ? "NEGOCIOS" : "BUSINESS"} title={t.business.title} lede={t.business.lede}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.business.benefits.map((b) => (
            <div key={b} className="rounded-xl border border-border bg-card p-5 text-sm flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to={diagPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium">
            {t.business.cta}
          </Link>
        </div>
      </Section>

      <Section tone="graphite">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {isES ? "¿Listo para diagnosticar tu equipo?" : "Ready to diagnose your device?"}
            </h2>
            <p className="mt-2 text-graphite-foreground/70">
              {isES ? "Cuéntanos qué está pasando y te respondemos con los siguientes pasos." : "Tell us what's happening and we'll reply with the next steps."}
            </p>
          </div>
          <div className="flex gap-3">
            <Link to={diagPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-soft text-graphite text-sm font-medium">
              {t.hero.ctaPrimary}
            </Link>
            <a href={whatsappPath(waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-white/20 text-graphite-foreground text-sm font-medium">
              WhatsApp
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
