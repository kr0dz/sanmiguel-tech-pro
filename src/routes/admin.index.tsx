import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

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
  "nueva","contactado","diagnostico_pendiente","esperando_equipo",
  "esperando_autorizacion","esperando_pieza","en_reparacion","listo","resuelto","cancelado",
] as const;

type Row = {
  id: string; request_number: string; created_at: string; customer_name: string;
  whatsapp: string; email: string | null; device_type: string; brand: string | null;
  model: string | null; service_mode: string; urgency: string | null;
  status: (typeof STATUSES)[number]; issue_description: string; neighborhood: string | null;
  internal_notes: string | null; estimated_price: number | null; final_price: number | null;
};

function AdminDashboard() {
  const nav = useNavigate();
  const [rows, setRows] = useState<Row[] | null>(null);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("");
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { nav({ to: "/admin/login" }); return; }
      await load();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    const { data, error } = await supabase
      .from("service_requests")
      .select("id,request_number,created_at,customer_name,whatsapp,email,device_type,brand,model,service_mode,urgency,status,issue_description,neighborhood,internal_notes,estimated_price,final_price")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) { setErr(error.message); return; }
    setRows(data as Row[]);
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
    const headers = ["request_number","created_at","customer_name","whatsapp","email","device_type","brand","model","service_mode","urgency","status","neighborhood","estimated_price","final_price","issue_description"];
    const csv = [headers.join(",")].concat(
      rows.map((r) => headers.map((h) => JSON.stringify((r as any)[h] ?? "")).join(","))
    ).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `solicitudes-${new Date().toISOString().slice(0,10)}.csv`;
    a.click(); URL.revokeObjectURL(url);
  }

  const filtered = (rows ?? []).filter((r) => {
    if (status && r.status !== status) return false;
    if (!q.trim()) return true;
    const t = q.toLowerCase();
    return [r.request_number, r.customer_name, r.whatsapp, r.email ?? "", r.device_type, r.model ?? ""].some((v) => v.toLowerCase().includes(t));
  });

  const metrics = {
    total: rows?.length ?? 0,
    nuevas: rows?.filter((r) => r.status === "nueva").length ?? 0,
    pendientes: rows?.filter((r) => !["resuelto","cancelado"].includes(r.status)).length ?? 0,
    resueltas: rows?.filter((r) => r.status === "resuelto").length ?? 0,
  };

  if (rows === null) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-brand" /></div>;
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="border-b border-border bg-background">
        <div className="container-page h-14 flex items-center justify-between">
          <div className="font-semibold">San Miguel Tech · Admin</div>
          <div className="flex gap-2">
            <button onClick={toCsv} className="h-9 px-3 rounded-md border border-border text-sm">Exportar CSV</button>
            <button onClick={signOut} className="h-9 px-3 rounded-md border border-border text-sm">Salir</button>
          </div>
        </div>
      </header>
      <main className="container-page py-8 space-y-6">
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["Total", metrics.total],["Nuevas", metrics.nuevas],
            ["Pendientes", metrics.pendientes],["Resueltas", metrics.resueltas],
          ].map(([l,v]) => (
            <div key={l as string} className="rounded-lg border border-border bg-card p-4">
              <div className="text-xs uppercase text-muted-foreground tracking-widest">{l}</div>
              <div className="mt-1 text-2xl font-semibold">{v}</div>
            </div>
          ))}
        </div>
        {err && <div className="text-sm text-destructive">{err}</div>}
        <div className="flex flex-wrap gap-3">
          <input placeholder="Buscar por cliente, teléfono, número…" value={q} onChange={(e)=>setQ(e.target.value)} className="h-10 px-3 rounded-md border border-input bg-background text-sm flex-1 min-w-64" />
          <select value={status} onChange={(e)=>setStatus(e.target.value)} className="h-10 px-3 rounded-md border border-input bg-background text-sm">
            <option value="">Todos los estados</option>
            {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="rounded-lg border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/60 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="text-left p-3">#</th><th className="text-left p-3">Cliente</th>
                <th className="text-left p-3">Dispositivo</th><th className="text-left p-3">Modalidad</th>
                <th className="text-left p-3">Urgencia</th><th className="text-left p-3">Estado</th>
                <th className="text-left p-3">Notas</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-border align-top">
                  <td className="p-3 font-mono text-xs">{r.request_number}<div className="text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</div></td>
                  <td className="p-3">
                    <div className="font-medium">{r.customer_name}</div>
                    <div className="text-muted-foreground text-xs">{r.whatsapp}</div>
                    {r.email && <div className="text-muted-foreground text-xs">{r.email}</div>}
                    {r.neighborhood && <div className="text-muted-foreground text-xs">{r.neighborhood}</div>}
                  </td>
                  <td className="p-3">
                    <div>{r.device_type}</div>
                    <div className="text-muted-foreground text-xs">{[r.brand, r.model].filter(Boolean).join(" ")}</div>
                    <details className="mt-1"><summary className="text-brand text-xs cursor-pointer">Problema</summary><div className="text-xs text-muted-foreground mt-1 max-w-xs whitespace-pre-wrap">{r.issue_description}</div></details>
                  </td>
                  <td className="p-3">{r.service_mode}</td>
                  <td className="p-3">{r.urgency ?? "—"}</td>
                  <td className="p-3">
                    <select value={r.status} onChange={(e)=>updateRow(r.id, { status: e.target.value as Row["status"] })} className="h-8 px-2 rounded border border-input bg-background text-xs">
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="mt-2 flex gap-1">
                      <input placeholder="Est." defaultValue={r.estimated_price ?? ""} onBlur={(e)=>updateRow(r.id, { estimated_price: e.target.value ? Number(e.target.value) : null })} className="h-7 w-16 px-2 rounded border border-input bg-background text-xs" />
                      <input placeholder="Final" defaultValue={r.final_price ?? ""} onBlur={(e)=>updateRow(r.id, { final_price: e.target.value ? Number(e.target.value) : null })} className="h-7 w-16 px-2 rounded border border-input bg-background text-xs" />
                    </div>
                  </td>
                  <td className="p-3">
                    <textarea defaultValue={r.internal_notes ?? ""} onBlur={(e)=>updateRow(r.id, { internal_notes: e.target.value })} className="w-56 h-16 p-2 rounded border border-input bg-background text-xs" />
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="p-8 text-center text-muted-foreground text-sm">Sin resultados.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}