"use client";

import { useState, useEffect, useCallback } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    quote: "Our rating increased from 4.1 to 4.8 stars in 14 months. The automated response system handles 95% of our reviews, which has directly correlated with a 40% increase in table bookings.",
    author: "Michael T.",
    role: "General Manager",
    company: "Riverfront Dining",
    type: "Zyene Reviews Case",
  },
  {
    quote: "Zentraic AI manages our initial phone screening. It correctly qualifies 85% of inbound leads and updates our CRM automatically, reducing our manual call volume by half.",
    author: "Sarah J.",
    role: "Operations Lead",
    company: "TechCo Solutions",
    type: "Zentraic AI Case",
  },
  {
    quote: "We saw a 3.5x return on ad spend within the first quarter. Their technical SEO implementation increased organic search traffic by 62%, focusing on high-intent service keywords.",
    author: "David R.",
    role: "Director of Marketing",
    company: "Nova Retail",
    type: "Marketing Performance",
  },
  {
    quote: "The CRM automation system replaced three manual data entry processes. We now have a unified view of our customer lifecycle, saving our sales team approximately 15 hours per week.",
    author: "Elena M.",
    role: "Founder",
    company: "UrbanEdge Services",
    type: "Automation Implementation",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, []);

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, [next, isAutoPlaying]);

  return (
    <Section dark id="testimonials">
      <SectionHeader
        title="Client Feedback"
        subtitle="Verified performance data and feedback from our active business partners."
      />

      <div className="max-w-4xl mx-auto px-4">
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <Card className="min-h-96 flex flex-col items-center justify-center p-8 md:p-12 text-center transition-all duration-500">
            <Quote className="h-10 w-10 text-primary/40 mb-8" />
            
            <div className="space-y-8 max-w-2xl mx-auto">
              {/* Review Type Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground mb-2">
                {testimonials[currentIndex].type}
              </div>

              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              
              <div className="flex flex-col items-center animate-fade-in space-y-4">
                {/* Profile Placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center shadow-inner">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>

                <div>
                  <p className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].company && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-primary">{testimonials[currentIndex].company}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={previous}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:scale-110 hover:border-primary transition-all duration-200 shadow-xl z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:scale-110 hover:border-primary transition-all duration-200 shadow-xl z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-primary w-8 h-2"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2 h-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
