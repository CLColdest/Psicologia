import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Columna",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titulo", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "excerpt", title: "Resumen corto", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Imagen principal", type: "image", options: { hotspot: true } }),
    defineField({
      name: "galleryImages",
      title: "Galeria de imagenes",
      description: "Imagenes adicionales para mostrar la columna como carrusel horizontal.",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })]
    }),
    defineField({
      name: "author",
      title: "Autora",
      type: "reference",
      to: [{ type: "author" }]
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({ name: "publishedAt", title: "Fecha de publicacion", type: "datetime" }),
    defineField({ name: "body", title: "Contenido", type: "array", of: [{ type: "block" }, { type: "image" }] })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverImage"
    }
  }
});
