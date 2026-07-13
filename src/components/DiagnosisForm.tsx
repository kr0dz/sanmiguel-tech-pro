import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import type { Locale } from "@/i18n/dict";
import { whatsappUrl } from "@/lib/site";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

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

const S = (isES: boolean) => ({
  step: isES ? "Paso" : "Step",
  of: isES ? "de" : "of",
  next: isES ? "Siguiente" : "Next",
  back: isES ? "Atrás" : "Back",
  submit: isES ? "Enviar solicitud" : "Submit request",
  sending: isES ? "Enviando…" : "Sending…",
  required: isES ? "Requerido" : "Required",
  success: isES ? "Solicitud recibida" : "Request received",
  yourNumber: isES ? "Tu número de solicitud es" : "Your request number is",
  successBody: isES
    ? "Te contactaremos por WhatsApp con los siguientes pasos. Puedes escribirnos directamente para agilizar la comunicación."
    : "We'll contact you on WhatsApp with the next steps. You can also message us directly to speed things up.",
  whatsappBtn: isES ? "Continuar por WhatsApp" : "Continue on WhatsApp",
  errorGeneric: isES ? "No pudimos enviar tu solicitud. Intenta de nuevo." : "We couldn't submit your request. Please try again.",
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
    issue: isES ? "Descripción del problema" : "Problem description",
    issueStart: isES ? "¿Cuándo comenzó?" : "When did it start?",
    powersOn: isES ? "¿El equipo enciende?" : "Does the device power on?",
    important: isES ? "¿Contiene información importante?" : "Contains important data?",
    mode: isES ? "Servicio preferido" : "Preferred service",
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
    ? [{ v: "remoto", l: "Remoto" }, { v: "domicilio", l: "Domicilio" }, { v: "revision", l: "Revisión física" }]
    : [{ v: "remoto", l: "Remote" }, { v: "domicilio", l: "On-site" }, { v: "revision", l: "In-shop" }],
  urgencies: isES
    ? [{ v: "baja", l: "Baja" }, { v: "media", l: "Media" }, { v: "alta", l: "Alta" }]
    : [{ v: "baja", l: "Low" }, { v: "media", l: "Medium" }, { v: "alta", l: "High" }],
});

type State = "idle" | "submitting" | "error" | "success";

