import { renderBlogOg, ogSize, ogContentType } from '@/lib/blog-og'
import { getPost } from '@/lib/blog-content'

export const runtime = 'edge'
export const alt = getPost('designops-maturity-model')!.title
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
  return renderBlogOg('designops-maturity-model')
}
