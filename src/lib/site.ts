import type { Locale } from "@/lib/i18n/config";

export const siteConfig = {
  name: "Angela Carvajal",
  description:
    "Sitio editorial para la consulta psicologica de Angela Carvajal, con base bilingue y contenido administrable desde Sanity."
};

export type SocialLinkSettings = {
  label: string;
  href: string;
};

export type PracticeSettings = {
  whatsappNumber: string;
  whatsappUrl: string;
  bookingWhatsappLabel: string;
  phoneLabel: string;
  email: string;
  address: string;
  schedule: string;
  mapEmbedUrl: string;
  socialLinks: SocialLinkSettings[];
};

export type ThemeSettings = {
  backgroundColor: string;
  foregroundColor: string;
  mutedColor: string;
  accentColor: string;
  accentForegroundColor: string;
  surfaceColor: string;
  surfaceStrongColor: string;
};

export type LocaleUiLabels = {
  homeLabel: string;
  aboutLabel: string;
  servicesLabel: string;
  postsLabel: string;
  contactLabel: string;
  headerWhatsappLabel: string;
  floatingBookingLabel: string;
  backToTopLabel: string;
};

export const defaultPracticeSettings: PracticeSettings = {
  whatsappNumber: "56912345678",
  whatsappUrl: "https://wa.me/56912345678?text=Hola%2C%20quisiera%20consultar%20por%20una%20sesion.",
  bookingWhatsappLabel: "Agenda tu hora por WhatsApp",
  phoneLabel: "+56 9 1234 5678",
  email: "contacto@angelacarvajal.cl",
  address: "Consulta presencial en Santiago",
  schedule: "Lunes a viernes, 9:00 a 19:00",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Las%20Condes%2C%20Santiago&z=14&output=embed",
  socialLinks: [
    { label: "WhatsApp", href: "https://wa.me/56912345678" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" }
  ]
};

export function buildWhatsappUrl(number: string, message = "Hola, quisiera consultar por una sesion.") {
  const normalizedNumber = number.replace(/\D/g, "");

  if (!normalizedNumber) {
    return defaultPracticeSettings.whatsappUrl;
  }

  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultThemeSettings: ThemeSettings = {
  backgroundColor: "#FAF7F2",
  foregroundColor: "#8B8580",
  mutedColor: "#8B8580",
  accentColor: "#B9C8B1",
  accentForegroundColor: "#8B8580",
  surfaceColor: "rgba(250, 247, 242, 0.92)",
  surfaceStrongColor: "#E6C9C9"
};

export const defaultUiLabels: Record<Locale, LocaleUiLabels> = {
  es: {
    homeLabel: "Inicio",
    aboutLabel: "Sobre mi",
    servicesLabel: "Servicios",
    postsLabel: "Columnas",
    contactLabel: "Contacto",
    headerWhatsappLabel: "WhatsApp",
    floatingBookingLabel: "Agenda tu hora aqui",
    backToTopLabel: "Volver arriba"
  },
  en: {
    homeLabel: "Home",
    aboutLabel: "About",
    servicesLabel: "Services",
    postsLabel: "Articles",
    contactLabel: "Contact",
    headerWhatsappLabel: "WhatsApp",
    floatingBookingLabel: "Book on WhatsApp",
    backToTopLabel: "Back to top"
  }
};

export function buildLocaleUrl(locale: Locale, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${path === "" ? "" : normalizedPath}`;
}
