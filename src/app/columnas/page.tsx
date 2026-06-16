import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { getPostsData, getPostsPageData } from "@/lib/cms/content";

function formatPostDate(value?: string) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function articleNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

const content = {
  eyebrow: "Columnas",
  title: "Columnas para comprender mejor lo que estas viviendo.",
  intro:
    "Aqui encontraras articulos sobre ansiedad, relaciones, procesos personales y salud mental, escritos para orientar con claridad y cercania.",
  readMoreLabel: "Leer columna",
  sideEyebrow: "Bitacora editorial",
  sideBody:
    "Reflexiones breves y articulos para acompanar preguntas sobre ansiedad, vinculos, duelo, autocuidado y procesos personales.",
  sideTopics: ["Reflexiones clinicas", "Ansiedad, vinculos y procesos personales"]
} as const;

export default async function PostsPage() {
  const [posts, postsPage] = await Promise.all([getPostsData(), getPostsPageData()]);
  const page = {
    eyebrow: postsPage?.eyebrow || content.eyebrow,
    title: postsPage?.title || content.title,
    intro: postsPage?.intro || content.intro,
    readMoreLabel: postsPage?.readMoreLabel || content.readMoreLabel,
    sideEyebrow: postsPage?.sideEyebrow || content.sideEyebrow,
    sideBody: postsPage?.sideBody || content.sideBody,
    sideTopics: postsPage?.sideTopics?.length ? postsPage.sideTopics : content.sideTopics
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:py-20">
      <section className="page-hero-panel panel-pad grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="stack-lg">
          <p className="editorial-label">{page.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl leading-[0.94] md:text-7xl">{page.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)]">{page.intro}</p>
        </Reveal>

        <Reveal className="elevated-card card-pad-lg grid gap-4 rounded-[1.7rem]" delay={0.08}>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">{page.sideEyebrow}</p>
          <p className="text-lg leading-8 text-[color:var(--foreground)]">{page.sideBody}</p>
          <div className="flex min-h-20 flex-wrap items-center justify-center gap-2 text-sm text-[color:var(--foreground)] md:justify-start">
            {page.sideTopics.map((topic) => (
              <span key={topic} className="soft-chip inline-flex items-center rounded-full px-4 py-2">
                {topic}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post._id} className="elevated-card overflow-hidden rounded-[1.7rem]" delay={index * 0.06}>
            {post.coverImageUrl ? (
              post.slug ? (
                <Link aria-label={post.title || ""} className="relative block aspect-[4/3]" href={`/columnas/${post.slug}`}>
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

            <div className="stack-md card-pad">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">{articleNumber(index)}</span>
                <span className="h-px flex-1 bg-[color:color-mix(in_srgb,var(--accent)_24%,transparent)]" />
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {post.categories?.[0] ? <span>{post.categories[0]}</span> : null}
                {post.publishedAt ? <span>{formatPostDate(post.publishedAt)}</span> : null}
              </div>

              <h2 className="text-2xl leading-tight">
                {post.slug ? (
                  <Link className="transition hover:text-[color:var(--accent)]" href={`/columnas/${post.slug}`}>
                    {post.title}
                  </Link>
                ) : (
                  post.title
                )}
              </h2>
              <p className="text-base leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
              {post.authorName ? <p className="pt-2 text-sm text-[color:var(--foreground)]/82">{post.authorName}</p> : null}
              {post.slug ? (
                <Link className="inline-flex text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--foreground)]" href={`/columnas/${post.slug}`}>
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
