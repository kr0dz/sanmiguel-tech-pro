import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  tone = "default",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lede?: string;
  children?: ReactNode;
  tone?: "default" | "graphite" | "soft";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-14 sm:py-16 md:py-24",
        tone === "graphite" && "bg-graphite text-graphite-foreground",
        tone === "soft" && "bg-[#f5f5f7]",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || title || lede) && (
          <div className="mb-8 max-w-3xl md:mb-12">
            {eyebrow && (
              <div className={cn("mb-3 text-[11px] font-semibold uppercase tracking-[0.2em]", tone === "graphite" ? "text-brand-soft" : "text-brand")}>
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className={cn("text-[32px] font-semibold leading-[1.05] sm:text-4xl md:text-[48px]", tone === "graphite" ? "text-graphite-foreground" : "text-foreground")}>
                {title}
              </h2>
            )}
            {lede && (
              <p className={cn("mt-4 max-w-2xl text-base leading-relaxed sm:text-lg", tone === "graphite" ? "text-graphite-foreground/72" : "text-muted-foreground")}>
                {lede}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
