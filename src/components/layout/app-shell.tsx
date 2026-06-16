"use client";

import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import { FloatingContact } from "@/components/layout/floating-contact";
import { SiteHeader } from "@/components/layout/site-header";
import type { PracticeSettings, UiLabels } from "@/lib/site";

type AppShellProps = {
  children: ReactNode;
  brandTagline?: string;
  siteName?: string;
  practiceSettings: PracticeSettings;
  uiLabels: UiLabels;
  themeStyle: CSSProperties;
};

export function AppShell({ children, brandTagline, siteName, practiceSettings, uiLabels, themeStyle }: AppShellProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <div className="site-theme-shell relative min-h-screen overflow-x-hidden" style={themeStyle}>
      <SiteHeader brandTagline={brandTagline} practiceSettings={practiceSettings} siteName={siteName} uiLabels={uiLabels} />
      {children}
      <FloatingContact practiceSettings={practiceSettings} uiLabels={uiLabels} />
    </div>
  );
}
