import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { diagnosisHref, whatsappPath } from "@/lib/site";

type FaqItem = { q: string; a: string };
type FaqGroup = { title: string; items: FaqItem[] };

const FAQS: Record<Locale, FaqGroup[]> = {
  es: [
    {
      title: "Equipos y reparaciones",
      items: [
        { q: "¿Qué equipos atienden?", a: "Computadoras Windows, laptops, MacBook, iMac, Mac mini, iPhone, iPad, impresoras, routers, redes Wi-Fi y algunos dispositivos inteligentes. La viabilidad depende del modelo y del tipo de falla." },
        { q: "¿Atienden equipos Apple?", a: "Sí. Podemos ayudar con diagnóstico, configuración, optimización, actualizaciones, migración, respaldos y algunos upgrades compatibles en equipos Apple." },
        { q: "¿Son un centro autorizado por Apple?", a: "No. San Miguel Tech es un servicio técnico independiente y no está afiliado a Apple. Cuando un caso requiere atención oficial o especializada, se explica con claridad." },
        { q: "¿Pueden mejorar una computadora lenta?", a: "En muchos casos sí. Revisamos almacenamiento, memoria, sistema, programas de inicio, temperatura y estado general para determinar si conviene optimizar, limpiar, instalar SSD o ampliar RAM." },
        { q: "¿Instalan SSD, memoria RAM o componentes?", a: "Sí, después de verificar compatibilidad física y técnica. Recomendamos revisar primero el modelo exacto antes de comprar piezas." },
      ],
    },
    {
      title: "Programas y soporte remoto",
      items: [
        { q: "¿Qué programas pueden instalar?", a: "Soft Restaurant 10, Microsoft Office y Microsoft 365, AutoCAD, SketchUp, Adobe Acrobat, herramientas Adobe, correo, navegadores, videollamadas, drivers, impresoras y otras aplicaciones compatibles." },
        { q: "¿La instalación de programas es remota?", a: "Sí. Este servicio se realiza exclusivamente por conexión remota. La computadora debe encender, contar con internet estable y permitir el acceso temporal durante la sesión." },
        { q: "¿Pueden configurar Soft Restaurant 10?", a: "Sí. Podemos apoyar con instalación, actualización, revisión de requisitos, conexión básica de impresoras y ajustes iniciales. Las configuraciones avanzadas dependen de la infraestructura del negocio." },
        { q: "¿Pueden instalar AutoCAD o programas de diseño?", a: "Sí. Primero revisamos sistema operativo, almacenamiento, memoria RAM, tarjeta gráfica y requisitos para confirmar compatibilidad." },
        { q: "¿Qué otros problemas pueden resolver remotamente?", a: "Errores de software, correo, cuentas, impresoras, navegadores, actualizaciones, configuración y optimización que no requieren abrir físicamente el equipo." },
      ],
    },
    {
      title: "Citas, modalidades y costos",
      items: [
        { q: "¿Realizan visitas a domicilio?", a: "Sí, mediante cita y según la zona, el problema y la disponibilidad. Son útiles para Wi-Fi, routers, impresoras, Smart TV, oficinas, hoteles y rentas vacacionales." },
        { q: "¿Cuándo se necesita revisión física?", a: "Cuando el equipo no enciende, tiene daño físico, sobrecalentamiento, fallas de almacenamiento, necesita limpieza, componentes o debe abrirse para realizar pruebas." },
        { q: "¿Cuánto cuesta el servicio?", a: "Depende del equipo, complejidad, modalidad y trabajo requerido. Antes de realizar cambios se confirma el costo aplicable y se presenta una opción de solución." },
        { q: "¿El diagnóstico tiene costo?", a: "Puede tenerlo cuando requiere revisión física, desarmado, pruebas prolongadas o investigación específica. Se confirma antes de recibir o revisar el equipo." },
        { q: "¿Cuánto tarda el servicio?", a: "Depende de la carga de trabajo, complejidad y disponibilidad de piezas. Por WhatsApp se confirma una estimación realista antes de comenzar." },
      ],
    },
    {
      title: "Datos, negocios y cobertura",
      items: [
        { q: "¿Pueden recuperar archivos?", a: "La posibilidad depende del estado del disco o dispositivo. Se realiza una evaluación inicial y se explica qué puede intentarse, sin prometer una recuperación completa." },
        { q: "¿Cómo protegen mis datos?", a: "No se realizan cambios sin autorización, los accesos remotos se cierran al finalizar y el cliente puede observar la sesión. Conviene informar si el equipo contiene información importante." },
        { q: "¿Trabajan con negocios?", a: "Sí. Atendemos oficinas, restaurantes, hoteles, galerías, rentas vacacionales y administradores de propiedades con soporte remoto, visitas y mantenimiento preventivo." },
        { q: "¿Qué zonas atienden?", a: "Se ofrece soporte remoto y atención presencial dentro de San Miguel de Allende. La cobertura a domicilio se confirma al agendar según la colonia o zona." },
        { q: "¿Atienden en inglés?", a: "Sí. El diagnóstico, la comunicación y el soporte pueden realizarse completamente en inglés o español." },
      ],
    },
  ],
  en: [
    {
      title: "Devices and repairs",
      items: [
        { q: "What devices do you service?", a: "Windows desktops and laptops, MacBook, iMac, Mac mini, iPhone, iPad, printers, routers, Wi-Fi networks and selected smart devices. Feasibility depends on the model and problem." },
        { q: "Do you service Apple devices?", a: "Yes. We can assist with diagnosis, setup, optimization, updates, migration, backups and selected compatible upgrades for Apple devices." },
        { q: "Are you an Apple Authorized Service Provider?", a: "No. San Miguel Tech is an independent technical service and is not affiliated with Apple. When a case needs official or specialist service, we explain that clearly." },
        { q: "Can you make a slow computer faster?", a: "Often yes. We review storage, memory, the system, startup programs, temperature and general condition to determine whether optimization, cleaning, an SSD or more RAM would help." },
        { q: "Do you install SSDs, RAM or components?", a: "Yes, after checking physical and technical compatibility. We recommend reviewing the exact model before purchasing parts." },
      ],
    },
    {
      title: "Software and remote support",
      items: [
        { q: "What programs can you install?", a: "Soft Restaurant 10, Microsoft Office and Microsoft 365, AutoCAD, SketchUp, Adobe Acrobat, Adobe tools, email, browsers, video meeting apps, drivers, printers and other compatible applications." },
        { q: "Is software installation remote?", a: "Yes. This service is provided exclusively through a remote connection. The computer must power on, have stable internet and allow temporary access during the session." },
        { q: "Can you configure Soft Restaurant 10?", a: "Yes. We can assist with installation, updates, requirement checks, basic printer connection and initial settings. Advanced configuration depends on the business infrastructure." },
        { q: "Can you install AutoCAD or design programs?", a: "Yes. We first review the operating system, storage, RAM, graphics hardware and program requirements to confirm compatibility." },
        { q: "What else can be solved remotely?", a: "Software errors, email, accounts, printers, browsers, updates, configuration and optimization that do not require physically opening the computer." },
      ],
    },
    {
      title: "Appointments, service modes and pricing",
      items: [
        { q: "Do you make house calls?", a: "Yes, by appointment and depending on the area, problem and availability. Visits are useful for Wi-Fi, routers, printers, Smart TVs, offices, hotels and vacation rentals." },
        { q: "When is physical inspection required?", a: "When the device does not power on, has physical damage, overheats, has storage failure, needs cleaning or components, or must be opened for testing." },
        { q: "How much does the service cost?", a: "It depends on the device, complexity, service mode and required work. Before changes are made, the applicable cost and proposed solution are confirmed." },
        { q: "Is there a diagnosis fee?", a: "There may be one when physical inspection, disassembly, extended testing or specific research is required. It is confirmed before the device is received or inspected." },
        { q: "How long does service take?", a: "It depends on current workload, complexity and parts availability. A realistic estimate is confirmed through WhatsApp before work begins." },
      ],
    },
    {
      title: "Data, businesses and coverage",
      items: [
        { q: "Can you recover files?", a: "Feasibility depends on the condition of the drive or device. We provide an initial assessment and explain what can be attempted without promising complete recovery." },
        { q: "How do you protect my data?", a: "No changes are made without authorization, remote access is closed when finished and the client can observe the session. Tell us when the device contains important information." },
        { q: "Do you work with businesses?", a: "Yes. We support offices, restaurants, hotels, galleries, vacation rentals and property managers through remote support, visits and preventive maintenance." },
        { q: "What areas do you cover?", a: "Remote support and in-person service are available within San Miguel de Allende. On-site coverage is confirmed when scheduling based on the neighborhood or area." },
        { q: "Is service available in English?", a: "Yes. Diagnosis, communication and technical support can be provided entirely in English or Spanish." },
      ],
    },
  ],
};

