import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Single editorial-grotesque family carries display + body (Cursor's one-sans model);
// Geist Mono stays for the technical labels and code.
// Akkurat is commercial — Inter is the spec's named substitute
const akkurat = Inter({ subsets: ["latin"], variable: "--font-akkurat", display: "swap" });
const fragmentMono = Fragment_Mono({ subsets: ["latin"], weight: "400", variable: "--font-fragment-mono", display: "swap" });

const SITE_URL = "https://uselane.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Lane — problem-first design operations",
  description: "Surveillance produces performance, support produces truth.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Lane",
    title: "Lane — problem-first design operations",
    description:
      "Design-ops without the surveillance — turn requests into the real problem, prove the impact, and refuse to track the people doing the work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lane — problem-first design operations",
    description: "Design-ops without the surveillance.",
    creator: "@thesharmaxp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${akkurat.variable} ${fragmentMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
