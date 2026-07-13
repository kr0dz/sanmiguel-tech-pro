import { MapPin, MessageCircle, Wrench, Laptop } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SITE, diagnosisHref, whatsappPath } from "@/lib/site";
import type { Locale } from "@/i18n/dict";

export function ContactPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const msg = isES
    ? "Hola San Miguel Tech, necesito ayuda con un equipo."
    : "Hi San Miguel Tech, I need help with a device.";
  const servicesPath = isES ? "/servicios" : "/en/services";

  return (
    <Section
      eyebrow={isES ? "CONTACTO" : "CONTACT"}
      title={isES ? "Cuéntanos qué necesitas resolver" : "Tell us what you need to solve"}
      lede={isES
        ? "Puedes iniciar la conversación por WhatsApp o enviar una solicitud con los datos del equipo."
        : "Start the conversation on WhatsApp or submit a request with your device details."}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <a href={whatsappPath(msg)} target="_blank" rel="noopener noreferrer" className="apple-card group p-7 transition hover:-translate-y-1">
          <MessageCircle className="h-6 w-6 text-brand" />
          <div className="mt-5 text-xl font-semibold">WhatsApp</div>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{isES ? "Contacto rápido y directo para explicar tu caso." : "Fast, direct contact to explain your situation."}</div>
        </a>

        <a href={diagnosisHref(locale, "contact-page", "general")} className="apple-card group p-7 transition hover:-translate-y-1">
          <Wrench className="h-6 w-6 text-brand" />
          <div className="mt-5 text-xl font-semibold">{isES ? "Solicitar diagnóstico" : "Request a diagnosis"}</div>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{isES ? "Envía modelo, problema, modalidad y nivel de urgencia." : "Send the model, problem, service mode and urgency."}</div>
        </a>

        <a href={servicesPath} className="apple-card group p-7 transition hover:-translate-y-1">
          <Laptop className="h-6 w-6 text-brand" />
          <div className="mt-5 text-xl font-semibold">{isES ? "Explorar servicios" : "Explore services"}</div>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{isES ? "Apple, Windows, upgrades, programas, Wi-Fi y negocios." : "Apple, Windows, upgrades, software, Wi-Fi and business."}</div>
        </a>

        <div className="apple-card p-7">
          <MapPin className="h-6 w-6 text-brand" />
          <div className="mt-5 text-xl font-semibold">{SITE.serviceArea}</div>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{isES ? "Atención remota, revisión física y visitas programadas según el servicio." : "Remote support, in-shop inspection and scheduled visits depending on the service."}</div>
        </div>
      </div>

      <div className="mt-8 rounded-[24px] bg-[#f5f5f7] p-6 text-sm leading-relaxed text-muted-foreground">
        {isES
          ? "Para obtener una respuesta más útil, incluye el modelo del equipo, sistema operativo, síntomas, cuándo comenzó el problema y si contiene información importante."
          : "For a more useful response, include the device model, operating system, symptoms, when the issue began and whether it contains important data."}
      </div>
    </Section>
  );
}
