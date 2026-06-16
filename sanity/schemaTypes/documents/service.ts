import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Especialidad",
  type: "document",
  fieldsets: [{ name: "content", title: "Tarjeta visible en inicio y servicios" }],
  fields: [
    defineField({ name: "title", title: "Titulo de la especialidad", type: "string", fieldset: "content", validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Resumen de la especialidad", type: "text", rows: 3, fieldset: "content" }),
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
    defineField({ name: "order", title: "Orden de aparicion", type: "number", fieldset: "content" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "modality"
    }
  }
});
