import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://lane.so'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lane — DesignOps Platform & AI Operating System for Design Teams',
  description:
    'Lane is the AI-native DesignOps platform for design leaders. Replace ticket chaos with Design Streams, block bad PM requests at intake, and measure real design impact. No surveillance.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Lane',
    title: 'Lane — The Operating System for Design Teams',
    description:
      'From PM problem to shipped impact — one workflow. No surveillance. No tickets. No tools borrowed from engineering.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lane — The Operating System for Design Teams',
    description:
      'From PM problem to shipped impact — one workflow. No surveillance. No tickets. No tools borrowed from engineering.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lane',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  founder: [
    { '@type': 'Person', name: 'Nikhil', jobTitle: 'Founder' },
    { '@type': 'Person', name: 'Nischal', jobTitle: 'Co-Founder' },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lane',
  description:
    'AI-native DesignOps platform. Design Streams, intake gate, handoff intelligence, and impact measurement for design teams.',
  brand: { '@type': 'Brand', name: 'Lane' },
  offers: {
    '@type': 'Offer',
    price: '29',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '29',
      priceCurrency: 'USD',
      unitText: 'seat/month',
    },
    availability: 'https://schema.org/PreOrder',
    url: `${SITE_URL}/#pricing`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is Lane different from Linear, Jira, or Notion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Linear and Jira are ticket systems built for engineers \u2014 linear, deadline-driven, execution-first. Notion is a doc tool. Lane is a workflow built around how design actually happens \u2014 non-linear, exploratory, problem-first. Design Streams replace tickets. Five scientific stages replace sprints. The whole tool is shaped to thinking work, not ship-it work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we need to migrate off Figma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Lane runs on top of Figma via OAuth. Designers keep designing in Figma. Lane handles everything around the design work \u2014 intake, context, handoff, impact measurement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Lane track individual designer activity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. No last-active timestamps. No time-per-task tracking. No individual velocity scores. No \u201cwho opened Figma at 11pm\u201d reporting. We measure team health and shipped impact \u2014 never individual surveillance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the AI intake gate actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a PM files a request, our model classifies it as problem-framed, solution-specific, or hybrid. \u201cMake the button bigger\u201d gets blocked. \u201cConversion dropped 12% on the checkout step \u2014 what\u2019s causing the drop-off?\u201d passes through and auto-creates a Design Stream with priority and complexity already estimated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can PMs use Lane without designers learning a new tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes \u2014 PMs file through a single intake form and receive digests. Designers get a workspace built around their actual workflow. The tool shape-shifts by role.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you integrate with Slack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not in V1. We made this call deliberately \u2014 Slack-first workflows reproduce the chaos Lane is built to fix. Lane sends digests via email and surfaces escalations in-app. Slack notifications are on the roadmap for V2, opt-in, summary-only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to my data if I cancel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full export of every Design Stream, brief, and impact log as JSON + CSV. Thirty-day grace period before deletion. No dark patterns, no hostage data.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the beta open and how do I get in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beta cohort opens Summer 2026, capped at 100 design teams. Join the waitlist above \u2014 we prioritize design leads at teams of 8+ designers. We\u2019ll reach out personally before granting access.',
      },
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lane',
  url: SITE_URL,
  description: 'The AI operating system for design teams.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-canvas text-ink">
        {children}
        <Analytics />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="ld-product"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  )
}
