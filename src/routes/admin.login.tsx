import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({
    meta: [
      { title: "Admin | San Miguel Tech" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr("");
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    nav({ to: "/admin" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl border border-border bg-card p-8">
        <div className="text-lg font-semibold mb-1">San Miguel Tech</div>
        <div className="text-sm text-muted-foreground mb-6">Panel administrativo</div>
        <label className="block text-sm mb-1">Correo</label>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm mb-3" />
        <label className="block text-sm mb-1">Contraseña</label>
        <input required type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm mb-4" />
        {err && <div className="text-sm text-destructive mb-3">{err}</div>}
        <button disabled={loading} className="w-full h-10 rounded-md bg-brand text-brand-foreground text-sm font-medium inline-flex items-center justify-center">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Entrar"}
        </button>
      </form>
    </div>
  );
}