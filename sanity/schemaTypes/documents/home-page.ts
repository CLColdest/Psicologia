import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Pagina de inicio",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Hero inicial" },
    { name: "approach", title: "Bloque Enfoque" },
    { name: "services", title: "Bloque Especialidades" },
    { name: "process", title: "Bloque Como empezar" },
    { name: "faq", title: "Bloque Preguntas frecuentes" },
    { name: "posts", title: "Bloque Columnas" },
    { name: "contact", title: "Bloque Contacto final" }
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
    defineField({ name: "heroEyebrow", title: "Texto superior", type: "string", fieldset: "hero" }),
    defineField({ name: "heroTitle", title: "Titulo principal", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Subtitulo", type: "text", rows: 2, fieldset: "hero" }),
    defineField({ name: "heroDescription", title: "Descripcion", type: "text", rows: 3, fieldset: "hero" }),
    defineField({ name: "heroPrimaryCta", title: "CTA principal del hero", type: "string", fieldset: "hero" }),
    defineField({ name: "heroSecondaryCta", title: "CTA secundario del hero", type: "string", fieldset: "hero" }),
    defineField({ name: "approachEyebrow", title: "Sobrelinea de enfoque", type: "string", fieldset: "approach" }),
    defineField({ name: "approachTitle", title: "Titulo de enfoque", type: "string", fieldset: "approach" }),
    defineField({ name: "approachBody", title: "Texto de enfoque", type: "text", rows: 4, fieldset: "approach" }),
    defineField({
      name: "approachPoints",
      title: "Puntos de enfoque",
      type: "array",
      fieldset: "approach",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "servicesEyebrow",
      title: "Sobrelinea de especialidades",
      type: "string",
      fieldset: "services",
      description: "Las tarjetas de especialidades se editan en la coleccion 'Servicios'."
    }),
    defineField({
      name: "servicesTitle",
      title: "Titulo de especialidades",
      type: "string",
      fieldset: "services",
      description: "Las tarjetas de especialidades se editan en la coleccion 'Servicios'."
    }),
    defineField({
      name: "servicesIntro",
      title: "Introduccion de especialidades",
      type: "text",
      rows: 3,
      fieldset: "services",
      description: "Las tarjetas de especialidades se editan en la coleccion 'Servicios'."
    }),
    defineField({ name: "processEyebrow", title: "Sobrelinea del proceso", type: "string", fieldset: "process" }),
    defineField({ name: "processTitle", title: "Titulo del proceso", type: "string", fieldset: "process" }),
    defineField({
      name: "processSteps",
      title: "Pasos del proceso",
      type: "array",
      fieldset: "process",
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
    defineField({
      name: "faqEyebrow",
      title: "Sobrelinea de FAQ",
      type: "string",
      fieldset: "faq",
      description: "Las preguntas visibles se editan en la coleccion 'Preguntas frecuentes'."
    }),
    defineField({
      name: "faqTitle",
      title: "Titulo de FAQ",
      type: "string",
      fieldset: "faq",
      description: "Las preguntas visibles se editan en la coleccion 'Preguntas frecuentes'."
    }),
    defineField({ name: "postsEyebrow", title: "Sobrelinea de columnas", type: "string", fieldset: "posts" }),
    defineField({ name: "postsTitle", title: "Titulo de columnas", type: "string", fieldset: "posts" }),
    defineField({ name: "postsIntro", title: "Introduccion de columnas", type: "text", rows: 3, fieldset: "posts" }),
    defineField({ name: "postsPrimaryCta", title: "CTA de columnas", type: "string", fieldset: "posts" }),
    defineField({ name: "postsReadMoreLabel", title: "Texto leer columna", type: "string", fieldset: "posts" }),
    defineField({ name: "contactEyebrow", title: "Sobrelinea de contacto", type: "string", fieldset: "contact" }),
    defineField({ name: "contactTitle", title: "Titulo del cierre de contacto", type: "string", fieldset: "contact" }),
    defineField({ name: "contactBody", title: "Texto del cierre de contacto", type: "text", rows: 3, fieldset: "contact" }),
    defineField({ name: "contactPrimaryCta", title: "CTA del cierre de contacto", type: "string", fieldset: "contact" })
  ],
  preview: {
    select: {
      title: "heroTitle",
      subtitle: "language"
    }
  }
});
