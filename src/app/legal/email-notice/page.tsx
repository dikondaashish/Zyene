import EmailCommunicationsHero from "@/components/legal/EmailCommunicationsHero"
import EmailCommunicationsContent from "@/components/legal/EmailCommunicationsContent"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata = {
  title: "Email Communications Notice",
  description:
    "Confidentiality, security, authority, and privacy guidance for email communications sent by Zyene.",
  alternates: { canonical: "https://zyene.com/legal/email-notice" },
  robots: { index: false },
}

export default function EmailNoticePage() {
  return (
    <>
      <EmailCommunicationsHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <EmailCommunicationsContent />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  )
}
