import { tFor, type Locale } from "@/i18n/dict";
import { Section } from "@/components/ui/Section";

export function FaqPage({ locale }: { locale: Locale }) {
  const t = tFor(locale).faq;
  return (
    <Section eyebrow="FAQ" title={t.title}>
      <div className="divide-y divide-border rounded-xl border border-border bg-card">
        {t.items.map((item, i) => (
          <details key={i} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-foreground">
              {item.q}
              <span className="ml-4 text-brand transition group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function faqJsonLd(locale: Locale) {
  const t = tFor(locale).faq;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}