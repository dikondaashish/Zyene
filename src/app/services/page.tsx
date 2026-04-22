import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/Card";
import { Search, Code, Check, ArrowRight, Settings, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Zyene builds the full marketing and technical infrastructure for business scaling — SEO, paid media, web development, CRM automation, and AI voice agents.",
};

const services = [
  {
    id: "marketing",
    icon: Search,
    title: "Digital Marketing",
    subtitle: "Lead Generation & Customer Acquisition",
    description:
      "Paid media management, search optimization, and conversion-focused funnels that generate consistent, attributable pipeline.",
    details:
      "We focus on the technical and strategic layers of customer acquisition. By combining performance marketing with search optimization (SEO) and answer engine optimization (AEO), we build systems that drive consistent lead volume with clear attribution.",
    includes: [
      "Paid Search & Social Media Management",
      "Technical SEO & Answer Engine Optimization (AEO)",
      "Conversion Rate Optimization (CRO)",
      "Lead Magnet & Funnel Development",
      "Performance Analytics & Attribution Reporting",
      "Competitor Gap Analysis",
    ],
    benefits: [
      "Predictable, scalable customer acquisition",
      "Clear ROI and cost-per-lead visibility",
      "Growing organic search share over time",
      "Data-backed budget allocation decisions",
    ],
  },
  {
    id: "webdev",
    icon: Code,
    title: "Web & App Development",
    subtitle: "Technical Infrastructure",
    description:
      "High-performance websites and custom software built for speed, reliability, and scale.",
    details:
      "Our development team builds the technical foundation for your digital operations. We focus on speed, security, and maintainability — ensuring your platform handles high traffic and complex user interactions without breaking.",
    includes: [
      "Custom React & Next.js Development",
      "Full-Stack Application Architecture",
      "E-commerce Platform Implementation",
      "API Integration & Development",
      "Performance & Core Web Vitals Optimization",
      "Security Hardening & Ongoing Maintenance",
    ],
    benefits: [
      "Fast, accessible user interfaces",
      "Scalable backend infrastructure",
      "Secure data handling and compliance",
      "Seamless mobile and cross-device experience",
    ],
  },
  {
    id: "crm",
    icon: Settings,
    title: "CRM & Automation",
    subtitle: "Operational Efficiency",
    description:
      "Business process standardization using automated workflows and centralized customer data.",
    details:
      "We eliminate manual bottlenecks by implementing and customizing CRM systems. By automating recurring tasks and centralizing customer data, we help businesses improve sales velocity without adding headcount.",
    includes: [
      "CRM Implementation (HubSpot, Salesforce)",
      "Automated Sales & Marketing Workflows",
      "Data Migration & System Synchronization",
      "Customer Lifecycle Automation",
      "Reporting & Dashboard Configuration",
      "Custom Zapier / Make Integration Builds",
    ],
    benefits: [
      "Less time on manual data entry",
      "Faster sales cycles with less drop-off",
      "Standardized, repeatable business processes",
      "Unified view of every customer and deal",
    ],
  },
  {
    id: "ai",
    icon: MessageSquare,
    title: "AI Solutions",
    subtitle: "Communication Automation",
    description:
      "AI voice agents and chat interfaces that handle high-volume customer interactions automatically.",
    details:
      "We deploy AI-driven communication tools that handle inbound calls, qualify leads, and route conversations without human intervention. Our solutions reduce operational overhead while maintaining 24/7 availability.",
    includes: [
      "Zentraic AI Voice Agent Deployment",
      "Automated Inbound & Outbound Call Handling",
      "Intelligent Chatbot Integration",
      "Natural Language Data Extraction",
      "CRM-Integrated Conversation Logging",
      "Automated Lead Qualification & Routing",
    ],
    benefits: [
      "24/7 availability without staffing costs",
      "Lower cost-per-interaction at scale",
      "Consistent, structured lead qualification",
      "Detailed interaction data for every conversation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted" aria-labelledby="services-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Four connected disciplines — marketing, development, automation,
              and AI — delivered as an integrated system, not isolated projects.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <Section key={service.id} id={service.id} dark={i % 2 === 0}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                  <service.icon
                    className="h-7 w-7 text-foreground"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.details}
              </p>

              <Link href="/contact#schedule">
                <Button variant="primary" size="lg">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            {/* Detail Cards */}
            <div className="space-y-5">
              <Card hover={false}>
                <CardHeader>
                  <CardTitle>What&apos;s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul
                    className="space-y-3"
                    aria-label={`${service.title} inclusions`}
                  >
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <Check
                          className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card hover={false}>
                <CardHeader>
                  <CardTitle>Key Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul
                    className="space-y-3"
                    aria-label={`${service.title} outcomes`}
                  >
                    {service.benefits.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <Check
                          className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Book a free 30-minute call and we&apos;ll review your current situation and
            tell you exactly which services would move the needle for your business.
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
