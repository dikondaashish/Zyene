"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-posts"
import { getFeaturedPost } from "@/lib/blog-posts"
import { AuthorAvatar } from "@/components/blog/AuthorAvatar"
import { Reveal, RevealText } from "@/components/ui/Reveal"
import { cn } from "@/lib/utils"

function MetaRow({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-[#5B6470]", className)}>
      <span className="flex items-center gap-2">
        <AuthorAvatar author={post.author} size={22} />
        <span className="font-medium text-[#0A1015]">{post.author.name}</span>
      </span>
      <span aria-hidden="true" className="text-[#5B6470]">
        ·
      </span>
      <time dateTime={post.dateISO} className="tabular-nums">
        {post.dateDisplay}
      </time>
      <span aria-hidden="true" className="text-[#5B6470]">
        ·
      </span>
      <span>{post.readMinutes} min read</span>
    </div>
  )
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Reveal as="article" className="group mb-20 md:mb-28">
      <Link href={`/blog/${post.slug}`} className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-paper">
          <Image
            src={post.coverImage}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
          />
        </div>
        <div>
          <p className="text-[13px] font-medium text-[#5B6470]">{post.category}</p>
          <h2 className="zy-display mt-4 text-[clamp(28px,3.4vw,46px)] text-[#0A1015]">{post.title}</h2>
          <p className="mt-5 line-clamp-4 text-[16.5px] leading-[1.65] text-[#4B525C]">{post.excerpt}</p>
          <MetaRow post={post} className="mt-8" />
          <span className="mt-8 inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors group-hover:decoration-[#0A1015]">
            Read article <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Reveal as="article" delay={(index % 3) * 0.06} className="group min-w-0">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] bg-paper">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
          />
        </div>
        <p className="mt-6 text-[13px] font-medium text-[#5B6470]">{post.category}</p>
        <h3 className="mt-2 text-[21px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A1015] md:text-[22px]">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-[1.6] text-[#4B525C]">{post.excerpt}</p>
        <MetaRow post={post} className="mt-6" />
      </Link>
    </Reveal>
  )
}

export function BlogPostsGrid({ posts }: { posts: BlogPost[] }) {
  const featured = getFeaturedPost()
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  return (
    <section className="bg-white">
      <div className="zy-container zy-section">
        <RevealText text="Latest." className="zy-display mb-12 text-[clamp(34px,4.6vw,64px)] text-[#0A1015] md:mb-16" />

        {featured ? <FeaturedCard post={featured} /> : null}

        {rest.length > 0 ? (
          <>
            <div className="mb-12 flex items-baseline justify-between gap-6 border-t border-[#0A1015]/15 pt-10">
              <h2 className="text-[22px] font-medium tracking-[-0.02em] text-[#0A1015] md:text-[26px]">More articles</h2>
              <p className="text-[14px] text-[#5B6470]">{rest.length} articles</p>
            </div>
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <ArticleCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
