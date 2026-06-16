import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonio",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre o alias", type: "string" }),
    defineField({ name: "quote", title: "Texto del testimonio", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Destacado", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Orden de aparicion", type: "number" })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quote"
    }
  }
});
