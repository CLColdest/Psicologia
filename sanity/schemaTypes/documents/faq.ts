import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "Preguntas frecuentes",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Idioma",
      type: "string",
      initialValue: "es",
      options: { list: [{ title: "Español", value: "es" }, { title: "Ingles", value: "en" }] }
    }),
    defineField({ name: "question", title: "Pregunta", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Respuesta", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "order", title: "Orden", type: "number" })
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "language"
    }
  }
});
