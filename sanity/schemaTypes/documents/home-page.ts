import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Pagina de inicio",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "heroEyebrow", title: "Texto superior", type: "string" }),
    defineField({ name: "heroTitle", title: "Titulo principal", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Subtitulo", type: "text", rows: 2 }),
    defineField({ name: "heroDescription", title: "Descripcion", type: "text", rows: 3 }),
    defineField({ name: "heroPrimaryCta", title: "CTA principal del hero", type: "string" }),
    defineField({ name: "heroSecondaryCta", title: "CTA secundario del hero", type: "string" }),
    defineField({ name: "approachEyebrow", title: "Sobrelinea de enfoque", type: "string" }),
    defineField({ name: "approachTitle", title: "Titulo de enfoque", type: "string" }),
    defineField({ name: "approachBody", title: "Texto de enfoque", type: "text", rows: 4 }),
    defineField({
      name: "approachPoints",
      title: "Puntos de enfoque",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({ name: "servicesEyebrow", title: "Sobrelinea de especialidades", type: "string" }),
    defineField({ name: "servicesTitle", title: "Titulo de especialidades", type: "string" }),
    defineField({ name: "servicesIntro", title: "Introduccion de especialidades", type: "text", rows: 3 }),
    defineField({ name: "processEyebrow", title: "Sobrelinea del proceso", type: "string" }),
    defineField({ name: "processTitle", title: "Titulo del proceso", type: "string" }),
    defineField({
      name: "processSteps",
      title: "Pasos del proceso",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titulo", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Descripcion", type: "text", rows: 2 })
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description"
            }
          }
        })
      ]
    }),
    defineField({ name: "faqEyebrow", title: "Sobrelinea de FAQ", type: "string" }),
    defineField({ name: "faqTitle", title: "Titulo de FAQ", type: "string" }),
    defineField({ name: "postsEyebrow", title: "Sobrelinea de columnas", type: "string" }),
    defineField({ name: "postsTitle", title: "Titulo de columnas", type: "string" }),
    defineField({ name: "postsIntro", title: "Introduccion de columnas", type: "text", rows: 3 }),
    defineField({ name: "postsPrimaryCta", title: "CTA de columnas", type: "string" }),
    defineField({ name: "postsReadMoreLabel", title: "Texto leer columna", type: "string" }),
    defineField({ name: "contactEyebrow", title: "Sobrelinea de contacto", type: "string" }),
    defineField({ name: "contactTitle", title: "Titulo del cierre de contacto", type: "string" }),
    defineField({ name: "contactBody", title: "Texto del cierre de contacto", type: "text", rows: 3 }),
    defineField({ name: "contactPrimaryCta", title: "CTA del cierre de contacto", type: "string" })
  ],
  preview: {
    select: {
      title: "heroTitle",
      subtitle: "language"
    }
  }
});
