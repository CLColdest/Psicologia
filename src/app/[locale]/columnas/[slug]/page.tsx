import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { getPostBySlug, getPostSlugs } from "@/lib/cms/content";
import { isLocale } from "@/lib/i18n/config";
import { portableTextToPlainText } from "@/lib/cms/portable-text";

type PostDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
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

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((item) => ({ locale: item.language, slug: item.slug }));
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const post = await getPostBySlug(locale, slug);
  if (!post) {
    notFound();
  }

  const body = portableTextToPlainText(post.body).split("\n\n").filter(Boolean);

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-12 px-6 py-12 md:gap-16 md:py-20">
      <section className="page-hero-panel panel-pad stack-lg">
        <Reveal className="space-y-6">
          <p className="editorial-label">{locale === "es" ? "Columna" : "Article"}</p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {post.categories?.[0] ? <span>{post.categories[0]}</span> : null}
            {post.publishedAt ? <span>{formatPostDate(locale, post.publishedAt)}</span> : null}
          </div>
          <h1 className="text-5xl leading-[0.96] md:text-7xl">{post.title}</h1>
          {post.excerpt ? <p className="text-xl leading-9 text-[color:var(--muted)]">{post.excerpt}</p> : null}
          {post.authorName ? (
            <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--foreground)]">{post.authorName}</p>
          ) : null}
        </Reveal>

        {post.coverImageUrl ? (
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[1.9rem] border border-black/10">
            <Image
              alt={post.title || ""}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              src={post.coverImageUrl}
            />
          </Reveal>
        ) : null}
      </section>

      <section className="article-prose">
        {body.map((paragraph, index) => (
          <Reveal key={index} className={index === 0 ? "elevated-card rounded-[1.75rem] card-pad-lg" : ""} delay={index * 0.04}>
            <p className="max-w-none">{paragraph}</p>
          </Reveal>
        ))}
      </section>

      {post.authorBio ? (
        <Reveal className="elevated-card card-pad-lg rounded-[1.75rem]">
          <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">
            {locale === "es" ? "Sobre la autora" : "About the author"}
          </p>
          <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{post.authorBio}</p>
        </Reveal>
      ) : null}
    </main>
  );
}
