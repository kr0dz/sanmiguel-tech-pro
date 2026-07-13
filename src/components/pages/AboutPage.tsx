import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { CheckCircle2 } from "lucide-react";

export function AboutPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const values = isES
    ? [
        "Diagnóstico claro antes de cualquier cambio",
        "Comunicación directa en español e inglés",
        "Trato honesto y sin tecnicismos innecesarios",
        "Respeto por la información y la privacidad del cliente",
      ]
    : [
        "Clear diagnosis before any change",
        "Direct communication in English and Spanish",
        "Honest, jargon-free service",
        "Respect for client data and privacy",
      ];
  return (
    <Section eyebrow={isES ? "NOSOTROS" : "ABOUT"} title={isES ? "Un técnico local, cercano y confiable" : "A local, close, trustworthy technician"} lede={isES ? "San Miguel Tech nace para ofrecer soporte tecnológico serio en San Miguel de Allende: para residentes, familias, extranjeros y negocios que necesitan que la tecnología funcione." : "San Miguel Tech was created to provide serious tech support in San Miguel de Allende: for residents, families, expats and businesses that need technology to just work."}>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-medium">{isES ? "Cómo trabajamos" : "How we work"}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" /> {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            {isES
              ? "Ofrecemos servicio remoto, visitas a domicilio y revisión física en taller. Somos un servicio técnico independiente: no somos un centro autorizado por Apple, aunque contamos con experiencia trabajando con equipos Apple."
              : "We offer remote support, on-site visits and in-shop service. We are an independent tech service — not an Apple Authorized Service Provider — although we have solid experience working with Apple devices."}
          </p>
        </div>
      </div>
    </Section>
  );
}