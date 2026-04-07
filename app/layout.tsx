import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lane — The AI Operating System for Design Teams",
  description:
    "From 45% coordination waste to zero. Lane is the AI-native command center for design operations. Problem intake, scientific design stages, developer handoff, and impact measurement — all in one system.",
  openGraph: {
    title: "Lane — The AI Operating System for Design Teams",
    description:
      "From 45% coordination waste to zero. AI-native design operations for teams who refuse to be managed by Jira.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lane — The AI Operating System for Design Teams",
    description:
      "From 45% coordination waste to zero. AI-native design operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
