import { defineField, defineType } from "sanity";
import { ColorInput } from "../../components/color-input";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuracion del sitio",
  type: "document",
  fieldsets: [
    { name: "branding", title: "Marca visible" },
    { name: "contact", title: "Datos reutilizables de contacto" },
    { name: "theme", title: "Paleta de colores" },
    { name: "labels", title: "Menu y botones globales" },
    { name: "social", title: "Redes sociales flotantes" }
  ],
  fields: [
    defineField({ name: "siteName", title: "Nombre principal", type: "string", fieldset: "branding", validation: (rule) => rule.required() }),
    defineField({ name: "brandTagline", title: "Bajada bajo el nombre", type: "string", fieldset: "branding" }),
    defineField({ name: "whatsappNumber", title: "Numero de WhatsApp", type: "string", fieldset: "contact" }),
    defineField({ name: "bookingWhatsappLabel", title: "Texto del boton flotante de WhatsApp", type: "string", fieldset: "contact" }),
    defineField({ name: "phoneLabel", title: "Telefono visible", type: "string", description: "Se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "email", title: "Correo visible", type: "string", description: "Se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "address", title: "Direccion visible", type: "string", description: "Se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "schedule", title: "Horario visible", type: "string", description: "Se reutiliza en inicio y contacto.", fieldset: "contact" }),
    defineField({ name: "mapEmbedUrl", title: "URL del mapa embebido", type: "url", fieldset: "contact" }),
    defineField({ name: "backgroundColor", title: "Color de fondo", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "foregroundColor", title: "Color principal de texto", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "accentColor", title: "Color de botones y acentos", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "surfaceColor", title: "Color de cajas", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({ name: "surfaceStrongColor", title: "Color del degradado de fondo", type: "string", fieldset: "theme", components: { input: ColorInput } }),
    defineField({
      name: "uiLabelsEs",
      title: "Textos globales",
      type: "object",
      fieldset: "labels",
      fields: [
        defineField({ name: "homeLabel", title: "Texto Inicio en el menu", type: "string" }),
        defineField({ name: "aboutLabel", title: "Texto Sobre mi en el menu", type: "string" }),
        defineField({ name: "servicesLabel", title: "Texto Servicios en el menu", type: "string" }),
        defineField({ name: "postsLabel", title: "Texto Columnas en el menu", type: "string" }),
        defineField({ name: "contactLabel", title: "Texto Contacto en el menu", type: "string" }),
        defineField({ name: "headerWhatsappLabel", title: "Boton del header", type: "string" }),
        defineField({ name: "floatingBookingLabel", title: "Boton flotante inferior", type: "string" }),
        defineField({ name: "backToTopLabel", title: "Boton volver arriba", type: "string" })
      ]
    }),
    defineField({
      name: "socialLinks",
      title: "Redes sociales",
      type: "array",
      fieldset: "social",
      of: [
        {
          type: "object",
          name: "socialLink",
          title: "Red social",
          fields: [
            defineField({ name: "label", title: "Nombre de la red", type: "string", validation: (rule) => rule.required() }),
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
