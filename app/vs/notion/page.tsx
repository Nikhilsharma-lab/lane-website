import type { Metadata } from 'next'
import { Header } from '@/components/marketing/header'
import { Footer, FooterBar } from '@/components/marketing/footer'
import { WireframeCell } from '@/components/marketing/wireframe-cell'
import { ComparisonPage } from '@/components/vs/comparison-page'
import { vsContent } from '@/lib/vs-content'

const content = vsContent.notion

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: 'https://lane.so/vs/notion' },
  openGraph: {
    type: 'website',
    url: 'https://lane.so/vs/notion',
    title: content.meta.title,
    description: content.meta.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: content.meta.title,
    description: content.meta.description,
  },
}

export default function VsNotionPage() {
  return (
    <>
      <Header />
      <ComparisonPage content={content} />
      <WireframeCell>
        <Footer />
      </WireframeCell>
      <FooterBar />
    </>
  )
}
