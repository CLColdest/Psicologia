import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "Sobre mi",
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
    defineField({ name: "mainImage", title: "Imagen principal", type: "image", options: { hotspot: true } }),
    defineField({ name: "biography", title: "Biografia", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "biographyTitle", title: "Titulo de biografia", type: "string" }),
    defineField({ name: "approach", title: "Enfoque terapeutico", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "approachTitle", title: "Titulo de enfoque terapeutico", type: "string" }),
    defineField({ name: "experience", title: "Experiencia", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "experienceTitle", title: "Titulo de experiencia", type: "string" }),
    defineField({ name: "testimonialsTitle", title: "Titulo de testimonios", type: "string" }),
    defineField({ name: "primaryCta", title: "CTA principal", type: "string" }),
    defineField({ name: "secondaryCta", title: "CTA secundario", type: "string" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language",
      media: "mainImage"
    }
  }
});
