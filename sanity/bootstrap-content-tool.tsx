"use client";

import { useState } from "react";
import { definePlugin, useClient } from "sanity";

type PortableTextSpan = {
  _key?: string;
  _type?: string;
  text?: string;
};

type PortableTextBlock = {
  _key?: string;
  _type?: string;
  children?: PortableTextSpan[];
};

type AboutPageDocument = {
  _id: string;
  biography?: PortableTextBlock[];
  approach?: PortableTextBlock[];
  experience?: PortableTextBlock[];
};

type GenericDocument = {
  _id: string;
  notes?: string[];
  sideTopics?: string[];
  approachPoints?: string[];
};

const baseSiteSettings = {
  _type: "siteSettings",
  siteName: "Angela Carvajal",
  brandTagline: "Psicoterapia para adultos, adolescentes y parejas",
  whatsappNumber: "56912345678",
  bookingWhatsappLabel: "Agenda tu hora por WhatsApp",
  phoneLabel: "+56 9 1234 5678",
  email: "contacto@angelacarvajal.cl",
  address: "Consulta presencial en Santiago",
  schedule: "Lunes a viernes, 9:00 a 19:00",
  backgroundColor: "#FAF7F2",
  foregroundColor: "#8B8580",
  accentColor: "#B9C8B1",
  surfaceColor: "rgba(250, 247, 242, 0.92)",
  surfaceStrongColor: "#E6C9C9",
  mapEmbedUrl: "https://www.google.com/maps?q=Las%20Condes%2C%20Santiago&z=14&output=embed",
  uiLabelsEs: {
    homeLabel: "Inicio",
    aboutLabel: "Sobre mi",
    servicesLabel: "Servicios",
    postsLabel: "Columnas",
    contactLabel: "Contacto",
    headerWhatsappLabel: "Solicitar hora",
    floatingBookingLabel: "Agenda tu hora aqui",
    backToTopLabel: "Volver arriba"
  },
  socialLinks: [
    { _key: "wa", label: "WhatsApp", href: "https://wa.me/56912345678" },
    { _key: "ig", label: "Instagram", href: "https://instagram.com/" },
    { _key: "fb", label: "Facebook", href: "https://facebook.com/" },
    { _key: "li", label: "LinkedIn", href: "https://linkedin.com/" }
  ]
};

const baseHomePage = {
  _type: "homePage",
  heroEyebrow: "Psicoterapia para adultos, adolescentes y parejas",
  heroTitle: "Un espacio sereno para comprender lo que hoy te esta costando sostener.",
  heroSubtitle: "Atencion psicologica online y presencial con un primer contacto simple y cercano.",
  heroDescription:
    "Angela Carvajal acompana procesos de ansiedad, crisis vitales, duelo, autoestima, vinculos y malestar emocional desde una mirada calida, profesional y respetuosa.",
  heroPrimaryCta: "Escribir por WhatsApp",
  heroSecondaryCta: "Ver servicios",
  approachEyebrow: "Enfoque",
  approachTitle: "Un proceso terapeutico claro, humano y sin sobrecarga.",
  approachBody:
    "La propuesta de trabajo busca ofrecer un espacio de escucha y elaboracion para comprender lo que te ocurre, fortalecer recursos personales y avanzar con mayor claridad en momentos de dificultad.",
  approachPoints: [
    "Espacio de escucha cuidado y profesional",
    "Atencion online y presencial segun tu necesidad",
    "Un primer contacto cercano para comenzar con claridad"
  ],
  servicesEyebrow: "Especialidades",
  servicesTitle: "Acompanamiento segun etapa vital, necesidad y tipo de proceso.",
  servicesIntro: "Cada espacio terapeutico esta pensado para responder con claridad a distintas necesidades de acompanamiento psicologico.",
  processEyebrow: "Como empezar",
  processTitle: "Tres pasos simples para comenzar.",
  processSteps: [
    { _key: "paso-1", title: "1. Primer contacto", description: "Puedes escribir por WhatsApp o dejar un mensaje en el formulario." },
    { _key: "paso-2", title: "2. Orientacion inicial", description: "Se resuelven dudas y se define la modalidad mas adecuada para ti." },
    { _key: "paso-3", title: "3. Coordinacion", description: "Se agenda la primera sesion y se comparten las indicaciones necesarias." }
  ],
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: "Dudas habituales antes de iniciar terapia",
  postsEyebrow: "Columnas",
  postsTitle: "Columnas para comprender, orientarte y acompanarte mejor.",
  postsIntro: "Un espacio editorial para abordar preguntas comunes sobre ansiedad, relaciones, procesos personales y salud mental.",
  postsPrimaryCta: "Ver columnas",
  postsReadMoreLabel: "Leer columna",
  contactEyebrow: "Contacto",
  contactTitle: "Un primer contacto claro y cercano.",
  contactBody: "Si quieres consultar por terapia, resolver una duda o coordinar una primera sesion, puedes escribir por WhatsApp o usar el formulario de contacto.",
  contactPrimaryCta: "Ver contacto"
};

