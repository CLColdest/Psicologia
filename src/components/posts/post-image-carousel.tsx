"use client";

import Image from "next/image";
import { useState } from "react";
import type { PostImageData } from "@/lib/cms/content";

type PostImageCarouselProps = {
  images: PostImageData[];
  title: string;
};

export function PostImageCarousel({ images, title }: PostImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex] || images[0];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="stack-md">
      <div className="relative overflow-hidden rounded-[1.9rem] border border-black/10 bg-white/72">
        <div className="overflow-hidden">
          <Image
            alt={activeImage.alt || `${title} ${activeIndex + 1}`}
            className="h-auto w-full"
            height={activeImage.height || 1200}
            priority={activeIndex === 0}
            sizes="(min-width: 1024px) 70vw, 100vw"
            src={activeImage.url}
            width={activeImage.width || 1200}
          />
        </div>

        {hasMultipleImages ? (
          <>
            <button
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/88 text-xl text-[color:var(--foreground)] shadow-[0_12px_28px_rgba(63,42,16,0.12)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              type="button"
              onClick={showPrevious}
            >
              ←
            </button>
            <button
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/88 text-xl text-[color:var(--foreground)] shadow-[0_12px_28px_rgba(63,42,16,0.12)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              type="button"
              onClick={showNext}
            >
              →
            </button>
          </>
        ) : null}
      </div>

      {hasMultipleImages ? (
        <div className="flex items-center justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={`${image.url}-dot-${index}`}
              aria-label={`Ver imagen ${index + 1}`}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex ? "w-8 bg-[color:var(--accent)]" : "w-2.5 bg-black/14 hover:bg-black/24"
              }`}
              type="button"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
