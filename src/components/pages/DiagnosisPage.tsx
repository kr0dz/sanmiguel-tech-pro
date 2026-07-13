import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { DiagnosisForm } from "@/components/DiagnosisForm";
import { ShieldCheck, MessageSquare, Clock } from "lucide-react";

export function DiagnosisPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-10">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "SOLICITAR DIAGNÓSTICO" : "REQUEST A DIAGNOSIS"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            {isES ? "Cuéntanos qué está pasando con tu equipo" : "Tell us what's happening with your device"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isES
              ? "Toma dos minutos. Con esta información podemos darte una evaluación inicial y confirmar los siguientes pasos."
              : "It only takes two minutes. With this information we can give you an initial evaluation and confirm the next steps."}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <DiagnosisForm locale={locale} />
          <aside className="space-y-4 self-start lg:sticky lg:top-24">
            {[
              { icon: ShieldCheck, t: isES ? "Sin cambios sin autorización" : "No changes without authorization", d: isES ? "Nunca hacemos modificaciones al equipo sin explicarte primero qué necesita." : "We never modify your device without explaining what it needs first." },
              { icon: MessageSquare, t: isES ? "Respuesta en español o inglés" : "Reply in English or Spanish", d: isES ? "Escríbenos en el idioma que prefieras." : "Write us in the language you prefer." },
              { icon: Clock, t: isES ? "Diagnóstico claro" : "Clear diagnosis", d: isES ? "Recibirás una evaluación inicial con los siguientes pasos posibles." : "You'll get an initial evaluation with the possible next steps." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-brand" />
                <div className="mt-3 text-sm font-medium">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}