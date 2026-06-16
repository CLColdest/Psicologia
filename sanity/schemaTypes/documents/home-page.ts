import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Pagina de inicio",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Inicio: cabecera principal" },
    { name: "approach", title: "Inicio: bloque enfoque" },
    { name: "services", title: "Inicio: bloque especialidades" },
    { name: "process", title: "Inicio: bloque como empezar" },
    { name: "faq", title: "Inicio: bloque preguntas frecuentes" },
    { name: "posts", title: "Inicio: bloque columnas" },
    { name: "contact", title: "Inicio: cierre de contacto" }
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Texto pequeno superior", type: "string", fieldset: "hero" }),
    defineField({ name: "heroTitle", title: "Titulo principal", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "heroSubtitle", title: "Texto destacado bajo el titulo", type: "text", rows: 2, fieldset: "hero" }),
    defineField({ name: "heroDescription", title: "Parrafo principal", type: "text", rows: 3, fieldset: "hero" }),
    defineField({ name: "heroPrimaryCta", title: "Boton principal", type: "string", fieldset: "hero" }),
    defineField({ name: "heroSecondaryCta", title: "Boton secundario", type: "string", fieldset: "hero" }),
    defineField({ name: "approachEyebrow", title: "Sobrelinea", type: "string", fieldset: "approach" }),
    defineField({ name: "approachTitle", title: "Titulo del bloque", type: "string", fieldset: "approach" }),
    defineField({ name: "approachBody", title: "Parrafo del bloque", type: "text", rows: 4, fieldset: "approach" }),
    defineField({
      name: "approachPoints",
      title: "Cajas del bloque",
      type: "array",
      fieldset: "approach",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "servicesEyebrow",
      title: "Sobrelinea",
      type: "string",
      fieldset: "services",
      description: "Las tarjetas se editan abajo en la coleccion Especialidades."
    }),
    defineField({
      name: "servicesTitle",
      title: "Titulo del bloque",
      type: "string",
      fieldset: "services",
      description: "Las tarjetas se editan abajo en la coleccion Especialidades."
    }),
    defineField({
      name: "servicesIntro",
      title: "Parrafo del bloque",
      type: "text",
      rows: 3,
      fieldset: "services",
      description: "Las tarjetas se editan abajo en la coleccion Especialidades."
    }),
    defineField({ name: "processEyebrow", title: "Sobrelinea", type: "string", fieldset: "process" }),
    defineField({ name: "processTitle", title: "Titulo del bloque", type: "string", fieldset: "process" }),
    defineField({
      name: "processSteps",
      title: "Pasos visibles",
      type: "array",
      fieldset: "process",
      of: [
        defineArrayMember({
          type: "object",
          title: "Paso",
          fields: [
            defineField({ name: "title", title: "Titulo del paso", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Descripcion del paso", type: "text", rows: 2 })
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
      title: "Sobrelinea",
      type: "string",
      fieldset: "faq",
      description: "Las preguntas se editan abajo en la coleccion Preguntas frecuentes."
    }),
    defineField({
      name: "faqTitle",
      title: "Titulo del bloque",
      type: "string",
      fieldset: "faq",
      description: "Las preguntas se editan abajo en la coleccion Preguntas frecuentes."
    }),
    defineField({ name: "postsEyebrow", title: "Sobrelinea", type: "string", fieldset: "posts" }),
    defineField({ name: "postsTitle", title: "Titulo del bloque", type: "string", fieldset: "posts" }),
    defineField({ name: "postsIntro", title: "Parrafo del bloque", type: "text", rows: 3, fieldset: "posts" }),
    defineField({ name: "postsPrimaryCta", title: "Boton del bloque", type: "string", fieldset: "posts" }),
    defineField({ name: "postsReadMoreLabel", title: "Texto del link leer columna", type: "string", fieldset: "posts" }),
    defineField({ name: "contactEyebrow", title: "Sobrelinea", type: "string", fieldset: "contact" }),
    defineField({ name: "contactTitle", title: "Titulo del bloque", type: "string", fieldset: "contact" }),
    defineField({ name: "contactBody", title: "Parrafo del bloque", type: "text", rows: 3, fieldset: "contact" }),
    defineField({ name: "contactPrimaryCta", title: "Boton del bloque", type: "string", fieldset: "contact" })
  ],
  preview: {
    select: {
      title: "heroTitle"
    }
  }
});
