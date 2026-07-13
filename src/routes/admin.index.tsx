import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Search, Tag } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
  head: () => ({
    meta: [
      { title: "Admin · Solicitudes | San Miguel Tech" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

const STATUSES = [
  "nueva", "contactado", "diagnostico_pendiente", "esperando_equipo",
  "esperando_autorizacion", "esperando_pieza", "en_reparacion", "listo", "resuelto", "cancelado",
] as const;

const STATUS_LABELS: Record<(typeof STATUSES)[number], string> = {
  nueva: "Nueva",
  contactado: "Contactado",
  diagnostico_pendiente: "Diagnóstico pendiente",
  esperando_equipo: "Esperando equipo",
  esperando_autorizacion: "Esperando autorización",
  esperando_pieza: "Esperando pieza",
  en_reparacion: "En reparación",
  listo: "Listo",
  resuelto: "Resuelto",
  cancelado: "Cancelado",
};

const SOURCE_LABELS: Record<string, string> = {
  header: "Menú principal",
  "mobile-bar": "Barra móvil",
  "home-hero": "Inicio · portada",
  "home-problem": "Inicio · problema común",
  "home-apple": "Inicio · Apple",
  "home-upgrades": "Inicio · upgrades",
  "home-business": "Inicio · negocios",
  "home-footer": "Inicio · llamada final",
  "services-page": "Página de servicios",
  "services-footer": "Servicios · orientación general",
  "software-page": "Página de programas",
  "contact-page": "Página de contacto",
  direct: "Acceso directo",
};

const SERVICE_LABELS: Record<string, string> = {
  general: "Consulta general",
  apple: "Apple",
  upgrades: "Upgrades",
  software: "Instalación de programas",
  "software-installation": "Instalación de programas",
  reparacion: "Diagnóstico y reparación",
  repair: "Diagnóstico y reparación",
  remoto: "Soporte remoto",
  remote: "Soporte remoto",
  wifi: "Wi-Fi y hogar",
  negocios: "Tecnología para negocios",
  business: "Tecnología para negocios",
};

type Row = {
  id: string;
  request_number: string;
  created_at: string;
  customer_name: string;
  whatsapp: string;
  email: string | null;
  device_type: string;
  brand: string | null;
  model: string | null;
  service_mode: string;
  urgency: string | null;
  status: (typeof STATUSES)[number];
  issue_description: string;
  neighborhood: string | null;
  internal_notes: string | null;
  estimated_price: number | null;
  final_price: number | null;
  lead_source?: string | null;
  service_interest?: string | null;
  source_path?: string | null;
};

function sourceData(row: Row) {
  const marker = row.issue_description.match(/\n\n\[SMT_SOURCE:([^|\]]+)\|([^|\]]+)\|([^\]]*)\]$/);
  return {
    source: row.lead_source || marker?.[1] || "direct",
    service: row.service_interest || marker?.[2] || "general",
    path: row.source_path || marker?.[3] || "",
    issue: marker ? row.issue_description.slice(0, marker.index).trim() : row.issue_description,
  };
}

function AdminDashboard() {
  const nav = useNavigate();
  const [rows, setRows] = useState<Row[] | null>(null);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        nav({ to: "/admin/login" });
        return;
      }
      await load();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    const { data, error } = await supabase
      .from("service_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) {
      setErr(error.message);
      return;
    }
    setRows(data as unknown as Row[]);
  }

  async function updateRow(id: string, patch: Partial<Row>) {
    const { error } = await supabase.from("service_requests").update(patch).eq("id", id);
    if (!error) await load();
  }

  async function signOut() {
    await supabase.auth.signOut();
    nav({ to: "/admin/login" });
  }

  function toCsv() {
    if (!rows) return;
    const headers = ["request_number", "created_at", "customer_name", "whatsapp", "email", "device_type", "brand", "model", "service_mode", "urgency", "status", "lead_source", "service_interest", "source_path", "neighborhood", "estimated_price", "final_price", "issue_description"];
    const csv = [headers.join(",")].concat(rows.map((row) => headers.map((header) => JSON.stringify((row as any)[header] ?? "")).join(","))).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `solicitudes-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  const filtered = (rows ?? []).filter((row) => {
    if (status && row.status !== status) return false;
    if (!q.trim()) return true;
    const source = sourceData(row);
    const text = q.toLowerCase();
    return [row.request_number, row.customer_name, row.whatsapp, row.email ?? "", row.device_type, row.model ?? "", source.source, source.service]
      .some((value) => value.toLowerCase().includes(text));
  });

  const metrics = {
    total: rows?.length ?? 0,
    nuevas: rows?.filter((row) => row.status === "nueva").length ?? 0,
    pendientes: rows?.filter((row) => !["resuelto", "cancelado"].includes(row.status)).length ?? 0,
    resueltas: rows?.filter((row) => row.status === "resuelto").length ?? 0,
  };

  if (rows === null) {
    return <div className="flex min-h-screen items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-brand" /></div>;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <header className="sticky top-0 z-20 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
        <div className="container-page flex min-h-14 items-center justify-between gap-3 py-2">
          <div className="font-semibold tracking-tight">San Miguel Tech · Admin</div>
          <div className="flex gap-2">
            <button onClick={toCsv} className="h-9 rounded-full border border-black/[0.09] bg-white px-3 text-xs sm:text-sm">Exportar CSV</button>
            <button onClick={signOut} className="h-9 rounded-full border border-black/[0.09] bg-white px-3 text-xs sm:text-sm">Salir</button>
          </div>
        </div>
      </header>

      <main className="container-page space-y-5 py-5 sm:py-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[["Total", metrics.total], ["Nuevas", metrics.nuevas], ["Pendientes", metrics.pendientes], ["Resueltas", metrics.resueltas]].map(([label, value]) => (
            <div key={label as string} className="rounded-[20px] border border-black/[0.06] bg-white p-4 shadow-sm">
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
              <div className="mt-1 text-2xl font-semibold">{value}</div>
            </div>
          ))}
        </div>

        {err && <div className="rounded-2xl bg-destructive/10 p-4 text-sm text-destructive">{err}</div>}

        <div className="grid gap-3 sm:grid-cols-[1fr_220px]">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Buscar cliente, teléfono, folio, origen…" value={q} onChange={(event) => setQ(event.target.value)} className="h-12 w-full rounded-2xl border border-black/[0.08] bg-white pl-11 pr-4 text-sm outline-none focus:border-brand" />
          </label>
          <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-12 rounded-2xl border border-black/[0.08] bg-white px-4 text-sm outline-none">
            <option value="">Todos los estados</option>
            {STATUSES.map((item) => <option key={item} value={item}>{STATUS_LABELS[item]}</option>)}
          </select>
        </div>

        <div className="grid gap-4 md:hidden">
          {filtered.map((row) => {
            const source = sourceData(row);
            return (
              <article key={row.id} className="rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-xs text-brand">{row.request_number}</div>
                    <h2 className="mt-1 text-xl font-semibold">{row.customer_name}</h2>
                    <div className="mt-1 text-xs text-muted-foreground">{new Date(row.created_at).toLocaleDateString()}</div>
                  </div>
                  <select value={row.status} onChange={(event) => updateRow(row.id, { status: event.target.value as Row["status"] })} className="max-w-40 rounded-xl border border-input bg-white px-2 py-2 text-xs">
                    {STATUSES.map((item) => <option key={item} value={item}>{STATUS_LABELS[item]}</option>)}
                  </select>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-[11px]"><Tag className="h-3 w-3 text-brand" />{SOURCE_LABELS[source.source] ?? source.source}</span>
                  <span className="rounded-full bg-brand-soft px-3 py-1.5 text-[11px] font-medium text-brand">{SERVICE_LABELS[source.service] ?? source.service}</span>
                </div>

                <div className="mt-4 grid gap-3 text-sm">
                  <div><span className="text-muted-foreground">Equipo:</span> {row.device_type} {[row.brand, row.model].filter(Boolean).join(" ")}</div>
                  <div><span className="text-muted-foreground">Contacto:</span> {row.whatsapp}{row.email ? ` · ${row.email}` : ""}</div>
                  <div><span className="text-muted-foreground">Modalidad:</span> {row.service_mode} · {row.urgency ?? "sin urgencia"}</div>
                  <details><summary className="cursor-pointer font-medium text-brand">Ver problema</summary><p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">{source.issue}</p></details>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <input placeholder="Estimado" defaultValue={row.estimated_price ?? ""} onBlur={(event) => updateRow(row.id, { estimated_price: event.target.value ? Number(event.target.value) : null })} className="h-10 rounded-xl border border-input px-3 text-sm" />
                  <input placeholder="Final" defaultValue={row.final_price ?? ""} onBlur={(event) => updateRow(row.id, { final_price: event.target.value ? Number(event.target.value) : null })} className="h-10 rounded-xl border border-input px-3 text-sm" />
                </div>
                <textarea placeholder="Notas internas" defaultValue={row.internal_notes ?? ""} onBlur={(event) => updateRow(row.id, { internal_notes: event.target.value })} className="mt-3 min-h-24 w-full rounded-xl border border-input p-3 text-sm" />
              </article>
            );
          })}
        </div>

        <div className="hidden overflow-x-auto rounded-[22px] border border-black/[0.06] bg-white md:block">
          <table className="w-full min-w-[1100px] text-sm">
            <thead className="bg-[#f5f5f7] text-[11px] uppercase tracking-wide text-muted-foreground">
              <tr><th className="p-3 text-left">Folio</th><th className="p-3 text-left">Cliente</th><th className="p-3 text-left">Origen</th><th className="p-3 text-left">Dispositivo</th><th className="p-3 text-left">Modalidad</th><th className="p-3 text-left">Estado</th><th className="p-3 text-left">Notas</th></tr>
            </thead>
            <tbody>
              {filtered.map((row) => {
                const source = sourceData(row);
                return (
                  <tr key={row.id} className="border-t border-black/[0.06] align-top">
                    <td className="p-3 font-mono text-xs">{row.request_number}<div className="mt-1 text-muted-foreground">{new Date(row.created_at).toLocaleDateString()}</div></td>
                    <td className="p-3"><div className="font-medium">{row.customer_name}</div><div className="text-xs text-muted-foreground">{row.whatsapp}</div>{row.email && <div className="text-xs text-muted-foreground">{row.email}</div>}</td>
                    <td className="p-3"><span className="inline-flex rounded-full bg-[#f5f5f7] px-2.5 py-1 text-[11px]">{SOURCE_LABELS[source.source] ?? source.source}</span><div className="mt-1 text-xs font-medium text-brand">{SERVICE_LABELS[source.service] ?? source.service}</div></td>
                    <td className="p-3"><div>{row.device_type}</div><div className="text-xs text-muted-foreground">{[row.brand, row.model].filter(Boolean).join(" ")}</div><details className="mt-1"><summary className="cursor-pointer text-xs text-brand">Problema</summary><div className="mt-1 max-w-xs whitespace-pre-wrap text-xs text-muted-foreground">{source.issue}</div></details></td>
                    <td className="p-3">{row.service_mode}<div className="text-xs text-muted-foreground">{row.urgency ?? "—"}</div></td>
                    <td className="p-3"><select value={row.status} onChange={(event) => updateRow(row.id, { status: event.target.value as Row["status"] })} className="h-9 rounded-xl border border-input bg-white px-2 text-xs">{STATUSES.map((item) => <option key={item} value={item}>{STATUS_LABELS[item]}</option>)}</select><div className="mt-2 flex gap-1"><input placeholder="Est." defaultValue={row.estimated_price ?? ""} onBlur={(event) => updateRow(row.id, { estimated_price: event.target.value ? Number(event.target.value) : null })} className="h-8 w-20 rounded-lg border border-input px-2 text-xs" /><input placeholder="Final" defaultValue={row.final_price ?? ""} onBlur={(event) => updateRow(row.id, { final_price: event.target.value ? Number(event.target.value) : null })} className="h-8 w-20 rounded-lg border border-input px-2 text-xs" /></div></td>
                    <td className="p-3"><textarea defaultValue={row.internal_notes ?? ""} onBlur={(event) => updateRow(row.id, { internal_notes: event.target.value })} className="h-20 w-60 rounded-xl border border-input p-2 text-xs" /></td>
                  </tr>
                );
              })}
              {filtered.length === 0 && <tr><td colSpan={7} className="p-10 text-center text-sm text-muted-foreground">Sin resultados.</td></tr>}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