const baseAboutPage = {
  _type: "aboutPage",
  eyebrow: "Sobre mi",
  title: "Un espacio terapeutico sostenido por presencia, criterio y escucha.",
  intro:
    "Soy Angela Carvajal y acompano procesos psicoterapeuticos desde una mirada cercana, respetuosa y clinicamente cuidadosa. Me interesa ofrecer un espacio donde puedas comprender lo que estas viviendo y avanzar con mas claridad.",
  biography: [
    {
      _key: "biografia-base",
      _type: "block",
      children: [
        {
          _key: "biografia-base-span",
          _type: "span",
          text: "Mi trabajo se centra en acompanar a personas que atraviesan ansiedad, crisis vitales, duelo, dificultades vinculares, malestar emocional o momentos de confusion que se han vuelto dificiles de sostener en soledad."
        }
      ]
    }
  ],
  approach: [
    {
      _key: "enfoque-base",
      _type: "block",
      children: [
        {
          _key: "enfoque-base-span",
          _type: "span",
          text: "Entiendo la psicoterapia como un proceso de elaboracion y comprension que requiere tiempo, confianza y una escucha atenta. Busco ofrecer un encuadre claro y una presencia terapeutica que facilite la exploracion, el alivio y el desarrollo de nuevos recursos."
        }
      ]
    }
  ],
  experience: [
    {
      _key: "experiencia-base",
      _type: "block",
      children: [
        {
          _key: "experiencia-base-span",
          _type: "span",
          text: "La formacion clinica, la experiencia profesional y las areas de especializacion sostienen un trabajo terapeutico serio, humano y cuidadosamente orientado a cada proceso."
        }
      ]
    }
  ],
  biographyTitle: "Trayectoria y trabajo clinico",
  approachTitle: "Como entiendo la psicoterapia",
  experienceTitle: "Formacion, experiencia y especializacion",
  testimonialsTitle: "Testimonios",
  primaryCta: "Agendar por WhatsApp",
  secondaryCta: "Ver servicios"
};

const baseContactPage = {
  _type: "contactPage",
  title: "Conversemos sobre tu proceso",
  mapTitle: "Mapa de ubicacion",
  whatsappFieldLabel: "WhatsApp",
  emailFieldLabel: "Correo",
  addressFieldLabel: "Direccion",
  scheduleFieldLabel: "Horario",
  formTitle: "Escribeme directamente",
  formIntro: "Si prefieres dejar un primer mensaje por escrito, completa este formulario y te respondere a la brevedad.",
  nameFieldLabel: "Nombre",
  emailInputLabel: "Correo",
  phoneInputLabel: "Telefono",
  modalityFieldLabel: "Modalidad preferida",
  messageFieldLabel: "Mensaje",
  modalityOptions: ["Online", "Presencial", "Lo conversamos"],
  submitLabel: "Enviar mensaje",
  successMessage: "Tu mensaje fue enviado. Te respondere pronto.",
  errorMessage: "No se pudo enviar el formulario. Intenta nuevamente.",
  closingTitle: "Datos de contacto",
  closingBody: "Si te acomoda mas escribir por WhatsApp, tambien puedes hacerlo directamente. Aqui encuentras ademas el correo, la ubicacion de referencia y el horario de atencion."
};

const baseServicesPage = {
  _type: "servicesPage",
  eyebrow: "Servicios",
  title: "Espacios de acompanamiento para distintas necesidades y momentos vitales.",
  intro: "La terapia puede abrir un espacio de comprension, alivio y cambio cuando algo se vuelve dificil de sostener. Estas son las principales modalidades de atencion disponibles hoy.",
  notes: ["Atencion online y presencial", "Trabajo con adultos, adolescentes y parejas", "Primer contacto por WhatsApp o formulario"],
  closingTitle: "Si no sabes por donde empezar, lo podemos conversar.",
  closingBody: "El primer contacto tambien sirve para orientarte sobre la modalidad o tipo de acompanamiento que puede hacer mas sentido para tu momento actual."
};

