import PrivacyHero from '@/components/legal/PrivacyHero';
import LegalContent from '@/components/legal/LegalContent';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata = {
  title: "Privacy Policy | Zyene",
  description:
    "Read Zyene's privacy policy. Learn how we collect, use, and protect your personal information when you use our website and AI automation services.",
  alternates: { canonical: "https://zyene.com/legal/privacy-policy" },
  robots: { index: false },
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
