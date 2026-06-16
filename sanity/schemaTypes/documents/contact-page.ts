import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contacto",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Cabecera" },
    { name: "form", title: "Formulario" },
    { name: "details", title: "Bloque Datos de contacto" },
    { name: "map", title: "Mapa" }
  ],
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      hidden: true,
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "title", title: "Titulo", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "formTitle", title: "Titulo del formulario", type: "string", fieldset: "form" }),
    defineField({ name: "formIntro", title: "Texto del formulario", type: "text", rows: 3, fieldset: "form" }),
    defineField({ name: "nameFieldLabel", title: "Label nombre", type: "string", fieldset: "form" }),
    defineField({ name: "emailInputLabel", title: "Label email input", type: "string", fieldset: "form" }),
    defineField({ name: "phoneInputLabel", title: "Label telefono", type: "string", fieldset: "form" }),
    defineField({ name: "modalityFieldLabel", title: "Label modalidad", type: "string", fieldset: "form" }),
    defineField({ name: "messageFieldLabel", title: "Label mensaje", type: "string", fieldset: "form" }),
    defineField({
      name: "modalityOptions",
      title: "Opciones de modalidad",
      type: "array",
      fieldset: "form",
      of: [{ type: "string" }],
      description: "Opciones visibles en el selector del formulario."
    }),
    defineField({ name: "submitLabel", title: "Texto boton enviar", type: "string", fieldset: "form" }),
    defineField({ name: "successMessage", title: "Mensaje de exito", type: "string", fieldset: "form" }),
    defineField({ name: "errorMessage", title: "Mensaje de error", type: "string", fieldset: "form" }),
    defineField({ name: "closingTitle", title: "Titulo de cierre", type: "string", fieldset: "details" }),
    defineField({ name: "closingBody", title: "Texto de cierre", type: "text", rows: 3, fieldset: "details" }),
    defineField({ name: "whatsappFieldLabel", title: "Label campo WhatsApp", type: "string", fieldset: "details" }),
    defineField({ name: "emailFieldLabel", title: "Label campo email", type: "string", fieldset: "details" }),
    defineField({ name: "addressFieldLabel", title: "Label campo direccion", type: "string", fieldset: "details" }),
    defineField({ name: "scheduleFieldLabel", title: "Label campo horario", type: "string", fieldset: "details" }),
    defineField({ name: "mapTitle", title: "Titulo del mapa", type: "string", fieldset: "map" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language"
    }
  }
});
