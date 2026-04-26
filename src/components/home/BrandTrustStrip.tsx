"use client"

import { motion } from "framer-motion"
import HoverBrandLogo from "@/components/ui/hover-brand-logo"

export function BrandTrustStrip() {
  return (
    <section className="py-10 px-6 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <HoverBrandLogo />
        </motion.div>
      </div>
    </section>
  )
}
