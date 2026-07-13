import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Laptop,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { whatsappPath } from "@/lib/site";

export const SOFTWARE_FAQ = {
  es: [
    {
      q: "¿Qué programas pueden instalar?",
      a: "Podemos instalar y configurar programas legítimos para productividad, videollamadas, navegación, seguridad, diseño, edición, impresión y trabajo administrativo, siempre que sean compatibles con el equipo.",
    },
    {
      q: "¿Instalan Microsoft Office o Microsoft 365?",
      a: "Sí. Se instala y configura con una licencia válida del cliente o una suscripción oficial. También podemos ayudar con inicio de sesión, actualizaciones y configuración básica.",
    },
    {
      q: "¿La instalación puede hacerse de forma remota?",
      a: "Sí, cuando el equipo enciende, tiene conexión estable y el problema no requiere intervención física. La conexión remota se realiza con autorización del cliente y se cierra al terminar.",
    },
    {
      q: "¿Instalan programas en Mac y Windows?",
      a: "Sí. Revisamos versión del sistema, espacio disponible, memoria, permisos y compatibilidad antes de instalar software en macOS o Windows.",
    },
    {
      q: "¿Instalan programas pirateados o activadores?",
      a: "No. Trabajamos únicamente con software legítimo, licencias válidas, versiones gratuitas oficiales o programas de código abierto.",
    },
    {
      q: "¿Pueden configurar programas en una computadora nueva?",
      a: "Sí. Podemos instalar las aplicaciones necesarias, configurar correo, impresoras, navegadores, respaldos y migrar archivos desde el equipo anterior.",
    },
  ],
  en: [
    {
      q: "What software can you install?",
      a: "We install and configure legitimate productivity, video meeting, browser, security, design, editing, printing and business software, provided it is compatible with the device.",
    },
    {
      q: "Do you install Microsoft Office or Microsoft 365?",
      a: "Yes. We install and configure it using the client's valid license or official subscription, and can help with sign-in, updates and basic setup.",
    },
    {
      q: "Can software be installed remotely?",
      a: "Yes, when the computer turns on, has a stable connection and does not need physical work. Remote access requires your permission and is closed when the session ends.",
    },
    {
      q: "Do you install software on Mac and Windows?",
      a: "Yes. We check system version, available storage, memory, permissions and compatibility before installing software on macOS or Windows.",
    },
    {
      q: "Do you install pirated software or activators?",
      a: "No. We only work with legitimate software, valid licenses, official free versions or open-source programs.",
    },
    {
      q: "Can you configure software on a new computer?",
      a: "Yes. We can install the applications you need, configure email, printers, browsers and backups, and migrate files from the previous computer.",
    },
  ],
} as const;

