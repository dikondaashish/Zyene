'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EmailCommunicationsHero() {
  return (
    <section className="relative w-full h-[40vh] min-h-[350px] bg-[#0A1015] overflow-hidden flex flex-col items-center justify-end pb-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mesh.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-100"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-[42px] md:text-[64px] lg:text-[80px] leading-[1.1] font-normal text-white tracking-[-0.02em] serif"
        >
          Email communications notice
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[15px] md:text-[16px] text-[#8A8F98] max-w-xl mx-auto"
        >
          Confidentiality, security, and handling guidance for email communications sent by Zyene.
        </motion.p>
      </div>
    </section>
  );
}
