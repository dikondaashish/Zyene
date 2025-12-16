"use client";

import Image from "next/image";

const features = [
  {
    icon: "bi-lightning-charge",
    title: "Lightning Fast",
    description: "Generate images and content in seconds with our optimized AI models.",
  },
  {
    icon: "bi-shield-check",
    title: "Secure & Private",
    description: "Your data is encrypted and never shared. Full privacy guaranteed.",
  },
  {
    icon: "bi-palette",
    title: "Creative Freedom",
    description: "Unlimited styles, formats, and customization options for your projects.",
  },
  {
    icon: "bi-graph-up",
    title: "Scalable",
    description: "From personal projects to enterprise solutions, scale as you grow.",
  },
  {
    icon: "bi-code-slash",
    title: "API Access",
    description: "Integrate our AI capabilities directly into your applications.",
  },
  {
    icon: "bi-headset",
    title: "24/7 Support",
    description: "Our team is always available to help you succeed.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[var(--bg-color)] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Everything you need to create
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Powerful features designed to help you create stunning content with AI
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animated-border rounded-2xl border border-gray-200 bg-white p-8 transition-transform hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                <i className={`bi ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              AI Models
            </span>
            <h3 className="mb-4 text-3xl font-bold">
              Access the best AI models in the world
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              From GPT-4 to Stable Diffusion, DALL-E to Midjourney - access all the leading AI models through a single, unified interface.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                <span>OpenAI GPT-4 & GPT-3.5</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                <span>Stable Diffusion XL</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                <span>DALL-E 3</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-check-circle-fill text-green-500"></i>
                <span>Claude & Gemini</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/images/home/ai-models.png"
              alt="AI Models"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
