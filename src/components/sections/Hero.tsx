import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border mb-8 animate-fade-in">
            <span className="text-sm font-medium text-muted-foreground">
              Digital Marketing & AI Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            We Turn Strategy Into{" "}
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Measurable Growth
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Zyene helps ambitious brands grow using a powerful combination of 
            strategic digital marketing and cutting-edge AI technology. Planning. 
            Execution. Measurable Results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link href="/contact#schedule">
              <Button variant="primary" size="lg">
                Schedule a Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border animate-fade-in-up animate-delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">95%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Retention</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">3x</p>
              <p className="text-sm text-muted-foreground mt-1">Average ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
