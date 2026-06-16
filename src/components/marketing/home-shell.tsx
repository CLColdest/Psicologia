import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { buildSitePath, type PracticeSettings } from "@/lib/site";

function formatPostDate(value: string) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

type HomeShellProps = {
  content: Dictionary;
  practiceSettings: PracticeSettings;
};

export function HomeShell({ content, practiceSettings }: HomeShellProps) {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-10 md:gap-28 md:py-16">
      <section>
        <Reveal className="stack-lg max-w-3xl">
          <div className="stack-lg">
            <p className="editorial-label">{content.hero.eyebrow}</p>
            <h1 className="max-w-3xl text-[2.9rem] leading-[0.96] md:max-w-[10.8ch] md:text-[4rem] lg:text-[4.15rem]">{content.hero.title}</h1>
            <p className="max-w-2xl pt-4 text-lg leading-8 text-[color:color-mix(in_srgb,var(--foreground)_52%,#2f241d)] md:pt-5 md:text-[1.18rem]">
              {content.hero.subtitle}
            </p>
            <p className="max-w-2xl text-[1.02rem] leading-8 text-[color:var(--muted)]">{content.hero.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              className="accent-fill inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(140,107,62,0.18)]"
              href={practiceSettings.whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              {content.hero.primaryCta}
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              href={buildSitePath(content.routes.services)}
            >
              {content.hero.secondaryCta}
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal className="stack-lg">
          <p className="editorial-label">{content.approach.eyebrow}</p>
          <h2 className="max-w-xl text-4xl leading-tight md:text-5xl">{content.approach.title}</h2>
          <p className="max-w-xl text-lg leading-8 text-[color:var(--muted)]">{content.approach.body}</p>
        </Reveal>

        <Reveal className="grid gap-4" delay={0.08}>
          {content.approach.points.map((point) => (
            <div key={point} className="elevated-card card-pad rounded-[1.5rem] text-base leading-7 text-[color:var(--foreground)]">
              {point}
            </div>
          ))}
        </Reveal>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Reveal className="stack-md lg:col-span-1">
          <p className="editorial-label">{content.services.eyebrow}</p>
          <h2 className="text-4xl leading-tight md:text-5xl">{content.services.title}</h2>
          <p className="max-w-md text-lg leading-8 text-[color:var(--muted)]">{content.services.intro}</p>
        </Reveal>

        <div className="grid gap-4 lg:col-span-2">
          {content.services.items.map((service, index) => (
            <Reveal key={service.title} className="elevated-card card-pad rounded-[1.5rem]" delay={index * 0.08}>
              <div className="mb-4 flex items-center gap-3">
                <span className="soft-chip flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-[color:var(--foreground)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl leading-tight">{service.title}</h3>
              </div>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Reveal className="stack-md lg:col-span-1">
          <p className="editorial-label">{content.process.eyebrow}</p>
          <h2 className="text-4xl leading-tight md:text-5xl">{content.process.title}</h2>
        </Reveal>

        <div className="grid gap-4 lg:col-span-2 md:grid-cols-3">
          {content.process.steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="elevated-card card-pad rounded-[1.5rem]"
              delay={index * 0.08}
            >
              <h3 className="text-xl leading-tight">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="stack-md">
          <p className="editorial-label">{content.faqPreview.eyebrow}</p>
          <h2 className="text-4xl leading-tight md:text-5xl">{content.faqPreview.title}</h2>
        </Reveal>

        <div className="grid gap-4">
          {content.faqPreview.items.map((item, index) => (
            <Reveal key={item.question} className="elevated-card card-pad rounded-[1.5rem]" delay={index * 0.08}>
              <h3 className="text-xl leading-tight">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {content.postsPreview.items.length ? (
        <section className="grid gap-8">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="stack-md">
              <p className="editorial-label">{content.postsPreview.eyebrow}</p>
              <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">{content.postsPreview.title}</h2>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{content.postsPreview.intro}</p>
            </div>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              href="/columnas"
            >
              {content.postsPreview.primaryCta}
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {content.postsPreview.items.map((post, index) => (
              <Reveal key={post.slug} className="elevated-card overflow-hidden rounded-[1.65rem]" delay={index * 0.08}>
                {post.coverImageUrl ? (
                  <Link aria-label={post.title} className="relative block aspect-[4/3]" href={`/columnas/${post.slug}`}>
                    <Image
                      alt={post.title}
                      className="object-cover transition duration-300 hover:scale-[1.03]"
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      src={post.coverImageUrl}
                    />
                  </Link>
                ) : null}
                <div className="stack-md card-pad">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {post.category ? <span>{post.category}</span> : null}
                    {post.publishedAt ? <span>{formatPostDate(post.publishedAt)}</span> : null}
                  </div>
                  <h3 className="text-2xl leading-tight">
                    <Link className="transition hover:text-[color:var(--accent)]" href={`/columnas/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-base leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
                  {post.authorName ? <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--foreground)]">{post.authorName}</p> : null}
                  <Link className="inline-flex text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]" href={`/columnas/${post.slug}`}>
                    {content.postsPreview.readMoreLabel}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <section className="page-hero-panel panel-pad">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="stack-md">
            <p className="editorial-label">{content.contact.eyebrow}</p>
            <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">{content.contact.title}</h2>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">{content.contact.body}</p>
            <div className="grid gap-3 text-sm text-[color:var(--foreground)] md:grid-cols-2">
              <span className="soft-chip rounded-[1.1rem] px-4 py-3">
                <strong>{content.contact.whatsapp}:</strong> {practiceSettings.phoneLabel}
              </span>
              <span className="soft-chip rounded-[1.1rem] px-4 py-3">
                <strong>{content.contact.email}:</strong> {practiceSettings.email}
              </span>
              <span className="soft-chip rounded-[1.1rem] px-4 py-3">
                <strong>{content.contact.address}:</strong> {practiceSettings.address}
              </span>
              <span className="soft-chip rounded-[1.1rem] px-4 py-3">
                <strong>{content.contact.schedule}:</strong> {practiceSettings.schedule}
              </span>
            </div>
          </div>

          <div className="flex items-center lg:justify-end">
            <Link
              className="accent-fill inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(140,107,62,0.18)]"
              href={buildSitePath(content.routes.contact)}
            >
              {content.contact.primaryCta}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
