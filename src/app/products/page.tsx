"use client"

import { ProductsHero } from "@/components/products/ProductsHero"
import { ProductBlocks } from "@/components/products/ProductBlocks"
import { ReviewsDeepDive } from "@/components/products/ReviewsDeepDive"
import { WhyZentraic } from "@/components/products/WhyZentraic"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

const PRODUCTS_FAQS = [
  {
    question: "Can we use one product first and add the second later?",
    answer: "Yes. You can start with one product and add the other when your team is ready.",
  },
  {
    question: "Will both products work with our current CRM?",
    answer: "Yes. We connect both products to your CRM and keep data synced in real time.",
  },
  {
    question: "How quickly can we launch?",
    answer: "Most teams can start in 1-2 weeks based on setup complexity.",
  },
]

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <ProductBlocks />
        <ReviewsDeepDive />
        <WhyZentraic />
        <FAQ faqs={PRODUCTS_FAQS} />
      </div>
      <div>
        <FooterCTA />
      </div>
    </>
  )
}
