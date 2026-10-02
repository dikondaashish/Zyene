import PrivacyHero from '@/components/legal/PrivacyHero';
import PrivacyContent from '@/components/legal/PrivacyContent';
import { FooterCTA } from '@/components/home/FooterCTA';

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Zyene collects, uses, and protects personal information on zyene.com and in client engagements.",
  alternates: { canonical: "https://zyene.com/legal/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <PrivacyContent />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  );
}
