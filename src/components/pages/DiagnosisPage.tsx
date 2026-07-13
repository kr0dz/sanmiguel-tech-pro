import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { DiagnosisForm } from "@/components/DiagnosisForm";
import { CheckCircle2, Clock, FileText, MessageSquare, ShieldCheck } from "lucide-react";

export function DiagnosisPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const usefulDetails = isES
    ? ["Marca y modelo del equipo", "Sistema operativo, si lo conoces", "Qué ocurrió y desde cuándo", "Mensaje de error o captura", "Si enciende y contiene información importante", "Modalidad preferida y colonia cuando aplica"]
    : ["Device brand and model", "Operating system, if known", "What happened and when it started", "Error message or screenshot", "Whether it powers on and contains important data", "Preferred service mode and neighborhood when applicable"];
  const afterSubmitting = isES
    ? ["Recibirás un folio para identificar el caso.", "Revisaremos la modalidad adecuada.", "Confirmaremos disponibilidad y siguientes pasos.", "No se realizan cambios sin autorización."]
    : ["You will receive a request number.", "We will review the appropriate service mode.", "We will confirm availability and next steps.", "No changes are made without authorization."];

  return (
    <>
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            {isES ? "SOLICITAR DIAGNÓSTICO" : "REQUEST A DIAGNOSIS"}
          </div>
          <h1 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            {isES ? "Cuéntanos qué está pasando." : "Tell us what is happening."}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {isES
              ? "El formulario toma cerca de dos minutos y conserva la etiqueta del servicio desde el que llegaste para preparar una evaluación más precisa."
              : "The form takes about two minutes and keeps the service tag you came from so we can prepare a more precise initial assessment."}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-20">
        <div className="container-page grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <DiagnosisForm locale={locale} />
          <aside className="space-y-4 self-start lg:sticky lg:top-24">
            <div className="apple-card p-6">
              <FileText className="h-5 w-5 text-brand" />
              <h2 className="mt-4 text-lg font-semibold">{isES ? "Información que ayuda" : "Helpful information"}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {usefulDetails.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {[
              { icon: ShieldCheck, title: isES ? "Privacidad desde el inicio" : "Privacy from the start", text: isES ? "No escribas contraseñas, códigos de verificación ni datos bancarios." : "Do not enter passwords, verification codes or banking details." },
              { icon: MessageSquare, title: isES ? "Español o inglés" : "English or Spanish", text: isES ? "Selecciona el idioma en el que prefieres recibir la respuesta." : "Choose the language in which you prefer to receive a reply." },
              { icon: Clock, title: isES ? "Tiempos realistas" : "Realistic timing", text: isES ? "La disponibilidad depende del problema, las pruebas y las piezas necesarias." : "Availability depends on the problem, required testing and parts." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="apple-card p-5">
                <Icon className="h-5 w-5 text-brand" />
                <h2 className="mt-3 text-sm font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <Section tone="soft" eyebrow={isES ? "DESPUÉS DE ENVIAR" : "AFTER SUBMITTING"} title={isES ? "Qué sucede con tu solicitud" : "What happens with your request"}>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {afterSubmitting.map((item, index) => (
            <li key={item} className="apple-card p-6">
              <div className="text-sm font-semibold text-brand">0{index + 1}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
