"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Mic, Star } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Zyene Reviews",
    tagline: "Turn your reviews into your best sales asset.",
    description:
      "A review management platform built for local businesses. Monitor every review, respond in seconds with AI-drafted replies, and generate more 5-star ratings automatically.",
    features: [
      "Real-time review alerts via SMS",
      "AI-drafted replies, ready to send in one click",
      "Automated review request campaigns",
      "Unified dashboard: Google, Yelp, Facebook",
      "Competitor tracking and rating analysis",
      "Embeddable website review widgets",
    ],
    icon: Star,
    accentClass: "from-amber-500 to-orange-600",
    link: "https://zyenereviews.com",
    cta: "Visit Zyene Reviews",
    external: true,
  },
  {
    name: "Zentraic AI",
    tagline: "Your phone line, answered 24/7 by AI.",
    description:
      "An AI voice agent that handles inbound and outbound calls, qualifies leads against your criteria, and syncs outcomes to your CRM — without human intervention.",
    features: [
      "Natural, low-latency voice conversations",
      "Inbound and outbound call automation",
      "Lead qualification against your criteria",
      "Multilingual voice capabilities",
      "Automatic CRM updates after every call",
      "Available 24/7, no staffing required",
    ],
    icon: Mic,
    accentClass: "from-zinc-700 to-zinc-900",
    link: "/voice",
    cta: "Explore Zentraic AI",
    external: false,
  },
];

export function Products() {
  return (
    <Section id="products">
      <SectionHeader
        title="Our Products"
        subtitle="Proprietary AI tools built on top of our service infrastructure."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <Card
            key={i}
            className="relative overflow-hidden flex flex-col"
            hover={false}
          >
            {/* Top accent bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${product.accentClass}`}
              aria-hidden="true"
            />

            <CardHeader className="pt-8">
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accentClass} flex items-center justify-center`}
                  aria-hidden="true"
                >
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
              </div>

              <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                {product.tagline}
              </p>

              <CardDescription className="text-base leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                What&apos;s Included
              </p>
              <ul className="space-y-3" aria-label={`${product.name} features`}>
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-start space-x-3">
                    <CheckCircle2
                      className="h-4 w-4 text-success flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Link
                href={product.link}
                target={product.external ? "_blank" : "_self"}
                rel={product.external ? "noopener noreferrer" : undefined}
                className="w-full"
                aria-label={`${product.cta}${product.external ? " (opens in new tab)" : ""}`}
              >
                <Button className="w-full group" variant="outline">
                  {product.cta}
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
