import { Link } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  Languages,
  Laptop,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { whatsappPath } from "@/lib/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const diagnosisPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const servicesPath = isES ? "/servicios" : "/en/services";
  const whatsappMessage = isES
    ? "Hola San Miguel Tech, quiero saber si pueden ayudarme con un problema tecnológico."
    : "Hi San Miguel Tech, I'd like to know if you can help with a technology problem.";

  const audiences = isES
    ? [
        {
          icon: UserRound,
          title: "Residentes y familias",
          text: "Ayuda con computadoras, teléfonos, impresoras, Wi-Fi, cuentas, respaldos y equipos nuevos, sin explicaciones innecesariamente complicadas.",
        },
        {
          icon: Languages,
          title: "Clientes en español e inglés",
          text: "Atención bilingüe para residentes mexicanos, extranjeros, visitantes y personas que administran asuntos a distancia.",
        },
        {
          icon: Building2,
          title: "Negocios y propiedades",
          text: "Soporte para oficinas, hoteles, rentas vacacionales, restaurantes, galerías, estudios y administradores de propiedades.",
        },
      ]
    : [
        {
          icon: UserRound,
          title: "Residents and families",
          text: "Help with computers, phones, printers, Wi-Fi, accounts, backups and new devices, without unnecessarily complicated explanations.",
        },
        {
          icon: Languages,
          title: "Service in English and Spanish",
          text: "Bilingual support for Mexican residents, expats, visitors and people managing local matters from abroad.",
        },
        {
          icon: Building2,
          title: "Businesses and properties",
          text: "Support for offices, hotels, vacation rentals, restaurants, galleries, studios and property managers.",
        },
      ];

  const principles = isES
    ? [
        "Primero entendemos el problema y el contexto en el que ocurre.",
        "Explicamos las opciones, riesgos, compatibilidad y costos antes de realizar cambios.",
        "Solo avanzamos con autorización del cliente.",
        "Probamos el resultado y explicamos qué se hizo al finalizar.",
        "Protegemos la privacidad y evitamos solicitar contraseñas sensibles por formularios o mensajes.",
      ]
    : [
        "We first understand the problem and the context in which it occurs.",
        "We explain options, risks, compatibility and costs before making changes.",
        "We only proceed with the client's authorization.",
        "We test the result and explain the work completed at the end.",
        "We protect privacy and avoid requesting sensitive passwords through forms or messages.",
      ];

  const capabilities = isES
    ? [
        "Diagnóstico y optimización de computadoras Windows y equipos Apple",
        "Instalación y configuración de programas legítimos",
        "Upgrades de SSD, memoria RAM y almacenamiento compatible",
        "Configuración de Wi-Fi, routers, impresoras y dispositivos del hogar",
        "Soporte remoto para errores, cuentas, correo y aplicaciones",
        "Tecnología para negocios, hoteles y rentas vacacionales",
      ]
    : [
        "Diagnosis and optimization for Windows computers and Apple devices",
        "Installation and configuration of legitimate software",
        "Compatible SSD, RAM and storage upgrades",
        "Wi-Fi, router, printer and home-device setup",
        "Remote support for errors, accounts, email and applications",
        "Technology support for businesses, hotels and vacation rentals",
      ];

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-14">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "SOBRE SAN MIGUEL TECH" : "ABOUT SAN MIGUEL TECH"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES
              ? "Soporte técnico local, claro y pensado para la vida real"
              : "Clear, local tech support designed for real life"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? "San Miguel Tech ofrece asistencia tecnológica independiente en San Miguel de Allende para personas, familias y negocios que necesitan resolver problemas sin perder tiempo ni sentirse confundidos por la tecnología."
              : "San Miguel Tech provides independent technology assistance in San Miguel de Allende for people, families and businesses that need problems solved without wasting time or feeling overwhelmed by technology."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={diagnosisPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium">
              {isES ? "Solicitar diagnóstico" : "Request a diagnosis"}
            </Link>
            <a href={whatsappPath(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-sm font-medium hover:bg-accent/50 transition">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Section
        eyebrow={isES ? "A QUIÉN AYUDAMOS" : "WHO WE HELP"}
        title={isES ? "Tecnología para residentes, visitantes y negocios" : "Technology support for residents, visitors and businesses"}
        lede={isES
          ? "Cada cliente tiene un nivel de experiencia distinto. Adaptamos la explicación y el servicio a lo que realmente necesitas."
          : "Every client has a different level of experience. We adapt the explanation and service to what you actually need."}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-brand" />
              <h2 className="mt-4 text-lg font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow={isES ? "CÓMO TRABAJAMOS" : "HOW WE WORK"}
        title={isES ? "Primero entendemos; después proponemos" : "We understand first, then propose a solution"}
        lede={isES
          ? "No aplicamos cambios a ciegas. Buscamos que conozcas qué ocurre, qué opciones existen y qué resultado puedes esperar."
          : "We do not make blind changes. We want you to understand what is happening, what options exist and what result you can expect."}
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ul className="grid gap-3">
            {principles.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-card p-4 text-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-brand/30 bg-brand-soft/40 p-6">
            <ShieldCheck className="h-7 w-7 text-brand" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">
              {isES ? "Servicio independiente y transparente" : "Independent, transparent service"}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {isES
                ? "San Miguel Tech no está afiliado a Apple ni a otros fabricantes y no se presenta como centro autorizado. Cuando un caso requiere un proveedor, fabricante o laboratorio especializado, se explica con claridad."
                : "San Miguel Tech is not affiliated with Apple or other manufacturers and does not claim to be an authorized service provider. When a case requires a manufacturer, specialist laboratory or another provider, we explain that clearly."}
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={isES ? "QUÉ RESOLVEMOS" : "WHAT WE SOLVE"}
        title={isES ? "Un punto de contacto para distintas necesidades tecnológicas" : "One point of contact for different technology needs"}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item} className="rounded-xl border border-border bg-card p-5 text-sm flex items-start gap-3">
              <Laptop className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to={servicesPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border text-sm font-medium hover:bg-accent/50 transition">
            {isES ? "Ver todos los servicios" : "View all services"}
          </Link>
        </div>
      </Section>
    </>
  );
}
