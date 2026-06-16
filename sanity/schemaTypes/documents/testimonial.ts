import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Language", type: "string", initialValue: "es" }),
    defineField({ name: "name", title: "Name or Alias", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Order", type: "number" })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quote"
    }
  }
});
