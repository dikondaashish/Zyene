"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Typed: any;
  }
}

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Typed && typedRef.current) {
      new window.Typed(typedRef.current, {
        strings: [
          "Create stunning AI images",
          "Generate creative content",
          "Build amazing projects",
          "Transform your ideas",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
      });
    }
  }, []);

  return (
    <section className="hero-section relative min-h-screen pt-[60px]">
      <div className="hero-bg-gradient absolute inset-0 z-0"></div>
      <div className="purple-bg-grad absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full"></div>

      <div className="relative z-10 flex min-h-[calc(100vh-60px)] flex-col items-center justify-center px-4 text-center">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-gray-300 bg-white/10 px-4 py-2 backdrop-blur-sm dark:border-gray-700">
          <span className="text-sm">✨ Introducing Pixa AI</span>
        </div>

        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          All your AI models
          <br />
          <span className="gradient-text">in one place</span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          <span ref={typedRef}></span>
        </p>

        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row">
          <button className="btn !bg-purple-600 !px-8 !py-3 text-white">
            Get Started Free
          </button>
          <button
            className="btn flex items-center gap-2 border border-gray-300 !bg-transparent dark:border-gray-700"
            id="watch-demo-btn"
          >
            <i className="bi bi-play-circle"></i>
            Watch Demo
          </button>
        </div>

        <div className="carousel-container mb-8">
          <div className="carousel">
            <Image
              src="/images/brand-logos/openai.svg"
              alt="OpenAI"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/google.svg"
              alt="Google"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/microsoft.svg"
              alt="Microsoft"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/meta.svg"
              alt="Meta"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/claude.svg"
              alt="Claude"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/openai.svg"
              alt="OpenAI"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/google.svg"
              alt="Google"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/microsoft.svg"
              alt="Microsoft"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/meta.svg"
              alt="Meta"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
            <Image
              src="/images/brand-logos/claude.svg"
              alt="Claude"
              width={100}
              height={40}
              className="carousel-img opacity-50 grayscale"
            />
          </div>
        </div>

        <div
          id="dashboard"
          className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900"
        >
          <Image
            src="/images/home/unified.jpg"
            alt="Dashboard Preview"
            width={1200}
            height={800}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
