import type { MetadataRoute } from 'next'
import { vsSlugs } from '@/lib/vs-content'
import { posts } from '@/lib/blog-content'

const SITE = 'https://lane.so'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = ['', '/about', '/privacy', '/terms', '/blog'].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : 0.6,
  }))

  const vsRoutes = vsSlugs.map((slug) => ({
    url: `${SITE}/vs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogRoutes = posts.map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...vsRoutes, ...blogRoutes]
}
