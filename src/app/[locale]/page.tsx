import { notFound } from "next/navigation";
import { HomeShell } from "@/components/marketing/home-shell";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getHomePageData, getSiteSettings, mergeHomeDictionary, mergePracticeSettings } from "@/lib/cms/content";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const fallback = getDictionary(locale);
  const [cms, siteSettings] = await Promise.all([getHomePageData(locale), getSiteSettings()]);
  const content = mergeHomeDictionary(fallback, cms);
  const practiceSettings = mergePracticeSettings(siteSettings);

  return <HomeShell content={content} heroImageUrl={cms.homePage?.heroImageUrl} locale={locale} practiceSettings={practiceSettings} />;
}
