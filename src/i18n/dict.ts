export type Locale = "es" | "en";

export const DICT = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      apple: "Apple",
      upgrades: "Upgrades",
      software: "Programas",
      business: "Negocios",
      remote: "Soporte remoto",
      about: "Nosotros",
      contact: "Contacto",
      cta: "Solicitar diagnóstico",
      lang: "EN",
    },
    mobileBar: { call: "Llamar", whatsapp: "WhatsApp", diagnose: "Diagnóstico" },
    hero: {
      eyebrow: "SOLUCIONES TECNOLÓGICAS LOCALES",
      h1: "Técnico en San Miguel de Allende",
      lede:
        "Reparación, upgrades, instalación de programas y soporte tecnológico para equipos Apple, computadoras Windows, hogares y negocios. Atención remota, en taller y a domicilio.",
      ctaPrimary: "Solicitar diagnóstico",
      ctaWhatsapp: "Escribir por WhatsApp",
      trust: [
        "Atención personalizada",
        "Diagnóstico claro",
        "Soporte remoto y presencial",
        "Soluciones para Apple y Windows",
      ],
    },
    problems: {
      title: "¿Qué necesitas resolver?",
      lede: "Toca el problema que más se parece al tuyo y te guiamos desde ahí.",
      items: [
        "Mi computadora está muy lenta",
        "Mi Mac no enciende o presenta errores",
        "Necesito más almacenamiento o memoria",
        "Quiero instalar un SSD",
        "Perdí archivos importantes",
        "Mi Wi-Fi no llega a toda la casa",
        "Mi impresora no funciona",
        "Necesito instalar o configurar programas",
        "Necesito configurar un equipo nuevo",
        "Tengo virus o ventanas sospechosas",
        "Necesito soporte tecnológico para mi negocio",
      ],
    },
    modes: {
      title: "Tres formas de atenderte",
      remote: {
        title: "Soporte remoto",
        text: "Para software, instalación de programas, configuración, cuentas y errores que no requieren abrir el equipo.",
      },
      onsite: {
        title: "Visita a domicilio",
        text: "Para redes, impresoras, instalaciones y problemas en hogares o negocios.",
      },
      shop: {
        title: "Revisión de equipo",
        text: "Para reparaciones, mantenimiento, limpieza y upgrades físicos.",
      },
    },
    how: {
      title: "Cómo funciona",
      steps: [
        {
          t: "Cuéntanos el problema",
          d: "Envía el modelo del equipo, una descripción y fotografías.",
        },
        {
          t: "Recibe una evaluación inicial",
          d: "Determinamos si puede resolverse remotamente o requiere revisión física.",
        },
        {
          t: "Aprueba el diagnóstico o presupuesto",
          d: "Explicamos qué necesita el equipo antes de realizar cambios.",
        },
        {
          t: "Recupera tu tecnología funcionando",
          d: "Entregamos el equipo y explicamos el trabajo realizado.",
        },
      ],
    },
    apple: {
      title: "¿Necesitas ayuda con tu Mac, iPhone o iPad?",
      lede:
        "Recibe atención personalizada para configurar, optimizar, actualizar o diagnosticar tus dispositivos Apple en San Miguel de Allende.",
      cta: "Solicitar diagnóstico Apple",
      disclaimer:
        "Servicio técnico independiente. San Miguel Tech no está afiliado ni es un centro de servicio autorizado por Apple.",
    },
    upgrades: {
      title: "Antes de comprar una computadora nueva, revisemos si la actual puede mejorar.",
      before: ["Inicio lento", "Poco almacenamiento", "Programas que se congelan", "Equipo que parece obsoleto"],
      after: ["Inicio más rápido", "Mayor capacidad", "Mejor rendimiento", "Vida útil extendida"],
      cta: "Consultar compatibilidad de upgrade",
    },
    business: {
      title: "Soporte tecnológico para negocios que no pueden detenerse",
      lede:
        "Ayuda para oficinas, hoteles, rentas vacacionales, restaurantes, galerías, estudios y administradores de propiedades en San Miguel de Allende.",
      benefits: [
        "Un solo contacto para diferentes necesidades tecnológicas",
        "Atención en español e inglés",
        "Mantenimiento preventivo",
        "Soporte remoto",
        "Visitas programadas",
        "Documentación básica de equipos y configuraciones",
      ],
      cta: "Solicitar evaluación para mi negocio",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Atienden equipos Apple?", a: "Sí. Tenemos experiencia trabajando con MacBook, iMac, Mac mini, iPhone y iPad. Se ofrece atención especializada, aunque no somos un centro de servicio autorizado por Apple." },
        { q: "¿Son un centro autorizado por Apple?", a: "No. San Miguel Tech es un servicio técnico independiente y no está afiliado a Apple." },
        { q: "¿Pueden mejorar una computadora lenta?", a: "En muchos casos sí, mediante limpieza, optimización de sistema, upgrade a SSD o ampliación de memoria RAM. Se confirma la compatibilidad antes de comenzar." },
        { q: "¿Instalan SSD y memoria RAM?", a: "Sí, después de verificar que la pieza es compatible con tu equipo." },
        { q: "¿Instalan programas en Windows y Mac?", a: "Sí. Instalamos y configuramos software legítimo, versiones gratuitas oficiales o programas de código abierto. Para software de pago, el cliente debe contar con una licencia válida." },
        { q: "¿Ofrecen soporte remoto?", a: "Sí, mediante una conexión remota segura y con tu consentimiento en todo momento." },
        { q: "¿Realizan visitas a domicilio?", a: "Sí, dentro de San Miguel de Allende. Se agenda una ventana de tiempo previamente." },
        { q: "¿Trabajan con negocios y rentas vacacionales?", a: "Sí. Contamos con esquemas de soporte recurrente para oficinas, hoteles y rentas vacacionales." },
        { q: "¿Pueden recuperar mis archivos?", a: "La posibilidad depende del estado del dispositivo. Se realiza un diagnóstico previo y se explica qué es viable antes de comenzar." },
        { q: "¿Debo comprar las piezas antes del diagnóstico?", a: "No. Recomendamos primero un diagnóstico de compatibilidad para evitar compras innecesarias." },
        { q: "¿Cómo protegen mis datos?", a: "No se realizan cambios sin autorización, no se solicitan contraseñas sensibles y los accesos remotos se cierran al terminar la sesión." },
        { q: "¿El diagnóstico tiene costo?", a: "Se confirma antes de comenzar el servicio, según el tipo de revisión requerida." },
        { q: "¿Qué zonas de San Miguel de Allende atienden?", a: "Centro y colonias dentro de San Miguel de Allende. Consulta zonas específicas al agendar." },
        { q: "¿Atienden clientes en inglés?", a: "Yes. We offer full technical support in English." },
      ],
    },
    footer: {
      tagline: "Técnico en San Miguel de Allende",
      rights: "Todos los derechos reservados.",
      independent:
        "Servicio técnico independiente. No afiliado a Apple ni a ningún fabricante.",
      legal: { privacy: "Aviso de privacidad", terms: "Términos del servicio" },
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      apple: "Apple",
      upgrades: "Upgrades",
      software: "Software",
      business: "Business",
      remote: "Remote support",
      about: "About",
      contact: "Contact",
      cta: "Request a diagnosis",
      lang: "ES",
    },
    mobileBar: { call: "Call", whatsapp: "WhatsApp", diagnose: "Diagnosis" },
    hero: {
      eyebrow: "LOCAL TECHNOLOGY SOLUTIONS",
      h1: "Computer technician in San Miguel de Allende",
      lede:
        "Repairs, upgrades, software installation and tech support for Apple devices, Windows computers, homes and businesses. Remote, in-shop and on-site.",
      ctaPrimary: "Request a diagnosis",
      ctaWhatsapp: "Message on WhatsApp",
      trust: [
        "Personal attention",
        "Clear diagnosis",
        "Remote and on-site support",
        "Apple and Windows solutions",
      ],
    },
    problems: {
      title: "What do you need to fix?",
      lede: "Tap the problem closest to yours and we'll take it from there.",
      items: [
        "My computer is very slow",
        "My Mac won't turn on or shows errors",
        "I need more storage or memory",
        "I want to install an SSD",
        "I lost important files",
        "My Wi-Fi doesn't reach the whole house",
        "My printer doesn't work",
        "I need software installed or configured",
        "I need to set up a new device",
        "I have viruses or suspicious pop-ups",
        "I need tech support for my business",
      ],
    },
    modes: {
      title: "Three ways we help",
      remote: {
        title: "Remote support",
        text: "For software installation, configuration, accounts and errors that don't require opening the device.",
      },
      onsite: {
        title: "On-site visit",
        text: "For networks, printers, installations and issues at homes or businesses.",
      },
      shop: {
        title: "In-shop service",
        text: "For repairs, maintenance, cleaning and physical upgrades.",
      },
    },
    how: {
      title: "How it works",
      steps: [
        { t: "Tell us the problem", d: "Send the device model, a description and photos." },
        { t: "Get an initial evaluation", d: "We determine if it can be solved remotely or needs physical inspection." },
        { t: "Approve the diagnosis or quote", d: "We explain what the device needs before making changes." },
        { t: "Get your tech working again", d: "We return the device and explain the work done." },
      ],
    },
    apple: {
      title: "Need help with your Mac, iPhone or iPad?",
      lede:
        "Personal, experienced attention to configure, optimize, update or diagnose your Apple devices in San Miguel de Allende.",
      cta: "Request Apple diagnosis",
      disclaimer:
        "Independent tech service. San Miguel Tech is not affiliated with Apple nor an Apple Authorized Service Provider.",
    },
    upgrades: {
      title: "Before buying a new computer, let's see if yours can be improved.",
      before: ["Slow boot", "Little storage", "Programs that freeze", "Feels obsolete"],
      after: ["Faster boot", "More capacity", "Better performance", "Extended lifespan"],
      cta: "Check upgrade compatibility",
    },
    business: {
      title: "Tech support for businesses that can't stop",
      lede:
        "Help for offices, hotels, vacation rentals, restaurants, galleries, studios and property managers in San Miguel de Allende.",
      benefits: [
        "One contact for different tech needs",
        "Service in English and Spanish",
        "Preventive maintenance",
        "Remote support",
        "Scheduled visits",
        "Basic documentation of equipment and configurations",
      ],
      cta: "Request an evaluation for my business",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Do you service Apple devices?", a: "Yes. We have experience with MacBook, iMac, Mac mini, iPhone and iPad. We offer specialized attention, although we are not an Apple Authorized Service Provider." },
        { q: "Are you an Apple Authorized Service Provider?", a: "No. San Miguel Tech is an independent tech service and is not affiliated with Apple." },
        { q: "Can you make a slow computer faster?", a: "Often yes — with cleaning, system optimization, SSD upgrade or RAM expansion. Compatibility is confirmed before starting." },
        { q: "Do you install SSDs and RAM?", a: "Yes, after verifying the part is compatible with your device." },
        { q: "Do you install software on Windows and Mac?", a: "Yes. We install and configure legitimate software, official free versions or open-source programs. Paid software requires a valid customer license." },
        { q: "Do you offer remote support?", a: "Yes, through a secure remote connection and always with your consent." },
        { q: "Do you make house calls?", a: "Yes, within San Miguel de Allende. A time window is scheduled in advance." },
        { q: "Do you work with businesses and vacation rentals?", a: "Yes. We offer recurring support plans for offices, hotels and vacation rentals." },
        { q: "Can you recover my files?", a: "It depends on the state of the device. We diagnose first and explain what is feasible before starting." },
        { q: "Should I buy the parts before the diagnosis?", a: "No. We recommend a compatibility diagnosis first to avoid unnecessary purchases." },
        { q: "How do you protect my data?", a: "No changes are made without authorization, sensitive passwords are not requested, and remote access is closed when the session ends." },
        { q: "Is there a fee for the diagnosis?", a: "It is confirmed before starting the service, depending on the required inspection." },
        { q: "What areas of San Miguel de Allende do you cover?", a: "Downtown and surrounding neighborhoods. Ask about specific areas when scheduling." },
        { q: "Do you support clients in English?", a: "Yes. Full technical support is available in English." },
      ],
    },
    footer: {
      tagline: "Computer technician in San Miguel de Allende",
      rights: "All rights reserved.",
      independent:
        "Independent tech service. Not affiliated with Apple or any manufacturer.",
      legal: { privacy: "Privacy policy", terms: "Terms of service" },
    },
  },
} as const;

export function tFor(locale: Locale) {
  return DICT[locale];
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function alternatePath(locale: Locale, pathname: string): string {
  const pairs: Record<string, string> = {
    "/": "/en",
    "/servicios": "/en/services",
    "/instalacion-de-programas-san-miguel-de-allende": "/en/software-installation-san-miguel-de-allende",
    "/solicitar-diagnostico": "/en/request-diagnosis",
    "/nosotros": "/en/about",
    "/contacto": "/en/contact",
    "/preguntas-frecuentes": "/en/faq",
    "/aviso-de-privacidad": "/en/privacy",
    "/terminos-del-servicio": "/en/terms",
  };

  if (locale === "es") return pairs[pathname] ?? "/en";
  const reverse = Object.fromEntries(Object.entries(pairs).map(([es, en]) => [en, es]));
  return reverse[pathname] ?? "/";
}
