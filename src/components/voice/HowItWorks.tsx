"use client";

import { Mic, PhoneCall, Workflow, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Configure Your Logic",
    description:
      "Define conversation flows and qualification rules using our visual editor or plain-text prompts. No engineering required.",
    icon: Workflow,
  },
  {
    title: "Select a Voice Profile",
    description:
      "Choose from a library of natural-sounding voices or provide a custom voice sample for high-fidelity cloning.",
    icon: Mic,
  },
  {
    title: "Go Live",
    description:
      "Provision a phone number or connect your existing SIP trunk. From setup to live calls in a single session.",
    icon: PhoneCall,
  },
];

export function VoiceHowItWorks() {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden bg-background"
      aria-labelledby="voice-how-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                Implementation
              </p>
              <h2
                id="voice-how-heading"
                className="text-4xl font-bold text-foreground"
              >
                From setup to live calls in one session.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Zentraic AI is built to deploy fast. Most clients go live the same
                day they start configuration.
              </p>
            </div>

            <ol className="space-y-8" aria-label="Implementation steps">
              {steps.map((step, i) => (
                <li key={i} className="flex space-x-5 group">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-border bg-background flex items-center justify-center text-lg font-bold text-muted-foreground group-hover:border-brand group-hover:text-brand transition-colors duration-200"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Live Call Mock UI */}
          <div className="relative" aria-hidden="true">
            <div className="glass p-8 rounded-2xl border border-border shadow-xl space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
                    <PhoneCall className="h-4 w-4 text-foreground" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    Active Call · +1 (555) 000-0000
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-error/15 text-error text-xs font-semibold animate-pulse">
                  REC
                </div>
              </div>

              {/* Conversation */}
              <div className="space-y-4">
                <div className="flex flex-col items-start space-y-2">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Agent
                  </span>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-foreground max-w-[85%]">
                    &quot;I see you have an appointment on Tuesday. Would you like to
                    confirm or reschedule?&quot;
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Caller
                  </span>
                  <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-tr-sm text-sm text-foreground max-w-[85%]">
                    &quot;Can we move it to Wednesday at 4 PM instead?&quot;
                  </div>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <span className="text-[10px] font-semibold text-brand uppercase tracking-wider">
                    Agent · Responding
                  </span>
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-foreground max-w-[85%] flex items-center space-x-2">
                    <span className="flex space-x-1">
                      <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:-0.3s]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* CRM Confirmation */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center text-sm font-semibold text-success">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  CRM Updated · Appointment rescheduled to Wed 4 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