const basePostsPage = {
  _type: "postsPage",
  eyebrow: "Columnas",
  title: "Columnas para comprender mejor lo que estas viviendo.",
  intro: "Aqui encontraras articulos sobre ansiedad, relaciones, procesos personales y salud mental, escritos para orientar con claridad y cercania.",
  sideEyebrow: "Bitacora editorial",
  sideBody: "Reflexiones breves y articulos para acompanar preguntas sobre ansiedad, vinculos, duelo, autocuidado y procesos personales.",
  sideTopics: ["Reflexiones clinicas", "Ansiedad, vinculos y procesos personales"],
  readMoreLabel: "Leer columna"
};

const baseServices = [
  {
    _id: "seed-service-psicoterapia-adultos-es",
    _type: "service",
    title: "Psicoterapia para adultos",
    summary: "Un espacio para trabajar ansiedad, crisis vitales, duelo, autoestima, estres, vinculos y malestar emocional desde una escucha profesional y respetuosa.",
    modality: "both",
    order: 1
  },
  {
    _id: "seed-service-psicoterapia-adolescentes-es",
    _type: "service",
    title: "Psicoterapia para adolescentes",
    summary: "Acompanamiento para momentos de cambio, dificultades emocionales, conflictos familiares, autoestima, exigencia academica y malestar propio de esta etapa vital.",
    modality: "both",
    order: 2
  },
  {
    _id: "seed-service-parejas-es",
    _type: "service",
    title: "Terapia de pareja",
    summary: "Un espacio para abordar dificultades de comunicacion, distancia emocional, conflictos recurrentes y formas de relacionarse que necesitan ser revisadas.",
    modality: "both",
    order: 3
  }
];

const baseFaqs = [
  {
    _id: "seed-faq-primer-contacto-es",
    _type: "faq",
    question: "Como se realiza el primer contacto?",
    answer: "Puedes escribir por WhatsApp o dejar un mensaje en el formulario. La idea es que ese primer paso sea simple y claro.",
    order: 1
  },
  {
    _id: "seed-faq-modalidad-es",
    _type: "faq",
    question: "La atencion puede ser online o presencial?",
    answer: "Si. Dependiendo de tu preferencia y contexto, la terapia puede realizarse online o de manera presencial.",
    order: 2
  },
  {
    _id: "seed-faq-proxima-etapa-es",
    _type: "faq",
    question: "Y si no tengo claro que tipo de apoyo necesito?",
    answer: "No necesitas llegar con todo resuelto. El primer contacto tambien sirve para orientarte y ver juntos cual puede ser el mejor siguiente paso.",
    order: 3
  }
];

const baseTestimonials = [
  {
    _id: "seed-testimonial-es-01",
    _type: "testimonial",
    name: "Paciente adulta",
    quote: "Desde la primera sesion senti un espacio muy respetuoso y claro. Pude entender mejor lo que me estaba pasando y avanzar con mas calma.",
    featured: true,
    order: 1
  }
];

const baseAuthor = {
  _id: "seed-author-01",
  _type: "author",
  name: "Angela Carvajal",
  bio: "Psicologa clinica orientada a acompanar procesos de ansiedad, crisis vitales, vinculos y malestar emocional con cercania, criterio y claridad."
};

const basePosts = [
  {
    _id: "seed-post-es-01",
    _type: "post",
    title: "Cuando pedir ayuda psicologica deja de sentirse como una duda lejana",
    slug: { _type: "slug", current: "cuando-pedir-ayuda-psicologica" },
    excerpt: "Algunas senales que ayudan a reconocer cuando el malestar dejo de ser pasajero y conviene pedir acompanamiento.",
    author: { _type: "reference", _ref: "seed-author-01" },
    categories: ["Bienestar emocional"],
    publishedAt: "2026-06-15T10:00:00Z",
    body: [
      {
        _key: "post-es-1",
        _type: "block",
        children: [{ _key: "post-es-1-span", _type: "span", text: "Muchas personas llegan a terapia no porque algo haya explotado de un momento a otro, sino porque llevan demasiado tiempo funcionando con ansiedad, cansancio o confusion." }]
      },
      {
        _key: "post-es-2",
        _type: "block",
        children: [{ _key: "post-es-2-span", _type: "span", text: "Pedir ayuda no requiere tener todo claro. A veces basta con reconocer que algo se ha vuelto demasiado pesado, repetitivo o dificil de sostener en soledad." }]
      }
    ]
  },
  {
    _id: "seed-post-es-02",
    _type: "post",
    title: "Ansiedad cotidiana: cuando lo urgente empieza a ocuparlo todo",
    slug: { _type: "slug", current: "ansiedad-cotidiana-cuando-lo-urgente-ocupa-todo" },
    excerpt: "Una mirada simple para reconocer cuando la ansiedad deja de ser puntual y empieza a organizar toda la vida diaria.",
    author: { _type: "reference", _ref: "seed-author-01" },
    categories: ["Ansiedad"],
    publishedAt: "2026-06-10T10:00:00Z",
    body: [
      {
        _key: "post-es-3",
        _type: "block",
        children: [{ _key: "post-es-3-span", _type: "span", text: "La ansiedad no siempre aparece como panico evidente. A veces se expresa como apuro constante, dificultad para descansar o una mente que no logra detenerse." }]
      }
    ]
  }
];

