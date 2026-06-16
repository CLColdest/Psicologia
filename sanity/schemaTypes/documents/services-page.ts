import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Pagina de servicios",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Cabecera" },
    { name: "side", title: "Caja lateral" },
    { name: "closing", title: "Cierre" }
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
    defineField({ name: "eyebrow", title: "Sobrelinea", type: "string", fieldset: "hero" }),
    defineField({ name: "title", title: "Titulo", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Introduccion", type: "text", rows: 3, fieldset: "hero" }),
    defineField({
      name: "notes",
      title: "Notas laterales",
      type: "array",
      fieldset: "side",
      description: "Las tarjetas de especialidades se editan en la coleccion 'Servicios'.",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({ name: "closingTitle", title: "Titulo de cierre", type: "string", fieldset: "closing" }),
    defineField({ name: "closingBody", title: "Texto de cierre", type: "text", rows: 3, fieldset: "closing" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language"
    }
  }
});
