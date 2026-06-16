"use client";

import { useEffect, useState } from "react";
import type { PracticeSettings, UiLabels } from "@/lib/site";

type FloatingContactProps = {
  practiceSettings: PracticeSettings;
  uiLabels: UiLabels;
};

function SocialIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("whatsapp")) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.11 4.93A9.9 9.9 0 0 0 12.05 2C6.57 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.94 9.94 0 0 0 4.77 1.22h.01c5.48 0 9.95-4.46 9.95-9.94a9.86 9.86 0 0 0-2.88-6.97Zm-7.06 15.23h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.12.82.84-3.04-.2-.31a8.24 8.24 0 0 1-1.27-4.38c0-4.57 3.72-8.29 8.3-8.29 2.22 0 4.31.86 5.87 2.43a8.23 8.23 0 0 1 2.42 5.87c0 4.58-3.72 8.3-8.3 8.3Zm4.55-6.22c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22a7.38 7.38 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.86-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.75 2.67 4.25 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
      </svg>
    );
  }

  if (normalized.includes("instagram")) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (normalized.includes("facebook")) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.5 22v-8.2h2.77l.41-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.71V4.14c-.29-.04-1.32-.12-2.5-.12-2.47 0-4.16 1.5-4.16 4.27v2.38H7.36v3.2h2.79V22h3.35Z" />
      </svg>
    );
  }

  if (normalized.includes("linkedin")) {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.94 8.5A1.94 1.94 0 1 1 6.93 4.62a1.94 1.94 0 0 1 0 3.88ZM5.27 20.5h3.33V9.76H5.27V20.5Zm5.42 0h3.33v-5.35c0-1.41.27-2.77 2.01-2.77 1.72 0 1.74 1.61 1.74 2.86v5.26h3.33v-5.93c0-2.91-.63-5.15-4.03-5.15-1.64 0-2.73.9-3.18 1.75h-.05V9.76h-3.15c.04.91 0 10.74 0 10.74Z" />
      </svg>
    );
  }

  return <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">{label.slice(0, 2)}</span>;
}

function WhatsappIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.11 4.93A9.9 9.9 0 0 0 12.05 2C6.57 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.94 9.94 0 0 0 4.77 1.22h.01c5.48 0 9.95-4.46 9.95-9.94a9.86 9.86 0 0 0-2.88-6.97Zm-7.06 15.23h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.12.82.84-3.04-.2-.31a8.24 8.24 0 0 1-1.27-4.38c0-4.57 3.72-8.29 8.3-8.29 2.22 0 4.31.86 5.87 2.43a8.23 8.23 0 0 1 2.42 5.87c0 4.58-3.72 8.3-8.3 8.3Zm4.55-6.22c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22a7.38 7.38 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.86-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.75 2.67 4.25 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function FloatingContact({ practiceSettings, uiLabels }: FloatingContactProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 520);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTopLabel = uiLabels.backToTopLabel;

  return (
    <>
      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 xl:flex">
        {practiceSettings.socialLinks.map((link) => {
          const href = link.label.toLowerCase().includes("whatsapp") ? practiceSettings.whatsappUrl : link.href;

          return (
            <a
              key={link.label}
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[color:rgba(255,255,255,0.9)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--foreground)] shadow-[0_18px_40px_rgba(63,42,16,0.1)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              <SocialIcon label={link.label} />
            </a>
          );
        })}
      </div>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showScrollTop ? (
          <button
            aria-label={scrollTopLabel}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[color:rgba(255,255,255,0.92)] text-lg text-[color:var(--foreground)] shadow-[0_18px_40px_rgba(63,42,16,0.1)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            ↑
          </button>
        ) : null}

        <a
          className="inline-flex min-h-14 items-center gap-3 rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] shadow-[0_20px_50px_rgba(63,42,16,0.18)] transition hover:translate-y-[-1px] hover:shadow-[0_26px_56px_rgba(63,42,16,0.24)]"
          href={practiceSettings.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/8 text-base">
            <WhatsappIcon />
          </span>
          <span>{uiLabels.floatingBookingLabel}</span>
        </a>
      </div>
    </>
  );
}
