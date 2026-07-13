import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Laptop,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SITE, whatsappPath } from "@/lib/site";
import type { Locale } from "@/i18n/dict";

export function ContactPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const msg = isES
    ? "Hola San Miguel Tech, necesito ayuda con un equipo."
    : "Hi San Miguel Tech, I need help with a device.";
  const diagnosisPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const servicesPath = isES ? "/servicios" : "/en/services";

  const preparation = isES
    ? [
        "Marca y modelo del equipo o dispositivo",
        "Descripción breve del problema y cuándo comenzó",
        "Fotografía o captura del error, cuando sea posible",
        "Indicar si el equipo enciende y si contiene información importante",
        "Modalidad preferida: remota, a domicilio o revisión física",
      ]
    : [
        "Device brand and model",
        "A brief description of the problem and when it started",
        "A photo or screenshot of the error, when possible",
        "Whether the device powers on and contains important data",
        "Preferred service mode: remote, on-site or physical inspection",
      ];

  const nextSteps = isES
    ? [
        "Revisamos la información inicial.",
        "Confirmamos si el caso puede atenderse de forma remota o requiere revisión presencial.",
        "Te explicamos disponibilidad, costo de diagnóstico cuando aplique y siguientes pasos.",
        "No se realizan cambios sin tu autorización.",
      ]
    : [
        "We review the initial information.",
        "We confirm whether the case can be handled remotely or needs an in-person inspection.",
        "We explain availability, any applicable diagnosis fee and the next steps.",
        "No changes are made without your authorization.",
      ];

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-14">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "CONTACTO" : "CONTACT"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES
              ? "Cuéntanos qué necesitas resolver"
              : "Tell us what you need to solve"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? "La forma más rápida de iniciar es por WhatsApp. También puedes completar la solicitud de diagnóstico para enviar desde el principio los datos del equipo, el problema y la modalidad que prefieres."
              : "The fastest way to get started is through WhatsApp. You can also complete the diagnosis request to send your device details, problem description and preferred service mode from the beginning."}
          </p>
        </div>
      </section>

      <Section
        eyebrow={isES ? "OPCIONES DE CONTACTO" : "CONTACT OPTIONS"}
        title={isES ? "Elige la forma más cómoda para empezar" : "Choose the easiest way to get started"}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <a href={whatsappPath(msg)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 hover:shadow-sm transition">
            <MessageCircle className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">WhatsApp</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {isES
                ? "Ideal para explicar rápidamente el problema, enviar fotografías y consultar disponibilidad."
                : "Ideal for quickly explaining the problem, sending photos and checking availability."}
            </p>
          </a>

          <Link to={diagnosisPath} className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 hover:shadow-sm transition">
            <Wrench className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">
              {isES ? "Solicitud de diagnóstico" : "Diagnosis request"}
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {isES
                ? "La mejor opción para enviar información completa y recibir una evaluación inicial más ordenada."
                : "The best option for sending complete information and receiving a more organized initial evaluation."}
            </p>
          </Link>

          <Link to={servicesPath} className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 hover:shadow-sm transition">
            <Laptop className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">
              {isES ? "Consultar servicios" : "Review services"}
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {isES
                ? "Revisa soporte Apple y Windows, instalación de programas, upgrades, Wi-Fi y tecnología para negocios."
                : "Review Apple and Windows support, software installation, upgrades, Wi-Fi and business technology services."}
            </p>
          </Link>

          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-brand" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">{SITE.serviceArea}</h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {isES
                ? "Atención remota, revisión física y visitas programadas a domicilio según el tipo de problema y la zona."
                : "Remote assistance, physical inspection and scheduled on-site visits depending on the problem and service area."}
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="soft"
        eyebrow={isES ? "ANTES DE ESCRIBIR" : "BEFORE YOU MESSAGE"}
        title={isES ? "Estos datos nos ayudan a orientarte mejor" : "These details help us guide you more effectively"}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <ul className="grid gap-3">
            {preparation.map((item) => (
              <li key={item} className="rounded-xl border border-border bg-card p-4 text-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl border border-brand/30 bg-brand-soft/40 p-6">
            <ShieldCheck className="h-7 w-7 text-brand" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">
              {isES ? "Protege tus datos" : "Protect your information"}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {isES
                ? "No envíes contraseñas, códigos de verificación, datos bancarios ni información sensible por WhatsApp o por el formulario. Si durante el servicio se necesita iniciar sesión, se coordina de forma segura y con tu consentimiento."
                : "Do not send passwords, verification codes, banking details or sensitive information through WhatsApp or the form. If a login is needed during service, it is coordinated securely and with your consent."}
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={isES ? "QUÉ SIGUE" : "WHAT HAPPENS NEXT"}
        title={isES ? "Un proceso claro desde el primer mensaje" : "A clear process from the first message"}
      >
        <ol className="grid gap-4 md:grid-cols-4">
          {nextSteps.map((item, index) => (
            <li key={item} className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm font-medium text-brand">0{index + 1}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-xs text-muted-foreground max-w-3xl leading-relaxed">
          {isES
            ? "Para proteger la privacidad, el número y el correo administrativo no se publican como texto en el sitio. Los botones de WhatsApp utilizan una redirección segura del servidor."
            : "To protect privacy, the administrative phone number and email address are not displayed as text on the website. WhatsApp buttons use a secure server-side redirect."}
        </p>
      </Section>
    </>
  );
}
