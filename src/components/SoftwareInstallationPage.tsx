import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Download,
  Laptop,
  MessageCircle,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { diagnosisHref, whatsappPath } from "@/lib/site";

export const SOFTWARE_FAQ = {
  es: [
    {
      q: "¿Qué programas pueden instalar y configurar?",
      a: "Podemos ayudarte con Soft Restaurant 10, Microsoft Office y Microsoft 365, AutoCAD, SketchUp, Adobe Acrobat, navegadores, correo, videollamadas, impresoras, herramientas administrativas y otras aplicaciones compatibles con Windows o macOS.",
    },
    {
      q: "¿El servicio es únicamente remoto?",
      a: "Sí. La instalación de programas se realiza exclusivamente mediante conexión remota. El equipo debe encender, conectarse a internet y permitir el acceso temporal durante la sesión.",
    },
    {
      q: "¿Pueden configurar Soft Restaurant 10?",
      a: "Sí. Podemos apoyar con instalación, actualización, revisión de requisitos, conexión básica de impresoras y ajustes iniciales. Las configuraciones avanzadas de operación dependen de la infraestructura y necesidades del negocio.",
    },
    {
      q: "¿Instalan Office o Microsoft 365?",
      a: "Sí. Podemos instalar las aplicaciones, iniciar sesión, actualizar componentes, configurar Outlook y revisar errores de activación o compatibilidad.",
    },
    {
      q: "¿Pueden instalar AutoCAD u otros programas de diseño?",
      a: "Sí. Primero revisamos versión de Windows o macOS, espacio disponible, memoria RAM, tarjeta gráfica y requisitos del programa para evitar instalaciones incompatibles.",
    },
    {
      q: "¿Pueden configurar programas en una computadora nueva?",
      a: "Sí. Podemos preparar un equipo nuevo con las aplicaciones de trabajo, correo, navegadores, herramientas PDF, videollamadas, impresoras y ajustes básicos.",
    },
  ],
  en: [
    {
      q: "What programs can you install and configure?",
      a: "We can help with Soft Restaurant 10, Microsoft Office and Microsoft 365, AutoCAD, SketchUp, Adobe Acrobat, browsers, email, video meetings, printers, administrative tools and other Windows or macOS applications.",
    },
    {
      q: "Is this service remote only?",
      a: "Yes. Software installation is provided exclusively through a remote connection. The computer must power on, connect to the internet and allow temporary access during the session.",
    },
    {
      q: "Can you configure Soft Restaurant 10?",
      a: "Yes. We can assist with installation, updates, requirement checks, basic printer connection and initial settings. Advanced operating configuration depends on the business infrastructure and needs.",
    },
    {
      q: "Do you install Office or Microsoft 365?",
      a: "Yes. We can install the applications, sign in, update components, configure Outlook and troubleshoot activation or compatibility issues.",
    },
    {
      q: "Can you install AutoCAD or other design programs?",
      a: "Yes. We first review the Windows or macOS version, available storage, RAM, graphics hardware and program requirements to avoid incompatible installations.",
    },
    {
      q: "Can you configure programs on a new computer?",
      a: "Yes. We can prepare a new computer with work applications, email, browsers, PDF tools, video meeting software, printers and essential settings.",
    },
  ],
} as const;

