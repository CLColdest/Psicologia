export const siteConfig = {
  name: "Angela Carvajal",
  description:
    "Sitio editorial para la consulta psicologica de Angela Carvajal, con contenido administrable desde Sanity."
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

export type UiLabels = {
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
  mapEmbedUrl: "https://www.google.com/maps?q=Las%20Condes%2C%20Santiago&z=14&output=embed",
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

export const defaultUiLabels: UiLabels = {
  homeLabel: "Inicio",
  aboutLabel: "Sobre mi",
  servicesLabel: "Servicios",
  postsLabel: "Columnas",
  contactLabel: "Contacto",
  headerWhatsappLabel: "Solicitar hora",
  floatingBookingLabel: "Agenda tu hora aqui",
  backToTopLabel: "Volver arriba"
};

export function buildSitePath(path = "") {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}
