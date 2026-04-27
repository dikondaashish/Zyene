import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/blog-posts"

const SITE_URL = "https://zyene.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now },
    { url: `${SITE_URL}/about`, lastModified: now },
    { url: `${SITE_URL}/products`, lastModified: now },
    { url: `${SITE_URL}/solutions`, lastModified: now },
    { url: `${SITE_URL}/use-cases`, lastModified: now },
        { url: `${SITE_URL}/blog`, lastModified: now },
        { url: `${SITE_URL}/case-studies`, lastModified: now },
        { url: `${SITE_URL}/contact`, lastModified: now },
    { url: `${SITE_URL}/careers`, lastModified: now },
  ]

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.dateISO ? new Date(post.dateISO) : now,
  }))

  return [...staticRoutes, ...blogRoutes]
}
