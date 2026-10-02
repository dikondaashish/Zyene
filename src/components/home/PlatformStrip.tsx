import Image from "next/image"
import { SITE_DATA, type MarqueePartner } from "@/lib/constants"
import { cn } from "@/lib/utils"

function PartnerLabel({ partner }: { partner: MarqueePartner }) {
  if (partner.labelVariant === "google") {
    return (
      <span className="text-[22px] font-semibold leading-none tracking-[-0.01em]">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    )
  }
  if (partner.labelVariant === "simple") {
    return <span className="text-[20px] font-semibold leading-none tracking-[-0.01em] text-[#0A1015]">{partner.label}</span>
  }
  if (partner.labelVariant === "uppercase") {
    return (
      <span className="text-[17px] font-bold uppercase leading-none tracking-[0.12em] text-[#0A1015]">
        {partner.label}
      </span>
    )
  }
  return null
}

function partnerAlt(p: MarqueePartner): string {
  if (p.labelVariant === "none") return "Glean"
  if (p.labelVariant === "google") return "Google"
  return p.label ?? p.id
}

export function PlatformStrip() {
  const partners = SITE_DATA.marqueePartners
  return (
    <section aria-label="Platforms we build on" className="border-b border-line bg-white">
      <div className="zy-container grid items-center gap-6 py-10 md:grid-cols-[220px_1fr] md:gap-12 md:py-12">
        <p className="font-mono text-[11px] uppercase leading-[1.7] tracking-[0.14em] text-muted">
          Model-independent.
          <br />
          <span className="text-ink">Platforms we build on</span>
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 pr-16">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => {
              const wordmarkOnly = partner.labelVariant === "none"
              return (
                <div
                  key={`${partner.id}-${index}`}
                  aria-hidden={index >= partners.length ? true : undefined}
                  className="flex flex-shrink-0 items-center gap-2.5 opacity-70 grayscale transition-[opacity,filter] duration-500 hover:opacity-100 hover:grayscale-0"
                >
                  <span className={cn("relative flex-shrink-0", wordmarkOnly ? "h-7 w-[104px]" : "h-7 w-7")}>
                    <Image
                      src={partner.icon}
                      alt={`${partnerAlt(partner)} logo`}
                      fill
                      sizes={wordmarkOnly ? "104px" : "28px"}
                      className={cn("object-contain object-left", partner.iconInvert !== false && "brightness-0")}
                    />
                  </span>
                  <PartnerLabel partner={partner} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
