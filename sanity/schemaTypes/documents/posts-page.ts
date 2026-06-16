import { defineField, defineType } from "sanity";

export const postsPageType = defineType({
  name: "postsPage",
  title: "Pagina de columnas",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Columnas: cabecera" },
    { name: "side", title: "Columnas: caja lateral" }
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Sobrelinea", type: "string", fieldset: "hero" }),
    defineField({ name: "title", title: "Titulo principal", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Parrafo principal", type: "text", rows: 3, fieldset: "hero" }),
    defineField({ name: "readMoreLabel", title: "Texto del link leer columna", type: "string", fieldset: "hero" }),
    defineField({ name: "sideEyebrow", title: "Texto pequeno de la caja lateral", type: "string", fieldset: "side" }),
    defineField({ name: "sideBody", title: "Parrafo de la caja lateral", type: "text", rows: 4, fieldset: "side" }),
    defineField({
      name: "sideTopics",
      title: "Etiquetas de la caja lateral",
      type: "array",
      fieldset: "side",
      of: [{ type: "string" }]
    })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
});
