import type { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Configuracion del sitio")
        .schemaType("siteSettings")
        .child(S.documentTypeList("siteSettings").title("Configuracion del sitio")),
      S.listItem().title("Pagina de inicio").schemaType("homePage").child(S.documentTypeList("homePage").title("Pagina de inicio")),
      S.listItem().title("Pagina Sobre mi").schemaType("aboutPage").child(S.documentTypeList("aboutPage").title("Pagina Sobre mi")),
      S.listItem().title("Pagina de contacto").schemaType("contactPage").child(S.documentTypeList("contactPage").title("Pagina de contacto")),
      S.listItem().title("Pagina de servicios").schemaType("servicesPage").child(S.documentTypeList("servicesPage").title("Pagina de servicios")),
      S.listItem().title("Pagina de columnas").schemaType("postsPage").child(S.documentTypeList("postsPage").title("Pagina de columnas")),
      S.divider(),
      S.listItem().title("Especialidades").schemaType("service").child(S.documentTypeList("service").title("Especialidades")),
      S.listItem().title("Preguntas frecuentes").schemaType("faq").child(S.documentTypeList("faq").title("Preguntas frecuentes")),
      S.listItem().title("Testimonios").schemaType("testimonial").child(S.documentTypeList("testimonial").title("Testimonios")),
      S.listItem().title("Autora de columnas").schemaType("author").child(S.documentTypeList("author").title("Autora de columnas")),
      S.listItem().title("Columnas").schemaType("post").child(S.documentTypeList("post").title("Columnas"))
    ]);
