import {
  Apple,
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  MemoryStick,
  MonitorSmartphone,
  Wifi,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { diagnosisHref } from "@/lib/site";

type ServiceGroup = {
  id: string;
  icon: typeof Apple;
  title: string;
  summary: string;
  modality: string;
  idealFor: string[];
  includes: string[];
  note?: string;
};

function groups(locale: Locale): ServiceGroup[] {
  const isES = locale === "es";
  return isES
    ? [
        {
          id: "apple",
          icon: Apple,
          title: "Soporte para equipos Apple",
          summary: "Diagnóstico, configuración y optimización para MacBook, iMac, Mac mini, iPhone y iPad.",
          modality: "Remoto, revisión física o domicilio",
          idealFor: ["Mac lento o con errores", "Configuración de equipo nuevo", "Migración de archivos", "Problemas con macOS, iCloud o Apple ID"],
          includes: ["Diagnóstico inicial", "Actualización o reinstalación de macOS", "Respaldos y migración", "Optimización de almacenamiento", "Configuración de cuentas y servicios", "Revisión de upgrades compatibles"],
          note: "Servicio técnico independiente. No somos un centro autorizado por Apple.",
        },
        {
          id: "upgrades",
          icon: MemoryStick,
          title: "Computadoras, mantenimiento y upgrades",
          summary: "Mejoras de rendimiento para laptops y computadoras de escritorio antes de reemplazarlas.",
          modality: "Revisión física",
          idealFor: ["Inicio muy lento", "Poco almacenamiento", "Programas que se congelan", "Equipo con varios años de uso"],
          includes: ["Cambio de disco duro a SSD", "Ampliación de memoria RAM", "Limpieza interna", "Mantenimiento preventivo", "Ensamble y cambio de componentes", "Revisión de compatibilidad antes de comprar piezas"],
        },
        {
          id: "software",
          icon: Download,
          title: "Instalación de programas",
          summary: "Instalación y configuración remota de aplicaciones de trabajo, diseño, administración y productividad.",
          modality: "Exclusivamente remoto",
          idealFor: ["Soft Restaurant 10", "Office y Microsoft 365", "AutoCAD y SketchUp", "Adobe, correo, navegadores y herramientas de oficina"],
          includes: ["Revisión de requisitos", "Instalación y actualización", "Configuración inicial", "Solución de errores", "Conexión de impresoras y periféricos", "Preparación de computadoras nuevas"],
        },
        {
          id: "reparacion",
          icon: Wrench,
          title: "Diagnóstico y reparación",
          summary: "Identificación de fallas de hardware, sistema operativo, almacenamiento y rendimiento.",
          modality: "Remoto o revisión física",
          idealFor: ["Equipo que no enciende", "Pantalla negra", "Sobrecalentamiento", "Reinicios, bloqueos o errores de inicio"],
          includes: ["Evaluación de síntomas", "Pruebas de almacenamiento y memoria", "Diagnóstico de sistema", "Eliminación de software problemático", "Recuperación de archivos cuando es viable", "Presupuesto antes de realizar cambios"],
        },
        {
          id: "remoto",
          icon: MonitorSmartphone,
          title: "Soporte remoto",
          summary: "Ayuda inmediata para problemas que pueden resolverse mediante conexión segura a distancia.",
          modality: "Remoto",
          idealFor: ["Errores de programas", "Correo y cuentas", "Configuración de impresoras", "Computadora lenta por software"],
          includes: ["Conexión temporal autorizada", "Diagnóstico en pantalla", "Configuración de aplicaciones", "Actualizaciones", "Optimización básica", "Explicación del trabajo realizado"],
        },
        {
          id: "wifi",
          icon: Wifi,
          title: "Wi-Fi, redes y tecnología para el hogar",
          summary: "Configuración de conectividad, impresoras y dispositivos para que la casa funcione mejor.",
          modality: "Domicilio o remoto según el caso",
          idealFor: ["Señal débil", "Zonas sin cobertura", "Impresora desconectada", "Smart TV o dispositivos que no se conectan"],
          includes: ["Diagnóstico de cobertura", "Configuración de router", "Repetidores y sistemas mesh", "Impresoras y escáneres", "Smart TV y streaming", "Conectividad básica de cámaras y dispositivos"],
        },
        {
          id: "negocios",
          icon: Building2,
          title: "Tecnología para negocios",
          summary: "Soporte para oficinas, hoteles, restaurantes, galerías, rentas vacacionales y administradores de propiedades.",
          modality: "Remoto, domicilio o visitas programadas",
          idealFor: ["Equipos de oficina", "Wi-Fi para huéspedes", "Correo y herramientas de trabajo", "Soporte recurrente"],
          includes: ["Configuración de computadoras", "Redes e impresoras", "Correo empresarial", "Respaldos", "Smart TV y streaming", "Mantenimiento preventivo", "Páginas web, dominios y herramientas digitales", "Documentación básica de equipos"],
        },
      ]
    : [
        {
          id: "apple",
          icon: Apple,
          title: "Apple device support",
          summary: "Diagnosis, setup and optimization for MacBook, iMac, Mac mini, iPhone and iPad.",
          modality: "Remote, in-shop or on-site",
          idealFor: ["Slow Mac or recurring errors", "New device setup", "File migration", "macOS, iCloud or Apple ID issues"],
          includes: ["Initial diagnosis", "macOS update or reinstall", "Backups and migration", "Storage optimization", "Account and service setup", "Compatible upgrade review"],
          note: "Independent technical service. We are not an Apple Authorized Service Provider.",
        },
        {
          id: "upgrades",
          icon: MemoryStick,
          title: "Computers, maintenance and upgrades",
          summary: "Performance improvements for laptops and desktops before replacing them.",
          modality: "In-shop inspection",
          idealFor: ["Very slow startup", "Low storage", "Programs freezing", "A computer with several years of use"],
          includes: ["HDD to SSD upgrade", "RAM expansion", "Internal cleaning", "Preventive maintenance", "PC assembly and component replacement", "Compatibility check before buying parts"],
        },
        {
          id: "software",
          icon: Download,
          title: "Software installation",
          summary: "Remote installation and setup of work, design, management and productivity applications.",
          modality: "Remote only",
          idealFor: ["Soft Restaurant 10", "Office and Microsoft 365", "AutoCAD and SketchUp", "Adobe, email, browsers and office tools"],
          includes: ["Requirement review", "Installation and updates", "Initial setup", "Error troubleshooting", "Printer and peripheral connection", "New-computer preparation"],
        },
        {
          id: "repair",
          icon: Wrench,
          title: "Diagnosis and repair",
          summary: "Identification of hardware, operating system, storage and performance faults.",
          modality: "Remote or in-shop",
          idealFor: ["Computer will not power on", "Black screen", "Overheating", "Restarts, freezes or startup errors"],
          includes: ["Symptom review", "Storage and memory tests", "System diagnosis", "Removal of problematic software", "File recovery when feasible", "Quote before changes"],
        },
        {
          id: "remote",
          icon: MonitorSmartphone,
          title: "Remote support",
          summary: "Fast help for problems that can be solved through a secure remote connection.",
          modality: "Remote",
          idealFor: ["Program errors", "Email and accounts", "Printer setup", "Software-related slowness"],
          includes: ["Authorized temporary connection", "On-screen diagnosis", "Application setup", "Updates", "Basic optimization", "Explanation of the work performed"],
        },
        {
          id: "wifi",
          icon: Wifi,
          title: "Wi-Fi, networks and home technology",
          summary: "Connectivity, printer and device setup so the home works more reliably.",
          modality: "On-site or remote depending on the issue",
          idealFor: ["Weak signal", "Dead zones", "Disconnected printer", "Smart TV or devices that will not connect"],
          includes: ["Coverage diagnosis", "Router setup", "Extenders and mesh systems", "Printers and scanners", "Smart TV and streaming", "Basic camera and smart-device connectivity"],
        },
        {
          id: "business",
          icon: Building2,
          title: "Technology for businesses",
          summary: "Support for offices, hotels, restaurants, galleries, vacation rentals and property managers.",
          modality: "Remote, on-site or scheduled visits",
          idealFor: ["Office computers", "Guest Wi-Fi", "Email and work tools", "Recurring support"],
          includes: ["Computer setup", "Networks and printers", "Business email", "Backups", "Smart TV and streaming", "Preventive maintenance", "Websites, domains and digital tools", "Basic equipment documentation"],
        },
      ];
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const list = groups(locale);
  const softwarePath = isES
    ? "/instalacion-de-programas-san-miguel-de-allende"
    : "/en/software-installation-san-miguel-de-allende";

  return (
    <>
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            {isES ? "SERVICIOS" : "SERVICES"}
          </div>
          <h1 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            {isES ? "Soporte tecnológico, explicado con claridad." : "Technology support, explained clearly."}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {isES
              ? "Elige el tipo de ayuda que necesitas. Cada servicio indica qué problemas atiende, qué incluye y si se realiza de forma remota, a domicilio o mediante revisión física."
              : "Choose the type of help you need. Every service explains the problems it covers, what is included and whether it is remote, on-site or requires physical inspection."}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {list.map(({ id, icon: Icon, title, modality }) => (
              <a key={id} href={`#${id}`} className="apple-card group p-5 transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.09)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-base font-semibold">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{modality}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {list.map((service, index) => {
        const Icon = service.icon;
        const diagnosis = diagnosisHref(locale, "services-page", service.id);
        return (
          <Section key={service.id} id={service.id} tone={index % 2 ? "soft" : "default"}>
            <article className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.summary}</p>
                <div className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand shadow-sm">
                  {service.modality}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={diagnosis} className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white">
                    {isES ? "Solicitar diagnóstico" : "Request a diagnosis"}
                  </a>
                  {service.id === "software" && (
                    <a href={softwarePath} className="inline-flex h-11 items-center justify-center rounded-full border border-black/[0.09] bg-white px-5 text-sm font-medium">
                      {isES ? "Ver programas y proceso" : "View programs and process"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
                {service.note && <p className="mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">{service.note}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="apple-card p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {isES ? "IDEAL PARA" : "IDEAL FOR"}
                  </div>
                  <ul className="mt-5 space-y-4">
                    {service.idealFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="apple-card p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {isES ? "QUÉ INCLUYE" : "WHAT IS INCLUDED"}
                  </div>
                  <ul className="mt-5 space-y-4">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Section>
        );
      })}

      <Section tone="graphite">
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {isES ? "¿No sabes cuál servicio elegir?" : "Not sure which service to choose?"}
            </h2>
            <p className="mt-3 max-w-xl text-graphite-foreground/70">
              {isES ? "Describe el problema con tus palabras y te orientamos hacia la modalidad adecuada." : "Describe the problem in your own words and we will guide you to the right service mode."}
            </p>
          </div>
          <a href={diagnosisHref(locale, "services-footer", "general")} className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-graphite sm:w-auto">
            {isES ? "Cuéntanos el problema" : "Tell us the problem"}
          </a>
        </div>
      </Section>
    </>
  );
}
