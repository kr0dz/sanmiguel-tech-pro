import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import type { Locale } from "@/i18n/dict";
import { whatsappUrl } from "@/lib/site";
import { AlertCircle, CheckCircle2, Loader2, Tag } from "lucide-react";

const schema = z.object({
  customer_name: z.string().trim().min(2).max(120),
  whatsapp: z.string().trim().min(6).max(40),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  preferred_language: z.enum(["es", "en"]),
  customer_type: z.string().min(2).max(40),
  device_type: z.string().min(2).max(80),
  brand: z.string().max(80).optional(),
  model: z.string().max(120).optional(),
  operating_system: z.string().max(80).optional(),
  issue_description: z.string().min(5).max(4000),
  issue_start: z.string().max(120).optional(),
  powers_on: z.string().max(20).optional(),
  important_data: z.string().max(20).optional(),
  service_mode: z.enum(["remoto", "domicilio", "revision"]),
  neighborhood: z.string().max(120).optional(),
  urgency: z.enum(["baja", "media", "alta"]).optional(),
  preferred_date: z.string().optional(),
  privacy: z.literal(true),
});

type State = "idle" | "submitting" | "error" | "success";
type SourceContext = { source: string; service: string; path: string };

const SOURCE_LABELS: Record<string, { es: string; en: string }> = {
  header: { es: "Menú principal", en: "Main menu" },
  "mobile-bar": { es: "Barra móvil", en: "Mobile bar" },
  "home-hero": { es: "Inicio · portada", en: "Home · hero" },
  "home-problem": { es: "Inicio · problema común", en: "Home · common problem" },
  "home-apple": { es: "Inicio · Apple", en: "Home · Apple" },
  "home-upgrades": { es: "Inicio · upgrades", en: "Home · upgrades" },
  "home-business": { es: "Inicio · negocios", en: "Home · business" },
  "home-footer": { es: "Inicio · llamada final", en: "Home · final call" },
  "services-page": { es: "Página de servicios", en: "Services page" },
  "services-footer": { es: "Servicios · orientación general", en: "Services · general guidance" },
  "software-page": { es: "Página de instalación de programas", en: "Software installation page" },
  "contact-page": { es: "Página de contacto", en: "Contact page" },
};

const SERVICE_LABELS: Record<string, { es: string; en: string }> = {
  general: { es: "Consulta general", en: "General inquiry" },
  apple: { es: "Apple", en: "Apple" },
  upgrades: { es: "Upgrades", en: "Upgrades" },
  software: { es: "Instalación de programas", en: "Software installation" },
  "software-installation": { es: "Instalación de programas", en: "Software installation" },
  reparacion: { es: "Diagnóstico y reparación", en: "Diagnosis and repair" },
  repair: { es: "Diagnóstico y reparación", en: "Diagnosis and repair" },
  remoto: { es: "Soporte remoto", en: "Remote support" },
  remote: { es: "Soporte remoto", en: "Remote support" },
  wifi: { es: "Wi-Fi y hogar", en: "Wi-Fi and home" },
  negocios: { es: "Tecnología para negocios", en: "Business technology" },
  business: { es: "Tecnología para negocios", en: "Business technology" },
};

