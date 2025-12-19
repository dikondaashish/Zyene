"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/sections/TrustedBrands";
import APISection from "@/components/sections/APISection";
import Features from "@/components/sections/Features";
import PrebuiltTools from "@/components/sections/PrebuiltTools";
import AdditionalFeatures from "@/components/sections/AdditionalFeatures";
import OneSubscription from "@/components/sections/OneSubscription";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Articles from "@/components/sections/Articles";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  useEffect(() => {
    const RESPONSIVE_WIDTH = 1024;
    let typedInstance: any = null;
    
    const initTyped = () => {
      if (typeof window !== 'undefined' && (window as any).Typed) {
        const element = document.querySelector('#prompts-sample');
        if (element) {
          typedInstance = new (window as any).Typed('#prompts-sample', {
            strings: [
              "How to solve a rubik's cube? Step by step guide",
              "What's Pixa playground?",
              "How to build an AI SaaS App?",
              "How to integrate Pixa API?"
            ],
            typeSpeed: 80,
            smartBackspace: true,
            loop: true,
            backDelay: 2000,
          });
        }
      }
    };

    const initGSAP = () => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        
        if (ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        gsap.set(".reveal-up", {
          opacity: 0,
          y: "100%",
        });

        const dashboard = document.querySelector("#dashboard");
        if (dashboard && ScrollTrigger) {
          gsap.to("#dashboard", {
            scale: 1,
            translateY: 0,
            rotateX: "0deg",
            scrollTrigger: {
              trigger: "#hero-section",
              start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
              end: "bottom bottom",
              scrub: 1,
            }
          });
        }

        const sections = gsap.utils.toArray("section");
        sections.forEach((sec: any) => {
          const revealElements = sec.querySelectorAll(".reveal-up");
          if (revealElements.length > 0 && ScrollTrigger) {
            gsap.to(revealElements, {
              opacity: 1,
              duration: 0.8,
              y: "0%",
              stagger: 0.2,
              scrollTrigger: {
                trigger: sec,
                start: "10% 80%",
                end: "20% 90%",
              }
            });
          }
        });
      }
    };

    const timer = setTimeout(() => {
      initTyped();
      initGSAP();
    }, 500);
    
    return () => {
      clearTimeout(timer);
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <Hero />
      <TrustedBrands />
      <APISection />
      <Features />
      <PrebuiltTools />
      <AdditionalFeatures />
      <OneSubscription />
      <Testimonials />
      <Pricing />
      <Articles />
      <FAQ />
      <CTA />
      <Newsletter />
    </>
  );
}
