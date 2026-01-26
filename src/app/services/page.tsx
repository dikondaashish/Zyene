import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Search, Share2, FileText, Mail, Code, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zyene's comprehensive digital marketing and development services including SEO, social media marketing, content marketing, email marketing, and web development.",
};

const services = [
  {
    id: "seo",
    icon: Search,
    title: "SEO + AEO",
    subtitle: "Search Engine & Answer Engine Optimization",
    description:
      "Dominate search results and AI-powered answer engines with our comprehensive optimization strategies.",
    details:
      "In the age of AI, traditional SEO is not enough. We combine proven search engine optimization techniques with Answer Engine Optimization (AEO) to ensure your brand appears in both traditional search results and AI-generated answers.",
    includes: [
      "Comprehensive keyword research and strategy",
      "Technical SEO audit and optimization",
      "On-page and off-page SEO",
      "Answer Engine Optimization for AI platforms",
      "Local SEO optimization",
      "Monthly performance reporting",
    ],
    benefits: [
      "Increased organic visibility",
      "Higher quality traffic",
      "Improved user experience",
      "Long-term sustainable growth",
    ],
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    subtitle: "Strategic Social Presence",
    description:
      "Build a powerful social presence that engages your audience and drives measurable conversions.",
    details:
      "Social media is where your audience spends their time. We create strategic, data-driven social media campaigns that build brand awareness, foster community engagement, and convert followers into customers.",
    includes: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management",
      "Paid social advertising",
      "Influencer partnership management",
      "Analytics and reporting",
    ],
    benefits: [
      "Increased brand awareness",
      "Higher engagement rates",
      "Growing follower base",
      "Improved customer loyalty",
    ],
  },
  {
    id: "content",
    icon: FileText,
    title: "Content Marketing & Blogging",
    subtitle: "Content That Converts",
    description:
      "Compelling content that educates, engages, and positions you as an industry thought leader.",
    details:
      "Content is the foundation of digital marketing. We create high-quality, strategic content that attracts your target audience, builds trust, and guides them through the customer journey from awareness to conversion.",
    includes: [
      "Content strategy development",
      "Blog post writing and management",
      "Long-form content (guides, whitepapers)",
      "Content calendar planning",
      "SEO-optimized content",
      "Content performance analytics",
    ],
    benefits: [
      "Established thought leadership",
      "Improved SEO rankings",
      "Higher engagement",
      "Lead generation support",
    ],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Marketing",
    subtitle: "Nurture & Convert",
    description:
      "Strategic email campaigns that nurture leads and retain customers with personalized messaging.",
    details:
      "Email remains one of the highest ROI marketing channels. We design and execute email marketing strategies that nurture leads, retain existing customers, and drive consistent revenue growth.",
    includes: [
      "Email strategy and automation setup",
      "Newsletter design and management",
      "Drip campaign creation",
      "Segmentation and personalization",
      "A/B testing optimization",
      "Deliverability management",
    ],
    benefits: [
      "Higher conversion rates",
      "Improved customer retention",
      "Automated lead nurturing",
      "Direct revenue generation",
    ],
  },
  {
    id: "webdev",
    icon: Code,
    title: "Web Design & Development",
    subtitle: "Modern, High-Converting Websites",
    description:
      "Beautiful, performant websites built to convert visitors into customers.",
    details:
      "Your website is often the first impression customers have of your brand. We design and develop modern, responsive websites that look stunning, load fast, and are optimized for conversion.",
    includes: [
      "Custom website design",
      "Responsive development",
      "CMS integration",
      "Performance optimization",
      "SEO-friendly architecture",
      "Ongoing maintenance and support",
    ],
    benefits: [
      "Professional brand image",
      "Improved user experience",
      "Higher conversion rates",
      "Mobile-friendly design",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive digital marketing and development solutions designed 
              to drive measurable growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <Section key={service.id} id={service.id} dark={index % 2 === 0}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {service.details}
              </p>

              <Link href="/contact#schedule">
                <Button variant="primary" size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Details cards */}
            <div className="space-y-6">
              <Card hover={false}>
                <CardHeader>
                  <CardTitle>What&apos;s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card hover={false}>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss which services are right for your business and create 
            a customized growth strategy.
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
