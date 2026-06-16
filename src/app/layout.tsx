import type { Metadata } from "next";
import type { CSSProperties } from "react";
import "@/app/globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { getSiteSettings, mergePracticeSettings, mergeThemeSettings, mergeUiLabels } from "@/lib/cms/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSettings = await getSiteSettings();
  const practiceSettings = mergePracticeSettings(siteSettings);
  const themeSettings = mergeThemeSettings(siteSettings);
  const uiLabels = mergeUiLabels(siteSettings);
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
    <html lang="es">
      <body>
        <style>{`
          h1, h2, h3 {
            font-family: var(--font-heading), serif;
          }
        `}</style>
        <AppShell
          brandTagline={siteSettings?.brandTagline}
          practiceSettings={practiceSettings}
          siteName={siteSettings?.siteName}
          themeStyle={themeStyle}
          uiLabels={uiLabels}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
