import { Section, SectionHeader } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "AI-Driven Approach",
    description: "Leveraging cutting-edge AI technology to maximize efficiency and drive smarter business decisions.",
  },
  {
    title: "End-to-End Solutions",
    description: "Complete ecosystem coverage including Marketing, Tech, and Automation under one roof.",
  },
  {
    title: "Scalable Systems",
    description: "We don't just deliver one-off services—we build systems designed for long-term scalability.",
  },
  {
    title: "Proven Growth Strategies",
    description: "Data-backed methodologies that have consistently delivered measurable ROI for our clients.",
  },
  {
    title: "Product + Service Expertise",
    description: "The unique combination of high-level service delivery and proprietary SaaS product innovation.",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us">
      <SectionHeader
        title="Why Zyene"
        subtitle="Our approach to building scalable business infrastructure."
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
