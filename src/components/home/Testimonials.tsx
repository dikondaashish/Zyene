"use client"

import { motion, type Variants } from "framer-motion"
import { SITE_DATA } from "@/lib/constants"

const textRevealVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  })
}

// Card variant config: first card uses a person image, second uses a dark logo panel
const CARD_CONFIG = [
  {
    type: "image" as const,
    imageSrc: "/images/testimonial-avatar.png",
  },
  {
    type: "logo" as const,
    logoSrc: "/images/testimonial-logo.png",
  }
]

export function Testimonials() {
  const headingWords = "Real outcomes. Real businesses. Powered by Zyene.".split(" ")

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Title Wrapper - Centered */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[14px] font-bold text-[#0A1015] tracking-[0.2em] uppercase mb-8"
          >
            Testimonials
          </motion.p>
          <h2 className="text-[44px] md:text-[64px] leading-[1.05] font-normal tracking-[-0.03em] text-[#0A1015]">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textRevealVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col gap-3">
          {SITE_DATA.testimonials.map((testimonial, i) => {
            const config = CARD_CONFIG[i] || CARD_CONFIG[0]

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-[#F7F8FA] rounded-[4px] overflow-hidden flex flex-col md:flex-row"
              >
                {/* Left: Image or Logo Panel */}
                <div className="w-full md:w-[45%] min-h-[280px] md:min-h-0 relative overflow-hidden flex-shrink-0">
                  {config.type === "image" ? (
                    <img
                      src={config.imageSrc}
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#0A1015] flex items-center justify-center p-8">
                      <img
                        src={config.logoSrc!}
                        alt="Company logo"
                        className="w-[180px] h-[50px] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-between p-8 md:p-10 flex-1">
                  {/* Quote */}
                  <p className="text-[16px] md:text-[18px] text-[#0A1015] leading-[1.6] font-medium tracking-[-0.01em] mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Bottom: Name + Stat */}
                  <div className="flex items-end justify-between gap-4">
                    {/* Name Wrapper */}
                    <div>
                      <h6 className="text-[16px] font-bold text-[#0A1015] tracking-tight">
                        {testimonial.name}
                      </h6>
                      <p className="text-[13px] text-[#3D4145] mt-1">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Stats Wrapper */}
                    <div className="text-right">
                      <p className="text-[52px] md:text-[60px] font-normal text-[#0A1015] leading-none tracking-[-0.04em]">
                        {testimonial.stat}
                      </p>
                      <p className="text-[13px] text-[#3D4145] mt-1">
                        {testimonial.statText}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
