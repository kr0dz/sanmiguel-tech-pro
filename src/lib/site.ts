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

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.baseUrl).toString();
}
