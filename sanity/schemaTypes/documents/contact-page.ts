import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contacto",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "title", title: "Titulo", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "mapTitle", title: "Titulo del mapa", type: "string" }),
    defineField({ name: "whatsappFieldLabel", title: "Label campo WhatsApp", type: "string" }),
    defineField({ name: "emailFieldLabel", title: "Label campo email", type: "string" }),
    defineField({ name: "addressFieldLabel", title: "Label campo direccion", type: "string" }),
    defineField({ name: "scheduleFieldLabel", title: "Label campo horario", type: "string" }),
    defineField({ name: "formTitle", title: "Titulo del formulario", type: "string" }),
    defineField({ name: "formIntro", title: "Texto del formulario", type: "text", rows: 3 }),
    defineField({ name: "nameFieldLabel", title: "Label nombre", type: "string" }),
    defineField({ name: "emailInputLabel", title: "Label email input", type: "string" }),
    defineField({ name: "phoneInputLabel", title: "Label telefono", type: "string" }),
    defineField({ name: "modalityFieldLabel", title: "Label modalidad", type: "string" }),
    defineField({ name: "messageFieldLabel", title: "Label mensaje", type: "string" }),
    defineField({
      name: "modalityOptions",
      title: "Opciones de modalidad",
      type: "array",
      of: [{ type: "string" }],
      description: "Opciones visibles en el selector del formulario."
    }),
    defineField({ name: "submitLabel", title: "Texto boton enviar", type: "string" }),
    defineField({ name: "successMessage", title: "Mensaje de exito", type: "string" }),
    defineField({ name: "errorMessage", title: "Mensaje de error", type: "string" }),
    defineField({ name: "closingTitle", title: "Titulo de cierre", type: "string" }),
    defineField({ name: "closingBody", title: "Texto de cierre", type: "text", rows: 3 })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language"
    }
  }
});