function copy(isES: boolean) {
  return {
    step: isES ? "Paso" : "Step",
    of: isES ? "de" : "of",
    next: isES ? "Continuar" : "Continue",
    back: isES ? "Atrás" : "Back",
    submit: isES ? "Enviar solicitud" : "Submit request",
    sending: isES ? "Enviando…" : "Sending…",
    success: isES ? "Solicitud recibida" : "Request received",
    yourNumber: isES ? "Tu número de solicitud es" : "Your request number is",
    successBody: isES
      ? "Te contactaremos por WhatsApp con una evaluación inicial y los siguientes pasos."
      : "We will contact you on WhatsApp with an initial evaluation and the next steps.",
    whatsappBtn: isES ? "Continuar por WhatsApp" : "Continue on WhatsApp",
    errorGeneric: isES ? "No pudimos enviar tu solicitud. Intenta de nuevo." : "We could not submit your request. Please try again.",
    source: isES ? "Origen" : "Source",
    interest: isES ? "Servicio de interés" : "Service interest",
    remoteOnly: isES ? "La instalación de programas se atiende exclusivamente de forma remota." : "Software installation is provided exclusively through remote support.",
    labels: {
      name: isES ? "Nombre completo" : "Full name",
      whatsapp: "WhatsApp",
      email: isES ? "Correo electrónico (opcional)" : "Email (optional)",
      lang: isES ? "Idioma preferido" : "Preferred language",
      customerType: isES ? "Tipo de cliente" : "Customer type",
      device: isES ? "Tipo de dispositivo" : "Device type",
      brand: isES ? "Marca" : "Brand",
      model: isES ? "Modelo" : "Model",
      os: isES ? "Sistema operativo" : "Operating system",
      issue: isES ? "Describe qué necesitas resolver" : "Describe what you need to solve",
      issueStart: isES ? "¿Cuándo comenzó?" : "When did it start?",
      powersOn: isES ? "¿El equipo enciende?" : "Does the device power on?",
      important: isES ? "¿Contiene información importante?" : "Contains important data?",
      mode: isES ? "Modalidad preferida" : "Preferred service mode",
      neighborhood: isES ? "Colonia o zona" : "Neighborhood or area",
      urgency: isES ? "Urgencia" : "Urgency",
      date: isES ? "Fecha preferida" : "Preferred date",
      privacy: isES
        ? "Acepto el aviso de privacidad y autorizo el contacto por WhatsApp."
        : "I accept the privacy notice and authorize contact via WhatsApp.",
    },
    customerTypes: isES
      ? ["Particular", "Negocio", "Hotel", "Renta vacacional", "Administrador de propiedades"]
      : ["Personal", "Business", "Hotel", "Vacation rental", "Property manager"],
    modes: isES
      ? [{ v: "remoto", l: "Remoto" }, { v: "domicilio", l: "A domicilio" }, { v: "revision", l: "Revisión física" }]
      : [{ v: "remoto", l: "Remote" }, { v: "domicilio", l: "On-site" }, { v: "revision", l: "In-shop" }],
    urgencies: isES
      ? [{ v: "baja", l: "Baja" }, { v: "media", l: "Media" }, { v: "alta", l: "Alta" }]
      : [{ v: "baja", l: "Low" }, { v: "media", l: "Medium" }, { v: "alta", l: "High" }],
  };
}

