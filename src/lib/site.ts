// Editable business information. Placeholders marked with TODO must be replaced
// with real data provided by the business owner before going live.
export const SITE = {
  name: "San Miguel Tech",
  domain: "sanmigueldeallende.tech",
  baseUrl: "https://sanmigueldeallende.tech",
  // TODO(owner): Replace with real WhatsApp number in international format (52...).
  whatsapp: "5210000000000",
  // TODO(owner): Replace with real phone number.
  phone: "+52 000 000 0000",
  // TODO(owner): Replace with real contact email.
  email: "hola@sanmigueldeallende.tech",
  serviceArea: "San Miguel de Allende, Guanajuato, México",
  // TODO(owner): Replace with real geo coordinates when defined.
  geo: { lat: 20.9153, lng: -100.7439 },
  hours: [
    // TODO(owner): Confirm real business hours.
    { day: "Mo-Fr", opens: "09:00", closes: "19:00" },
    { day: "Sa", opens: "10:00", closes: "15:00" },
  ],
  social: {
    // TODO(owner): Add real social profiles.
    facebook: "",
    instagram: "",
  },
} as const;

export function whatsappUrl(message: string): string {
  const number = SITE.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}