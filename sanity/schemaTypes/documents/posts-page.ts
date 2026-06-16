import { defineField, defineType } from "sanity";

export const postsPageType = defineType({
  name: "postsPage",
  title: "Pagina de columnas",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Cabecera" },
    { name: "side", title: "Caja lateral editorial" }
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
    defineField({ name: "readMoreLabel", title: "Texto leer mas", type: "string", fieldset: "hero" }),
    defineField({ name: "sideEyebrow", title: "Sobrelinea lateral", type: "string", fieldset: "side" }),
    defineField({ name: "sideBody", title: "Texto lateral", type: "text", rows: 4, fieldset: "side" }),
    defineField({
      name: "sideTopics",
      title: "Etiquetas laterales",
      type: "array",
      fieldset: "side",
      of: [{ type: "string" }]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language"
    }
  }
});
