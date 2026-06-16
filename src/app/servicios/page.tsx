import { Reveal } from "@/components/ui/reveal";
import { getServicesData, getServicesPageData, mapServicesContent } from "@/lib/cms/content";

const content = {
  eyebrow: "Servicios",
  title: "Espacios de acompanamiento para distintas necesidades y momentos vitales.",
  intro:
    "La terapia puede abrir un espacio de comprension, alivio y cambio cuando algo se vuelve dificil de sostener. Estas son las principales modalidades de atencion disponibles hoy.",
  services: [
    {
      title: "Psicoterapia para adultos",
      body:
        "Espacio para ansiedad, duelo, crisis vitales, vinculos, autoestima, estres y otras experiencias que requieren un proceso de escucha y elaboracion."
    },
    {
      title: "Psicoterapia para adolescentes",
      body:
        "Acompanamiento para momentos de cambio, dificultades emocionales, autoestima, exigencia academica y conflictos que aparecen en esta etapa vital."
    },
    {
      title: "Terapia de pareja",
      body:
        "Trabajo orientado a revisar formas de comunicacion, conflictos repetitivos, distancia emocional y dificultades del vinculo."
    }
  ],
  notes: ["Atencion online y presencial", "Trabajo con adultos, adolescentes y parejas", "Primer contacto por WhatsApp o formulario"],
  closingTitle: "Si no sabes por donde empezar, lo podemos conversar.",
  closingBody:
    "El primer contacto tambien sirve para orientarte sobre la modalidad o tipo de acompanamiento que puede hacer mas sentido para tu momento actual."
} as const;

export default async function ServicesPage() {
  const [services, servicesPage] = await Promise.all([getServicesData(), getServicesPageData()]);
  const page = mapServicesContent(content, services, servicesPage);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="page-hero-panel panel-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal className="stack-lg">
          <p className="editorial-label">{page.eyebrow}</p>
          <h1 className="max-w-4xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{page.intro}</p>
        </Reveal>

        <Reveal className="elevated-card card-pad-lg rounded-[1.75rem]" delay={0.08}>
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
          <Reveal key={service.title} className="elevated-card card-pad rounded-[1.5rem]" delay={index * 0.08}>
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
