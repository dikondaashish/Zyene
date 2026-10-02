import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Reveal, RevealText } from "@/components/ui/Reveal"

const POINTS = [
  {
    title: "Human approval",
    body: "Critical writes can wait for an employee before they reach ERP, CRM, or a field system.",
  },
  {
    title: "Least privilege",
    body: "A workflow receives only the system access that workflow needs.",
  },
  {
    title: "Data isolation",
    body: "One customer's operational data stays separated from another's.",
  },
  {
    title: "Audit logging",
    body: "Prepared actions and approvals can be logged so a decision can be reviewed later.",
  },
  {
    title: "Provider transparency",
    body: "We state which model providers receive data for a deployment, and we are not tied to one vendor.",
  },
  {
    title: "Scoped deployment",
    body: "Work can run in your cloud, ours, or a more private setup, decided with the project.",
  },
]

export function SecurityStrip() {
  return (
    <section className="bg-paper">
      <div className="zy-container zy-section">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-[#0A1015] lg:min-h-full">
            <Image
              src="/images/industrial/hero-security.jpg"
              alt="Server racks and patch cabling in a dark data center"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1015]/90 via-[#0A1015]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="max-w-[380px] font-display text-[26px] leading-[1.15] tracking-[-0.025em] text-white md:text-[30px]">
                Your systems stay yours. Your people stay in control.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            <Reveal className="mb-6">
              <span className="zy-kicker">Security and control</span>
            </Reveal>
            <RevealText
              text="Approvals, access, and logging sit inside the workflow."
              className="zy-display text-[clamp(30px,3.8vw,52px)] text-[#0A1015]"
            />

            <dl className="mt-12 grid gap-x-10 sm:grid-cols-2">
              {POINTS.map((point, i) => (
                <Reveal key={point.title} delay={(i % 2) * 0.06} className="border-t border-[#0A1015]/12 py-6">
                  <dt className="flex items-baseline gap-3 text-[17px] font-medium tracking-[-0.01em] text-[#0A1015]">
                    <span className="font-mono text-[11.5px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {point.title}
                  </dt>
                  <dd className="mt-2 pl-[30px] text-[15px] leading-[1.6] text-[#4B525C]">{point.body}</dd>
                </Reveal>
              ))}
            </dl>

            <div className="mt-10">
              <Button variant="dark" asChild>
                <Link href="/security">
                  Explore Our Security Approach
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
