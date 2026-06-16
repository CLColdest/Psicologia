import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { getPostsData, getPostsPageData } from "@/lib/cms/content";
import { isLocale } from "@/lib/i18n/config";
import { buildLocaleUrl } from "@/lib/site";

type PostsPageProps = {
  params: Promise<{ locale: string }>;
};

function formatPostDate(locale: "es" | "en", value?: string) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale === "es" ? "es-CL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function articleNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

const content = {
  es: {
    eyebrow: "Columnas",
    title: "Columnas para comprender mejor lo que estas viviendo.",
    intro: "Aqui encontraras articulos sobre ansiedad, relaciones, procesos personales y salud mental, escritos para orientar con claridad y cercania.",
    readMoreLabel: "Leer columna"
  },
  en: {
    eyebrow: "Articles",
    title: "Articles to better understand what you may be going through.",
    intro: "Here you will find writing on anxiety, relationships, personal processes, and mental health, developed to offer clarity, orientation, and thoughtful reflection.",
    readMoreLabel: "Read article"
  }
} as const;

export default async function PostsPage({ params }: PostsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [posts, postsPage] = await Promise.all([getPostsData(locale), getPostsPageData(locale)]);
  const fallback = content[locale];
  const page = {
    eyebrow: postsPage?.eyebrow || fallback.eyebrow,
    title: postsPage?.title || fallback.title,
    intro: postsPage?.intro || fallback.intro,
    readMoreLabel: postsPage?.readMoreLabel || fallback.readMoreLabel
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="page-hero-panel grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <Reveal className="space-y-5">
          <p className="editorial-label">{page.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">{page.intro}</p>
        </Reveal>

        <Reveal className="elevated-card grid gap-4 rounded-[1.7rem] p-6 md:p-7" delay={0.08}>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            {locale === "es" ? "Bitacora editorial" : "Editorial notebook"}
          </p>
          <p className="text-lg leading-8 text-[color:var(--foreground)]">
            {locale === "es"
              ? "Reflexiones breves y articulos para acompanar preguntas sobre ansiedad, vinculos, duelo, autocuidado y procesos personales."
              : "Short reflections and articles to support questions about anxiety, relationships, grief, self-care, and personal processes."}
          </p>
          <div className="flex min-h-20 flex-wrap items-center justify-center gap-2 text-sm text-[color:var(--foreground)] md:justify-start">
            <span className="soft-chip inline-flex items-center rounded-full px-4 py-2">{locale === "es" ? "Reflexiones clinicas" : "Clinical reflections"}</span>
            <span className="soft-chip inline-flex items-center rounded-full px-4 py-2">{locale === "es" ? "Ansiedad, vinculos y procesos personales" : "Anxiety, relationships, and personal processes"}</span>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal
            key={post._id}
            className="elevated-card overflow-hidden rounded-[1.7rem]"
            delay={index * 0.06}
          >
            {post.coverImageUrl ? (
              post.slug ? (
                <Link aria-label={post.title || ""} className="relative block aspect-[4/3]" href={buildLocaleUrl(locale, `/columnas/${post.slug}`)}>
                  <Image
                    alt={post.title || ""}
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1280px) 26vw, (min-width: 768px) 45vw, 100vw"
                    src={post.coverImageUrl}
                  />
                </Link>
              ) : (
                <div className="relative aspect-[4/3]">
                  <Image
                    alt={post.title || ""}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1280px) 26vw, (min-width: 768px) 45vw, 100vw"
                    src={post.coverImageUrl}
                  />
                </div>
              )
            ) : null}

            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">{articleNumber(index)}</span>
                <span className="h-px flex-1 bg-[color:color-mix(in_srgb,var(--accent)_24%,transparent)]" />
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {post.categories?.[0] ? <span>{post.categories[0]}</span> : null}
                {post.publishedAt ? <span>{formatPostDate(locale, post.publishedAt)}</span> : null}
              </div>

              <h2 className="text-2xl leading-tight">
                {post.slug ? (
                  <Link className="transition hover:text-[color:var(--accent)]" href={buildLocaleUrl(locale, `/columnas/${post.slug}`)}>
                    {post.title}
                  </Link>
                ) : (
                  post.title
                )}
              </h2>
              <p className="text-base leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
              {post.authorName ? <p className="pt-2 text-sm text-[color:var(--foreground)]/82">{post.authorName}</p> : null}
              {post.slug ? (
                <Link
                  className="inline-flex text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]"
                  href={buildLocaleUrl(locale, `/columnas/${post.slug}`)}
                >
                  {page.readMoreLabel}
                </Link>
              ) : null}
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
