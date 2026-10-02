import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/BlogHero"
import { BlogPostsGrid } from "@/components/blog/BlogPostsGrid"
import { FooterCTA } from "@/components/home/FooterCTA"
import { BLOG_POSTS } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Industrial AI Guides",
  description:
    "Guides on industrial AI for distributors, manufacturers, and specialty contractors: purchase order entry, RFQs, bid intake, ERP integration, and how to measure a pilot.",
  alternates: { canonical: "https://zyene.com/blog" },
  openGraph: {
    title: "Resources | Zyene",
    description: "Practical notes on production AI for industrial operations, from the Zyene team.",
    url: "https://zyene.com/blog",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <BlogPostsGrid posts={BLOG_POSTS} />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  )
}
