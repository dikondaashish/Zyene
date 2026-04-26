import TermsHero from '@/components/legal/TermsHero';
import TermsContent from '@/components/legal/TermsContent';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata = {
  title: 'Terms & Conditions - AI Supply',
  description: 'Review the terms and conditions for using the AI Supply platform.',
};

export default function TermsConditionsPage() {
  return (
    <>
      <TermsHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <TermsContent />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  );
}
