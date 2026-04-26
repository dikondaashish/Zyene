import PrivacyHero from '@/components/legal/PrivacyHero';
import LegalContent from '@/components/legal/LegalContent';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata = {
  title: 'Privacy Policy - AI Supply',
  description: 'A sleek and responsive Framer template designed for AI-powered startups and tech innovators.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyHero />
      <div id="main-content" className="relative z-10 bg-white rounded-t-[20px]">
        <LegalContent />
      </div>
      <div id="footer-cta">
        <FooterCTA />
      </div>
    </>
  );
}