function withGeneratedKey(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizePortableText(blocks: PortableTextBlock[] | undefined, prefix: string, fallback: PortableTextBlock[]) {
  const source = blocks?.length ? blocks : fallback;

  return source.map((block, blockIndex) => ({
    ...block,
    _key: block._key || `${prefix}-block-${blockIndex + 1}`,
    _type: block._type || "block",
    children: (block.children || []).map((child, childIndex) => ({
      ...child,
      _key: child._key || `${prefix}-span-${childIndex + 1}-${withGeneratedKey(child.text || "texto")}`,
      _type: child._type || "span"
    }))
  }));
}

function buildLegacyFieldUpdates(current: Record<string, unknown> | null | undefined, replacements: Record<string, { from: string; to: string }>) {
  const updates: Record<string, string> = {};

  if (!current) {
    return updates;
  }

  for (const [field, rule] of Object.entries(replacements)) {
    if (typeof current[field] === "string" && current[field] === rule.from) {
      updates[field] = rule.to;
    }
  }

  return updates;
}

function sameStringArray(current: unknown, expected: string[]) {
  return Array.isArray(current) && current.length === expected.length && current.every((item, index) => item === expected[index]);
}

function BootstrapContentPane() {
  const client = useClient({ apiVersion: "2024-06-01" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("Sincroniza la estructura base en espanol y elimina el contenido legado en ingles.");

  async function handleBootstrap() {
    setStatus("loading");
    setMessage("Sincronizando contenido base y limpiando contenido legado...");

    try {
      const [siteSettings, homePage, aboutPage, contactPage, servicesPage, postsPage, englishDocs] = await Promise.all([
        client.fetch<{ _id: string } | null>('*[_type == "siteSettings"][0]{_id}'),
        client.fetch<GenericDocument | null>('*[_type == "homePage"][0]{_id, approachPoints}'),
        client.fetch<AboutPageDocument | null>('*[_type == "aboutPage"][0]{_id, biography, approach, experience}'),
        client.fetch<GenericDocument | null>('*[_type == "contactPage"][0]{_id}'),
        client.fetch<GenericDocument | null>('*[_type == "servicesPage"][0]{_id, notes}'),
        client.fetch<GenericDocument | null>('*[_type == "postsPage"][0]{_id, sideTopics}'),
        client.fetch<string[]>('*[_type in ["homePage","aboutPage","contactPage","servicesPage","postsPage","service","faq","testimonial","post"] && language == "en"]._id')
      ]);

      const transaction = client.transaction();

      for (const docId of englishDocs) {
        transaction.delete(docId);
      }

      if (!siteSettings?._id) {
        transaction.create(baseSiteSettings);
      } else {
        transaction.patch(siteSettings._id, (patch) => patch.setIfMissing(baseSiteSettings).unset(["uiLabelsEn"]));
      }

      if (!homePage?._id) {
        transaction.create(baseHomePage);
      } else {
        const legacyHomeUpdates = buildLegacyFieldUpdates(homePage, {});
        transaction.patch(homePage._id, (patch) => {
          let nextPatch = patch.setIfMissing(baseHomePage).unset(["language"]);
          if (sameStringArray(homePage.approachPoints, ["Especialidades claras", "Credenciales visibles", "WhatsApp siempre a mano"])) {
            nextPatch = nextPatch.set({ approachPoints: baseHomePage.approachPoints });
          }
          if (Object.keys(legacyHomeUpdates).length) {
            nextPatch = nextPatch.set(legacyHomeUpdates);
          }
          return nextPatch;
        });
      }

      if (!aboutPage?._id) {
        transaction.create(baseAboutPage);
      } else {
        transaction.patch(aboutPage._id, (patch) =>
          patch
            .setIfMissing(baseAboutPage)
            .unset(["language"])
            .set({
              biography: normalizePortableText(aboutPage.biography, "biografia", baseAboutPage.biography),
              approach: normalizePortableText(aboutPage.approach, "enfoque", baseAboutPage.approach),
              experience: normalizePortableText(aboutPage.experience, "experiencia", baseAboutPage.experience)
            })
        );
      }

      if (!contactPage?._id) {
        transaction.create(baseContactPage);
      } else {
        transaction.patch(contactPage._id, (patch) => patch.setIfMissing(baseContactPage).unset(["language"]));
      }

      if (!servicesPage?._id) {
        transaction.create(baseServicesPage);
      } else {
        transaction.patch(servicesPage._id, (patch) => {
          let nextPatch = patch.setIfMissing(baseServicesPage).unset(["language"]);
          if (sameStringArray(servicesPage.notes, ["Servicios editables desde CMS", "Base para futuras landings", "Preparado para SEO y conversion"])) {
            nextPatch = nextPatch.set({ notes: baseServicesPage.notes });
          }
          return nextPatch;
        });
      }

      if (!postsPage?._id) {
        transaction.create(basePostsPage);
      } else {
        transaction.patch(postsPage._id, (patch) => {
          let nextPatch = patch.setIfMissing(basePostsPage).unset(["language"]);
          if (sameStringArray(postsPage.sideTopics, ["2 articulos", "Lectura serena"])) {
            nextPatch = nextPatch.set({ sideTopics: basePostsPage.sideTopics });
          }
          return nextPatch;
        });
      }

      for (const service of baseServices) {
        transaction.createIfNotExists(service);
        transaction.patch(service._id, (patch) => patch.unset(["language"]));
      }

      for (const faq of baseFaqs) {
        transaction.createIfNotExists(faq);
        transaction.patch(faq._id, (patch) => patch.unset(["language"]));
      }

      for (const testimonial of baseTestimonials) {
        transaction.createIfNotExists(testimonial);
        transaction.patch(testimonial._id, (patch) => patch.unset(["language"]));
      }

      transaction.createIfNotExists(baseAuthor);

      for (const post of basePosts) {
        transaction.createIfNotExists(post);
        transaction.patch(post._id, (patch) => patch.unset(["language"]));
      }

      await transaction.commit();

      setStatus("success");
      setMessage("Contenido base sincronizado. Studio y datos quedaron alineados en espanol, sin contenido ingles legado.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No se pudo sincronizar el contenido base.");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "32px" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          border: "1px solid #d6d6d6",
          borderRadius: "16px",
          background: "#fff",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
        }}
      >
        <div style={{ display: "grid", gap: "20px" }}>
          <div style={{ display: "grid", gap: "8px" }}>
            <h1 style={{ fontSize: "24px", margin: 0 }}>Contenido inicial</h1>
            <p style={{ margin: 0, color: "#5f5f5f" }}>
              Crea los documentos base si faltan, completa campos nuevos vacios y limpia el contenido legado en ingles.
            </p>
          </div>

          <div style={{ borderRadius: "12px", background: "#f6f6f6", padding: "16px" }}>
            <p style={{ margin: 0, color: "#2f2f2f" }}>
              Se revisan: configuracion del sitio, inicio, sobre mi, contacto, pagina de servicios, pagina de columnas, especialidades, preguntas frecuentes, testimonios, autora y columnas.
            </p>
          </div>

          <button
            disabled={status === "loading"}
            style={{
              border: 0,
              borderRadius: "999px",
              padding: "14px 20px",
              background: status === "loading" ? "#b8b8b8" : "#0f766e",
              color: "#fff",
              fontSize: "15px",
              cursor: status === "loading" ? "not-allowed" : "pointer"
            }}
            type="button"
            onClick={handleBootstrap}
          >
            {status === "loading" ? "Sincronizando..." : "Sincronizar contenido base"}
          </button>

          <div
            style={{
              borderRadius: "12px",
              padding: "16px",
              background: status === "error" ? "#fee2e2" : status === "success" ? "#dcfce7" : "#f6f6f6",
              color: "#222"
            }}
          >
            <p style={{ margin: 0 }}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const bootstrapContentTool = definePlugin({
  name: "bootstrap-content-tool",
  tools: [
    {
      name: "contenido-inicial",
      title: "Contenido inicial",
      component: BootstrapContentPane
    }
  ]
});
