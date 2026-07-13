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
        "py-20 md:py-24",
        tone === "graphite" && "bg-graphite text-graphite-foreground",
        tone === "soft" && "bg-muted/60",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || title || lede) && (
          <div className="max-w-2xl mb-10 md:mb-14">
            {eyebrow && (
              <div className={cn("text-xs font-medium tracking-[0.18em] uppercase mb-3", tone === "graphite" ? "text-brand-soft" : "text-brand")}>
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className={cn("text-3xl md:text-[40px] leading-[1.1] font-semibold tracking-tight", tone === "graphite" ? "text-graphite-foreground" : "text-foreground")}>
                {title}
              </h2>
            )}
            {lede && (
              <p className={cn("mt-4 text-base md:text-lg", tone === "graphite" ? "text-graphite-foreground/75" : "text-muted-foreground")}>
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