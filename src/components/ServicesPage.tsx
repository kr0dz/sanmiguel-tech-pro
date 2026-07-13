import { Link } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  FileCheck2,
  MemoryStick,
  MessageSquareText,
  MonitorSmartphone,
  ShieldCheck,
  Wifi,
  Wrench,
} from "lucide-react";
import { tFor, type Locale } from "@/i18n/dict";
import { Section } from "@/components/ui/Section";

type ServiceGroup = {
  id: string;
  icon: typeof Apple;
  title: string;
  description: string;
  idealFor: string;
  items: string[];
};

function groups(locale: Locale): ServiceGroup[] {
  const isES = locale === "es";
  return [
    {
      id: "apple",
      icon: Apple,
      title: isES ? "Soporte para equipos Apple" : "Apple device support",
      description: isES
        ? "Ayuda independiente para configurar, diagnosticar y optimizar dispositivos Apple sin presentar el servicio como centro autorizado."
        : "Independent help to configure, diagnose and optimize Apple devices without presenting the service as an authorized provider.",
      idealFor: isES
        ? "Mac lentas, errores de macOS, migraciones, respaldos, cuentas y configuración de equipos nuevos."
        : "Slow Macs, macOS errors, migrations, backups, accounts and new-device setup.",
      items: isES
        ? [
            "Diagnóstico de MacBook, iMac y Mac mini",
            "Configuración de iPhone y iPad",
            "Actualización y reinstalación de macOS",
            "Migración entre equipos",
            "Configuración de Apple ID e iCloud",
            "Respaldos y recuperación de información",
            "Optimización de equipos lentos",
            "Upgrades en modelos compatibles",
            "Configuración de equipos Apple nuevos",
          ]
        : [
            "MacBook, iMac and Mac mini diagnosis",
            "iPhone and iPad setup",
            "macOS update and reinstall",
            "Device migration",
            "Apple ID and iCloud setup",
            "Backups and data recovery assessment",
            "Slow-device optimization",
            "Upgrades on compatible models",
            "New Apple device setup",
          ],
    },
    {
      id: "upgrades",
      icon: MemoryStick,
      title: isES ? "Computadoras y upgrades" : "Computers and upgrades",
      description: isES
        ? "Evaluación de rendimiento, mantenimiento y mejoras compatibles para extender la vida útil de laptops y computadoras de escritorio."
        : "Performance assessment, maintenance and compatible improvements to extend the useful life of laptops and desktop computers.",
      idealFor: isES
        ? "Equipos lentos, poco espacio, arranque tardado, congelamientos o necesidades de mayor capacidad."
        : "Slow devices, limited storage, long startup times, freezing or increased-capacity needs.",
      items: isES
        ? [
            "Cambio de disco duro a SSD",
            "Ampliación de memoria RAM",
            "Instalación y reinstalación de Windows",
            "Ensamble y actualización de computadoras",
            "Cambio de fuente, almacenamiento y componentes",
            "Limpieza interna",
            "Mantenimiento preventivo",
            "Diagnóstico de compatibilidad antes de comprar piezas",
            "Optimización de laptops y computadoras de escritorio",
          ]
        : [
            "HDD to SSD upgrade",
            "RAM expansion",
            "Windows installation and reinstallation",
            "Custom PC builds and upgrades",
            "Power supply, storage and component replacement",
            "Internal cleaning",
            "Preventive maintenance",
            "Compatibility check before purchasing parts",
            "Laptop and desktop optimization",
          ],
    },
    {
      id: "software",
      icon: Download,
      title: isES ? "Instalación de programas y software" : "Software and application installation",
      description: isES
        ? "Instalación, actualización y configuración de software legítimo, revisando compatibilidad, licencia, espacio, permisos y requisitos."
        : "Installation, update and configuration of legitimate software after checking compatibility, licensing, storage, permissions and requirements.",
      idealFor: isES
        ? "Computadoras nuevas, programas que no instalan, errores de licencia, drivers y herramientas de trabajo."
        : "New computers, failed installations, licensing errors, drivers and work applications.",
      items: isES
        ? [
            "Microsoft 365 y Office con licencia válida",
            "Zoom, Microsoft Teams y herramientas de videollamada",
            "Navegadores, correo y aplicaciones de productividad",
            "Antivirus, seguridad y actualizaciones",
            "Drivers, impresoras, escáneres y periféricos",
            "Programas de diseño, edición y administración",
            "Configuración de programas en computadoras nuevas",
            "Migración de configuraciones y archivos",
            "Solución de incompatibilidades y errores de instalación",
            "Instalación remota o presencial en San Miguel de Allende",
          ]
        : [
            "Microsoft 365 and Office with a valid license",
            "Zoom, Microsoft Teams and video meeting tools",
            "Browsers, email and productivity applications",
            "Antivirus, security and updates",
            "Drivers, printers, scanners and peripherals",
            "Design, editing and management software",
            "Software setup on new computers",
            "Configuration and file migration",
            "Installation error and compatibility troubleshooting",
            "Remote or on-site installation in San Miguel de Allende",
          ],
    },
    {
      id: isES ? "reparacion" : "repair",
      icon: Wrench,
      title: isES ? "Diagnóstico y reparación" : "Diagnosis and repair",
      description: isES
        ? "Revisión ordenada para identificar si la causa está en el sistema, el almacenamiento, la temperatura, la energía o algún componente."
        : "A structured inspection to identify whether the cause involves the operating system, storage, temperature, power or another component.",
      idealFor: isES
        ? "Equipos que no encienden, pantalla negra, reinicios, errores de arranque, ruido, calor o fallas intermitentes."
        : "Devices that do not power on, black screens, restarts, boot errors, noise, heat or intermittent faults.",
      items: isES
        ? [
            "Equipos que no encienden",
            "Pantalla negra",
            "Sobrecalentamiento",
            "Errores de inicio",
            "Bloqueos y reinicios",
            "Virus y software sospechoso",
            "Fallas de almacenamiento",
            "Problemas de rendimiento",
            "Evaluación para recuperación de archivos",
            "Diagnóstico de fallas de software y hardware",
          ]
        : [
            "Devices that will not power on",
            "Black screen",
            "Overheating",
            "Boot errors",
            "Freezes and restarts",
            "Viruses and suspicious software",
            "Storage failures",
            "Performance issues",
            "File recovery assessment",
            "Software and hardware fault diagnosis",
          ],
    },
    {
      id: isES ? "remoto" : "remote",
      icon: MonitorSmartphone,
      title: isES ? "Soporte remoto" : "Remote support",
      description: isES
        ? "Asistencia mediante una conexión temporal y autorizada cuando el equipo enciende, tiene internet y no necesita abrirse."
        : "Assistance through a temporary, authorized connection when the device powers on, has internet and does not need to be opened.",
      idealFor: isES
        ? "Errores de programas, correo, cuentas, configuraciones, impresoras, actualizaciones y orientación a distancia."
        : "Software errors, email, accounts, settings, printers, updates and assistance from a distance.",
      items: isES
        ? [
            "Solución de errores de software",
            "Configuración de correo",
            "Instalación de aplicaciones",
            "Optimización y actualizaciones",
            "Configuración de cuentas",
            "Conexión remota segura con autorización",
            "Explicación de los cambios realizados",
          ]
        : [
            "Software error troubleshooting",
            "Email setup",
            "Application installation",
            "Optimization and updates",
            "Account setup",
            "Secure remote connection with authorization",
            "Explanation of completed changes",
          ],
    },
    {
      id: "wifi",
      icon: Wifi,
      title: isES ? "Wi-Fi, redes y tecnología del hogar" : "Wi-Fi, networks and home technology",
      description: isES
        ? "Diagnóstico de cobertura, conexión y configuración para que los dispositivos del hogar o la propiedad funcionen de manera más estable."
        : "Coverage, connectivity and setup diagnosis to help devices in a home or property work more reliably.",
      idealFor: isES
        ? "Zonas sin señal, conexiones inestables, routers nuevos, repetidores, impresoras, Smart TV y dispositivos conectados."
        : "Dead zones, unstable connections, new routers, extenders, printers, Smart TVs and connected devices.",
      items: isES
        ? [
            "Diagnóstico de cobertura Wi-Fi",
            "Configuración de routers",
            "Instalación de repetidores",
            "Sistemas Wi-Fi mesh",
            "Configuración de impresoras",
            "Smart TV y streaming",
            "Dispositivos inteligentes",
            "Cámaras y conectividad básica",
            "Organización y protección de respaldos",
          ]
        : [
            "Wi-Fi coverage diagnosis",
            "Router configuration",
            "Range extender installation",
            "Mesh Wi-Fi systems",
            "Printer setup",
            "Smart TVs and streaming",
            "Smart devices",
            "Cameras and basic connectivity",
            "Backup organization and protection",
          ],
    },
    {
      id: isES ? "negocios" : "business",
      icon: Building2,
      title: isES ? "Tecnología para negocios y propiedades" : "Technology for businesses and properties",
      description: isES
        ? "Soporte práctico para operaciones pequeñas y medianas que necesitan un contacto confiable para varias necesidades tecnológicas."
        : "Practical support for small and medium operations that need one reliable contact for different technology needs.",
      idealFor: isES
        ? "Oficinas, hoteles, rentas vacacionales, restaurantes, galerías, estudios y administradores de propiedades."
        : "Offices, hotels, vacation rentals, restaurants, galleries, studios and property managers.",
      items: isES
        ? [
            "Configuración de computadoras de oficina",
            "Correo empresarial",
            "Redes e impresoras",
            "Respaldos",
            "Mantenimiento preventivo",
            "Soporte para hoteles y rentas vacacionales",
            "Configuración tecnológica para huéspedes",
            "Smart TV, streaming y Wi-Fi",
            "Soporte para administradores de propiedades",
            "Páginas web, dominios y herramientas digitales",
            "Planes de soporte programado",
          ]
        : [
            "Office computer setup",
            "Business email",
            "Networks and printers",
            "Backups",
            "Preventive maintenance",
            "Support for hotels and vacation rentals",
            "Guest technology setup",
            "Smart TV, streaming and Wi-Fi",
            "Support for property managers",
            "Websites, domains and digital tools",
            "Scheduled support plans",
          ],
    },
  ];
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const t = tFor(locale);
  const list = groups(locale);
  const diagnosisPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const softwarePath = isES
    ? "/instalacion-de-programas-san-miguel-de-allende"
    : "/en/software-installation-san-miguel-de-allende";

  const included = isES
    ? [
        {
          icon: MessageSquareText,
          title: "Explicación clara",
          text: "Te explicamos el problema, las opciones y las limitaciones sin depender de tecnicismos innecesarios.",
        },
        {
          icon: ShieldCheck,
          title: "Autorización antes de cambios",
          text: "No se instalan programas, piezas ni actualizaciones sin confirmar primero el alcance y el costo.",
        },
        {
          icon: FileCheck2,
          title: "Pruebas y cierre",
          text: "Al finalizar se revisa el resultado y se resume qué se hizo y qué recomendaciones quedan pendientes.",
        },
      ]
    : [
        {
          icon: MessageSquareText,
          title: "Clear explanation",
          text: "We explain the problem, options and limitations without relying on unnecessary technical jargon.",
        },
        {
          icon: ShieldCheck,
          title: "Authorization before changes",
          text: "Software, parts and updates are not installed before the scope and cost are confirmed.",
        },
        {
          icon: FileCheck2,
          title: "Testing and completion",
          text: "At the end, the result is reviewed and we summarize the work completed and any remaining recommendations.",
        },
      ];

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-12">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "SERVICIOS" : "SERVICES"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES
              ? "Soporte técnico integral en San Miguel de Allende"
              : "Complete technical support in San Miguel de Allende"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? "Reparación de computadoras, soporte Apple, upgrades, instalación de programas, Wi-Fi, asistencia remota y tecnología para negocios. Cada caso comienza con una evaluación y una explicación antes de realizar cambios."
              : "Computer repair, Apple support, upgrades, software installation, Wi-Fi, remote assistance and business technology. Every case starts with an assessment and explanation before changes are made."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {list.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="rounded-full border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-brand/60 transition">
                {group.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {list.map((group, index) => {
        const Icon = group.icon;
        return (
          <Section key={group.id} id={group.id} tone={index % 2 === 1 ? "soft" : "default"}>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.35fr]">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand mb-4">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{group.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{group.description}</p>
                <div className="mt-5 rounded-lg border border-border bg-card p-4">
                  <div className="text-xs uppercase tracking-widest text-brand mb-2">
                    {isES ? "ÚTIL PARA" : "USEFUL FOR"}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{group.idealFor}</p>
                </div>
                <Link to={diagnosisPath} className="mt-6 inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium">
                  {t.hero.ctaPrimary}
                </Link>
                {group.id === "software" && (
                  <Link to={softwarePath} className="mt-4 flex items-center gap-2 text-sm font-medium text-brand">
                    {isES ? "Ver información completa sobre instalación de programas" : "View complete software installation information"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {group.id === "apple" && (
                  <p className="mt-6 text-xs text-muted-foreground leading-relaxed">{t.apple.disclaimer}</p>
                )}
                {group.id === "software" && (
                  <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
                    {isES
                      ? "Trabajamos con software legítimo y licencias válidas. No instalamos programas pirateados, cracks ni activadores ilegales."
                      : "We work with legitimate software and valid licenses. We do not install pirated programs, cracks or illegal activators."}
                  </p>
                )}
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 self-start">
                {group.items.map((item) => (
                  <li key={item} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );
      })}

      <Section
        tone="soft"
        eyebrow={isES ? "EN TODOS LOS SERVICIOS" : "IN EVERY SERVICE"}
        title={isES ? "Qué puedes esperar del proceso" : "What you can expect from the process"}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {included.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-brand" />
              <h2 className="mt-4 text-lg font-semibold tracking-tight">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {isES ? "¿No sabes bien qué necesita tu equipo?" : "Not sure what your device needs?"}
            </h2>
            <p className="mt-2 text-graphite-foreground/70 max-w-xl leading-relaxed">
              {isES
                ? "Describe el problema con tus palabras. Te orientamos con una evaluación inicial, opciones realistas y el tipo de atención más adecuado."
                : "Describe the problem in your own words. We will guide you with an initial assessment, realistic options and the most appropriate service mode."}
            </p>
          </div>
          <Link to={diagnosisPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand-soft text-graphite text-sm font-medium">
            {t.hero.ctaPrimary}
          </Link>
        </div>
      </Section>
    </>
  );
}
