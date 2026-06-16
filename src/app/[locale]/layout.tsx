import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { FloatingContact } from "@/components/layout/floating-contact";
import { SiteHeader } from "@/components/layout/site-header";
import { getSiteSettings, mergePracticeSettings, mergeThemeSettings, mergeUiLabels } from "@/lib/cms/content";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  const siteSettings = await getSiteSettings();

  return {
    title: siteSettings?.siteName || dictionary.brand,
    description: dictionary.hero.description,
    alternates: {
      canonical: locale === defaultLocale ? "/es" : `/${locale}`,
      languages: {
        es: "/es",
        en: "/en"
      }
    }
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const siteSettings = await getSiteSettings();
  const practiceSettings = mergePracticeSettings(siteSettings);
  const themeSettings = mergeThemeSettings(siteSettings);
  const uiLabels = mergeUiLabels(siteSettings, locale as Locale);
  const themeStyle = {
    "--background": themeSettings.backgroundColor,
    "--foreground": themeSettings.foregroundColor,
    "--muted": themeSettings.mutedColor,
    "--accent": themeSettings.accentColor,
    "--accent-foreground": themeSettings.accentForegroundColor,
    "--surface": themeSettings.surfaceColor,
    "--surface-strong": themeSettings.surfaceStrongColor
  } as CSSProperties;

  return (
    <div className="site-theme-shell relative min-h-screen overflow-x-hidden" style={themeStyle}>
      <SiteHeader
        brandTagline={siteSettings?.brandTagline}
        locale={locale as Locale}
        practiceSettings={practiceSettings}
        siteName={siteSettings?.siteName}
        uiLabels={uiLabels}
      />
      {children}
      <FloatingContact practiceSettings={practiceSettings} uiLabels={uiLabels} />
    </div>
  );
}
