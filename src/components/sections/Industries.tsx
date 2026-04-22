import { Section, SectionHeader } from "@/components/ui/Section";
import { Building2, Rocket, Store, Users, ShoppingCart } from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "Startups", icon: Rocket },
  { name: "Local Businesses", icon: Store },
  { name: "Agencies", icon: Users },
  { name: "E-commerce", icon: ShoppingCart },
];

export function Industries() {
  return (
    <Section dark id="industries">
      <SectionHeader
        title="Industries We Serve"
        subtitle="Empowering diverse sectors with AI-driven growth systems."
      />

      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {industries.map((industry, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
              <industry.icon className="h-10 w-10 md:h-12 md:w-12 text-foreground group-hover:text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground text-center">
              {industry.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
