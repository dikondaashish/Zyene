import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Check, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flat-rate pricing. From full-service growth packages to individual services — find the right plan for your business stage.",
};

const fullPlan = {
  name: "Full Growth Plan",
  price: "$2,799",
  period: "/month",
  description:
    "End-to-end marketing and technical infrastructure. One team, one bill, predictable output.",
  features: [
    "Technical SEO + Answer Engine Optimization (AEO)",
    "Social Media Marketing & Content Creation",
    "Content Marketing & Blogging",
    "Email Marketing & Automation",
    "Web Design & Development",
    "Weekly Performance Reports",
    "Dedicated Account Manager",
    "Priority Support (24h response)",
  ],
};

const comboPlans = [
  {
    name: "SEO + AEO",
    price: "$1,000",
    period: "/month",
    description: "Dominate search and AI answer engines simultaneously.",
    features: [
      "Full technical SEO implementation",
      "Answer Engine Optimization (AEO)",
      "Monthly performance reporting",
      "Keyword strategy & gap analysis",
    ],
  },
  {
    name: "SEO + Social",
    price: "$1,500",
    period: "/month",
    description: "Search visibility paired with social media presence.",
    features: [
      "Full technical SEO implementation",
      "Social media account management",
      "Content creation (posts, graphics)",
      "Monthly analytics reporting",
    ],
  },
  {
    name: "Web + SEO",
    price: "$1,000",
    period: "/month",
    description: "A high-performance site that actually gets found.",
    features: [
      "Custom website design & build",
      "On-page SEO from day one",
      "Mobile-responsive, fast-loading",
      "Ongoing maintenance & updates",
    ],
  },
  {
    name: "Email + Web",
    price: "$500",
    period: "/month",
    description: "Convert visitors and retain customers with email.",
    features: [
      "Email campaign strategy & execution",
      "Web design & development support",
      "Marketing automation setup",
      "Monthly performance reporting",
    ],
  },
];

const individualServices = [
  {
    name: "SEO",
    price: "$699",
    period: "/month",
    description: "Search engine optimization & monthly reporting.",
  },
  {
    name: "Social Media",
    price: "$799",
    period: "/month",
    description: "Managed social presence across key platforms.",
  },
  {
    name: "Web Design/Dev",
    price: "$899",
    period: "/month",
    description: "Custom website design & ongoing development.",
  },
  {
    name: "Email Marketing",
    price: "$499",
    period: "/month",
    description: "Email campaign management & automation.",
  },
  {
    name: "Content Marketing",
    price: "$699",
    period: "/month",
    description: "Blog content, copywriting & content strategy.",
  },
];

const productPlans = [
  {
    name: "Zyene Reviews",
    price: "$29.99",
    period: "/month",
    description:
      "AI-powered review management for local businesses. Monitor, respond, and grow your reputation across Google, Yelp, and Facebook.",
    link: "https://zyenereviews.com",
    external: true,
    cta: "Visit Zyene Reviews",
  },
  {
    name: "Zentraic AI",
    price: "$299",
    period: "/month",
    description:
      "Automated AI voice agent that handles inbound calls, qualifies leads, and syncs with your CRM around the clock.",
    link: "/voice",
    external: false,
    cta: "Explore Zentraic AI",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="pricing-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Simple, Flat-Rate Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              No retainer surprises. No hidden fees. You know exactly what you&apos;re
              getting before you sign.
            </p>
          </div>
        </div>
      </section>

      {/* Full Growth Plan */}
      <Section>
        <SectionHeader
          title="Full Growth Plan"
          subtitle="The complete package: marketing, development, and automation under one roof."
        />

        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden" hover={false}>
            {/* Popular badge */}
            <div
              className="absolute top-0 right-0 bg-brand text-brand-foreground px-4 py-2 text-sm font-semibold rounded-bl-lg flex items-center"
              aria-label="Most popular plan"
            >
              <Star className="h-4 w-4 mr-2" aria-hidden="true" />
              Most Popular
            </div>

            <CardHeader className="text-center pt-12">
              <CardTitle className="text-3xl">{fullPlan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold text-foreground">
                  {fullPlan.price}
                </span>
                <span className="text-muted-foreground">{fullPlan.period}</span>
              </div>
              <CardDescription className="mt-4 text-base">
                {fullPlan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-8">
              <ul className="space-y-4" aria-label="Plan features">
                {fullPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div
                      className="w-5 h-5 rounded-full bg-success flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-8">
              <Link href="/contact#schedule" className="w-full">
                <Button variant="primary" size="lg" className="w-full">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Combo Plans */}
      <Section dark>
        <SectionHeader
          title="Combo Plans"
          subtitle="Focused combinations for businesses that know which growth levers to pull."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {comboPlans.map((plan, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3" aria-label={`${plan.name} features`}>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3">
                      <Check
                        className="h-4 w-4 text-foreground flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/contact#schedule" className="w-full">
                  <Button variant="outline" size="md" className="w-full">
                    Get This Plan
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Individual Services */}
      <Section>
        <SectionHeader
          title="Individual Services"
          subtitle="Add a single capability without the full-service commitment."
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {individualServices.map((plan, i) => (
            <Card key={i} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
                <CardDescription className="text-sm mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href="/contact#schedule" className="w-full">
                  <Button variant="ghost" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* AI Products */}
      <Section dark>
        <SectionHeader
          title="AI Products"
          subtitle="Proprietary tools built on top of our service infrastructure."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {productPlans.map((plan, i) => (
            <Card key={i} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
                <CardDescription className="mt-3 text-base leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link
                  href={plan.link}
                  target={plan.external ? "_blank" : "_self"}
                  rel={plan.external ? "noopener noreferrer" : undefined}
                  className="w-full"
                >
                  <Button variant="primary" size="md" className="w-full">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not Sure Which Plan Fits?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a free 30-minute call. We&apos;ll look at your business, your goals,
            and tell you honestly which plan — if any — makes sense.
          </p>
          <Link href="/contact#schedule">
            <Button variant="primary" size="lg">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
