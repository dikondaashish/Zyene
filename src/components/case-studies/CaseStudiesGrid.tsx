"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, TrendingUp, Clock, BarChart3, Users } from "lucide-react"
import { CASE_STUDIES, type CaseStudy, type CaseStudyResult } from "@/lib/case-studies"

function ResultIcon({ name }: { name: CaseStudyResult["iconName"] }) {
  if (name === "trending-up") return <TrendingUp className="h-5 w-5" />
  if (name === "clock") return <Clock className="h-5 w-5" />
  return <BarChart3 className="h-5 w-5" />
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[20px] border border-[#E3E8EF] bg-white overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
    >
      {/* Header */}
      <div className="border-b border-[#E3E8EF] px-4 sm:px-8 py-7 md:px-10 bg-[#F8FAFB]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#0A1015]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0A1015] mb-3">
              {study.industry}
            </span>
            <h2 className="font-display-serif text-[22px] font-normal leading-snug tracking-[-0.02em] text-[#0A1015] md:text-[26px]">
              {study.company}
            </h2>
            <p className="mt-1 text-[13px] text-[#8A8F98]">{study.role}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#E3E8EF] px-3 py-1 text-[11px] font-medium text-[#4A4F59]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Results strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E3E8EF] border-b border-[#E3E8EF]">
        {study.results.map((r, i) => (
          <div key={i} className="flex items-center gap-4 px-4 sm:px-8 py-5 md:px-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#0A1015] text-white">
              <ResultIcon name={r.iconName} />
            </div>
            <div>
              <p className="font-display-serif text-[24px] font-normal tracking-[-0.02em] text-[#0A1015] leading-none md:text-[28px]">
                {r.metric}
              </p>
              <p className="mt-1 text-[12px] leading-snug text-[#8A8F98]">{r.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="px-4 sm:px-8 py-6 sm:py-8 md:px-10 space-y-6">
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">Challenge</p>
          <p className="text-[15px] leading-[1.7] text-[#4A4F59]">{study.challenge}</p>
        </div>
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A8F98]">Solution</p>
          <p className="text-[15px] leading-[1.7] text-[#4A4F59]">{study.solution}</p>
        </div>

        {/* Quote */}
        <blockquote className="rounded-[12px] border border-[#E3E8EF] bg-[#F8FAFB] px-6 py-5">
          <p className="font-display-serif text-[17px] font-normal italic leading-[1.65] text-[#0A1015] md:text-[18px]">
            &ldquo;{study.quote}&rdquo;
          </p>
          <footer className="mt-3 text-[13px] font-medium text-[#8A8F98]">— {study.role}</footer>
        </blockquote>
      </div>
    </motion.article>
  )
}

export function CaseStudiesGrid() {
  const headerRef = React.useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" })

  return (
    <section className="overflow-hidden bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-[760px]"
        >
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#8A8F98]">Client Stories</p>
          <h2 className="font-display-serif text-[26px] sm:text-[34px] font-normal leading-[1.08] tracking-[-0.03em] text-[#0A1015] md:text-[52px]">
            How businesses transform with Zyene
          </h2>
          <p className="mt-6 max-w-[580px] text-[16px] leading-[1.6] text-[#4A4F59]">
            Real outcomes from teams that replaced manual execution with AI-powered workflows across marketing, sales, and operations.
          </p>
        </motion.header>

        {/* Cards */}
        <div className="space-y-10">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-[20px] border border-[#E3E8EF] bg-[#F8FAFB] px-4 py-8 text-center sm:px-8 sm:py-10 md:px-12 md:py-12"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A1015] mx-auto mb-5">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-display-serif text-[26px] font-normal tracking-[-0.02em] text-[#0A1015] md:text-[32px]">
            Ready to be the next case study?
          </h3>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.65] text-[#4A4F59]">
            Book a free strategy call. We will map your workflows, identify the highest-impact transformation opportunities, and give you a clear action plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-[#0A1015] px-8 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#111A23]"
          >
            Schedule a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
