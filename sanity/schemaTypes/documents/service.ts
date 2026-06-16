import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Servicio",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "title", title: "Titulo", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Resumen", type: "text", rows: 2 }),
    defineField({
      name: "modality",
      title: "Modalidad",
      type: "string",
      options: {
        list: [
          { title: "Online", value: "online" },
          { title: "Presencial", value: "in-person" },
          { title: "Ambas", value: "both" }
        ]
      }
    }),
    defineField({ name: "order", title: "Orden", type: "number" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "modality"
    }
  }
});
