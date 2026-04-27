"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-posts"
import { getFeaturedPost } from "@/lib/blog-posts"
import { AuthorAvatar } from "@/components/blog/AuthorAvatar"

function AuthorChip({ post }: { post: BlogPost }) {
  return (
    <div className="flex items-center gap-2">
      <AuthorAvatar author={post.author} size={24} />
      <span className="text-[12px] font-medium text-[#4A4F59]">{post.author.name}</span>
    </div>
  )
}

/** Matches Products / ProductBlocks text hierarchy */
function MetaRow({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] leading-none text-[#8A8F98] ${className ?? ""}`}
    >
      <AuthorChip post={post} />
      <span className="hidden h-1 w-1 rounded-full bg-[#D3DAE5] sm:inline" aria-hidden />
      <time dateTime={post.dateISO} className="tabular-nums">
        {post.dateDisplay}
      </time>
      <span className="hidden h-1 w-1 rounded-full bg-[#D3DAE5] sm:inline" aria-hidden />
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden strokeWidth={2} />
        <span>{post.readMinutes} min read</span>
      </span>
    </div>
  )
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="group relative mb-14 min-w-0 md:mb-20"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="block overflow-hidden rounded-[20px] border border-[#E3E8EF] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
      >
        <div className="relative aspect-[16/11] min-h-[220px] w-full md:aspect-[21/9] md:min-h-[280px]">
          <Image
            src={post.coverImage}
            alt={`Cover image for: ${post.title}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 1180px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/50 via-[#0A1015]/10 to-transparent md:from-[#0A1015]/40" />
          <span className="absolute left-6 top-6 md:left-8 md:top-8 inline-flex items-center rounded-full border border-white/60 bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A1015] shadow-sm backdrop-blur-[2px]">
            {post.category}
          </span>
        </div>

        <div className="min-w-0 border-t border-[#E3E8EF] px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-11">
          <MetaRow post={post} className="mb-5" />
          <h2 className="font-display-serif text-[clamp(26px,4vw,42px)] font-normal leading-[1.12] tracking-[-0.035em] text-[#0A1015] transition-colors group-hover:text-brand-blue md:leading-[1.1]">
            {post.title}
          </h2>
          <p className="mt-5 max-w-[920px] text-[16px] leading-[1.7] text-[#4A4F59] md:text-[17px]">
            {post.excerpt}
          </p>
          <span className="mt-8 inline-flex h-11 items-center gap-2 rounded-[8px] bg-[#0A1015] px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#111A23]">
            Read full article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

function ArticleCard({ post }: { post: BlogPost }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group min-w-0"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E3E8EF] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)]"
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden md:aspect-[3/2]">
          <Image
            src={post.coverImage}
            alt={`Cover image for: ${post.title}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/30 to-transparent opacity-80" />
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/55 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0A1015] shadow-sm backdrop-blur-[2px]">
            {post.category}
          </span>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col p-6 md:p-7">
          <MetaRow post={post} className="mb-4 text-[12px]" />
          <h2 className="font-display-serif text-[20px] font-normal leading-snug tracking-[-0.02em] text-[#0A1015] transition-colors group-hover:text-brand-blue md:text-[22px] md:leading-[1.25]">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-4 flex-1 text-[14px] leading-relaxed text-[#4A4F59] md:text-[15px] md:leading-[1.65]">
            {post.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0A1015]">
            Continue reading
            <ArrowRight className="h-4 w-4 opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100" aria-hidden />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export function BlogPostsGrid({ posts }: { posts: BlogPost[] }) {
  const featured = getFeaturedPost()
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  return (
    <section className="overflow-hidden bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-14 max-w-[820px] md:mb-16">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#8A8F98]">Latest</p>
          <h2 className="font-display-serif text-[26px] sm:text-[34px] font-normal leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[52px]">
            Perspectives on AI systems & execution
          </h2>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-[#4A4F59]">
            Deep dives written for operators — fewer buzzwords, more clarity on how work actually gets done.
          </p>
        </header>

        {featured ? <FeaturedCard post={featured} /> : null}

        {rest.length > 0 ? (
          <>
            <div className="mb-10 flex flex-col gap-2 border-t border-[#E3E8EF] pt-12 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-display-serif text-[22px] font-normal tracking-[-0.02em] text-[#0A1015] md:text-[28px] md:leading-[1.15]">
                More articles
              </h3>
              <p className="text-[13px] text-[#8A8F98]">{rest.length} pieces to browse</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
              {rest.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
