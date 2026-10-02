import DpaHero from "@/components/legal/DpaHero"
import DpaContent from "@/components/legal/DpaContent"
import { FooterCTA } from "@/components/home/FooterCTA"

export const metadata = {
  title: "Data Processing Agreement",
  description:
    "How Zyene processes customer emails, purchase orders, and ERP data, and which subprocessors we use.",
  alternates: { canonical: "https://zyene.com/legal/data-processing-agreement" },
}

export default function DataProcessingAgreementPage() {
  return (
    <>
      <DpaHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <DpaContent />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  )
}
