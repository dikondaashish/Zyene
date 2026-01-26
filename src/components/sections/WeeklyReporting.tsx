import { Section } from "@/components/ui/Section";
import { FileBarChart, TrendingUp, Eye, MessageSquare } from "lucide-react";

const reportFeatures = [
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Track KPIs, conversions, and growth trends week over week.",
  },
  {
    icon: Eye,
    title: "Traffic Insights",
    description: "Detailed breakdown of traffic sources and user behavior.",
  },
  {
    icon: MessageSquare,
    title: "Actionable Recommendations",
    description: "Clear next steps and optimization opportunities.",
  },
];

export function WeeklyReporting() {
  return (
    <Section id="reporting">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border mb-6">
            <FileBarChart className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium text-muted-foreground">
              Transparent Reporting
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Weekly Performance Reports
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            We believe in complete transparency. Every week, you&apos;ll receive a comprehensive 
            performance report detailing progress, insights, and measurable results. No 
            surprises—just data-driven updates on your growth journey.
          </p>

          <div className="space-y-6">
            {reportFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-foreground">Weekly Report</h4>
              <span className="text-sm text-muted-foreground">Week 12</span>
            </div>

            {/* Mock chart bars */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Organic Traffic</span>
                  <span className="text-foreground font-medium">+24%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-zinc-500 to-zinc-300 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Conversions</span>
                  <span className="text-foreground font-medium">+18%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-zinc-500 to-zinc-300 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Engagement Rate</span>
                  <span className="text-foreground font-medium">+32%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-zinc-500 to-zinc-300 rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Next review: Monday, 10:00 AM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
