import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogPostsGrid } from "@/components/blog/BlogPostsGrid"
import { FooterCTA } from "@/components/home/FooterCTA"
import { BLOG_POSTS } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog | AI-Powered Digital Transformation Insights — Zyene",
  description:
    "Practical insights on AI-powered digital transformation, execution systems, and business scaling. Guides for teams transforming marketing, operations, and sales with AI — written by the Zyene team.",
  keywords: [
    "digital transformation blog",
    "AI-powered transformation insights",
    "AI digital transformation guides",
    "operational transformation AI",
    "business transformation tips",
    "AI execution systems",
  ],
  alternates: { canonical: "https://zyene.com/blog" },
  openGraph: {
    title: "Blog | AI-Powered Digital Transformation Insights — Zyene",
    description:
      "Practical insights on AI-powered digital transformation, execution systems, and business scaling from the Zyene team.",
    url: "https://zyene.com/blog",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <BlogPostsGrid posts={BLOG_POSTS} />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