export function SoftwareInstallationPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const diagnosis = diagnosisHref(locale, "software-page", "software-installation");
  const servicesPath = isES ? "/servicios" : "/en/services";
  const message = isES
    ? "Hola San Miguel Tech, necesito instalar o configurar un programa de forma remota."
    : "Hi San Miguel Tech, I need a program installed or configured remotely.";
  const faq = SOFTWARE_FAQ[locale];

  const softwareGroups = isES
    ? [
        {
          title: "Restaurantes y administración",
          description: "Programas de operación y gestión para negocios.",
          items: ["Soft Restaurant 10", "Herramientas administrativas", "Sistemas de facturación", "Impresoras de tickets", "Aplicaciones de inventario"],
        },
        {
          title: "Oficina y productividad",
          description: "Aplicaciones para trabajo, documentos y comunicación.",
          items: ["Microsoft Office", "Microsoft 365", "Outlook", "Teams y Zoom", "Adobe Acrobat y PDF"],
        },
        {
          title: "Diseño y arquitectura",
          description: "Instalación y revisión de compatibilidad para software especializado.",
          items: ["AutoCAD", "SketchUp", "Adobe Creative Cloud", "CorelDRAW", "Herramientas de render y edición"],
        },
        {
          title: "Sistema y conectividad",
          description: "Programas esenciales para que el equipo trabaje correctamente.",
          items: ["Drivers y controladores", "Impresoras y escáneres", "Navegadores", "Correo electrónico", "Utilidades y respaldos"],
        },
      ]
    : [
        {
          title: "Restaurants and management",
          description: "Business operation and management applications.",
          items: ["Soft Restaurant 10", "Administrative tools", "Invoicing systems", "Receipt printers", "Inventory applications"],
        },
        {
          title: "Office and productivity",
          description: "Applications for documents, work and communication.",
          items: ["Microsoft Office", "Microsoft 365", "Outlook", "Teams and Zoom", "Adobe Acrobat and PDF"],
        },
        {
          title: "Design and architecture",
          description: "Installation and compatibility review for specialized software.",
          items: ["AutoCAD", "SketchUp", "Adobe Creative Cloud", "CorelDRAW", "Rendering and editing tools"],
        },
        {
          title: "System and connectivity",
          description: "Essential applications and components for a reliable setup.",
          items: ["Drivers", "Printers and scanners", "Browsers", "Email", "Utilities and backups"],
        },
      ];

  const process = isES
    ? [
        ["1", "Cuéntanos qué programa necesitas", "Envía el nombre, versión y uso que tendrá."],
        ["2", "Revisamos compatibilidad", "Validamos sistema, espacio, memoria y requisitos."],
        ["3", "Conectamos de forma remota", "Tú autorizas el acceso temporal desde tu equipo."],
        ["4", "Instalamos y comprobamos", "Abrimos el programa, revisamos errores y dejamos la configuración lista."],
      ]
    : [
        ["1", "Tell us what program you need", "Send the program name, version and intended use."],
        ["2", "We check compatibility", "We review the system, storage, memory and requirements."],
        ["3", "We connect remotely", "You authorize temporary access from your computer."],
        ["4", "We install and verify", "We open the program, check errors and leave the setup ready."],
      ];

  return (
    <>
      <section className="overflow-hidden border-b border-black/[0.06] bg-white">
        <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
              {isES ? "SERVICIO REMOTO PARA WINDOWS Y MAC" : "REMOTE SERVICE FOR WINDOWS AND MAC"}
            </div>
            <h1 className="max-w-3xl text-[42px] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
              {isES ? "Instalación de programas, sin trasladar tu equipo." : "Software installation, without moving your computer."}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {isES
                ? "Instalamos, actualizamos y configuramos programas como Soft Restaurant 10, Office, AutoCAD y otras herramientas mediante soporte remoto en San Miguel de Allende."
                : "We install, update and configure programs such as Soft Restaurant 10, Office, AutoCAD and other tools through remote support in San Miguel de Allende."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={diagnosis} className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-white shadow-sm">
                {isES ? "Solicitar instalación remota" : "Request remote installation"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href={whatsappPath(message)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full border border-black/[0.09] bg-white px-6 text-sm font-medium">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="apple-card relative overflow-hidden bg-[#f5f5f7] p-7 sm:p-10">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand/10 blur-3xl" />
            <MonitorSmartphone className="relative h-11 w-11 text-brand" />
            <h2 className="relative mt-6 text-3xl font-semibold">
              {isES ? "Exclusivamente remoto" : "Remote only"}
            </h2>
            <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
              {isES
                ? "No necesitas llevar la computadora. Durante la sesión puedes ver todo lo que hacemos y finalizar el acceso cuando quieras."
                : "You do not need to bring the computer in. During the session you can see everything we do and end access whenever you choose."}
            </p>
            <div className="relative mt-6 grid gap-3 text-sm">
              {[isES ? "Equipo encendido" : "Computer powered on", isES ? "Internet estable" : "Stable internet", isES ? "Acceso autorizado por ti" : "Access authorized by you"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow={isES ? "PROGRAMAS" : "PROGRAMS"}
        title={isES ? "Aplicaciones que podemos instalar y configurar" : "Applications we can install and configure"}
        lede={isES ? "Estas son algunas de las solicitudes más comunes. También podemos revisar otros programas según tu equipo y necesidades." : "These are some of the most common requests. We can also review other programs based on your computer and needs."}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {softwareGroups.map((group, index) => {
            const Icon = [Settings2, Cloud, Download, Laptop][index] ?? Download;
            return (
              <article key={group.title} className="apple-card p-6 sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold">{group.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-[#f5f5f7] px-3 py-2 text-sm text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="soft" eyebrow={isES ? "PROCESO" : "PROCESS"} title={isES ? "Cómo funciona la instalación remota" : "How remote installation works"}>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, text]) => (
            <li key={number} className="apple-card p-6">
              <div className="text-sm font-semibold text-brand">0{number}</div>
              <h2 className="mt-3 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="FAQ" title={isES ? "Preguntas sobre instalación de programas" : "Software installation questions"}>
        <div className="grid gap-3 md:grid-cols-2">
          {faq.map((item) => (
            <details key={item.q} className="apple-card group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-foreground">
                {item.q}
                <span className="text-xl leading-none text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {isES ? "Dinos qué programa necesitas." : "Tell us what program you need."}
            </h2>
            <p className="mt-3 max-w-xl text-graphite-foreground/70">
              {isES ? "Envíanos el nombre del programa y los datos de tu computadora para revisar el servicio remoto." : "Send us the program name and your computer details so we can review the remote service."}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={diagnosis} className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-graphite">
              {isES ? "Solicitar diagnóstico" : "Request a diagnosis"}
            </a>
            <a href={servicesPath} className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white">
              {isES ? "Ver todos los servicios" : "View all services"}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
