import type { Metadata } from "next";
import "@/app/globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <style>{`
          h1, h2, h3 {
            font-family: var(--font-heading), serif;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
