import TermsHero from '@/components/legal/TermsHero';
import TermsContent from '@/components/legal/TermsContent';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms and conditions governing use of Zyene's website and AI automation services.",
  alternates: { canonical: "https://zyene.com/legal/terms-conditions" },
  robots: { index: false },
};

export default function TermsConditionsPage() {
  return (
    <>
      <TermsHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <TermsContent />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  );
}
