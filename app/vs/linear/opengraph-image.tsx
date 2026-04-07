import { renderVsOg, ogSize, ogContentType } from '@/lib/vs-og'
import { vsContent } from '@/lib/vs-content'

export const runtime = 'edge'
export const alt = vsContent.linear.meta.title
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return renderVsOg('linear')
}
