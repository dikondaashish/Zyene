import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const NOTICES = [
  {
    label: "E-Verify participation notice",
    href: "https://www.e-verify.gov/sites/default/files/everify/posters/EVerifyParticipationPoster.pdf",
  },
  {
    label: "Right to work notice",
    href: "https://www.e-verify.gov/sites/default/files/everify/posters/IER_RighttoWorkPoster.pdf",
  },
]

export function HiringCompliance() {
  return (
    <section className="bg-white">
      <div className="zy-container pb-24 md:pb-32">
        <div className="grid gap-8 rounded-[24px] border border-line bg-paper p-7 md:grid-cols-[1fr_auto] md:items-end md:gap-12 md:p-10">
          <div>
            <div className="relative mb-6 h-[28px] w-[112px]">
              <Image src="/images/e-verify-logo.svg" alt="E-Verify" fill sizes="112px" className="object-contain object-left" />
            </div>
            <h2 className="text-[22px] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A1015] md:text-[26px]">
              U.S. hiring notices and accommodations
            </h2>
            <p className="mt-3 max-w-[720px] text-[15px] leading-[1.65] text-[#4B525C]">
              Zyene participates in E-Verify to confirm employment eligibility in the United States and is an equal
              opportunity employer. If you need a reasonable accommodation during the hiring process, contact{" "}
              <a
                href="mailto:support@zyene.com"
                className="text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
              >
                support@zyene.com
              </a>
              .
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {NOTICES.map((notice) => (
              <li key={notice.href}>
                <a
                  href={notice.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-[14.5px] font-medium text-[#0A1015] underline decoration-[#0A1015]/25 underline-offset-4 transition-colors hover:decoration-[#0A1015]"
                >
                  {notice.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
