"use client"

import Link from "next/link"
import Image from "next/image"
import { SITE_DATA } from "@/lib/constants"

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

export function Footer() {
  return (
    <footer className="bg-[#0A1015] pb-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Pages Row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-6">
          <div className="flex items-center gap-8 w-full flex-1">
            <span className="text-[14px] text-white font-medium whitespace-nowrap">Pages</span>
            <div className="h-px flex-1 bg-[#1F2224] opacity-100" />
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-start md:justify-end">
            {SITE_DATA.footerLinks.pages.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-[#8A8F98] hover:text-white transition-colors py-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-16">
          <div className="flex items-center gap-8 w-full flex-1">
            <span className="text-[14px] text-white font-medium whitespace-nowrap">Legal</span>
            <div className="h-px flex-1 bg-[#1F2224] opacity-100" />
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-start md:justify-end">
            {SITE_DATA.footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-[#8A8F98] hover:text-white transition-colors py-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={SITE_DATA.logoDark}
                  alt="Zyene Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-space-grotesk font-bold text-[28px] tracking-[-0.02em] text-white">
                  Zyene
                  <sup className="ml-[-0.15em] inline-block text-[7px] translate-x-[0.8em] -translate-y-[2.1em] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]">TM</sup>
                </span>
                <span className="font-space-grotesk text-[9px] tracking-[0.06em] mt-0.5 text-[#CECFD0]">
                  Growth Powered by Intelligence
                </span>
              </div>
            </div>
            <p className="text-[13px] text-[#CECFD0]">
              Zyene 2025. All Rights Reserved
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener"
              className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <XIcon />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              className="w-10 h-10 rounded-full border border-white/[0.12] flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
