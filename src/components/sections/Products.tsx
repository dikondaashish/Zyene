import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Cpu, Mic, BarChart3, Zap } from "lucide-react";

const products = [
  {
    name: "TrackMyGPT",
    tagline: "AI Performance Analytics",
    description:
      "A powerful platform designed to track and optimize AI interactions and performance. Monitor how your AI deployments perform, identify optimization opportunities, and maximize your AI investment.",
    features: [
      "Real-time AI interaction tracking",
      "Performance analytics dashboard",
      "Optimization recommendations",
      "Integration with popular AI platforms",
    ],
    icon: BarChart3,
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    name: "Zyene AI Voice",
    tagline: "Build Your AI Voice Assistant",
    description:
      "A customizable voice AI agent platform enabling businesses to build AI voice assistants similar to GPT or Gemini. Integrate with your own APIs and create conversational experiences tailored to your brand.",
    features: [
      "Custom voice AI agents",
      "API integration support",
      "Natural language processing",
      "Brand-specific personality tuning",
    ],
    icon: Mic,
    gradient: "from-zinc-600 to-zinc-800",
  },
];

export function Products() {
  return (
    <Section id="products">
      <SectionHeader
        title="Our Products"
        subtitle="Innovative AI-powered tools built to give your business a competitive edge."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="relative overflow-hidden" hover={false}>
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${product.gradient}`} />
            <CardHeader className="pt-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                  <product.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
