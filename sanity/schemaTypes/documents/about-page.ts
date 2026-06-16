import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "Pagina Sobre mi",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Sobre mi: cabecera" },
    { name: "biography", title: "Sobre mi: trayectoria y trabajo clinico" },
    { name: "approach", title: "Sobre mi: como entiendo la psicoterapia" },
    { name: "experience", title: "Sobre mi: formacion y experiencia" },
    { name: "testimonials", title: "Sobre mi: testimonios" },
    { name: "cta", title: "Sobre mi: botones" }
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Sobrelinea", type: "string", fieldset: "hero" }),
    defineField({ name: "title", title: "Titulo principal", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Parrafo principal", type: "text", rows: 3, fieldset: "hero" }),
    defineField({ name: "mainImage", title: "Imagen principal", type: "image", fieldset: "hero", options: { hotspot: true } }),
    defineField({ name: "biographyTitle", title: "Titulo del bloque", type: "string", fieldset: "biography" }),
    defineField({ name: "biography", title: "Texto del bloque", type: "array", fieldset: "biography", of: [{ type: "block" }] }),
    defineField({ name: "approachTitle", title: "Titulo del bloque", type: "string", fieldset: "approach" }),
    defineField({ name: "approach", title: "Texto del bloque", type: "array", fieldset: "approach", of: [{ type: "block" }] }),
    defineField({ name: "experienceTitle", title: "Titulo del bloque", type: "string", fieldset: "experience" }),
    defineField({ name: "experience", title: "Texto del bloque", type: "array", fieldset: "experience", of: [{ type: "block" }] }),
    defineField({ name: "testimonialsTitle", title: "Titulo de la seccion", type: "string", fieldset: "testimonials" }),
    defineField({ name: "primaryCta", title: "Boton principal", type: "string", fieldset: "cta" }),
    defineField({ name: "secondaryCta", title: "Boton secundario", type: "string", fieldset: "cta" })
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage"
    }
  }
});
