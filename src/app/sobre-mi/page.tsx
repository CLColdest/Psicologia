import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { buildSitePath } from "@/lib/site";
import { getAboutPageData, mapAboutContent } from "@/lib/cms/content";

const content = {
  eyebrow: "Sobre mi",
  title: "Una psicoterapia sostenida por presencia, criterio y escucha.",
  intro:
    "Soy Angela Carvajal y acompano procesos psicoterapeuticos desde una mirada cercana, respetuosa y clinicamente cuidadosa. Este espacio busca mostrar con claridad mi forma de trabajar y el tipo de acompanamiento que ofrezco.",
  mainImageUrl: "/images/therapist-hero.jpg",
  sections: [
    {
      title: "Trayectoria y trabajo clinico",
      body:
        "Trabajo con personas que atraviesan ansiedad, crisis vitales, duelo, dificultades vinculares, autoestima, estres y distintas formas de malestar emocional que se han vuelto dificiles de sostener en soledad."
    },
    {
      title: "Como entiendo la psicoterapia",
      body:
        "Entiendo la terapia como un espacio de elaboracion y comprension que requiere tiempo, confianza y una escucha atenta. Busco ofrecer un encuadre claro, una presencia terapeutica respetuosa y un trabajo que ayude a ordenar lo que hoy se vive con confusion o dolor."
    },
    {
      title: "Formacion, experiencia y especializacion",
      body:
        "Aqui se integran antecedentes de formacion, experiencia clinica, diplomados, cursos y areas de especializacion para que quien consulta pueda conocer mejor el sustento profesional del proceso."
    }
  ],
  testimonialsTitle: "Testimonios",
  testimonials: [],
  primaryCta: "Agendar por WhatsApp",
  secondaryCta: "Ver servicios"
} as const;

export default async function AboutPage() {
  const page = mapAboutContent(content, await getAboutPageData());

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="page-hero-panel panel-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="stack-lg">
          <p className="editorial-label">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{page.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="accent-fill inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(140,107,62,0.18)]"
              href="/contacto"
            >
              {page.primaryCta}
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              href={buildSitePath("/servicios")}
            >
              {page.secondaryCta}
            </Link>
          </div>
        </Reveal>

        <Reveal className="elevated-card card-pad-lg rounded-[1.75rem]" delay={0.08}>
          <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-white/75">
            <Image
              alt="Angela Carvajal"
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              src={page.mainImageUrl || "/images/therapist-hero.jpg"}
            />
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {page.sections.map((section, index) => (
          <Reveal key={section.title} className="elevated-card card-pad rounded-[1.5rem]" delay={index * 0.08}>
            <div className="stack-card-copy">
              <h2 className="text-2xl leading-tight">{section.title}</h2>
              <p className="text-base leading-7 text-[color:var(--muted)]">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {page.testimonials.length ? (
        <section className="grid gap-6">
          <Reveal className="space-y-3">
            <p className="editorial-label">{page.eyebrow}</p>
            <h2 className="text-3xl leading-tight md:text-4xl">{page.testimonialsTitle}</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {page.testimonials.map((testimonial, index) => (
              <Reveal
                key={`${testimonial.name}-${index}`}
                className="elevated-card card-pad rounded-[1.5rem]"
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
