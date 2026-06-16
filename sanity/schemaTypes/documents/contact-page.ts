import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Pagina de contacto",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Contacto: cabecera" },
    { name: "form", title: "Contacto: formulario" },
    { name: "details", title: "Contacto: datos visibles" },
    { name: "map", title: "Contacto: mapa" }
  ],
  fields: [
    defineField({ name: "title", title: "Titulo principal", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "formTitle", title: "Titulo del formulario", type: "string", fieldset: "form" }),
    defineField({ name: "formIntro", title: "Texto introductorio del formulario", type: "text", rows: 3, fieldset: "form" }),
    defineField({ name: "nameFieldLabel", title: "Label campo nombre", type: "string", fieldset: "form" }),
    defineField({ name: "emailInputLabel", title: "Label campo correo", type: "string", fieldset: "form" }),
    defineField({ name: "phoneInputLabel", title: "Label campo telefono", type: "string", fieldset: "form" }),
    defineField({ name: "modalityFieldLabel", title: "Label campo modalidad", type: "string", fieldset: "form" }),
    defineField({ name: "messageFieldLabel", title: "Label campo mensaje", type: "string", fieldset: "form" }),
    defineField({
      name: "modalityOptions",
      title: "Opciones del selector de modalidad",
      type: "array",
      fieldset: "form",
      of: [{ type: "string" }],
      description: "Opciones visibles en el selector del formulario."
    }),
    defineField({ name: "submitLabel", title: "Texto del boton enviar", type: "string", fieldset: "form" }),
    defineField({ name: "successMessage", title: "Mensaje de envio exitoso", type: "string", fieldset: "form" }),
    defineField({ name: "errorMessage", title: "Mensaje si falla el envio", type: "string", fieldset: "form" }),
    defineField({ name: "closingTitle", title: "Titulo del bloque de datos", type: "string", fieldset: "details" }),
    defineField({ name: "closingBody", title: "Parrafo del bloque de datos", type: "text", rows: 3, fieldset: "details" }),
    defineField({ name: "whatsappFieldLabel", title: "Label del dato WhatsApp", type: "string", fieldset: "details" }),
    defineField({ name: "emailFieldLabel", title: "Label del dato correo", type: "string", fieldset: "details" }),
    defineField({ name: "addressFieldLabel", title: "Label del dato direccion", type: "string", fieldset: "details" }),
    defineField({ name: "scheduleFieldLabel", title: "Label del dato horario", type: "string", fieldset: "details" }),
    defineField({ name: "mapTitle", title: "Titulo del mapa", type: "string", fieldset: "map" })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
});
