import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Pagina de servicios",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "eyebrow", title: "Sobrelinea", type: "string" }),
    defineField({ name: "title", title: "Titulo", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Introduccion", type: "text", rows: 3 }),
    defineField({
      name: "notes",
      title: "Notas laterales",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
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
