import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { SITE_DATA } from "@/lib/constants"

const pages = SITE_DATA.footerLinks.pages
const pick = (labels: string[]) => pages.filter((p) => labels.includes(p.label))

const COLUMNS = [
  { title: "Industries", links: pick(["Distribution", "Manufacturing", "Contractors"]) },
  { title: "Platform", links: pick(["Home", "Solutions", "How we work", "Use cases", "Products", "Security"]) },
  { title: "Company", links: pick(["About", "Case studies", "Resources", "Contact"]) },
  { title: "Legal", links: SITE_DATA.footerLinks.legal },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A1015] text-white">
      <div className="zy-container pt-20 md:pt-28">
        <div className="grid gap-14 border-t border-white/10 pt-14 lg:grid-cols-[1.1fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <Link href="/" aria-label="Zyene home" className="flex items-center gap-3">
              <span className="relative h-8 w-8 flex-shrink-0">
                <Image src={SITE_DATA.logoDark} alt="" fill sizes="32px" className="object-contain" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-space-grotesk text-[26px] font-bold tracking-[-0.02em] text-white">
                  Zyene
                  <sup className="ml-0.5 align-super text-[7px] font-semibold tracking-normal">TM</sup>
                </span>
                <span className="mt-1 font-space-grotesk text-[9.5px] tracking-[0.08em] text-white/55">
                  Industrial AI Operations
                </span>
              </span>
            </Link>
            <p className="max-w-[340px] text-[15px] leading-[1.6] text-white/55">
              Production AI systems for distributors, manufacturers, and specialty contractors, connected to the
              software they already run.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://startup.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google for Startups, learn more"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2 pr-4 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <Image src="/images/google-g-multicolor.png" alt="" width={16} height={16} className="object-contain" />
                </span>
                <span className="text-[13px] text-white/60">
                  Backed by <span className="font-medium text-white">Google for Startups</span>
                </span>
              </a>
              <a
                href="https://stripe.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stripe, learn more"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2 pr-4 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SITE_DATA.stripeFooterIcon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                </span>
                <span className="text-[13px] text-white/60">
                  Backed by <span className="font-medium text-white">Stripe</span>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="mb-5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-white/40">{col.title}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-[14.5px] text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/45">© 2026 Zyene. All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <a
              href="https://twitter.com/zyene"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zyene on X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              <FaXTwitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/zyene"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zyene on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="font-wide -mb-[0.22em] whitespace-nowrap text-center text-[25vw] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.035] [-webkit-text-stroke:1px_rgba(255,255,255,0.08)]">
          Zyene
        </p>
      </div>
    </footer>
  )
}
