import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] overflow-hidden bg-background"
      aria-labelledby="hero-heading"
      data-test="hero-gap-v3"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />

      {/* Fade overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"
        aria-hidden="true"
      />

      {/* Real padding — no invisible spacer divs */}
      <div className="container relative z-10 pb-20 md:pb-28">
        <div className="h-14 md:h-20" aria-hidden="true" />
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border mb-8 animate-fade-in">
            <span className="text-sm font-medium text-muted-foreground">
              Digital Marketing &amp; AI Automation Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up"
          >
            Growth systems for{" "}
            <span className="text-brand">businesses that want to scale.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            We build the marketing infrastructure, CRM automation, and AI voice tools
            your team needs — so you can grow without growing your overhead.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link href="/contact#schedule">
              <Button variant="primary" size="lg">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                See What We Build
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-14 pt-8 border-t border-border animate-fade-in-up animate-delay-400"
            aria-label="Key metrics"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">95%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Retention Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">3×</p>
              <p className="text-sm text-muted-foreground mt-1">Average ROI Delivered</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
