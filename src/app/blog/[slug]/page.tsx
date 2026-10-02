import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { notFound, permanentRedirect } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { BLOG_POSTS, BLOG_REDIRECTS, getPostBySlug, type BlogAuthor, type BlogPost } from "@/lib/blog-posts"
import { AuthorAvatar } from "@/components/blog/AuthorAvatar"
import { FooterCTA } from "@/components/home/FooterCTA"
import { BlogArticleHero } from "@/components/blog/BlogArticleHero"

type Props = { params: { slug: string } }

const TOPIC_LINKS: Record<string, { href: string; label: string }> = {
  Distribution: { href: "/industries/wholesale-distribution", label: "AI for wholesale distributors" },
  Manufacturing: { href: "/industries/manufacturing", label: "AI for manufacturers" },
  "Specialty Contractors": { href: "/industries/specialty-contractors", label: "AI for specialty contractors" },
  Integration: { href: "/solutions", label: "industrial AI solutions" },
  Operations: { href: "/solutions", label: "industrial AI solutions" },
  Documents: { href: "/solutions", label: "document intelligence" },
  Knowledge: { href: "/solutions", label: "operational search" },
  "Getting Started": { href: "/how-we-work", label: "how an engagement works" },
  Measurement: { href: "/how-we-work", label: "how an engagement works" },
  Zyene: { href: "/about", label: "about Zyene" },
}

function relatedPosts(post: BlogPost) {
  const sameTopic = BLOG_POSTS.filter((item) => item.slug !== post.slug && item.category === post.category)
  const rest = BLOG_POSTS.filter((item) => item.slug !== post.slug && item.category !== post.category)
  return [...sameTopic, ...rest].slice(0, 3)
}

function AuthorByline({ author }: { author: BlogAuthor }) {
  return (
    <div className="flex items-center gap-3">
      <AuthorAvatar author={author} size={36} />
      <div className="flex flex-col leading-none gap-1">
        <span className="text-[14px] font-medium text-[#0A1015]">{author.name}</span>
        <span className="text-[13px] text-[#5B6470]">{author.role}, Zyene</span>
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
    return { title: "Article" }
  }
  return {
    title: post.title,
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
  const replacement = BLOG_REDIRECTS[params.slug]
  if (replacement) permanentRedirect(`/blog/${replacement}`)
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
        url: "https://zyene.com/images/logo-black.png",
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
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://zyene.com/blog" },
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
      <BlogArticleHero
        title={post.title}
        category={post.category}
        excerpt={post.excerpt}
        coverImage={post.coverImage}
        dateISO={post.dateISO}
        dateDisplay={post.dateDisplay}
        readMinutes={post.readMinutes}
      />

      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <article className="pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="mx-auto max-w-[720px] px-6 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-5 border-b border-line pb-8">
              <AuthorByline author={post.author} />
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#5B6470] transition-colors hover:text-[#0A1015]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                All articles
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[720px] space-y-12 px-6 md:mt-14 md:px-8">
            {post.sections.map((section, i) => (
              <section key={i} className="space-y-5">
                {section.heading ? (
                  <h2 className="text-[26px] font-medium leading-[1.2] tracking-[-0.025em] text-[#0A1015] md:text-[30px]">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-[17px] leading-[1.75] text-[#3D444D] md:text-[18px]">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-[720px] border-t border-line px-6 pt-10 md:px-8">
            {TOPIC_LINKS[post.category] ? (
              <p className="text-[16px] leading-[1.6] text-[#3D444D]">
                See how this applies in practice:{" "}
                <Link
                  href={TOPIC_LINKS[post.category].href}
                  className="font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 hover:decoration-[#0A1015]"
                >
                  {TOPIC_LINKS[post.category].label}
                </Link>
                .
              </p>
            ) : null}
            <h2 className="mt-10 text-[22px] font-medium tracking-[-0.02em] text-[#0A1015]">Keep reading</h2>
            <ul className="mt-4 border-t border-[#0A1015]/15">
              {relatedPosts(post).map((item) => (
                <li key={item.slug} className="border-b border-[#0A1015]/10">
                  <Link href={`/blog/${item.slug}`} className="block py-4 text-[16.5px] text-[#0A1015] hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <FooterCTA />
      </div>
    </>
  )
}
