import type { Locale } from "@/i18n/dict";

export const SITE = {
  name: "San Miguel Tech",
  domain: "sanmigueldeallende.tech",
  baseUrl: "https://sanmigueldeallende.tech",
  serviceArea: "San Miguel de Allende, Guanajuato, México",
  locality: "San Miguel de Allende",
  region: "Guanajuato",
  country: "MX",
  languages: ["es", "en"],
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

/**
 * Keeps the private WhatsApp number out of public HTML and browser bundles.
 * The /whatsapp server route reads PRIVATE_WHATSAPP_NUMBER and redirects.
 */
export function whatsappPath(message: string): string {
  return `/whatsapp?text=${encodeURIComponent(message)}`;
}

// Backward-compatible name for components that have not yet been renamed.
export const whatsappUrl = whatsappPath;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.baseUrl).toString();
}

export function diagnosisHref(
  locale: Locale,
  source: string,
  service = "general",
): string {
  const pathname = locale === "es" ? "/solicitar-diagnostico" : "/en/request-diagnosis";
  const params = new URLSearchParams({ source, service });
  return `${pathname}?${params.toString()}`;
}
