import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/dict";
import { SITE, whatsappPath } from "@/lib/site";

const UPDATED_ES = "13 de julio de 2026";
const UPDATED_EN = "July 13, 2026";

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const contactPath = isES ? "/contacto" : "/en/contact";
  const privacyMessage = isES
    ? "Hola San Miguel Tech, quiero realizar una solicitud relacionada con mis datos personales."
    : "Hi San Miguel Tech, I would like to make a request regarding my personal information.";

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-12">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "PRIVACIDAD" : "PRIVACY"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES ? "Aviso de privacidad" : "Privacy policy"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? `Este aviso explica cómo ${SITE.name} utiliza la información que compartes al solicitar diagnóstico, soporte remoto, una visita o cualquier servicio técnico.`
              : `This policy explains how ${SITE.name} uses the information you share when requesting a diagnosis, remote support, an on-site visit or another technical service.`}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {isES ? `Última actualización: ${UPDATED_ES}.` : `Last updated: ${UPDATED_EN}.`}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 max-w-4xl">
          <LegalBlock title={isES ? "1. Información que podemos recibir" : "1. Information we may receive"}>
            <p>
              {isES
                ? "Podemos recibir tu nombre, número de WhatsApp, correo opcional, idioma preferido, ubicación aproximada o colonia, información del equipo, marca, modelo, sistema operativo, descripción del problema, fotografías, capturas de pantalla, modalidad solicitada y fecha preferida."
                : "We may receive your name, WhatsApp number, optional email address, preferred language, approximate location or neighborhood, device information, brand, model, operating system, problem description, photos, screenshots, requested service mode and preferred date."}
            </p>
            <p>
              {isES
                ? "No debes enviar contraseñas, códigos de verificación, datos bancarios, identificaciones completas ni otra información sensible mediante el formulario o WhatsApp."
                : "Do not send passwords, verification codes, banking information, complete identity documents or other sensitive information through the form or WhatsApp."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "2. Para qué utilizamos la información" : "2. How we use the information"}>
            <p>
              {isES
                ? "La información se utiliza para identificar tu solicitud, evaluar el problema, comunicarnos contigo, coordinar una cita, preparar un diagnóstico o presupuesto, prestar el servicio autorizado, documentar el trabajo y atender aclaraciones posteriores."
                : "The information is used to identify your request, assess the problem, communicate with you, schedule an appointment, prepare a diagnosis or quote, provide the authorized service, document the work and address follow-up questions."}
            </p>
            <p>
              {isES
                ? "No vendemos tus datos ni los utilizamos para crear perfiles publicitarios ajenos al servicio solicitado."
                : "We do not sell your information or use it to create advertising profiles unrelated to the service you requested."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "3. Proveedores tecnológicos" : "3. Technology providers"}>
            <p>
              {isES
                ? "El sitio utiliza servicios tecnológicos necesarios para funcionar, como alojamiento, base de datos, seguridad, formularios y mensajería. Estos proveedores pueden procesar información técnica o de la solicitud únicamente para prestar su infraestructura y de acuerdo con sus propios términos y medidas de seguridad."
                : "The website uses technology services required for operation, including hosting, database, security, forms and messaging. These providers may process technical or request information only to provide their infrastructure and according to their own terms and security measures."}
            </p>
            <p>
              {isES
                ? "También podemos conservar registros técnicos mínimos para prevenir abuso, investigar errores y proteger el sitio."
                : "We may also retain limited technical records to prevent abuse, investigate errors and protect the website."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "4. Soporte remoto y acceso al equipo" : "4. Remote support and device access"}>
            <p>
              {isES
                ? "El acceso remoto se realiza únicamente con tu autorización expresa. Tú puedes ver la sesión y finalizarla en cualquier momento. El acceso se cierra al terminar y no se mantiene una conexión permanente sin un acuerdo específico."
                : "Remote access is performed only with your express authorization. You can view and end the session at any time. Access is closed when the session finishes, and no permanent connection is maintained without a specific agreement."}
            </p>
            <p>
              {isES
                ? "Cuando sea necesario iniciar sesión en una cuenta, se recomienda que el cliente introduzca directamente la contraseña y active nuevamente sus medidas de seguridad después del servicio."
                : "When signing in to an account is necessary, the client should enter the password directly and restore or review security settings after service."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "5. Conservación y eliminación" : "5. Retention and deletion"}>
            <p>
              {isES
                ? "Conservamos la información durante el tiempo razonablemente necesario para atender la solicitud, prestar el servicio, resolver aclaraciones, mantener registros administrativos y cumplir obligaciones aplicables. Después puede eliminarse, anonimizarse o conservarse únicamente cuando exista una razón legítima para hacerlo."
                : "We retain information for the time reasonably necessary to handle the request, provide the service, resolve follow-up questions, maintain administrative records and meet applicable obligations. It may then be deleted, anonymized or retained only when there is a legitimate reason to do so."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "6. Tus solicitudes de privacidad" : "6. Your privacy requests"}>
            <p>
              {isES
                ? "Puedes solicitar información sobre los datos asociados a tu caso, pedir una corrección o solicitar su eliminación cuando sea procedente. Para localizar la solicitud, indica tu nombre y, si lo tienes, el número de servicio."
                : "You may request information about data associated with your case, ask for a correction or request deletion when appropriate. To locate the request, provide your name and, if available, the service request number."}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={whatsappPath(privacyMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-brand text-brand-foreground text-sm font-medium">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
              <Link to={contactPath} className="inline-flex items-center justify-center h-10 px-4 rounded-md border border-border text-sm font-medium hover:bg-accent/50 transition">
                {isES ? "Ver opciones de contacto" : "View contact options"}
              </Link>
            </div>
          </LegalBlock>
        </div>
      </Section>
    </>
  );
}

