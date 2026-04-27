import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
import { BLOG_POSTS, getPostBySlug, type BlogAuthor } from "@/lib/blog-posts"
import { AuthorAvatar } from "@/components/blog/AuthorAvatar"
import { FooterCTA } from "@/components/home/FooterCTA"
import { BlogArticleHero } from "@/components/blog/BlogArticleHero"

type Props = { params: { slug: string } }

function AuthorByline({ author }: { author: BlogAuthor }) {
  return (
    <div className="flex items-center gap-3">
      <AuthorAvatar author={author} size={36} />
      <div className="flex flex-col leading-none gap-1">
        <span className="text-[13px] font-semibold text-[#0A1015]">{author.name}</span>
        <span className="text-[12px] text-[#8A8F98]">{author.role}, Zyene</span>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: "Article | Zyene" }
  }
  return {
    title: `${post.title} | Zyene Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://zyene.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://zyene.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author.name],
      siteName: "Zyene",
      images: [
        {
          url: `https://zyene.com${post.coverImage}`,
          alt: `Cover image for: ${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://zyene.com${post.coverImage}`],
    },
  }
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://zyene.com${post.coverImage}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    url: `https://zyene.com/blog/${post.slug}`,
    author: {
      "@type": "Person",
      "@id": "https://zyene.com/#william-sanders",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: { "@id": "https://zyene.com/#organization" },
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://zyene.com/#organization",
      name: "Zyene",
      logo: {
        "@type": "ImageObject",
        url: "https://zyene.com/images/Logo_Black.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zyene.com/blog/${post.slug}`,
    },
    isPartOf: { "@id": "https://zyene.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://zyene.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://zyene.com/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://zyene.com/blog/${post.slug}` },
      ],
    },
  }

  return (
    <>
      <Script
        id="blog-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogArticleHero title={post.title} category={post.category} excerpt={post.excerpt} />

      <div id="main-content" className="relative z-10 rounded-t-[20px] bg-white">
        <article className="pb-16 pt-10 md:pb-24 md:pt-14">
          <div className="mx-auto max-w-[720px] px-6 md:px-8">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-[#8A8F98] transition-colors hover:text-[#0A1015] md:mb-10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to blog
            </Link>

            <div className="mb-10 flex flex-wrap items-center justify-between gap-y-5">
              <AuthorByline author={post.author} />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-[#8A8F98]">
                <time dateTime={post.dateISO}>{post.dateDisplay}</time>
                <span className="hidden h-1 w-1 rounded-full bg-[#D3DAE5] sm:inline" aria-hidden />
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {post.readMinutes} min read
                </span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[900px] px-6 md:px-8">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[160px] overflow-hidden rounded-[16px] border border-[#E3E8EF] md:rounded-[20px]">
              <Image
                src={post.coverImage}
                alt={`Cover image for: ${post.title}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-[720px] space-y-10 px-6 md:mt-16 md:px-8">
            {post.sections.map((section, i) => (
              <section key={i} className="space-y-4">
                {section.heading ? (
                  <h2 className="font-display-serif text-[26px] font-normal tracking-[-0.02em] text-[#0A1015] md:text-[30px]">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-[17px] leading-[1.75] text-[#4A4F59] md:text-[18px]">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-[720px] border-t border-[#E3E8EF] px-6 pt-12 md:mt-20 md:px-8">
            <p className="text-[15px] leading-relaxed text-[#4A4F59]">
              Want to apply this inside your stack?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#0A1015] underline decoration-[#E3E8EF] underline-offset-4 transition-colors hover:text-brand-blue hover:decoration-brand-blue/40"
              >
                Talk to our team
              </Link>{" "}
              about workflows, integrations, and rollout.
            </p>
          </div>
        </article>
      </div>

      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  )
}
