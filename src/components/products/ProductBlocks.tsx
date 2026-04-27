"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const productCards = [
  {
    label: "Product 01",
    name: "Zyene Reviews",
    subtitle: "Reputation management for local businesses",
    description:
      "Monitor reviews, reply fast, and automate review growth from one place. Built for operators who need daily visibility and better customer trust.",
    image: "/images/image.png",
    imageAlt: "Zyene Reviews brand logo",
    imageFit: "contain",
    imageBg: "bg-white",
    points: ["Review alerts in minutes", "AI-assisted reply flow", "Automated review request campaigns", "Central dashboard for all review channels"],
    cta: "Explore Zyene Reviews",
    href: "#zyene-reviews",
    secondaryCta: "Try it out now for free",
    secondaryHref: "https://zyenereviews.com",
  },
  {
    label: "Product 02",
    name: "Zentraic AI",
    subtitle: "Voice AI platform for real operations",
    description:
      "Deploy call agents, qualify leads, and sync CRM updates in real time. Zentraic helps teams run telephony automation without breaking existing workflows.",
    image: "/images/zentraic-ai-logo.png",
    imageAlt: "Zentraic AI logo",
    imageFit: "contain",
    imageBg: "bg-gradient-to-br from-[#0D5CC8] via-[#0A73D9] to-[#0A95F1]",
    points: ["Inbound + outbound AI calls", "Lead scoring and routing", "CRM and workflow integration"],
    cta: "Explore Zentraic AI",
    href: "#zentraic-ai",
    secondaryCta: "Try it out now for free",
    secondaryHref: "/contact",
  },
]

export function ProductBlocks() {
  return (
    <section className="pt-24 pb-14 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[820px] mb-10">
          <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#8A8F98] mb-3">Products Overview</p>
          <h2 className="text-[34px] md:text-[52px] tracking-[-0.03em] leading-[1.08] text-[#0A1015] mb-4">
            Two focused products for growth and operations
          </h2>
          <p className="text-[16px] text-[#4A4F59] leading-[1.7]">
            Pick one product to solve one clear problem, or combine both for a full customer journey from first interaction to long-term trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {productCards.map((product, idx) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="rounded-[20px] border border-[#E3E8EF] bg-white overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            >
              <div className={`relative aspect-[16/9] ${product.imageBg ?? "bg-[#0A1015]"}`}>
                <Image src={product.image} alt={product.imageAlt} fill className={product.imageFit === "contain" ? "object-contain p-10 md:p-12" : "object-cover"} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/5" />
              </div>
              <div className="p-6 md:p-7">
                <p className="inline-flex h-7 items-center rounded-full border border-[#E3E8EF] px-3 text-[11px] uppercase tracking-[0.14em] text-[#6B7280] mb-4">
                  {product.label}
                </p>
                <h3 className="text-[30px] md:text-[36px] tracking-[-0.03em] leading-[1.1] text-[#0A1015] mb-2">{product.name}</h3>
                <p className="text-[17px] text-[#0A1015] mb-3">{product.subtitle}</p>
                <p className="text-[15px] text-[#4A4F59] leading-[1.7] mb-6">{product.description}</p>
                <div className="space-y-2.5 mb-7">
                  {product.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A1015] mt-2 shrink-0" />
                      <p className="text-[14px] text-[#0A1015] leading-[1.6]">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center h-11 px-6 rounded-[8px] bg-[#0A1015] text-white text-[14px] font-medium hover:bg-[#111A23] transition-colors"
                  >
                    {product.cta}
                  </Link>
                  {product.secondaryCta && product.secondaryHref ? (
                    <Link
                      href={product.secondaryHref}
                      target={product.secondaryHref.startsWith("http") ? "_blank" : undefined}
                      rel={product.secondaryHref.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center justify-center h-11 px-6 rounded-[8px] border border-[#D3DAE5] text-[#0A1015] text-[14px] font-medium hover:bg-[#F4F7FB] transition-colors"
                    >
                      {product.secondaryCta}
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
