import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SITE, whatsappUrl } from "@/lib/site";
import type { Locale } from "@/i18n/dict";

export function ContactPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const msg = isES ? "Hola San Miguel Tech" : "Hi San Miguel Tech";
  return (
    <Section eyebrow={isES ? "CONTACTO" : "CONTACT"} title={isES ? "Escríbenos" : "Get in touch"} lede={isES ? "La forma más rápida es WhatsApp. Respondemos en horario de atención." : "The fastest way to reach us is WhatsApp. We reply during business hours."}>
      <div className="grid gap-4 md:grid-cols-2">
        <a href={whatsappUrl(msg)} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 transition">
          <MessageCircle className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">WhatsApp</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Contacto rápido" : "Fast contact"}</div>
        </a>
        <a href={`mailto:${SITE.email}`} className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 transition">
          <Mail className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">{SITE.email}</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Correo electrónico" : "Email"}</div>
        </a>
        <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="rounded-xl border border-border bg-card p-6 hover:border-brand/60 transition">
          <Phone className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">{SITE.phone}</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Teléfono" : "Phone"}</div>
        </a>
        <div className="rounded-xl border border-border bg-card p-6">
          <MapPin className="h-5 w-5 text-brand" />
          <div className="mt-3 text-lg font-medium">{SITE.serviceArea}</div>
          <div className="text-sm text-muted-foreground mt-1">{isES ? "Área de servicio" : "Service area"}</div>
        </div>
      </div>
    </Section>
  );
}