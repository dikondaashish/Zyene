import type { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/blog-posts"

const SITE_URL = "https://zyene.com"
const UPDATED = new Date("2026-10-02")

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/industries/wholesale-distribution`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/industries/manufacturing`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/industries/specialty-contractors`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/solutions`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/use-cases`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/products`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/how-we-work`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/security`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/careers`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.4 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
