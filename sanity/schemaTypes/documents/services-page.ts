import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Pagina de servicios",
  type: "document",
  fieldsets: [
    { name: "hero", title: "Servicios: cabecera" },
    { name: "side", title: "Servicios: caja lateral" },
    { name: "closing", title: "Servicios: cierre" }
  ],
  fields: [
    defineField({ name: "eyebrow", title: "Sobrelinea", type: "string", fieldset: "hero" }),
    defineField({ name: "title", title: "Titulo principal", type: "string", fieldset: "hero", validation: (rule) => rule.required() }),
    defineField({ name: "intro", title: "Parrafo principal", type: "text", rows: 3, fieldset: "hero" }),
    defineField({
      name: "notes",
      title: "Cajas laterales",
      type: "array",
      fieldset: "side",
      description: "Las tarjetas de especialidades se editan abajo en la coleccion Especialidades.",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({ name: "closingTitle", title: "Titulo del cierre", type: "string", fieldset: "closing" }),
    defineField({ name: "closingBody", title: "Parrafo del cierre", type: "text", rows: 3, fieldset: "closing" })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
});
