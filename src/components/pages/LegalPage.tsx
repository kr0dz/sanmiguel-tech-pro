import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { SITE } from "@/lib/site";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  return (
    <Section eyebrow="LEGAL" title={isES ? "Aviso de privacidad" : "Privacy policy"}>
      <div className="prose prose-sm max-w-3xl text-muted-foreground leading-relaxed space-y-4">
        <p>{isES
          ? `En ${SITE.name} tratamos con seriedad la información personal que compartes al solicitar un servicio. Los datos recabados (nombre, WhatsApp, correo, información del equipo, descripción del problema y fotografías) se utilizan exclusivamente para brindar el diagnóstico y el servicio técnico solicitado.`
          : `At ${SITE.name} we take seriously the personal information you share when requesting a service. The data collected (name, WhatsApp, email, device information, problem description and photographs) is used exclusively to provide the diagnosis and technical service you request.`}</p>
        <p>{isES
          ? "No compartimos ni vendemos tus datos a terceros. Puedes solicitar en cualquier momento la eliminación de tu información escribiéndonos al correo de contacto."
          : "We do not share or sell your data to third parties. You may request deletion of your information at any time by writing to our contact email."}</p>
        <p>{isES
          ? "Los accesos remotos se realizan únicamente con tu consentimiento explícito y se terminan al finalizar la sesión. No solicitamos contraseñas sensibles a través del formulario."
          : "Remote access is performed only with your explicit consent and is terminated at the end of the session. We do not request sensitive passwords through the form."}</p>
        <p className="text-xs">{isES ? "Documento editable por el propietario del sitio." : "Editable by the site owner."}</p>
      </div>
    </Section>
  );
}

export function TermsPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const items = isES
    ? [
        "No se realiza ningún cambio sin autorización previa del cliente.",
        "Los precios se confirman después de evaluar el equipo.",
        "La disponibilidad de recuperación de información depende del estado del dispositivo.",
        "Los upgrades están sujetos a compatibilidad verificada previamente.",
        "El diagnóstico se explica antes de comenzar cualquier reparación.",
        "El cliente es responsable de conservar respaldos de su información previa al servicio.",
      ]
    : [
        "No changes are made without prior client authorization.",
        "Prices are confirmed after evaluating the device.",
        "Data recovery feasibility depends on the state of the device.",
        "Upgrades are subject to previously verified compatibility.",
        "The diagnosis is explained before starting any repair.",
        "The client is responsible for keeping backups of their information prior to the service.",
      ];
  return (
    <Section eyebrow="LEGAL" title={isES ? "Términos del servicio" : "Terms of service"}>
      <ul className="max-w-3xl space-y-3 text-muted-foreground text-sm">
        {items.map((i) => <li key={i}>— {i}</li>)}
      </ul>
    </Section>
  );
}