import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { buildLocaleUrl } from "@/lib/site";
import { isLocale } from "@/lib/i18n/config";
import { getAboutPageData, mapAboutContent } from "@/lib/cms/content";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

const content = {
  es: {
    eyebrow: "Sobre mi",
    title: "Una psicoterapia sostenida por presencia, criterio y escucha.",
    intro:
      "Soy Angela Carvajal y acompano procesos psicoterapeuticos desde una mirada cercana, respetuosa y clinicamente cuidadosa. Este espacio busca mostrar con claridad mi forma de trabajar y el tipo de acompanamiento que ofrezco.",
    mainImageUrl: "/images/therapist-hero.jpg",
    sections: [
      {
        title: "Trayectoria y trabajo clinico",
        body: "Trabajo con personas que atraviesan ansiedad, crisis vitales, duelo, dificultades vinculares, autoestima, estres y distintas formas de malestar emocional que se han vuelto dificiles de sostener en soledad."
      },
      {
        title: "Como entiendo la psicoterapia",
        body: "Entiendo la terapia como un espacio de elaboracion y comprension que requiere tiempo, confianza y una escucha atenta. Busco ofrecer un encuadre claro, una presencia terapeutica respetuosa y un trabajo que ayude a ordenar lo que hoy se vive con confusion o dolor."
      },
      {
        title: "Formacion, experiencia y especializacion",
        body: "Aqui se integran antecedentes de formacion, experiencia clinica, diplomados, cursos y areas de especializacion para que quien consulta pueda conocer mejor el sustento profesional del proceso."
      }
    ],
    testimonialsTitle: "Testimonios",
    testimonials: [],
    primaryCta: "Agendar por WhatsApp",
    secondaryCta: "Ver servicios"
  },
  en: {
    eyebrow: "About",
    title: "A therapeutic space held with presence, care, and clinical clarity.",
    intro:
      "I am Angela Carvajal, and I support psychotherapy processes through a warm, respectful, and clinically grounded approach. This page offers a clearer sense of how I work and the kind of support I provide.",
    mainImageUrl: "/images/therapist-hero.jpg",
    sections: [
      {
        title: "Clinical path and professional focus",
        body: "My work is centered on supporting people who are moving through anxiety, life transitions, grief, relationship difficulties, self-esteem struggles, stress, and other forms of emotional distress that have become difficult to carry alone."
      },
      {
        title: "How I understand psychotherapy",
        body: "I understand therapy as a process of reflection and emotional understanding that requires time, trust, and careful listening. I aim to offer a clear frame and a respectful presence that helps people make sense of what they are living."
      },
      {
        title: "Training, experience, and specialization",
        body: "This space brings together academic training, clinical experience, further study, and areas of specialization so visitors can understand the professional foundation behind the process."
      }
    ],
    testimonialsTitle: "Testimonials",
    testimonials: [],
    primaryCta: "Book on WhatsApp",
    secondaryCta: "View services"
  }
} as const;

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const page = mapAboutContent(content[locale], await getAboutPageData(locale));

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="page-hero-panel panel-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="stack-lg">
          <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{page.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(140,107,62,0.18)]"
              href={buildLocaleUrl(locale, "/contacto")}
            >
              {page.primaryCta}
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              href={buildLocaleUrl(locale, "/servicios")}
            >
              {page.secondaryCta}
            </Link>
          </div>
        </Reveal>

        <Reveal
          className="elevated-card card-pad-lg rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(238,228,217,0.92))]"
          delay={0.08}
        >
          <div>
            <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(227,214,198,0.96))]">
              <Image
                alt={locale === "es" ? "Angela Carvajal" : "Angela Carvajal"}
                className="object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 100vw"
                src={page.mainImageUrl || "/images/therapist-hero.jpg"}
              />
            </div>

          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {page.sections.map((section, index) => (
          <Reveal
            key={section.title}
            className="elevated-card card-pad rounded-[1.5rem]"
            delay={index * 0.08}
          >
            <h2 className="text-2xl leading-tight">{section.title}</h2>
            <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{section.body}</p>
          </Reveal>
        ))}
      </section>

      {page.testimonials.length ? (
        <section className="grid gap-6">
          <Reveal className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-[color:var(--accent)]">{page.eyebrow}</p>
            <h2 className="text-3xl leading-tight md:text-4xl">{page.testimonialsTitle}</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {page.testimonials.map((testimonial, index) => (
              <Reveal
                key={`${testimonial.name}-${index}`}
                className="elevated-card card-pad rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(238,228,217,0.92))]"
                delay={index * 0.08}
              >
                <p className="text-lg leading-8 text-[color:var(--foreground)]">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[color:var(--muted)]">{testimonial.name}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
