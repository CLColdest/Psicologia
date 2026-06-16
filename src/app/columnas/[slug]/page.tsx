import { notFound } from "next/navigation";
import { PostImageCarousel } from "@/components/posts/post-image-carousel";
import { Reveal } from "@/components/ui/reveal";
import { getPostBySlug, getPostSlugs } from "@/lib/cms/content";
import { portableTextToPlainText } from "@/lib/cms/portable-text";

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

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const body = portableTextToPlainText(post.body).split("\n\n").filter(Boolean);
  const images = [post.coverImage, ...(post.galleryImages || [])].filter(
    (image, index, collection): image is NonNullable<(typeof collection)[number]> =>
      Boolean(image?.url) && collection.findIndex((candidate) => candidate?.url === image?.url) === index
  );

  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-12 px-6 py-12 md:gap-16 md:py-20">
      <section className="page-hero-panel panel-pad stack-lg">
        <Reveal className="stack-lg">
          <p className="editorial-label">Columna</p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {post.categories?.[0] ? <span>{post.categories[0]}</span> : null}
            {post.publishedAt ? <span>{formatPostDate(post.publishedAt)}</span> : null}
          </div>
          <div className="stack-card-copy">
            <h1 className="text-5xl leading-[0.96] md:text-7xl">{post.title}</h1>
            {post.excerpt ? <p className="text-xl leading-9 text-[color:var(--muted)]">{post.excerpt}</p> : null}
          </div>
          {post.authorName ? <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--foreground)]">{post.authorName}</p> : null}
        </Reveal>

        {images.length ? (
          <Reveal>
            <PostImageCarousel images={images} title={post.title || "Columna"} />
          </Reveal>
        ) : null}

        {body.length ? (
          <section className="article-prose">
            {body.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.04}>
                <p className="max-w-none">{paragraph}</p>
              </Reveal>
            ))}
          </section>
        ) : null}
      </section>

      {post.authorBio || post.authorName ? (
        <Reveal className="elevated-card card-pad-lg rounded-[1.75rem]">
          <div className="stack-card-copy">
            <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">Sobre la autora</p>
            {post.authorName ? <h2 className="text-2xl leading-tight">{post.authorName}</h2> : null}
            {post.authorBio ? <p className="text-base leading-8 text-[color:var(--muted)]">{post.authorBio}</p> : null}
          </div>
        </Reveal>
      ) : null}
    </main>
  );
}
