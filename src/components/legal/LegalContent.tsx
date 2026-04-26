'use client';

import { motion } from 'framer-motion';

export default function LegalContent() {
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
              1. Introduction
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              This website is operated by <span className="font-bold">AI Supply</span>. The terms "we", "us", and "our" refer to <span className="font-bold">AI Supply</span>. The use of our website is subject to the following terms and conditions of use, as amended from time to time (the "Terms"). The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully.
            </p>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website's services or place an order on our website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              2. Use of our Website
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              You agree to use our website for legitimate purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of any intellectual property or privacy law. By agreeing to the Terms, you represent and warrant that you are at least the age of majority in your state or province of residence and are legally capable of entering into a binding contract.
            </p>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              You agree to not use our website to conduct any activity that would constitute a civil or criminal offence or violate any law. You agree not to attempt to interfere with our website's network or security features or to gain unauthorized access to our systems.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              3. General Conditions
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              We reserve the right to refuse service to anyone, at any time, for any reason. We reserve the right to make any modifications to the website, including terminating, changing, suspending or discontinuing any aspect of the website at any time, without notice. We may impose additional rules or limits on the use of our website. You agree to review the Terms regularly and your continued access or use of our website will mean that you agree to any changes.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <h3 className="text-[18px] font-bold text-[#0A1015] tracking-tight">
              4. Products or Services
            </h3>
            <p className="text-[16px] text-[#3D4145] leading-[1.6] font-normal">
              All purchases through our website are subject to product availability. We may, in our sole discretion, limit or cancel the quantities offered on our website or limit the sales of our products or services to any person, household, geographic region or jurisdiction.
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
