"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildSitePath, type PracticeSettings, type UiLabels } from "@/lib/site";

type SiteHeaderProps = {
  siteName?: string;
  brandTagline?: string;
  practiceSettings: PracticeSettings;
  uiLabels: UiLabels;
};

export function SiteHeader({ siteName, brandTagline, practiceSettings, uiLabels }: SiteHeaderProps) {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: uiLabels.homeLabel },
    { href: "/sobre-mi", label: uiLabels.aboutLabel },
    { href: "/servicios", label: uiLabels.servicesLabel },
    { href: "/columnas", label: uiLabels.postsLabel },
    { href: "/contacto", label: uiLabels.contactLabel }
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[1.6rem] border border-black/8 bg-[color:rgba(250,247,242,0.82)] px-5 py-4 shadow-[0_18px_42px_rgba(63,42,16,0.08)] backdrop-blur-xl">
        <div className="min-w-0">
          <Link className="block text-base tracking-[0.18em] text-[color:color-mix(in_srgb,var(--foreground)_56%,#2f241d)] uppercase" href="/">
            {siteName}
          </Link>
          <p className="mt-1 hidden text-xs text-[color:var(--muted)] md:block">{brandTagline}</p>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-black/8 bg-white/55 p-1.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              className={`rounded-full px-4 py-2 text-sm transition ${
                pathname === buildSitePath(link.href)
                  ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[0_10px_20px_rgba(63,42,16,0.08)]"
                  : "text-[color:var(--muted)] hover:text-[color:color-mix(in_srgb,var(--foreground)_56%,#2f241d)]"
              }`}
              href={buildSitePath(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-foreground)] shadow-[0_12px_24px_rgba(63,42,16,0.1)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_30px_rgba(140,107,62,0.18)] md:inline-flex"
            href={practiceSettings.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            {uiLabels.headerWhatsappLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
