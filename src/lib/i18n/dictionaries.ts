import type { Locale } from "@/lib/i18n/config";

type NavLink = {
  href: string;
  label: string;
};

export type Dictionary = {
  localeLabel: string;
  brand: string;
  brandTagline: string;
  routes: {
    about: string;
    services: string;
    contact: string;
  };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    visualCard: {
      eyebrow: string;
      tags: string[];
    };
  };
  differentiators: Array<{
    title: string;
    description: string;
  }>;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  approach: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  faqPreview: {
    eyebrow: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  postsPreview: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    readMoreLabel: string;
    items: Array<{
      title: string;
      slug: string;
      excerpt: string;
      category: string;
      publishedAt: string;
      authorName: string;
      coverImageUrl: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    whatsapp: string;
    email: string;
    address: string;
    schedule: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    localeLabel: "ES",
    brand: "Angela Carvajal",
    brandTagline: "Psicoterapia para adultos, adolescentes y parejas",
    routes: {
      about: "/sobre-mi",
      services: "/servicios",
      contact: "/contacto"
    },
    nav: [
      { href: "/sobre-mi", label: "Sobre mi" },
      { href: "/servicios", label: "Servicios" },
      { href: "/columnas", label: "Columnas" },
      { href: "/contacto", label: "Contacto" }
    ],
    hero: {
      eyebrow: "Psicoterapia para adultos, adolescentes y parejas",
      title: "Un espacio sereno y profesional para empezar a ordenar lo que hoy te pesa.",
      subtitle: "Atencion online y presencial con un primer contacto simple y cercano por WhatsApp.",
      description: "Angela Carvajal acompana procesos de ansiedad, crisis vitales, duelo, autoestima, vinculos y malestar emocional desde una mirada humana, clara y profesional.",
      primaryCta: "Escribir por WhatsApp",
      secondaryCta: "Ver servicios",
      visualCard: {
        eyebrow: "Angela Carvajal",
        tags: ["Psicoterapia", "Atencion clinica", "Imagen desde CMS"]
      }
    },
    differentiators: [
      {
        title: "Claro",
        description: "Servicios y contacto visibles desde el inicio."
      },
      {
        title: "Confiable",
        description: "Una presentacion sobria y profesional."
      },
      {
        title: "Listo para crecer",
        description: "Base preparada para CMS, SEO y campanas."
      }
    ],
    metrics: [
      { value: "1", label: "Contacto claro" },
      { value: "2", label: "Canales" },
      { value: "24/7", label: "Formulario" }
    ],
    approach: {
      eyebrow: "Enfoque",
      title: "La confianza se construye con claridad, calma y acceso directo.",
      body: "La psicoterapia busca ofrecer un espacio de escucha, comprension y elaboracion para transitar mejor momentos de ansiedad, conflicto, crisis o cambio vital.",
      points: ["Trabajo clinico centrado en cada proceso", "Atencion online y presencial segun tu necesidad", "Un primer contacto cercano y sin friccion"]
    },
    services: {
      eyebrow: "Especialidades",
      title: "Acompanamiento segun el tipo de proceso y etapa vital.",
      intro: "Cada espacio esta pensado para ofrecer contencion, orientacion y trabajo terapeutico de acuerdo con distintas necesidades y momentos vitales.",
      items: [
        {
          title: "Psicoterapia adultos",
          description: "Espacio para ansiedad, angustia, duelo, estres, crisis vitales y conflictos personales o relacionales."
        },
        {
          title: "Psicoterapia adolescentes",
          description: "Acompanamiento contenedor para emociones intensas, autoestima, cambios vitales y fortalecimiento del autocuidado."
        },
        {
          title: "Pareja y orientacion familiar",
          description: "Trabajo focalizado en comunicacion, vinculo, dinamicas de conflicto y herramientas para relacionarse mejor."
        }
      ]
    },
    process: {
      eyebrow: "Como empezar",
      title: "Tres pasos simples para comenzar.",
      steps: [
        {
          title: "1. Primer contacto",
          description: "Puedes escribir por WhatsApp o dejar un mensaje en el formulario."
        },
        {
          title: "2. Orientacion inicial",
          description: "Se responden dudas y se define la modalidad mas adecuada para tu proceso."
        },
        {
          title: "3. Coordinacion",
          description: "Se agenda la primera sesion y se comparten las indicaciones necesarias."
        }
      ]
    },
    faqPreview: {
      eyebrow: "Preguntas frecuentes",
      title: "Dudas habituales antes de iniciar terapia",
      items: [
        {
          question: "Como se realiza el primer contacto?",
          answer: "La via principal es WhatsApp para responder rapido y orientar el siguiente paso."
        },
        {
          question: "La atencion puede ser online o presencial?",
          answer: "Si. La estructura contempla ambas modalidades para adaptarse a contexto y preferencia."
        },
        {
          question: "Que pasa si no se que tipo de atencion necesito?",
          answer: "El primer contacto sirve justamente para orientar si conviene terapia individual, adolescentes o pareja."
        }
      ]
    },
    postsPreview: {
      eyebrow: "Columnas",
      title: "Columnas para comprender, orientarte y acompanarte mejor.",
      intro: "Articulos pensados para abordar con claridad temas como ansiedad, relaciones, procesos personales y salud mental.",
      primaryCta: "Ver columnas",
      readMoreLabel: "Leer columna",
      items: []
    },
    contact: {
      eyebrow: "Contacto",
      title: "Un primer contacto claro y cercano.",
      body: "Si quieres consultar por terapia, resolver una duda o coordinar una primera sesion, puedes escribir por WhatsApp o usar el formulario de contacto.",
      primaryCta: "Ver contacto",
      secondaryCta: "Ir a contacto",
      whatsapp: "WhatsApp",
      email: "Correo de contacto",
      address: "Direccion",
      schedule: "Ubicacion y horarios"
    }
  },
  en: {
    localeLabel: "EN",
    brand: "Angela Carvajal",
    brandTagline: "Psychotherapy for adults, teens, and couples",
    routes: {
      about: "/sobre-mi",
      services: "/servicios",
      contact: "/contacto"
    },
    nav: [
      { href: "/sobre-mi", label: "About" },
      { href: "/servicios", label: "Services" },
      { href: "/columnas", label: "Articles" },
      { href: "/contacto", label: "Contact" }
    ],
    hero: {
      eyebrow: "Psychotherapy with a warm and modern approach",
      title: "A calm and professional place to start making sense of what feels heavy right now.",
      subtitle: "Online and in-person care with a simple first step through WhatsApp.",
      description: "Angela Carvajal supports processes related to anxiety, life transitions, grief, self-esteem, relationships, and emotional distress with a clear, human, and professional approach.",
      primaryCta: "Chat on WhatsApp",
      secondaryCta: "View services",
      visualCard: {
        eyebrow: "Angela Carvajal",
        tags: ["Psychotherapy", "Clinical care", "Professional practice"]
      }
    },
    differentiators: [
      {
        title: "Clear from the start",
        description: "Core information, services, and contact channels appear without unnecessary friction."
      },
      {
        title: "Trust and care",
        description: "The visual and written direction is built to feel calm, credible, and welcoming."
      },
      {
        title: "Growth-ready",
        description: "The foundation is ready for editable content, SEO, blog, and future acquisition campaigns."
      }
    ],
    metrics: [
      { value: "1", label: "Clear contact path" },
      { value: "2", label: "Primary channels" },
      { value: "24/7", label: "Form availability" }
    ],
    approach: {
      eyebrow: "Approach",
      title: "Trust grows through clarity, calm, and direct access.",
      body:
        "Psychotherapy can offer a space for reflection, emotional processing, and relief when something in life has become difficult to hold alone.",
      points: [
        "Clear specialties by patient type",
        "Visible credentials and context",
        "WhatsApp and contact always within reach"
      ]
    },
    services: {
      eyebrow: "Specialties",
      title: "Support shaped around life stage and relational context.",
      intro: "Each therapeutic space is designed to respond with care and clarity to different moments, needs, and ways of experiencing emotional distress.",
      items: [
        {
          title: "Adult psychotherapy",
          description: "Support for anxiety, distress, grief, stress, life transitions, and personal or relational conflict."
        },
        {
          title: "Teen psychotherapy",
          description: "A containing space for intense emotions, self-esteem work, life changes, and stronger self-care."
        },
        {
          title: "Couples and family guidance",
          description: "Focused work on communication, bond repair, recurring conflict, and healthier relationship dynamics."
        }
      ]
    },
    process: {
      eyebrow: "Getting started",
      title: "Three simple steps to get started.",
      steps: [
        {
          title: "1. First contact",
          description: "The visitor reaches out through WhatsApp or leaves a message in the form."
        },
        {
          title: "2. Initial guidance",
          description: "The inquiry is answered, questions are clarified, and the most suitable format is defined."
        },
        {
          title: "3. Coordination",
          description: "The first session is arranged and the next step becomes clear."
        }
      ]
    },
    faqPreview: {
      eyebrow: "Common questions",
      title: "Common questions before booking",
      items: [
        {
          question: "How does the first contact work?",
          answer: "WhatsApp is the main path for a quick reply and guidance on the next step."
        },
        {
          question: "Can care be online or in person?",
          answer: "Yes. The structure supports both formats depending on context and preference."
        },
        {
          question: "What if I am not sure which type of care fits me?",
          answer: "The first contact is there to orient whether adult, teen, or couples support makes the most sense."
        }
      ]
    },
    postsPreview: {
      eyebrow: "Articles",
      title: "Articles to support, orient, and deepen understanding.",
      intro: "A simple editorial space to explore anxiety, relationships, personal processes, and mental health.",
      primaryCta: "View articles",
      readMoreLabel: "Read article",
      items: []
    },
    contact: {
      eyebrow: "Contact",
      title: "A clear and approachable first contact.",
      body:
        "If you want to ask about therapy, clarify a question, or coordinate a first session, you can write through WhatsApp or use the contact form.",
      primaryCta: "View contact",
      secondaryCta: "Go to contact",
      whatsapp: "WhatsApp",
      email: "Contact email",
      address: "Address",
      schedule: "Location and schedule"
    }
  }
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
