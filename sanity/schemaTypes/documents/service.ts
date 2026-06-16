import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Servicio",
  type: "document",
  fieldsets: [{ name: "content", title: "Tarjeta de especialidad" }],
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      hidden: true,
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "title", title: "Titulo", type: "string", fieldset: "content", validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Resumen", type: "text", rows: 2, fieldset: "content" }),
    defineField({
      name: "modality",
      title: "Modalidad",
      type: "string",
      fieldset: "content",
      options: {
        list: [
          { title: "Online", value: "online" },
          { title: "Presencial", value: "in-person" },
          { title: "Ambas", value: "both" }
        ]
      }
    }),
    defineField({ name: "order", title: "Orden", type: "number", fieldset: "content" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "modality"
    }
  }
});