export function FaqPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const message = isES
    ? "Hola San Miguel Tech, tengo una pregunta sobre sus servicios."
    : "Hi San Miguel Tech, I have a question about your services.";

  return (
    <>
      <section className="border-b border-black/[0.06] bg-white">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">FAQ</div>
          <h1 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            {isES ? "Preguntas frecuentes sobre soporte técnico" : "Frequently asked questions about tech support"}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {isES ? "Respuestas sobre equipos, programas, soporte remoto, visitas, costos, privacidad y atención para negocios en San Miguel de Allende." : "Answers about devices, software, remote support, visits, pricing, privacy and business services in San Miguel de Allende."}
          </p>
        </div>
      </section>

      {FAQS[locale].map((group, index) => (
        <Section key={group.title} tone={index % 2 ? "soft" : "default"} eyebrow={`0${index + 1}`} title={group.title}>
          <div className="grid gap-3 md:grid-cols-2">
            {group.items.map((item) => (
              <details key={item.q} className="apple-card group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-foreground">
                  {item.q}
                  <span className="text-xl leading-none text-brand transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="graphite">
        <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{isES ? "¿Tu pregunta no aparece aquí?" : "Is your question not listed here?"}</h2>
            <p className="mt-3 max-w-xl text-graphite-foreground/70">{isES ? "Cuéntanos el caso por WhatsApp o envía una solicitud de diagnóstico." : "Tell us about your situation on WhatsApp or submit a diagnosis request."}</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={whatsappPath(message)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-graphite"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a>
            <a href={diagnosisHref(locale, "faq-page", "general")} className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white">{isES ? "Solicitar diagnóstico" : "Request a diagnosis"}</a>
          </div>
        </div>
      </Section>
    </>
  );
}

export function faqJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS[locale].flatMap((group) => group.items).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
