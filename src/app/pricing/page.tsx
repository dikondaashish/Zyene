import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Check, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore Zyene's transparent pricing plans. From full-service growth packages to individual services, find the right plan for your business.",
};

const fullPlan = {
  name: "Full Growth Plan",
  price: "$2,799",
  period: "/month",
  description: "Everything you need for comprehensive digital growth",
  popular: true,
  features: [
    "SEO + AEO Optimization",
    "Social Media Marketing",
    "Content Marketing & Blogging",
    "Email Marketing",
    "Web Design & Development",
    "Weekly Performance Reports",
    "Dedicated Account Manager",
    "Priority Support",
  ],
};

const comboPlans = [
  {
    name: "SEO + AEO",
    price: "$1,000",
    period: "/month",
    description: "Complete search optimization package",
    features: [
      "Full SEO optimization",
      "Answer Engine Optimization",
      "Monthly reporting",
      "Keyword strategy",
    ],
  },
  {
    name: "SEO + SMM",
    price: "$1,500",
    period: "/month",
    description: "Search and social combined",
    features: [
      "Full SEO optimization",
      "Social media management",
      "Content creation",
      "Monthly reporting",
    ],
  },
  {
    name: "Web + SEO",
    price: "$1,000",
    period: "/month",
    description: "Website with basic optimization",
    features: [
      "Custom website design",
      "Basic SEO setup",
      "Mobile responsive",
      "Ongoing maintenance",
    ],
  },
  {
    name: "Email + Web",
    price: "$500",
    period: "/month",
    description: "Email marketing with web support",
    features: [
      "Email campaign management",
      "Web design/development",
      "Automation setup",
      "Monthly reporting",
    ],
  },
];

const individualPlans = [
  {
    name: "SEO",
    price: "$699",
    period: "/month",
    description: "Search engine optimization",
  },
  {
    name: "SMM",
    price: "$799",
    period: "/month",
    description: "Social media marketing",
  },
  {
    name: "Web Design/Dev",
    price: "$899",
    period: "/month",
    description: "Website design & development",
  },
  {
    name: "Email Marketing",
    price: "$499",
    period: "/month",
    description: "Email campaign management",
  },
  {
    name: "Content Marketing",
    price: "$699",
    period: "/month",
    description: "Content creation & blogging",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Full Growth Plan */}
      <Section>
        <SectionHeader
          title="Full Growth Plan"
          subtitle="Our most comprehensive package for businesses ready to scale."
        />

        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden" hover={false}>
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg flex items-center">
              <Star className="h-4 w-4 mr-1" />
              Most Popular
            </div>

            <CardHeader className="text-center pt-12">
              <CardTitle className="text-3xl">{fullPlan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold text-foreground">{fullPlan.price}</span>
                <span className="text-muted-foreground">{fullPlan.period}</span>
              </div>
              <CardDescription className="mt-4 text-base">
                {fullPlan.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-8">
              <ul className="space-y-4">
                {fullPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-8">
              <Link href="/contact#schedule" className="w-full">
                <Button variant="primary" size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
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
          subtitle="Strategic combinations for focused growth."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {comboPlans.map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/contact#schedule" className="w-full">
                  <Button variant="outline" size="md" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

      {/* Individual Plans */}
      <Section>
        <SectionHeader
          title="Individual Services"
          subtitle="Focus on what matters most to your business."
        />

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {individualPlans.map((plan, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
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

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Schedule a free consultation and we&apos;ll help you choose the perfect 
            plan based on your goals and budget.
          </p>
          <Link href="/contact#schedule">
            <Button variant="primary" size="lg">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
