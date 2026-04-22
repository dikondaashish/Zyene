import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const callHighlights = [
  "Review your current marketing and technical setup",
  "Identify the highest-leverage growth levers for your business",
  "Walk away with a concrete next step — no obligation",
];

export function ScheduleMeeting() {
  return (
    <Section dark id="schedule">
      <SectionHeader
        title="Book a Free Strategy Call"
        subtitle="30 minutes. No sales pitch. Just an honest conversation about what's holding your growth back."
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          {/* Card header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-brand" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Free Consultation</p>
                <p className="text-sm text-muted-foreground">with a Zyene growth strategist</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>30 min</span>
            </div>
          </div>

          {/* Card body */}
          <div className="px-8 py-8">
            <p className="text-muted-foreground mb-6">
              On the call, we&apos;ll:
            </p>
            <ul className="space-y-4 mb-8" aria-label="What to expect on the call">
              {callHighlights.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2
                    className="h-5 w-5 text-success flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/zyene-support/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Schedule a 30-minute call on Calendly (opens in new tab)"
            >
              <Button variant="primary" size="lg" className="w-full">
                Pick a Time That Works For You
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </a>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Prefer email?{" "}
              <Link
                href="mailto:support@zyene.com"
                className="text-foreground underline underline-offset-2 hover:text-brand transition-colors"
              >
                support@zyene.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
