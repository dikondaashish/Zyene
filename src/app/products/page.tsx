"use client"

import { ProductsHero } from "@/components/products/ProductsHero"
import { ProductsOrigin } from "@/components/products/ProductsOrigin"
import { ProductBlocks } from "@/components/products/ProductBlocks"
import { ReviewsDeepDive } from "@/components/products/ReviewsDeepDive"
import { WhyZentraic } from "@/components/products/WhyZentraic"
import { FAQ } from "@/components/home/FAQ"
import { FooterCTA } from "@/components/home/FooterCTA"

const PRODUCTS_FAQS = [
  {
    question: "Is this the same as Zyene’s industrial operations work?",
    answer:
      "No. Zyene’s main work is production AI for distributors, manufacturers, and specialty contractors. Zyene Reviews and Zentraic AI started as internal tools for problems we kept seeing while working with businesses, then we opened them as SaaS products.",
  },
  {
    question: "Can we use one product first and add the second later?",
    answer: "Yes. Each product stands on its own. You can start with one and add the other later.",
  },
  {
    question: "Will they work with our current CRM?",
    answer:
      "Zentraic AI is built to write call outcomes back to a CRM. Zyene Reviews connects to the review platforms you already use. We map the exact systems during setup.",
  },
  {
    question: "How long does setup take?",
    answer:
      "It depends on the accounts and systems involved. We do not quote a fixed launch window. Contact us and we will say what setup looks like for your stack.",
  },
]

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <div id="main-content" className="relative z-10 overflow-clip rounded-t-[28px] bg-white">
        <ProductsOrigin />
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