export function SoftwareInstallationPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const diagnosisPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const servicesPath = isES ? "/servicios" : "/en/services";
  const message = isES
    ? "Hola San Miguel Tech, necesito instalar o configurar programas en mi computadora."
    : "Hi San Miguel Tech, I need software installed or configured on my computer.";
  const faq = SOFTWARE_FAQ[locale];

  const softwareGroups = isES
    ? [
        {
          title: "Trabajo y productividad",
          items: ["Microsoft 365 y Office", "Zoom y Microsoft Teams", "Correo electrónico", "Navegadores", "Lectores y herramientas PDF"],
        },
        {
          title: "Diseño, edición y administración",
          items: ["Programas de diseño y fotografía", "Edición de audio y video", "Herramientas contables y administrativas", "Aplicaciones para negocios"],
        },
        {
          title: "Sistema y periféricos",
          items: ["Drivers y controladores", "Impresoras y escáneres", "Antivirus y seguridad", "Actualizaciones", "Utilidades y respaldos"],
        },
      ]
    : [
        {
          title: "Work and productivity",
          items: ["Microsoft 365 and Office", "Zoom and Microsoft Teams", "Email", "Web browsers", "PDF readers and tools"],
        },
        {
          title: "Design, editing and management",
          items: ["Design and photography software", "Audio and video editing", "Accounting and management tools", "Business applications"],
        },
        {
          title: "System and peripherals",
          items: ["Drivers", "Printers and scanners", "Antivirus and security", "Updates", "Utilities and backups"],
        },
      ];

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
              {isES ? "SOFTWARE PARA WINDOWS Y MAC" : "SOFTWARE FOR WINDOWS AND MAC"}
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
              {isES
                ? "Instalación de programas en San Miguel de Allende"
                : "Software installation in San Miguel de Allende"}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              {isES
                ? "Instalación, actualización y configuración de programas para computadoras Windows y Mac. Servicio remoto, presencial y a domicilio en San Miguel de Allende."
                : "Installation, updates and configuration of programs for Windows computers and Macs. Remote, in-shop and on-site service in San Miguel de Allende."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={diagnosisPath} className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-brand text-brand-foreground text-sm font-medium">
                {isES ? "Solicitar instalación" : "Request installation"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href={whatsappPath(message)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-border text-sm font-medium hover:bg-accent/50 transition">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-7">
            <Download className="h-9 w-9 text-brand" />
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">
              {isES ? "Instalación segura y compatible" : "Safe, compatible installation"}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {isES
                ? "Antes de instalar revisamos el sistema operativo, espacio disponible, memoria, permisos, licencia y requisitos del programa para evitar errores o compras innecesarias."
                : "Before installing, we check the operating system, available storage, memory, permissions, license and program requirements to avoid errors or unnecessary purchases."}
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm">
              <ShieldCheck className="h-5 w-5 text-brand shrink-0" />
              <span>{isES ? "Solo software legítimo y fuentes oficiales." : "Legitimate software and official sources only."}</span>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow={isES ? "PROGRAMAS" : "PROGRAMS"}
        title={isES ? "¿Qué podemos instalar y configurar?" : "What can we install and configure?"}
        lede={isES ? "La disponibilidad depende de la compatibilidad del equipo y de contar con una licencia válida cuando el programa la requiere." : "Availability depends on device compatibility and a valid license when the program requires one."}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {softwareGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-card p-6">
              <Laptop className="h-6 w-6 text-brand" />
              <h2 className="mt-4 text-lg font-semibold tracking-tight">{group.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow={isES ? "MODALIDADES" : "SERVICE OPTIONS"}
        title={isES ? "Instalación remota o presencial" : "Remote or on-site installation"}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Laptop,
              title: isES ? "Soporte remoto" : "Remote support",
              text: isES ? "Ideal para instalar, actualizar o configurar programas sin trasladar el equipo." : "Ideal for installing, updating or configuring software without moving the computer.",
            },
            {
              icon: Wrench,
              title: isES ? "Revisión presencial" : "In-shop service",
              text: isES ? "Para equipos lentos, con errores, poco espacio o problemas que requieren diagnóstico previo." : "For slow computers, errors, low storage or problems that need diagnosis first.",
            },
            {
              icon: ShieldCheck,
              title: isES ? "Configuración completa" : "Complete setup",
              text: isES ? "Programas, correo, impresora, navegador, respaldos y ajustes básicos en un equipo nuevo." : "Programs, email, printer, browser, backups and basic settings on a new computer.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-brand" />
              <h2 className="mt-4 text-lg font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title={isES ? "Preguntas sobre instalación de programas" : "Software installation questions"}>
        <div className="grid gap-3 md:grid-cols-2">
          {faq.map((item) => (
            <details key={item.q} className="rounded-xl border border-border bg-card p-5">
              <summary className="cursor-pointer font-medium text-foreground">{item.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {isES ? "¿Qué programa necesitas instalar?" : "What software do you need installed?"}
            </h2>
            <p className="mt-2 text-graphite-foreground/70 max-w-xl">
              {isES ? "Envíanos el nombre del programa y el modelo de tu computadora para revisar compatibilidad." : "Send us the program name and computer model so we can check compatibility."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to={diagnosisPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-soft text-graphite text-sm font-medium">
              {isES ? "Solicitar diagnóstico" : "Request a diagnosis"}
            </Link>
            <Link to={servicesPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-white/20 text-graphite-foreground text-sm font-medium">
              {isES ? "Ver todos los servicios" : "View all services"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
