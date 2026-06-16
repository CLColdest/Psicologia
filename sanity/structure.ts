import type { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Configuracion del sitio")
        .schemaType("siteSettings")
        .child(S.documentTypeList("siteSettings").title("Configuracion del sitio")),
      S.listItem()
        .title("Pagina de inicio")
        .schemaType("homePage")
        .child(
          S.documentTypeList("homePage")
            .title("Pagina de inicio")
            .filter('_type == "homePage" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Sobre mi")
        .schemaType("aboutPage")
        .child(
          S.documentTypeList("aboutPage")
            .title("Sobre mi")
            .filter('_type == "aboutPage" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Contacto")
        .schemaType("contactPage")
        .child(
          S.documentTypeList("contactPage")
            .title("Contacto")
            .filter('_type == "contactPage" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Pagina de servicios")
        .schemaType("servicesPage")
        .child(
          S.documentTypeList("servicesPage")
            .title("Pagina de servicios")
            .filter('_type == "servicesPage" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Pagina de columnas")
        .schemaType("postsPage")
        .child(
          S.documentTypeList("postsPage")
            .title("Pagina de columnas")
            .filter('_type == "postsPage" && language == $language')
            .params({ language: "es" })
        ),
      S.divider(),
      S.listItem()
        .title("Servicios")
        .schemaType("service")
        .child(
          S.documentTypeList("service")
            .title("Servicios")
            .filter('_type == "service" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Preguntas frecuentes")
        .schemaType("faq")
        .child(
          S.documentTypeList("faq")
            .title("Preguntas frecuentes")
            .filter('_type == "faq" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Testimonios")
        .schemaType("testimonial")
        .child(
          S.documentTypeList("testimonial")
            .title("Testimonios")
            .filter('_type == "testimonial" && language == $language')
            .params({ language: "es" })
        ),
      S.listItem()
        .title("Autores")
        .schemaType("author")
        .child(S.documentTypeList("author").title("Autores")),
      S.listItem()
        .title("Columnas")
        .schemaType("post")
        .child(
          S.documentTypeList("post")
            .title("Columnas")
            .filter('_type == "post" && language == $language')
            .params({ language: "es" })
        )
    ]);
