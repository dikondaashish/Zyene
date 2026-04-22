import { Metadata } from "next";
import { VoiceHero } from "@/components/voice/Hero";
import { VoiceFeatures } from "@/components/voice/Features";
import { VoiceHowItWorks } from "@/components/voice/HowItWorks";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zentraic AI | AI Voice Agent for Business",
  description:
    "Zentraic AI handles inbound calls, qualifies leads, and syncs with your CRM automatically. Scale your phone operations without adding headcount.",
};

export default function VoicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <VoiceHero />
      <VoiceFeatures />
      <VoiceHowItWorks />

      {/* CTA Section */}
      <section className="py-20 md:py-28" aria-labelledby="voice-cta-heading">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-foreground px-12 py-16 md:px-24 md:py-20 text-center">
            {/* Subtle texture */}
            <div
              className="absolute inset-0 bg-grid-pattern opacity-[0.04]"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2
                id="voice-cta-heading"
                className="text-4xl md:text-5xl font-bold text-background leading-tight"
              >
                Stop missing calls.
                <br />
                Start closing leads.
              </h2>

              <p className="text-lg text-background/70 max-w-xl mx-auto">
                Zentraic AI picks up every call, qualifies the prospect, and hands
                off only the hot leads — so your team closes more with less effort.
              </p>

              <div className="pt-2">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 h-14 px-10 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95"
                  >
                    Book Your Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <div className="py-8 border-t border-border bg-muted/40">
        <div className="container text-center">
          <p className="text-xl font-bold text-foreground tracking-tight">
            Zentraic AI
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            A product of{" "}
            <Link href="/" className="text-foreground hover:text-brand transition-colors underline underline-offset-2">
              Zyene
            </Link>
            {" "}· Built for high-growth teams
          </p>
        </div>
      </div>
    </div>
  );
}
