import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search, Share2, FileText, Mail, Code, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO + AEO",
    description:
      "Dominate search results with our proven SEO and Answer Engine Optimization strategies. Get found by customers actively searching for your solutions.",
    href: "/services#seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a powerful social presence that engages your audience and drives conversions. Strategic content and community management that delivers results.",
    href: "/services#smm",
  },
  {
    icon: FileText,
    title: "Content Marketing & Blogging",
    description:
      "Compelling content that educates, engages, and converts. From blog posts to whitepapers, we create content that positions you as an industry leader.",
    href: "/services#content",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with strategic email campaigns. Automated sequences and personalized messaging that drives action.",
    href: "/services#email",
  },
  {
    icon: Code,
    title: "Web Design & Development",
    description:
      "Modern, high-converting websites built for performance. From landing pages to full-scale web applications, we bring your vision to life.",
    href: "/services#webdev",
  },
];

export function ServicesOverview() {
  return (
    <Section dark id="services">
      <SectionHeader
        title="Our Services"
        subtitle="Comprehensive digital marketing and development solutions tailored to your growth goals."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={service.href} className="group inline-flex items-center text-foreground font-medium hover:opacity-80 transition-opacity">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/services">
          <Button variant="primary" size="lg">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
