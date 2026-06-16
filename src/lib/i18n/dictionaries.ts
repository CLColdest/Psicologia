export type Dictionary = {
  brand: string;
  brandTagline: string;
  routes: {
    about: string;
    services: string;
    contact: string;
  };
  nav: Array<{
    href: string;
    label: string;
  }>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
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

const dictionary: Dictionary = {
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
    description:
      "Angela Carvajal acompana procesos de ansiedad, crisis vitales, duelo, autoestima, vinculos y malestar emocional desde una mirada humana, clara y profesional.",
    primaryCta: "Escribir por WhatsApp",
    secondaryCta: "Ver servicios"
  },
  approach: {
    eyebrow: "Enfoque",
    title: "La confianza se construye con claridad, calma y acceso directo.",
    body:
      "La psicoterapia busca ofrecer un espacio de escucha, comprension y elaboracion para transitar mejor momentos de ansiedad, conflicto, crisis o cambio vital.",
    points: [
      "Trabajo clinico centrado en cada proceso",
      "Atencion online y presencial segun tu necesidad",
      "Un primer contacto cercano y sin friccion"
    ]
  },
  services: {
    eyebrow: "Especialidades",
    title: "Acompanamiento segun el tipo de proceso y etapa vital.",
    intro:
      "Cada espacio esta pensado para ofrecer contencion, orientacion y trabajo terapeutico de acuerdo con distintas necesidades y momentos vitales.",
    items: [
      {
        title: "Psicoterapia adultos",
        description:
          "Espacio para ansiedad, angustia, duelo, estres, crisis vitales y conflictos personales o relacionales."
      },
      {
        title: "Psicoterapia adolescentes",
        description:
          "Acompanamiento contenedor para emociones intensas, autoestima, cambios vitales y fortalecimiento del autocuidado."
      },
      {
        title: "Pareja y orientacion familiar",
        description:
          "Trabajo focalizado en comunicacion, vinculo, dinamicas de conflicto y herramientas para relacionarse mejor."
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
    body:
      "Si quieres consultar por terapia, resolver una duda o coordinar una primera sesion, puedes escribir por WhatsApp o usar el formulario de contacto.",
    primaryCta: "Ver contacto",
    secondaryCta: "Ir a contacto",
    whatsapp: "WhatsApp",
    email: "Correo de contacto",
    address: "Direccion",
    schedule: "Ubicacion y horarios"
  }
};

export function getDictionary() {
  return dictionary;
}
