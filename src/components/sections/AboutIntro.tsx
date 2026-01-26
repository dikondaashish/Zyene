import { Section, SectionHeader } from "@/components/ui/Section";
import { Target, LineChart, Cpu } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategy-Driven",
    description:
      "We don't just execute tactics—we develop comprehensive strategies aligned with your business goals.",
  },
  {
    icon: LineChart,
    title: "Measurable Outcomes",
    description:
      "Every campaign is tracked, analyzed, and optimized to deliver real, quantifiable results.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description:
      "We combine human expertise with advanced AI technology to maximize efficiency and impact.",
  },
];

export function AboutIntro() {
  return (
    <Section id="about-intro">
      <SectionHeader
        title="About Zyene"
        subtitle="We're not just another marketing agency. We're your strategic partner in growth."
      />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Zyene is a strategy-first marketing partner that focuses on planning, 
          execution, and measurable outcomes. We combine deep human insight with 
          advanced AI technology to help businesses of all sizes achieve sustainable growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-2xl bg-card border border-border hover:border-muted-foreground transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-muted flex items-center justify-center">
              <feature.icon className="h-7 w-7 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
