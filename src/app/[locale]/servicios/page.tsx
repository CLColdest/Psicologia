import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { isLocale } from "@/lib/i18n/config";
import { getServicesData, getServicesPageData, mapServicesContent } from "@/lib/cms/content";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  es: {
    eyebrow: "Servicios",
    title: "Espacios de acompanamiento para distintas necesidades y momentos vitales.",
    intro: "La terapia puede abrir un espacio de comprension, alivio y cambio cuando algo se vuelve dificil de sostener. Estas son las principales modalidades de atencion disponibles hoy.",
    services: [
      {
        title: "Psicoterapia para adultos",
        body: "Espacio para ansiedad, duelo, crisis vitales, vinculos, autoestima, estres y otras experiencias que requieren un proceso de escucha y elaboracion."
      },
      {
        title: "Psicoterapia para adolescentes",
        body: "Acompanamiento para momentos de cambio, dificultades emocionales, autoestima, exigencia academica y conflictos que aparecen en esta etapa vital."
      },
      {
        title: "Terapia de pareja",
        body: "Trabajo orientado a revisar formas de comunicacion, conflictos repetitivos, distancia emocional y dificultades del vinculo."
      }
    ],
    notes: ["Atencion online y presencial", "Trabajo con adultos, adolescentes y parejas", "Primer contacto por WhatsApp o formulario"],
    closingTitle: "Si no sabes por donde empezar, lo podemos conversar.",
    closingBody: "El primer contacto tambien sirve para orientarte sobre la modalidad o tipo de acompanamiento que puede hacer mas sentido para tu momento actual."
  },
  en: {
    eyebrow: "Services",
    title: "Therapeutic spaces for different needs and life moments.",
    intro: "Therapy can offer understanding, relief, and change when something in life has become difficult to sustain. These are the main care formats currently available.",
    services: [
      {
        title: "Adult psychotherapy",
        body: "A space to work through anxiety, grief, life transitions, relationships, self-esteem, stress, and other experiences that call for careful listening and reflection."
      },
      {
        title: "Teen psychotherapy",
        body: "Support for moments of change, emotional difficulties, self-esteem work, academic pressure, and the conflicts that can emerge during adolescence."
      },
      {
        title: "Couples therapy",
        body: "A focused space to work on communication, recurring conflict, emotional distance, and relationship dynamics that need to be reviewed with care."
      }
    ],
    notes: ["Online and in-person care", "Work with adults, teens, and couples", "First contact through WhatsApp or form"],
    closingTitle: "If you are not sure where to begin, we can talk it through.",
    closingBody: "The first contact also helps clarify which format or type of support may fit your current moment best."
  }
} as const;

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [services, servicesPage] = await Promise.all([getServicesData(locale), getServicesPageData(locale)]);
  const page = mapServicesContent(content[locale], services, servicesPage);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="page-hero-panel panel-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal className="stack-lg">
          <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{page.intro}</p>
        </Reveal>

        <Reveal
          className="elevated-card card-pad-lg rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(238,228,217,0.92))]"
          delay={0.08}
        >
          <ul className="grid gap-4">
            {page.notes.map((note) => (
              <li key={note} className="rounded-[1.25rem] border border-black/10 bg-white/65 px-5 py-4 text-base leading-7 text-[color:var(--foreground)]">
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {page.services.map((service, index) => (
          <Reveal
            key={service.title}
            className="elevated-card card-pad rounded-[1.5rem]"
            delay={index * 0.08}
          >
            <h2 className="text-2xl leading-tight">{service.title}</h2>
            <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{service.body}</p>
          </Reveal>
        ))}
      </section>

      <section className="page-hero-panel panel-pad">
        <Reveal className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">{page.closingTitle}</h2>
          <p className="text-base leading-7 text-[color:var(--muted)]">{page.closingBody}</p>
        </Reveal>
      </section>
    </main>
  );
}
