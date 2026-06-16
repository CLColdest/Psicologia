import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "Sobre mi",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Cabecera Sobre mi" },
    { name: "biography", title: "Bloque Trayectoria y trabajo clinico" },
    { name: "approach", title: "Bloque Como entiendo la psicoterapia" },
    { name: "experience", title: "Bloque Formacion, experiencia y especializacion" },
    { name: "testimonials", title: "Bloque Testimonios" },
    { name: "cta", title: "Botones" }
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
    defineField({ name: "mainImage", title: "Imagen principal", type: "image", fieldset: "hero", options: { hotspot: true } }),
    defineField({ name: "biographyTitle", title: "Titulo de biografia", type: "string", fieldset: "biography" }),
    defineField({ name: "biography", title: "Biografia", type: "array", fieldset: "biography", of: [{ type: "block" }] }),
    defineField({ name: "approachTitle", title: "Titulo de enfoque terapeutico", type: "string", fieldset: "approach" }),
    defineField({ name: "approach", title: "Enfoque terapeutico", type: "array", fieldset: "approach", of: [{ type: "block" }] }),
    defineField({ name: "experienceTitle", title: "Titulo de experiencia", type: "string", fieldset: "experience" }),
    defineField({ name: "experience", title: "Experiencia", type: "array", fieldset: "experience", of: [{ type: "block" }] }),
    defineField({ name: "testimonialsTitle", title: "Titulo de testimonios", type: "string", fieldset: "testimonials" }),
    defineField({ name: "primaryCta", title: "CTA principal", type: "string", fieldset: "cta" }),
    defineField({ name: "secondaryCta", title: "CTA secundario", type: "string", fieldset: "cta" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "language",
      media: "mainImage"
    }
  }
});
