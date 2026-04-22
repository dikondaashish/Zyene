import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Target, LineChart, Users, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zyene builds the marketing systems, CRM automation, and AI tools businesses need to scale predictably. Learn how we work and why clients stay.",
};

const values = [
  {
    icon: Target,
    title: "Technical Accountability",
    description:
      "Every engagement is measured against hard numbers — pipeline growth, cost per lead, search share, call volume handled. Not impressions.",
  },
  {
    icon: LineChart,
    title: "System Integration",
    description:
      "We don't drop tools into a vacuum. Every service we build connects to your CRM, your reporting, and your existing operations stack.",
  },
  {
    icon: Users,
    title: "Growth Infrastructure",
    description:
      "We build systems designed to scale without requiring proportional headcount increases. The work compounds over time.",
  },
  {
    icon: Lightbulb,
    title: "Operational Scalability",
    description:
      "Recurring tasks get automated. Business workflows get documented and standardized. Your team focuses on high-leverage work.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted" aria-labelledby="about-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              About Zyene
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We build the technical and marketing infrastructure that businesses
              need to scale — without scaling their overhead proportionally.
            </p>
          </div>
        </div>
      </section>

      {/* Identity */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Actually Do
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Zyene is a digital marketing and AI automation company. We provide
              businesses with the systems they need to acquire customers
              predictably, manage operations efficiently, and communicate at
              scale through AI.
            </p>
            <p className="text-lg text-muted-foreground">
              We don&apos;t offer fragmented, one-off services. We build
              interconnected infrastructure: performance marketing pipelines,
              CRM automation, AI voice agents, and custom web applications —
              designed to work together and compound over time.
            </p>
          </div>

          {/* Stats card */}
          <div className="bg-card border border-border rounded-2xl p-8" aria-label="Company statistics">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground mb-1">100+</p>
                <p className="text-muted-foreground">Clients across four industries</p>
              </div>
              <div className="border-t border-border" />
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground mb-1">95%</p>
                <p className="text-muted-foreground">Client retention rate</p>
              </div>
              <div className="border-t border-border" />
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground mb-1">2</p>
                <p className="text-muted-foreground">Proprietary AI products shipped</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Implementation Model */}
      <Section dark>
        <SectionHeader
          title="How We Work"
          subtitle="Not a project shop. Not a retainer agency. Something in between — and more durable."
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Systems, Not Services
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build interconnected systems where marketing funnels, CRM
                workflows, and AI voice agents work together. Isolated services
                leave gaps; integrated systems don&apos;t.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Automation-First
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Scalability requires standardized processes. We automate
                recurring business tasks so your team can focus on
                high-leverage decisions instead of manual data entry and
                follow-up calls.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Technical Depth
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team handles implementation end-to-end. Marketing
                campaigns, custom web applications, CRM configuration, and AI
                deployment are all executed in-house — no hand-offs to third
                parties mid-project.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that determine which clients we work with and how we work."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <value.icon
                  className="h-6 w-6 text-foreground"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Something That Scales?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a free 30-minute call. We&apos;ll review your current setup and
            tell you honestly what we can help with.
          </p>
          <Link href="/contact#schedule">
            <Button variant="primary" size="lg">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