export function TermsPage({ locale }: { locale: Locale }) {
  const isES = locale === "es";
  const diagnosisPath = isES ? "/solicitar-diagnostico" : "/en/request-diagnosis";

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page pt-14 md:pt-20 pb-12">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand mb-3">
            {isES ? "CONDICIONES DEL SERVICIO" : "SERVICE CONDITIONS"}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            {isES ? "Términos del servicio" : "Terms of service"}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {isES
              ? "Estas condiciones explican de forma general cómo se evalúan, autorizan y prestan los servicios de San Miguel Tech. Los detalles específicos se confirman antes de comenzar cada trabajo."
              : "These terms provide a general explanation of how San Miguel Tech services are assessed, authorized and delivered. Specific details are confirmed before each job begins."}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {isES ? `Última actualización: ${UPDATED_ES}.` : `Last updated: ${UPDATED_EN}.`}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 max-w-4xl">
          <LegalBlock title={isES ? "1. Evaluación y autorización" : "1. Assessment and authorization"}>
            <p>
              {isES
                ? "La información enviada por internet permite una evaluación inicial, pero no siempre sustituye una revisión física. No se realizan reparaciones, instalaciones, borrados, reinstalaciones, upgrades ni compras de piezas sin autorización del cliente."
                : "Information submitted online supports an initial assessment but does not always replace a physical inspection. Repairs, installations, data erasure, reinstalls, upgrades and parts purchases are not performed without client authorization."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "2. Diagnóstico, presupuesto y pagos" : "2. Diagnosis, quotes and payment"}>
            <p>
              {isES
                ? "El costo del diagnóstico, servicio, visita, piezas, licencias y otros gastos se confirma antes de realizar el trabajo correspondiente. Una estimación puede cambiar si durante las pruebas aparece una falla adicional; en ese caso se solicita una nueva autorización."
                : "Diagnosis, service, visit, parts, licenses and other costs are confirmed before the related work is performed. An estimate may change if testing reveals an additional fault; in that case, new authorization is requested."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "3. Información, respaldos y recuperación" : "3. Data, backups and recovery"}>
            <p>
              {isES
                ? "El cliente debe informar si el equipo contiene información importante y realizar un respaldo cuando sea posible. Aunque se toman precauciones razonables, ningún proceso de reparación, actualización, migración o recuperación garantiza la conservación o recuperación total de los datos."
                : "The client must disclose whether a device contains important information and create a backup when possible. Although reasonable precautions are taken, no repair, update, migration or recovery process guarantees complete preservation or recovery of data."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "4. Piezas, compatibilidad y software" : "4. Parts, compatibility and software"}>
            <p>
              {isES
                ? "Los upgrades y reemplazos dependen de la compatibilidad del modelo. No se recomienda comprar piezas antes de una verificación. Las licencias de software, suscripciones y cuentas pertenecen al cliente. No se instala software pirateado, cracks ni activadores ilegales."
                : "Upgrades and replacements depend on model compatibility. Parts should not be purchased before verification. Software licenses, subscriptions and accounts belong to the client. Pirated software, cracks and illegal activators are not installed."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "5. Servicio remoto y visitas" : "5. Remote and on-site service"}>
            <p>
              {isES
                ? "El soporte remoto requiere conexión estable, autorización y la presencia o disponibilidad del cliente. Las visitas se programan según zona y disponibilidad. Si el problema no puede resolverse en la modalidad elegida, se propondrá una revisión física u otra alternativa."
                : "Remote support requires a stable connection, authorization and the client's presence or availability. On-site visits are scheduled according to area and availability. If the problem cannot be solved through the selected mode, a physical inspection or another alternative may be proposed."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "6. Resultados y limitaciones" : "6. Results and limitations"}>
            <p>
              {isES
                ? "El objetivo es resolver o reducir el problema identificado y explicar el trabajo realizado. Algunos equipos pueden presentar daños previos, desgaste, fallas intermitentes, obsolescencia o restricciones del fabricante que limitan el resultado. Estas condiciones se comunicarán cuando sean detectadas."
                : "The goal is to solve or reduce the identified problem and explain the work completed. Some devices may have prior damage, wear, intermittent faults, obsolescence or manufacturer restrictions that limit the result. These conditions will be communicated when detected."}
            </p>
          </LegalBlock>

          <LegalBlock title={isES ? "7. Servicio técnico independiente" : "7. Independent technology service"}>
            <p>
              {isES
                ? `${SITE.name} es un servicio técnico independiente y no está afiliado, patrocinado ni autorizado por Apple, Microsoft u otros fabricantes, salvo que se indique expresamente lo contrario.`
                : `${SITE.name} is an independent technology service and is not affiliated with, sponsored by or authorized by Apple, Microsoft or other manufacturers unless expressly stated otherwise.`}
            </p>
          </LegalBlock>

          <div className="pt-2">
            <Link to={diagnosisPath} className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-brand text-brand-foreground text-sm font-medium">
              {isES ? "Solicitar diagnóstico" : "Request a diagnosis"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
