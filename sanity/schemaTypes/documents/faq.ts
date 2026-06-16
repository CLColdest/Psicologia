import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "Pregunta frecuente",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Pregunta", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Respuesta", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Orden de aparicion", type: "number" })
  ],
  preview: {
    select: {
      title: "question"
    }
  }
});
