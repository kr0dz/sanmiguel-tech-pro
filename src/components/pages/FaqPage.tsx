import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { whatsappPath } from "@/lib/site";

type FaqItem = { q: string; a: string };
type FaqGroup = { title: string; items: FaqItem[] };

const FAQS: Record<Locale, FaqGroup[]> = {
  es: [
    {
      title: "Equipos y servicios",
      items: [
        {
          q: "¿Qué tipos de equipos atienden?",
          a: "Atendemos computadoras de escritorio y laptops Windows, MacBook, iMac, Mac mini, iPhone, iPad, impresoras, routers, redes Wi-Fi y algunos dispositivos inteligentes. La viabilidad depende del modelo, la falla y la disponibilidad de piezas o software compatible.",
        },
        {
          q: "¿Atienden equipos Apple?",
          a: "Sí. Podemos ayudar con diagnóstico, configuración, optimización, actualizaciones, migración de información, respaldos y algunos upgrades compatibles en MacBook, iMac y Mac mini, además de configuración de iPhone y iPad.",
        },
        {
          q: "¿Son un centro autorizado por Apple?",
          a: "No. San Miguel Tech es un servicio técnico independiente y no está afiliado a Apple ni se presenta como centro autorizado. Cuando un caso requiere servicio oficial o una reparación especializada, se explica con claridad.",
        },
        {
          q: "¿Pueden mejorar una computadora lenta?",
          a: "En muchos casos sí. Primero se revisan el almacenamiento, la memoria, el sistema operativo, los programas de inicio, la temperatura y el estado general. La solución puede incluir optimización, limpieza, cambio a SSD o ampliación de RAM, siempre que el equipo sea compatible.",
        },
        {
          q: "¿Instalan SSD, memoria RAM u otros componentes?",
          a: "Sí, después de verificar compatibilidad física y técnica. No recomendamos comprar piezas antes de revisar el modelo exacto, porque no todos los equipos permiten upgrades y una pieza incompatible puede generar gastos innecesarios.",
        },
      ],
    },
    {
      title: "Programas, sistemas y soporte remoto",
      items: [
        {
          q: "¿Instalan programas en Windows y Mac?",
          a: "Sí. Instalamos y configuramos software legítimo, versiones gratuitas oficiales y programas de código abierto. Para programas de pago, el cliente debe contar con una licencia válida o suscripción oficial.",
        },
        {
          q: "¿Qué programas pueden instalar?",
          a: "Podemos ayudar con Microsoft 365 y Office, Zoom, Teams, navegadores, correo, herramientas PDF, antivirus, drivers, impresoras, programas de diseño, edición, productividad y aplicaciones administrativas, siempre que sean compatibles con el equipo.",
        },
        {
          q: "¿Instalan programas pirateados o activadores?",
          a: "No. No instalamos software pirateado, cracks, activadores ilegales ni herramientas diseñadas para evadir licencias. Trabajamos con fuentes oficiales, licencias válidas, software gratuito legítimo o soluciones de código abierto.",
        },
        {
          q: "¿Ofrecen soporte remoto?",
          a: "Sí. El soporte remoto es útil para errores de software, instalación de programas, correo, cuentas, impresoras, configuración y optimización. La conexión se realiza únicamente con autorización del cliente y se cierra al terminar la sesión.",
        },
        {
          q: "¿Cuándo no se puede resolver de forma remota?",
          a: "Cuando el equipo no enciende, no tiene conexión estable, presenta daño físico, sobrecalentamiento, fallas de almacenamiento o requiere abrirse, normalmente es necesaria una revisión presencial.",
        },
      ],
    },
    {
      title: "Citas, costos y proceso",
      items: [
        {
          q: "¿Realizan visitas a domicilio?",
          a: "Sí, mediante cita y según la zona, el tipo de problema y la disponibilidad. Las visitas son especialmente útiles para Wi-Fi, routers, impresoras, Smart TV, oficinas, hoteles y rentas vacacionales.",
        },
        {
          q: "¿Cuánto cuesta el servicio?",
          a: "El costo depende del tipo de equipo, la complejidad, la modalidad y las piezas o licencias necesarias. Antes de realizar cambios se confirma el costo del diagnóstico cuando aplique y se presenta una opción de solución o presupuesto.",
        },
        {
          q: "¿El diagnóstico tiene costo?",
          a: "Puede tenerlo cuando se requiere revisión física, desarmado, pruebas prolongadas o investigación específica. El importe se confirma antes de recibir o revisar el equipo.",
        },
        {
          q: "¿Cuánto tardan en responder o reparar?",
          a: "La respuesta y el tiempo de servicio dependen de la carga de trabajo, la complejidad y la disponibilidad de piezas. Por WhatsApp se confirma la disponibilidad actual y una estimación realista antes de comenzar.",
        },
        {
          q: "¿Debo comprar las piezas antes de la revisión?",
          a: "No es recomendable. Primero conviene confirmar el modelo exacto, la compatibilidad y la causa del problema. Así se evitan compras incorrectas o upgrades que no resolverán la falla.",
        },
      ],
    },
    {
      title: "Datos, negocios y cobertura",
      items: [
        {
          q: "¿Pueden recuperar archivos?",
          a: "La posibilidad depende del estado del disco o dispositivo. Se realiza una evaluación inicial y se explica qué es viable. No se puede garantizar una recuperación completa, especialmente cuando existe daño físico o el almacenamiento ha sido sobrescrito.",
        },
        {
          q: "¿Cómo protegen mis datos?",
          a: "No se solicitan contraseñas sensibles mediante formularios, no se realizan cambios sin autorización y los accesos remotos se cierran al finalizar. El cliente debe informar si el equipo contiene información importante y conservar respaldos cuando sea posible.",
        },
        {
          q: "¿Trabajan con negocios, hoteles y rentas vacacionales?",
          a: "Sí. Podemos apoyar con computadoras de oficina, correo, Wi-Fi, impresoras, Smart TV, dispositivos para huéspedes, mantenimiento preventivo, documentación básica y soporte programado para administradores de propiedades.",
        },
        {
          q: "¿Qué zonas de San Miguel de Allende atienden?",
          a: "Se ofrece soporte remoto y atención presencial dentro de San Miguel de Allende. La cobertura de visitas a domicilio se confirma al agendar, de acuerdo con la colonia o zona.",
        },
        {
          q: "¿Atienden clientes en inglés?",
          a: "Sí. El diagnóstico, la comunicación y el soporte pueden realizarse completamente en inglés o en español.",
        },
      ],
    },
  ],
  en: [
    {
      title: "Devices and services",
      items: [
        {
          q: "What types of devices do you service?",
          a: "We service Windows desktops and laptops, MacBook, iMac, Mac mini, iPhone, iPad, printers, routers, Wi-Fi networks and selected smart devices. Feasibility depends on the model, the problem and the availability of compatible parts or software.",
        },
        {
          q: "Do you service Apple devices?",
          a: "Yes. We can help with diagnosis, setup, optimization, updates, data migration, backups and selected compatible upgrades for MacBook, iMac and Mac mini, as well as iPhone and iPad setup.",
        },
        {
          q: "Are you an Apple Authorized Service Provider?",
          a: "No. San Miguel Tech is an independent technology service and is not affiliated with Apple or presented as an authorized provider. When a case requires official service or a specialist repair, we explain that clearly.",
        },
        {
          q: "Can you make a slow computer faster?",
          a: "Often, yes. We first review storage, memory, the operating system, startup programs, temperature and the general condition. A solution may include optimization, cleaning, an SSD upgrade or additional RAM when the device is compatible.",
        },
        {
          q: "Do you install SSDs, RAM or other components?",
          a: "Yes, after checking physical and technical compatibility. We do not recommend buying parts before confirming the exact model, because not every device supports upgrades and incompatible parts can create unnecessary expense.",
        },
      ],
    },
    {
      title: "Software, systems and remote support",
      items: [
        {
          q: "Do you install software on Windows and Mac?",
          a: "Yes. We install and configure legitimate software, official free versions and open-source programs. Paid software requires a valid customer license or official subscription.",
        },
        {
          q: "What software can you install?",
          a: "We can help with Microsoft 365 and Office, Zoom, Teams, browsers, email, PDF tools, antivirus, drivers, printers, design and editing programs, productivity software and administrative applications when they are compatible with the device.",
        },
        {
          q: "Do you install pirated software or activators?",
          a: "No. We do not install pirated software, cracks, illegal activators or tools designed to bypass licensing. We work with official sources, valid licenses, legitimate free software or open-source alternatives.",
        },
        {
          q: "Do you offer remote support?",
          a: "Yes. Remote support is useful for software errors, program installation, email, accounts, printers, setup and optimization. A remote connection is established only with the client's authorization and is closed at the end of the session.",
        },
        {
          q: "When can a problem not be solved remotely?",
          a: "When a device does not power on, lacks a stable connection, has physical damage, overheats, has a storage failure or needs to be opened, an in-person inspection is usually required.",
        },
      ],
    },
    {
      title: "Appointments, pricing and process",
      items: [
        {
          q: "Do you make house calls?",
          a: "Yes, by appointment and depending on the area, type of problem and availability. On-site visits are especially useful for Wi-Fi, routers, printers, Smart TVs, offices, hotels and vacation rentals.",
        },
        {
          q: "How much does the service cost?",
          a: "Pricing depends on the device, complexity, service mode and any required parts or licenses. Before changes are made, we confirm any applicable diagnosis fee and present a proposed solution or quote.",
        },
        {
          q: "Is there a diagnosis fee?",
          a: "There may be a fee when physical inspection, disassembly, extended testing or specific research is required. The amount is confirmed before the device is received or inspected.",
        },
        {
          q: "How quickly do you respond or complete repairs?",
          a: "Response and service times depend on current workload, complexity and parts availability. We confirm current availability and a realistic estimate through WhatsApp before beginning.",
        },
        {
          q: "Should I buy parts before the inspection?",
          a: "It is not recommended. It is better to confirm the exact model, compatibility and cause of the problem first, avoiding incorrect purchases or upgrades that will not solve the issue.",
        },
      ],
    },
    {
      title: "Data, businesses and coverage",
      items: [
        {
          q: "Can you recover files?",
          a: "Feasibility depends on the condition of the drive or device. We provide an initial assessment and explain what may be possible. Complete recovery cannot be guaranteed, especially when there is physical damage or storage has been overwritten.",
        },
        {
          q: "How do you protect my data?",
          a: "Sensitive passwords are not requested through forms, no changes are made without authorization, and remote sessions are closed when finished. Clients should identify devices containing important data and keep backups whenever possible.",
        },
        {
          q: "Do you work with businesses, hotels and vacation rentals?",
          a: "Yes. We can assist with office computers, email, Wi-Fi, printers, Smart TVs, guest devices, preventive maintenance, basic documentation and scheduled support for property managers.",
        },
        {
          q: "What areas of San Miguel de Allende do you cover?",
          a: "Remote support and in-person service are available within San Miguel de Allende. On-site coverage is confirmed when scheduling based on the neighborhood or area.",
        },
        {
          q: "Is full service available in English?",
          a: "Yes. Diagnosis, communication and technical support can be provided entirely in English or Spanish.",
        },
      ],
    },
  ],
};

