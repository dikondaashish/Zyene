import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Target, LineChart, Users, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zyene - a strategy-first digital marketing and AI technology company focused on delivering measurable growth for businesses.",
};

const values = [
  {
    icon: Target,
    title: "Strategy First",
    description:
      "We don't jump into tactics. Every campaign begins with a deep understanding of your business, goals, and competitive landscape.",
  },
  {
    icon: LineChart,
    title: "Measurable Results",
    description:
      "We believe in accountability. Every action we take is tracked, measured, and optimized for maximum ROI.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We're not just a vendor—we're an extension of your team. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve, leveraging the latest in AI and marketing technology to give you a competitive edge.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Zyene
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Strategy-first digital marketing and AI solutions for businesses 
              ready to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Zyene, our mission is to empower businesses with strategic, 
              data-driven marketing solutions that deliver real, measurable growth. 
              We combine human expertise with cutting-edge AI technology to create 
              campaigns that don&apos;t just look good—they perform.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that every business deserves access to enterprise-level 
              marketing strategy. That&apos;s why we&apos;ve built a team and technology 
              stack capable of delivering exceptional results, regardless of your 
              company size.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground mb-2">100+</p>
                <p className="text-muted-foreground">Clients Served</p>
              </div>
              <div className="border-t border-border" />
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground mb-2">95%</p>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div className="border-t border-border" />
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground mb-2">3x</p>
                <p className="text-muted-foreground">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section dark>
        <SectionHeader
          title="Our Approach"
          subtitle="We take a fundamentally different approach to digital marketing."
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Planning Before Execution
              </h3>
              <p className="text-muted-foreground">
                Many agencies jump straight into tactics. We don&apos;t. Before we 
                create a single ad or write a single blog post, we invest time 
                in understanding your business, your customers, and your 
                competitive landscape. This strategic foundation is what separates 
                campaigns that perform from campaigns that fail.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Data-Driven Decisions
              </h3>
              <p className="text-muted-foreground">
                We don&apos;t guess—we measure. Every campaign is tracked and analyzed 
                to understand what&apos;s working and what needs improvement. Our 
                weekly reports keep you informed and ensure we&apos;re always 
                optimizing for the best possible results.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AI-Enhanced Marketing
              </h3>
              <p className="text-muted-foreground">
                We leverage the latest in AI technology to enhance our marketing 
                capabilities. From content optimization to predictive analytics, 
                our AI tools help us deliver better results, faster.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <value.icon className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how Zyene can help your business achieve measurable growth.
          </p>
          <Link href="/contact#schedule">
            <Button variant="primary" size="lg">
              Schedule a Meeting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
