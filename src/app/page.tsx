import { HomeShell } from "@/components/marketing/home-shell";
import { getHomePageData, getSiteSettings, mergeHomeDictionary, mergePracticeSettings } from "@/lib/cms/content";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function HomePage() {
  const fallback = getDictionary();
  const [cms, siteSettings] = await Promise.all([getHomePageData(), getSiteSettings()]);
  const content = mergeHomeDictionary(fallback, cms);
  const practiceSettings = mergePracticeSettings(siteSettings);

  return <HomeShell content={content} practiceSettings={practiceSettings} />;
}
