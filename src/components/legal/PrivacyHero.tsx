'use client';

import { motion } from 'framer-motion';

export default function PrivacyHero() {
  return (
    <section className="relative w-full h-[40vh] min-h-[350px] bg-[#0A1015] overflow-hidden flex flex-col items-center justify-end pb-16">
      {/* Background Image — matching framer-b7o8g5 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-mesh.jpg"
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[42px] md:text-[64px] lg:text-[80px] leading-[1.1] font-normal text-white tracking-[-0.02em] serif"
        >
          Privacy Policy
        </motion.h1>
      </div>
    </section>
  );
}
