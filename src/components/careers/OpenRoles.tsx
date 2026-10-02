"use client"

import { ArrowUpRight } from "lucide-react"
import { Reveal, RevealText } from "@/components/ui/Reveal"

const ROLES = [
  { title: "Data Analyst", location: "SF, NY, Remote", href: "https://binary.so/izp2HB1" },
  { title: "Software Engineer", location: "SF, NY, Remote", href: "https://binary.so/d6WE4zX" },
  { title: "Full Stack Developer (Internship/Full Time)", location: "SF, NY, BLR, Hyd, Remote", href: "https://binary.so/SUjsovx" },
  { title: "AI Engineer", location: "SF, NY, Remote", href: "https://binary.so/1PkZTMT" },
  { title: "AI Engineer Intern", location: "SF, NY, Remote", href: "https://binary.so/TCJFdx8" },
  { title: "Data Analyst Intern", location: "SF, NY, Remote", href: "https://binary.so/KuVmvVW" },
]

export function OpenRoles() {
  return (
    <section id="open-roles" className="scroll-mt-24 bg-white">
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <RevealText text="Open roles." className="zy-display text-[clamp(34px,4.6vw,64px)] text-[#0A1015]" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[420px] text-[17px] leading-[1.6] text-[#4B525C]">
              {ROLES.length} positions across engineering and data, including internships.
            </p>
          </Reveal>
        </div>

        <ul className="border-t border-[#0A1015]/15">
          {ROLES.map((role, index) => {
            return (
              <Reveal as="li" key={role.title} delay={Math.min(index, 6) * 0.03} className="border-b border-[#0A1015]/10">
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-6"
                >
                  <span className="text-[18px] font-medium leading-[1.3] tracking-[-0.015em] text-[#0A1015] md:text-[20px]">
                    {role.title}
                  </span>
                  <span className="flex flex-shrink-0 items-center gap-4">
                    <span className="hidden text-[14px] text-[#5B6470] sm:inline">{role.location}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A1015]/15 text-[#0A1015] transition-colors duration-300 group-hover:border-[#0A1015] group-hover:bg-[#0A1015] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