export function FaqPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const diagnosisPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const whatsappMessage = isES
    ? "Hola San Miguel Tech, tengo una pregunta sobre sus servicios."
    : "Hi San Miguel Tech, I have a question about your services.";

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-14">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">FAQ</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES
              ? "Preguntas frecuentes sobre soporte técnico en San Miguel de Allende"
              : "Frequently asked questions about tech support in San Miguel de Allende"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? "Respuestas claras sobre equipos, programas, citas, costos, privacidad, soporte remoto y atención para negocios."
              : "Clear answers about devices, software, appointments, pricing, privacy, remote support and services for businesses."}
          </p>
        </div>
      </section>

      {FAQS[locale].map((group, index) => (
        <Section key={group.title} tone={index % 2 === 1 ? "soft" : "default"} eyebrow={isES ? "INFORMACIÓN" : "INFORMATION"} title={group.title}>
          <div className="divide-y divide-border rounded-xl border border-border bg-card">
            {group.items.map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-foreground">
                  {item.q}
                  <span className="ml-4 text-brand transition group-open:rotate-45 text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-4xl">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="graphite">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {isES ? "¿Tu pregunta no aparece aquí?" : "Did not find your question?"}
            </h2>
            <p className="mt-2 text-graphite-foreground/70 max-w-xl">
              {isES
                ? "Escríbenos con el modelo del equipo y una descripción breve del problema."
                : "Message us with the device model and a brief description of the problem."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappPath(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-soft text-graphite text-sm font-medium">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </a>
            <Link to={diagnosisPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-white/20 text-graphite-foreground text-sm font-medium">
              {isES ? "Solicitar diagnóstico" : "Request a diagnosis"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export function faqJsonLd(locale: Locale) {
  const items = FAQS[locale].flatMap((group) => group.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
