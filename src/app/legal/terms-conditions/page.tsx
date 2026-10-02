import TermsHero from '@/components/legal/TermsHero';
import TermsContent from '@/components/legal/TermsContent';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern use of the Zyene website and Zyene's AI engineering services and software.",
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
