import { Section, SectionHeader } from "@/components/ui/Section";
import { Briefcase, Target, Rocket, FileBarChart, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Briefcase,
    title: "Business Understanding",
    description:
      "We start by deeply understanding your business, goals, target audience, and competitive landscape.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "We develop a comprehensive strategy tailored to your unique needs and growth objectives.",
  },
  {
    icon: Rocket,
    title: "Execution & Optimization",
    description:
      "Our team executes the strategy while continuously monitoring and optimizing for best results.",
  },
  {
    icon: FileBarChart,
    title: "Weekly Reporting",
    description:
      "Receive detailed weekly reports with actionable insights and transparent performance metrics.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "We iterate and improve based on data, ensuring sustained growth over time.",
  },
];

export function HowWeWork() {
  return (
    <Section dark id="process">
      <SectionHeader
        title="How We Work"
        subtitle="A proven process that delivers consistent, measurable results."
      />

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step number */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-background border-2 border-border flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-foreground" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
