import { Reveal, RevealText } from "@/components/ui/Reveal"

export function ProductsOrigin() {
  return (
    <section className="border-t border-line bg-white">
      <div className="zy-container zy-section grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <RevealText
            text="Built for our own work first."
            className="zy-display max-w-[560px] text-[clamp(34px,4.6vw,64px)] text-[#0A1015]"
          />
        </div>
        <Reveal delay={0.08}>
          <div className="max-w-[560px] space-y-5 text-[17px] leading-[1.7] text-[#4B525C]">
            <p>
              Zyene’s main work is industrial operations: distributors, manufacturers, and specialty contractors, and
              the email and documents around their ERP. While doing that work with different kinds of businesses, the
              same adjacent problems kept showing up.
            </p>
            <p>
              After a job or a service call, asking for feedback was slow and easy to skip. Calls still landed on
              someone who had to qualify, route, and type the outcome into a CRM. Those were internal tools we built
              so the work would actually get done. We then opened them as products other companies can use.
            </p>
            <p>
              <span className="font-medium text-[#0A1015]">Zyene Reviews</span> is the review and follow-up product.{" "}
              <span className="font-medium text-[#0A1015]">Zentraic AI</span> is the voice product. They sit beside
              the industrial operations work. They are not a replacement for it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
