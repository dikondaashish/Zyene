import { Headphones, Globe2, Zap, BarChart3, Database, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Conversational Logic",
    description:
      "Low-latency responses with the ability to handle interruptions and complex multi-turn dialogue flows.",
    icon: Headphones,
  },
  {
    title: "Global Connectivity",
    description:
      "International telephony support with local number provisioning across 50+ regions.",
    icon: Globe2,
  },
  {
    title: "High Concurrency",
    description:
      "Distributed architecture built to handle large volumes of simultaneous call sessions without degradation.",
    icon: Zap,
  },
  {
    title: "Structured Data Extraction",
    description:
      "Real-time transcription and extraction of structured JSON data from every conversation.",
    icon: BarChart3,
  },
  {
    title: "CRM Sync",
    description:
      "Automated logging of call outcomes and contact data to your CRM via secure API integrations.",
    icon: Database,
  },
  {
    title: "Lead Qualification",
    description:
      "Automated routing and scoring based on configurable parameters and detected conversation intent.",
    icon: MessageSquare,
  },
];

export function VoiceFeatures() {
  return (
    <section className="py-20 md:py-28 bg-muted" aria-labelledby="voice-features-heading">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Technical Specifications
          </p>
          <h2
            id="voice-features-heading"
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Built for Production Scale
          </h2>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
            Infrastructure designed for high-concurrency voice operations and
            deep data integration with your existing stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-brand/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <feature.icon
                  className="h-6 w-6 text-brand"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
