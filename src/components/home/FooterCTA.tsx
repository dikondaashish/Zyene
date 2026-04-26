"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { SITE_DATA } from "@/lib/constants"

const textRevealVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    }
  })
}

export function FooterCTA() {
  const headingWords = "Don't scale harder. Scale smarter.".split(" ")

  return (
    <section id="footer-cta" className="bg-[#0A1015] overflow-hidden relative">
      {/* Background Image with mask: fade from bottom transparent to top black */}
      <div
        className="absolute inset-0 z-0"
        style={{
          mask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 35%)",
          WebkitMask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 35%)",
          transform: "translateX(-50%)",
          left: "50%",
          width: "100%",
        }}
      >
        <img
          src="/images/footer-cta-asset.png"
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:pl-20 relative z-10 pt-32 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left: Title + Description */}
          <div className="max-w-[500px]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] font-bold text-white tracking-[0.2em] uppercase mb-8"
            >
              Get started
            </motion.p>
            <h2 className="text-[32px] md:text-[64px] leading-[1.05] font-normal tracking-[-0.03em] text-white mb-8">
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
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] text-[#8A8F98] leading-[1.6] mb-10"
            >
              Zyene helps you automate complex workflows, reduce operational drag, and scale execution without growing headcount.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 h-12 bg-white text-[#0A1015] text-[14px] font-medium rounded-[4px] hover:bg-white/90 transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 h-12 bg-white/[0.04] text-white text-[14px] font-medium rounded-[4px] border border-white/[0.08] hover:bg-white/[0.08] transition-colors backdrop-blur-sm"
              >
                About us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
