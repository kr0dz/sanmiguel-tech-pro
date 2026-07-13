import { MapPin, MessageCircle, Wrench, Laptop } from "lucide-react";
import { Link } from "@tanstack/react-router";
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

  return (
    <Section
      eyebrow={isES ? "CONTACTO" : "CONTACT"}
      title={isES ? "Cuéntanos qué necesitas resolver" : "Tell us what you need to solve"}
      lede={isES
        ? "La forma más rápida de contactarnos es WhatsApp. También puedes enviar una solicitud de diagnóstico con los datos de tu equipo."
        : "The fastest way to contact us is WhatsApp. You can also submit a diagnosis request with your device details."}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <a href={whatsappPath(msg)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 transition">
          <MessageCircle className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">WhatsApp</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Contacto rápido y directo" : "Fast, direct contact"}</div>
        </a>

        <Link to={diagnosisPath} className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 transition">
          <Wrench className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">{isES ? "Solicitar diagnóstico" : "Request a diagnosis"}</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Envía modelo, problema y modalidad" : "Send the model, problem and service mode"}</div>
        </Link>

        <Link to={servicesPath} className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 transition">
          <Laptop className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">{isES ? "Ver servicios" : "View services"}</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Apple, Windows, programas, Wi-Fi y negocios" : "Apple, Windows, software, Wi-Fi and business"}</div>
        </Link>

        <div className="rounded-xl border border-border bg-card p-6">
          <MapPin className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">{SITE.serviceArea}</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Atención remota, presencial y a domicilio" : "Remote, in-shop and on-site service"}</div>
        </div>
      </div>

      <p className="mt-6 text-xs text-muted-foreground max-w-2xl">
        {isES
          ? "Por privacidad, el teléfono y el correo administrativo no se publican como texto en el sitio. Puedes iniciar la conversación mediante WhatsApp o el formulario de diagnóstico."
          : "For privacy, the administrative phone number and email address are not displayed as text on the website. Start the conversation through WhatsApp or the diagnosis form."}
      </p>
    </Section>
  );
}
