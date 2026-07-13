import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileActionBar } from "./MobileActionBar";
import { WhatsAppFab } from "./WhatsAppFab";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
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
