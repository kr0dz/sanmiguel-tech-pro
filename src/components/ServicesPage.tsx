import { Link } from "@tanstack/react-router";
import { Apple, MemoryStick, Wrench, MonitorSmartphone, Wifi, Building2, CheckCircle2 } from "lucide-react";
import { tFor, type Locale } from "@/i18n/dict";
import { Section } from "@/components/ui/Section";

type SG = { id: string; icon: any; title: string; items: string[] };

function groups(locale: Locale): SG[] {
  const isES = locale === "es";
  return [
    {
      id: "apple",
      icon: Apple,
      title: isES ? "Soporte para equipos Apple" : "Apple device support",
      items: isES
        ? ["Diagnóstico de MacBook, iMac y Mac mini", "Configuración de iPhone y iPad", "Actualización y reinstalación de macOS", "Migración entre equipos", "Configuración de Apple ID e iCloud", "Respaldos y recuperación de información", "Optimización de equipos lentos", "Upgrades en modelos compatibles", "Configuración de equipos Apple nuevos"]
        : ["MacBook, iMac and Mac mini diagnosis", "iPhone and iPad setup", "macOS update and reinstall", "Device migration", "Apple ID and iCloud setup", "Backups and recovery", "Slow-device optimization", "Upgrades on compatible models", "New Apple device setup"],
    },
    {
      id: "upgrades",
      icon: MemoryStick,
      title: isES ? "Computadoras y upgrades" : "Computers and upgrades",
      items: isES
        ? ["Cambio de disco duro a SSD", "Ampliación de memoria RAM", "Instalación y reinstalación de Windows", "Ensamble y actualización de computadoras", "Cambio de fuente, almacenamiento y componentes", "Limpieza interna", "Mantenimiento preventivo", "Diagnóstico de compatibilidad antes de comprar piezas", "Optimización de laptops y desktops"]
        : ["HDD to SSD upgrade", "RAM expansion", "Windows install and reinstall", "Custom PC builds and upgrades", "Power supply, storage and component swaps", "Interior cleaning", "Preventive maintenance", "Compatibility check before buying parts", "Laptop and desktop optimization"],
    },
    {
      id: isES ? "reparacion" : "repair",
      icon: Wrench,
      title: isES ? "Diagnóstico y reparación" : "Diagnosis and repair",
      items: isES
        ? ["Equipos que no encienden", "Pantalla negra", "Sobrecalentamiento", "Errores de inicio", "Bloqueos y reinicios", "Virus y software sospechoso", "Fallas de almacenamiento", "Problemas de rendimiento", "Recuperación de archivos", "Instalación de programas"]
        : ["Devices that won't turn on", "Black screen", "Overheating", "Boot errors", "Freezes and restarts", "Viruses and suspicious software", "Storage failures", "Performance issues", "File recovery", "Software installation"],
    },
    {
      id: isES ? "remoto" : "remote",
      icon: MonitorSmartphone,
      title: isES ? "Soporte remoto" : "Remote support",
      items: isES
        ? ["Solución de errores de software", "Configuración de correo", "Instalación de aplicaciones", "Optimización", "Configuración de cuentas", "Asistencia mediante conexión remota segura"]
        : ["Software error troubleshooting", "Email setup", "App installation", "Optimization", "Account setup", "Secure remote connection assistance"],
    },
    {
      id: "wifi",
      icon: Wifi,
      title: isES ? "Wi-Fi, redes y hogar" : "Wi-Fi, networks and home",
      items: isES
        ? ["Diagnóstico de cobertura Wi-Fi", "Configuración de routers", "Instalación de repetidores", "Sistemas Wi-Fi mesh", "Impresoras", "Smart TV", "Dispositivos inteligentes", "Cámaras y conectividad básica", "Organización y protección de respaldos"]
        : ["Wi-Fi coverage diagnosis", "Router configuration", "Range extenders", "Wi-Fi mesh systems", "Printers", "Smart TVs", "Smart devices", "Cameras and basic connectivity", "Backup organization and protection"],
    },
    {
      id: isES ? "negocios" : "business",
      icon: Building2,
      title: isES ? "Tecnología para negocios" : "Technology for businesses",
      items: isES
        ? ["Configuración de computadoras de oficina", "Correo empresarial", "Redes e impresoras", "Respaldos", "Mantenimiento preventivo", "Soporte para hoteles y rentas vacacionales", "Configuración tecnológica para huéspedes", "Smart TV, streaming y Wi-Fi", "Soporte para administradores de propiedades", "Páginas web, dominios y herramientas digitales", "Planes de soporte recurrente"]
        : ["Office computer setup", "Business email", "Networks and printers", "Backups", "Preventive maintenance", "Support for hotels and vacation rentals", "Guest technology setup", "Smart TV, streaming and Wi-Fi", "Support for property managers", "Websites, domains and digital tools", "Recurring support plans"],
    },
  ];
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const t = tFor(locale);
  const list = groups(locale);
  const diagPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-10">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "SERVICIOS" : "SERVICES"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            {isES ? "Todo lo que resolvemos en San Miguel de Allende" : "What we solve in San Miguel de Allende"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {isES
              ? "Un servicio técnico integral: Apple, Windows, redes, hogares y negocios. Diagnóstico claro y siempre con tu autorización antes de cualquier cambio."
              : "Full-service technical support: Apple, Windows, networks, homes and businesses. Clear diagnosis and always with your approval before any change."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {list.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-foreground hover:border-brand/60 transition">
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {list.map((g, i) => {
        const Icon = g.icon;
        return (
          <Section key={g.id} id={g.id} tone={i % 2 === 1 ? "soft" : "default"}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{g.title}</h2>
                <Link to={diagPath} className="mt-6 inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium">
                  {t.hero.ctaPrimary}
                </Link>
                {g.id === "apple" && (
                  <p className="mt-6 text-xs text-muted-foreground max-w-md">{t.apple.disclaimer}</p>
                )}
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {g.items.map((it) => (
                  <li key={it} className="rounded-lg border border-border bg-card p-3 text-sm text-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );
      })}

      <Section tone="graphite">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {isES ? "¿No sabes bien qué necesitas?" : "Not sure what you need?"}
            </h2>
            <p className="mt-2 text-graphite-foreground/70 max-w-xl">
              {isES ? "Cuéntanos el problema con tus palabras. Te guiamos con un diagnóstico claro." : "Tell us the problem in your own words. We'll guide you with a clear diagnosis."}
            </p>
          </div>
          <Link to={diagPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-soft text-graphite text-sm font-medium">
            {t.hero.ctaPrimary}
          </Link>
        </div>
      </Section>
    </>
  );
}