export function DiagnosisForm({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const L = S(isES);
  const [step, setStep] = useState(1);
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [requestNumber, setRequestNumber] = useState("");
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

  function update<K extends keyof typeof values>(k: K, v: (typeof values)[K]) {
    setValues((s) => ({ ...s, [k]: v }));
  }

  const total = 3;

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
    const { data, error } = await supabase.rpc("submit_service_request", {
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
    });

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
      <div className="rounded-xl border border-brand/40 bg-brand-soft/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand" />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">{L.success}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{L.yourNumber}:</p>
        <p className="mt-1 text-2xl font-mono text-foreground">{requestNumber}</p>
        <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">{L.successBody}</p>
        <a
          href={whatsappUrl(msg)}
          target="_blank" rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium"
        >
          {L.whatsappBtn}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {L.step} {step} {L.of} {total}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className={`h-1.5 w-8 rounded-full ${i < step ? "bg-brand" : "bg-border"}`} />
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="grid gap-4">
          <Field label={L.labels.name} required>
            <input required value={values.customer_name} onChange={(e) => update("customer_name", e.target.value)} className={inputCls} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={L.labels.whatsapp} required>
              <input required value={values.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputCls} placeholder="+52 415 ..." />
            </Field>
            <Field label={L.labels.email}>
              <input type="email" value={values.email} onChange={(e) => update("email", e.target.value)} className={inputCls} />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={L.labels.lang}>
              <select value={values.preferred_language} onChange={(e) => update("preferred_language", e.target.value as Locale)} className={inputCls}>
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </Field>
            <Field label={L.labels.customerType}>
              <select value={values.customer_type} onChange={(e) => update("customer_type", e.target.value)} className={inputCls}>
                {L.customerTypes.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={L.labels.device} required>
              <input required value={values.device_type} onChange={(e) => update("device_type", e.target.value)} className={inputCls} placeholder={isES ? "MacBook, PC, iPhone…" : "MacBook, PC, iPhone…"} />
            </Field>
            <Field label={L.labels.brand}>
              <input value={values.brand} onChange={(e) => update("brand", e.target.value)} className={inputCls} />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={L.labels.model}>
              <input value={values.model} onChange={(e) => update("model", e.target.value)} className={inputCls} />
            </Field>
            <Field label={L.labels.os}>
              <input value={values.operating_system} onChange={(e) => update("operating_system", e.target.value)} className={inputCls} placeholder="macOS 14 / Windows 11" />
            </Field>
          </div>
          <Field label={L.labels.issue} required>
            <textarea required value={values.issue_description} onChange={(e) => update("issue_description", e.target.value)} className={`${inputCls} min-h-28`} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label={L.labels.issueStart}>
              <input value={values.issue_start} onChange={(e) => update("issue_start", e.target.value)} className={inputCls} placeholder={isES ? "Ayer, hace 1 semana…" : "Yesterday, a week ago…"} />
            </Field>
            <Field label={L.labels.powersOn}>
              <select value={values.powers_on} onChange={(e) => update("powers_on", e.target.value)} className={inputCls}>
                <option value="">—</option>
                <option value="si">{isES ? "Sí" : "Yes"}</option>
                <option value="no">No</option>
                <option value="parcial">{isES ? "Parcialmente" : "Partially"}</option>
              </select>
            </Field>
            <Field label={L.labels.important}>
              <select value={values.important_data} onChange={(e) => update("important_data", e.target.value)} className={inputCls}>
                <option value="">—</option>
                <option value="si">{isES ? "Sí" : "Yes"}</option>
                <option value="no">No</option>
              </select>
            </Field>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="grid gap-4">
          <Field label={L.labels.mode} required>
            <div className="grid gap-2 sm:grid-cols-3">
              {L.modes.map((m) => (
                <label key={m.v} className={`cursor-pointer rounded-md border px-4 py-3 text-sm ${values.service_mode === m.v ? "border-brand bg-brand-soft text-foreground" : "border-border text-muted-foreground"}`}>
                  <input className="sr-only" type="radio" name="mode" value={m.v} checked={values.service_mode === m.v} onChange={() => update("service_mode", m.v)} />
                  {m.l}
                </label>
              ))}
            </div>
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={L.labels.neighborhood}>
              <input value={values.neighborhood} onChange={(e) => update("neighborhood", e.target.value)} className={inputCls} />
            </Field>
            <Field label={L.labels.urgency}>
              <select value={values.urgency} onChange={(e) => update("urgency", e.target.value)} className={inputCls}>
                {L.urgencies.map((u) => <option key={u.v} value={u.v}>{u.l}</option>)}
              </select>
            </Field>
          </div>
          <Field label={L.labels.date}>
            <input type="date" value={values.preferred_date} onChange={(e) => update("preferred_date", e.target.value)} className={inputCls} />
          </Field>
          <label className="flex items-start gap-3 mt-2 text-sm text-muted-foreground">
            <input type="checkbox" checked={values.privacy} onChange={(e) => update("privacy", e.target.checked)} className="mt-1" />
            <span>{L.labels.privacy}</span>
          </label>
        </div>
      )}

      {state === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 text-destructive p-3 text-sm">
          <AlertCircle className="h-4 w-4 mt-0.5" /> {errorMsg}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1 || state === "submitting"}
          className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-border text-sm text-muted-foreground disabled:opacity-40"
        >
          {L.back}
        </button>
        {step < total ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(total, s + 1))}
            className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium"
          >
            {L.next}
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!values.privacy || state === "submitting"}
            className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium disabled:opacity-60"
          >
            {state === "submitting" ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {L.sending}</> : L.submit}
          </button>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full h-11 px-3 rounded-md border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
