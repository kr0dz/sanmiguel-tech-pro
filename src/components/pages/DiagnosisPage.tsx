import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { DiagnosisForm } from "@/components/DiagnosisForm";
import {
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export function DiagnosisPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";

  const usefulDetails = isES
    ? [
        "Marca y modelo del equipo",
        "Sistema operativo, si lo conoces",
        "Qué ocurrió y desde cuándo",
        "Mensaje de error, fotografía o captura de pantalla",
        "Si el equipo enciende y si contiene información importante",
        "Modalidad preferida y colonia cuando solicitas visita",
      ]
    : [
        "Device brand and model",
        "Operating system, if known",
        "What happened and when it started",
        "Error message, photo or screenshot",
        "Whether the device powers on and contains important data",
        "Preferred service mode and neighborhood for an on-site request",
      ];

  const afterSubmitting = isES
    ? [
        "Recibirás un número de solicitud para identificar tu caso.",
        "Revisaremos si puede resolverse remotamente o requiere revisión física.",
        "Confirmaremos disponibilidad, costo de diagnóstico cuando aplique y siguientes pasos.",
        "No se realiza ninguna modificación sin explicar y recibir autorización.",
      ]
    : [
        "You will receive a request number to identify your case.",
        "We will review whether it can be solved remotely or needs a physical inspection.",
        "We will confirm availability, any applicable diagnosis fee and the next steps.",
        "No modifications are made without an explanation and authorization.",
      ];

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-12">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "SOLICITAR DIAGNÓSTICO" : "REQUEST A DIAGNOSIS"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES
              ? "Cuéntanos qué está pasando con tu equipo"
              : "Tell us what is happening with your device"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? "El formulario toma aproximadamente dos minutos y nos permite preparar una evaluación inicial más útil. Puedes usarlo para computadoras, equipos Apple, instalación de programas, Wi-Fi, impresoras o tecnología para negocios."
              : "The form takes about two minutes and helps us prepare a more useful initial assessment. Use it for computers, Apple devices, software installation, Wi-Fi, printers or business technology."}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.35fr_0.85fr]">
          <DiagnosisForm locale={locale} />
          <aside className="space-y-4 self-start lg:sticky lg:top-24">
            <div className="rounded-xl border border-border bg-card p-5">
              <FileText className="h-5 w-5 text-brand" />
              <h2 className="mt-3 text-base font-semibold tracking-tight">
                {isES ? "Información que ayuda" : "Helpful information"}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {usefulDetails.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {[
              {
                icon: ShieldCheck,
                title: isES ? "Privacidad desde el inicio" : "Privacy from the start",
                text: isES
                  ? "No escribas contraseñas, códigos de verificación ni datos bancarios. Si se necesita acceso durante el servicio, se coordina contigo de forma segura."
                  : "Do not enter passwords, verification codes or banking details. If access is needed during service, it is coordinated securely with you.",
              },
              {
                icon: MessageSquare,
                title: isES ? "Atención en español o inglés" : "Service in English or Spanish",
                text: isES
                  ? "Selecciona el idioma en el que prefieres recibir la respuesta."
                  : "Choose the language in which you prefer to receive a reply.",
              },
              {
                icon: Clock,
                title: isES ? "Tiempos realistas" : "Realistic timing",
                text: isES
                  ? "La disponibilidad y el tiempo estimado dependen del tipo de problema, las pruebas necesarias y la disponibilidad de piezas."
                  : "Availability and estimated timing depend on the problem, required testing and parts availability.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-brand" />
                <h2 className="mt-3 text-sm font-semibold tracking-tight">{title}</h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <Section
        tone="soft"
        eyebrow={isES ? "DESPUÉS DE ENVIAR" : "AFTER SUBMITTING"}
        title={isES ? "Qué sucede con tu solicitud" : "What happens with your request"}
      >
        <ol className="grid gap-4 md:grid-cols-4">
          {afterSubmitting.map((item, index) => (
            <li key={item} className="rounded-xl border border-border bg-card p-5">
              <div className="text-sm font-medium text-brand">0{index + 1}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
