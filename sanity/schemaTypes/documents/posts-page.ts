import { defineField, defineType } from "sanity";

export const postsPageType = defineType({
  name: "postsPage",
  title: "Pagina de columnas",
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
    defineField({ name: "readMoreLabel", title: "Texto leer mas", type: "string" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language"
    }
  }
});