export function DiagnosisForm({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const L = copy(isES);
  const [step, setStep] = useState(1);
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [requestNumber, setRequestNumber] = useState("");
  const [sourceContext, setSourceContext] = useState<SourceContext>({ source: "direct", service: "general", path: "" });
  const [values, setValues] = useState({
    customer_name: "",
    whatsapp: "",
    email: "",
    preferred_language: locale,
    customer_type: isES ? "Particular" : "Personal",
    device_type: "",
    brand: "",
    model: "",
    operating_system: "",
    issue_description: "",
    issue_start: "",
    powers_on: "",
    important_data: "",
    service_mode: "remoto",
    neighborhood: "",
    urgency: "media",
    preferred_date: "",
    privacy: false,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const context = {
      source: (params.get("source") || "direct").slice(0, 80),
      service: (params.get("service") || "general").slice(0, 80),
      path: window.location.pathname.slice(0, 220),
    };
    setSourceContext(context);
    if (["software", "software-installation"].includes(context.service)) {
      setValues((current) => ({ ...current, service_mode: "remoto" }));
    }
  }, []);

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  const total = 3;
  const softwareOnly = ["software", "software-installation"].includes(sourceContext.service);
  const sourceLabel = SOURCE_LABELS[sourceContext.source]?.[locale] ?? (isES ? "Acceso directo" : "Direct visit");
  const serviceLabel = SERVICE_LABELS[sourceContext.service]?.[locale] ?? sourceContext.service;
  const canContinue = step === 1
    ? values.customer_name.trim().length >= 2 && values.whatsapp.trim().length >= 6
    : step === 2
      ? values.device_type.trim().length >= 2 && values.issue_description.trim().length >= 5
      : true;

  async function submit() {
    setState("submitting");
    setErrorMsg("");
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      setState("error");
      setErrorMsg(isES ? "Revisa los campos requeridos." : "Please review the required fields.");
      return;
    }

    const p = parsed.data;
    const basePayload = {
      p_customer_name: p.customer_name,
      p_whatsapp: p.whatsapp,
      p_customer_type: p.customer_type,
      p_device_type: p.device_type,
      p_issue_description: p.issue_description,
      p_service_mode: p.service_mode,
      p_email: p.email || null,
      p_preferred_language: p.preferred_language,
      p_brand: p.brand || null,
      p_model: p.model || null,
      p_operating_system: p.operating_system || null,
      p_issue_start: p.issue_start || null,
      p_powers_on: p.powers_on || null,
      p_important_data: p.important_data || null,
      p_neighborhood: p.neighborhood || null,
      p_urgency: p.urgency || null,
      p_preferred_date: p.preferred_date || null,
    };

    const v2 = await (supabase.rpc as any)("submit_service_request_v2", {
      ...basePayload,
      p_lead_source: sourceContext.source,
      p_service_interest: sourceContext.service,
      p_source_path: sourceContext.path,
    });

    let data = v2.data as string | null;
    let error = v2.error as { message?: string; code?: string } | null;
    const missingV2 = error && (error.code === "PGRST202" || error.code === "42883" || error.message?.includes("submit_service_request_v2"));

    if (missingV2) {
      const marker = `\n\n[SMT_SOURCE:${sourceContext.source}|${sourceContext.service}|${sourceContext.path}]`;
      const fallback = await supabase.rpc("submit_service_request", {
        ...basePayload,
        p_issue_description: `${p.issue_description}${marker}`,
      });
      data = fallback.data;
      error = fallback.error;
    }

    if (error || !data) {
      console.error("Service request submission failed", error);
      setState("error");
      setErrorMsg(L.errorGeneric);
      return;
    }

    setRequestNumber(data);
    setState("success");
  }

  if (state === "success") {
    const msg = isES
      ? `Hola San Miguel Tech, envié la solicitud ${requestNumber}.`
      : `Hi San Miguel Tech, I submitted request ${requestNumber}.`;
    return (
      <div className="apple-card p-8 text-center sm:p-10">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 text-3xl font-semibold">{L.success}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{L.yourNumber}</p>
        <p className="mt-1 font-mono text-2xl text-foreground">{requestNumber}</p>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{L.successBody}</p>
        <a href={whatsappUrl(msg)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-white">
          {L.whatsappBtn}
        </a>
      </div>
    );
  }

  return (
    <div className="apple-card p-5 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {L.step} {step} {L.of} {total}
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: total }).map((_, index) => (
            <div key={index} className={`h-1.5 w-7 rounded-full transition ${index < step ? "bg-brand" : "bg-[#e5e5e7]"}`} />
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f7] px-3 py-2 text-xs text-muted-foreground">
          <Tag className="h-3.5 w-3.5 text-brand" /> {L.source}: {sourceLabel}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-2 text-xs font-medium text-brand">
          <Tag className="h-3.5 w-3.5" /> {L.interest}: {serviceLabel}
        </span>
      </div>

      {step === 1 && (
        <div className="mt-7 grid gap-5">
          <Field label={L.labels.name} required><input value={values.customer_name} onChange={(e) => update("customer_name", e.target.value)} className={inputCls} autoComplete="name" /></Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={L.labels.whatsapp} required><input value={values.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputCls} placeholder="+52 415 ..." inputMode="tel" autoComplete="tel" /></Field>
            <Field label={L.labels.email}><input type="email" value={values.email} onChange={(e) => update("email", e.target.value)} className={inputCls} autoComplete="email" /></Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={L.labels.lang}><select value={values.preferred_language} onChange={(e) => update("preferred_language", e.target.value as Locale)} className={inputCls}><option value="es">Español</option><option value="en">English</option></select></Field>
            <Field label={L.labels.customerType}><select value={values.customer_type} onChange={(e) => update("customer_type", e.target.value)} className={inputCls}>{L.customerTypes.map((item) => <option key={item}>{item}</option>)}</select></Field>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-7 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={L.labels.device} required><input value={values.device_type} onChange={(e) => update("device_type", e.target.value)} className={inputCls} placeholder={softwareOnly ? (isES ? "Laptop o computadora" : "Laptop or computer") : "MacBook, PC, iPhone…"} /></Field>
            <Field label={L.labels.brand}><input value={values.brand} onChange={(e) => update("brand", e.target.value)} className={inputCls} /></Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={L.labels.model}><input value={values.model} onChange={(e) => update("model", e.target.value)} className={inputCls} /></Field>
            <Field label={L.labels.os}><input value={values.operating_system} onChange={(e) => update("operating_system", e.target.value)} className={inputCls} placeholder="Windows 11 / macOS" /></Field>
          </div>
          <Field label={L.labels.issue} required><textarea value={values.issue_description} onChange={(e) => update("issue_description", e.target.value)} className={`${inputCls} min-h-32 resize-y py-3`} placeholder={softwareOnly ? (isES ? "Ejemplo: necesito instalar Soft Restaurant 10 y configurar la impresora de tickets." : "Example: I need Soft Restaurant 10 installed and the receipt printer configured.") : ""} /></Field>
          <div className="grid gap-5 sm:grid-cols-3">
            <Field label={L.labels.issueStart}><input value={values.issue_start} onChange={(e) => update("issue_start", e.target.value)} className={inputCls} /></Field>
            <Field label={L.labels.powersOn}><select value={values.powers_on} onChange={(e) => update("powers_on", e.target.value)} className={inputCls}><option value="">—</option><option value="si">{isES ? "Sí" : "Yes"}</option><option value="no">No</option><option value="parcial">{isES ? "Parcialmente" : "Partially"}</option></select></Field>
            <Field label={L.labels.important}><select value={values.important_data} onChange={(e) => update("important_data", e.target.value)} className={inputCls}><option value="">—</option><option value="si">{isES ? "Sí" : "Yes"}</option><option value="no">No</option></select></Field>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mt-7 grid gap-5">
          <Field label={L.labels.mode} required>
            {softwareOnly ? (
              <div className="rounded-[20px] border border-brand/20 bg-brand-soft/60 p-5">
                <div className="font-semibold text-foreground">{isES ? "Soporte remoto" : "Remote support"}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{L.remoteOnly}</p>
              </div>
            ) : (
              <div className="grid gap-2 sm:grid-cols-3">
                {L.modes.map((mode) => (
                  <label key={mode.v} className={`cursor-pointer rounded-[18px] border px-4 py-4 text-sm transition ${values.service_mode === mode.v ? "border-brand bg-brand-soft font-medium text-brand" : "border-border bg-white text-muted-foreground"}`}>
                    <input className="sr-only" type="radio" name="mode" checked={values.service_mode === mode.v} onChange={() => update("service_mode", mode.v)} />
                    {mode.l}
                  </label>
                ))}
              </div>
            )}
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            {!softwareOnly && <Field label={L.labels.neighborhood}><input value={values.neighborhood} onChange={(e) => update("neighborhood", e.target.value)} className={inputCls} /></Field>}
            <Field label={L.labels.urgency}><select value={values.urgency} onChange={(e) => update("urgency", e.target.value)} className={inputCls}>{L.urgencies.map((item) => <option key={item.v} value={item.v}>{item.l}</option>)}</select></Field>
          </div>
          <Field label={L.labels.date}><input type="date" value={values.preferred_date} onChange={(e) => update("preferred_date", e.target.value)} className={inputCls} /></Field>
          <label className="flex items-start gap-3 rounded-[18px] bg-[#f5f5f7] p-4 text-sm leading-relaxed text-muted-foreground">
            <input type="checkbox" checked={values.privacy} onChange={(e) => update("privacy", e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--color-brand)]" />
            <span>{L.labels.privacy}</span>
          </label>
        </div>
      )}

      {state === "error" && <div className="mt-5 flex items-start gap-2 rounded-[18px] border border-destructive/30 bg-destructive/8 p-4 text-sm text-destructive"><AlertCircle className="mt-0.5 h-4 w-4" />{errorMsg}</div>}

      <div className="mt-8 flex items-center justify-between gap-3">
        <button type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1 || state === "submitting"} className="inline-flex h-11 items-center justify-center rounded-full border border-black/[0.09] bg-white px-5 text-sm font-medium disabled:opacity-35">{L.back}</button>
        {step < total ? (
          <button type="button" onClick={() => canContinue && setStep((current) => Math.min(total, current + 1))} disabled={!canContinue} className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-white disabled:opacity-40">{L.next}</button>
        ) : (
          <button type="button" onClick={submit} disabled={!values.privacy || state === "submitting"} className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-white disabled:opacity-40">{state === "submitting" ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />{L.sending}</> : L.submit}</button>
        )}
      </div>
    </div>
  );
}

const inputCls = "h-12 w-full rounded-[16px] border border-input bg-white px-4 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-brand focus:ring-4 focus:ring-brand/10";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className="flex flex-col gap-2"><span className="text-sm font-medium text-foreground">{label}{required && <span className="text-destructive"> *</span>}</span>{children}</label>;
}
