import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autora de columnas",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "bio", title: "Descripcion breve", type: "text", rows: 3 }),
    defineField({ name: "photo", title: "Foto", type: "image", options: { hotspot: true } })
  ],
  preview: {
    select: {
      title: "name",
      media: "photo"
    }
  }
});
