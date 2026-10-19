import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileActionBar } from "./MobileActionBar";
import { WhatsAppFab } from "./WhatsAppFab";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const en = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <div className="flex min-h-screen flex-col">
      <div role="status" className="border-b border-[#d8d4cd] bg-[#f4f2ed] px-4 py-3 text-center text-[13px] leading-relaxed text-[#393832]">
        <strong className="mr-1 font-semibold">{en ? "Important notice." : "Aviso importante."}</strong>
        {en
          ? "We no longer have access to our previous WhatsApp number. We apologize for the inconvenience. Please contact us by email at "
          : "Ya no tenemos acceso a nuestro número anterior de WhatsApp. Lamentamos las molestias. Puedes escribirnos por correo a "}
        <a className="font-semibold underline underline-offset-2 hover:no-underline" href="mailto:sanmigueldeallendetech@gmail.com">sanmigueldeallendetech@gmail.com</a>.
      </div>
      <Header />
      <main id="main" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileActionBar />
    </div>
  );
}
