"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Mic, Shield, Zap } from "lucide-react";
import Link from "next/link";

export function VoiceHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background"
      aria-labelledby="voice-hero-heading"
    >
      {/* Subtle background — no neon blobs */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground font-medium text-sm">
              <Mic className="h-4 w-4 mr-2 text-brand" aria-hidden="true" />
              AI Voice Agent Platform
            </div>

            <h1
              id="voice-hero-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]"
            >
              Voice automation
              <br />
              <span className="text-brand">that answers at scale.</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Zentraic AI handles inbound calls, qualifies leads, and updates your
              CRM automatically — so your team focuses on deals, not phone queues.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="h-14 px-8 text-lg">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg">
                  See It in Action
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-success" aria-hidden="true" />
                Enterprise-grade security
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand" aria-hidden="true" />
                99.9% uptime SLA
              </div>
            </div>
          </div>

          {/* Visual — transcription mockup (no missing image dependency) */}
          <div
            className="relative animate-fade-in animate-delay-300"
            aria-hidden="true"
          >
            <div className="relative rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
              {/* Mock call interface header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium text-foreground">
                    Live Call — Zentraic AI
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  02:34
                </span>
              </div>

              {/* Transcription feed */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5 w-14 flex-shrink-0">
                    Caller
                  </span>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground max-w-xs">
                    Hi, I&apos;d like to schedule a viewing for the Maple Avenue property. Is tomorrow at 2 PM available?
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-primary-foreground max-w-xs text-right">
                    Yes, 2 PM tomorrow works. Can I get your name and email so I can send a confirmation?
                  </div>
                  <span className="text-xs font-semibold text-brand uppercase tracking-wider mt-0.5 w-14 flex-shrink-0 text-right">
                    AI
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5 w-14 flex-shrink-0">
                    Caller
                  </span>
                  <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground max-w-xs">
                    Sure — it&apos;s David Chen, david@example.com.
                  </div>
                </div>

                {/* CRM update indicator */}
                <div className="mt-4 p-3 rounded-lg bg-success/10 border border-success/20 text-xs text-success font-medium flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5" />
                  CRM updated · Appointment booked · Confirmation email queued
                </div>
              </div>
            </div>

            {/* Decorative stat card */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-5 py-4 shadow-lg">
              <p className="text-2xl font-bold text-foreground">85%</p>
              <p className="text-xs text-muted-foreground">Leads qualified automatically</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
