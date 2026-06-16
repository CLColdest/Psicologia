import { defineField, defineType } from "sanity";
import { ColorInput } from "../../components/color-input";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuracion del sitio",
  type: "document",
  fieldsets: [
    { name: "branding", title: "Marca" },
    { name: "contact", title: "Datos reutilizables de contacto" },
    { name: "theme", title: "Paleta de colores" },
    { name: "labelsEs", title: "Textos globales ES" },
    { name: "labelsEn", title: "Textos globales EN" },
    { name: "social", title: "Redes sociales" }
  ],
  fields: [
    defineField({ name: "siteName", title: "Nombre del sitio", type: "string", fieldset: "branding", validation: (rule) => rule.required() }),
    defineField({ name: "brandTagline", title: "Bajada de marca", type: "string", fieldset: "branding" }),
    defineField({ name: "whatsappNumber", title: "Numero de WhatsApp", type: "string", fieldset: "contact" }),
    defineField({ name: "bookingWhatsappLabel", title: "Texto del widget flotante", type: "string", fieldset: "contact" }),
    defineField({ name: "phoneLabel", title: "Telefono visible", type: "string", description: "Este valor se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "email", title: "Correo de contacto", type: "string", description: "Este valor se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "address", title: "Direccion", type: "string", description: "Este valor se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "schedule", title: "Horario", type: "string", description: "Este valor se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "mapEmbedUrl", title: "URL embebida de mapa", type: "url", fieldset: "contact" }),
    defineField({ name: "backgroundColor", title: "Color de fondo", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "foregroundColor", title: "Color principal de texto", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "accentColor", title: "Color acento", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "surfaceColor", title: "Color de superficie", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "surfaceStrongColor", title: "Color de superficie destacada", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({
      name: "uiLabelsEs",
      title: "Textos globales ES",
      type: "object",
      fieldset: "labelsEs",
      fields: [
        defineField({ name: "homeLabel", title: "Label Inicio", type: "string" }),
        defineField({ name: "aboutLabel", title: "Label Sobre mi", type: "string" }),
        defineField({ name: "servicesLabel", title: "Label Servicios", type: "string" }),
        defineField({ name: "postsLabel", title: "Label Columnas", type: "string" }),
        defineField({ name: "contactLabel", title: "Label Contacto", type: "string" }),
        defineField({ name: "headerWhatsappLabel", title: "CTA header WhatsApp", type: "string" }),
        defineField({ name: "floatingBookingLabel", title: "Texto flotante WhatsApp", type: "string" }),
        defineField({ name: "backToTopLabel", title: "Label volver arriba", type: "string" })
      ]
    }),
    defineField({
      name: "uiLabelsEn",
      title: "Textos globales EN",
      type: "object",
      fieldset: "labelsEn",
      fields: [
        defineField({ name: "homeLabel", title: "Home label", type: "string" }),
        defineField({ name: "aboutLabel", title: "About label", type: "string" }),
        defineField({ name: "servicesLabel", title: "Services label", type: "string" }),
        defineField({ name: "postsLabel", title: "Articles label", type: "string" }),
        defineField({ name: "contactLabel", title: "Contact label", type: "string" }),
        defineField({ name: "headerWhatsappLabel", title: "Header WhatsApp CTA", type: "string" }),
        defineField({ name: "floatingBookingLabel", title: "Floating WhatsApp text", type: "string" }),
        defineField({ name: "backToTopLabel", title: "Back to top label", type: "string" })
      ]
    }),
    defineField({
      name: "socialLinks",
      title: "Redes sociales flotantes",
      type: "array",
      fieldset: "social",
      of: [
        {
          type: "object",
          name: "socialLink",
          title: "Red social",
          fields: [
            defineField({ name: "label", title: "Nombre", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", title: "URL", type: "url", validation: (rule) => rule.required() })
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "href"
            }
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: "siteName",
      subtitle: "brandTagline"
    }
  }
});
