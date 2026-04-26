'use client';

import { motion } from 'framer-motion';

export default function TermsContent() {
  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[700px] mx-auto px-8 md:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Section 1 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              1. Agreement to Terms
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              By accessing our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              2. Use License
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              Permission is granted to temporarily download one copy of the materials (information or software) on AI Supply's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              3. Disclaimer
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              The materials on AI Supply's website are provided on an 'as is' basis. AI Supply makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              4. Limitations
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              In no event shall AI Supply or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AI Supply's website.
            </p>
          </div>

          {/* Final Note */}
          <div className="pt-12 border-t border-[#EEEEEE]">
            <p className="text-[14px] text-[#888888] font-medium uppercase tracking-widest italic serif">
              Last updated: March 25, 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
