import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BarChart3, Laptop, Settings2, MessageSquare, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Customer acquisition through paid media, search optimization, and conversion-focused funnels.",
    href: "/services#digital-marketing",
  },
  {
    icon: Laptop,
    title: "Web & App Development",
    description:
      "Technical implementation of high-performance websites and custom software applications.",
    href: "/services#webdev",
  },
  {
    icon: Settings2,
    title: "CRM & Automation",
    description:
      "Standardizing business processes with automated workflows and centralized data management.",
    href: "/services#crm",
  },
  {
    icon: MessageSquare,
    title: "AI Solutions",
    description:
      "Automated voice agents and chat interfaces designed to handle recurring customer tasks.",
    href: "/voice",
  },
];

export function ServicesOverview() {
  return (
    <Section dark id="services">
      <SectionHeader
        title="Services"
        subtitle="Technical and marketing infrastructure built for business scaling."
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
