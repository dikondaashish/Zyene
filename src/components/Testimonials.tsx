"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "TechCorp",
    image: "/images/testimonials/1.jpg",
    content: "Pixa has completely transformed how I create visual content. The AI models are incredibly powerful and easy to use.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "StartupXYZ",
    image: "/images/testimonials/2.jpg",
    content: "The API integration was seamless. I had our product generating AI content within hours of signing up.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "/images/testimonials/3.jpg",
    content: "We've reduced our content creation time by 80% using Pixa. It's a game-changer for our team.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Freelance Artist",
    company: "Independent",
    image: "/images/testimonials/4.jpg",
    content: "As a creative professional, I was skeptical about AI. But Pixa has become an essential part of my workflow.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CEO",
    company: "InnovateTech",
    image: "/images/testimonials/5.jpg",
    content: "The ROI we've seen from Pixa has been incredible. It's helped us scale our content operations significantly.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Content Creator",
    company: "MediaHub",
    image: "/images/testimonials/6.jpg",
    content: "I love how Pixa brings all AI models together. No more switching between different platforms.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 px-4 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Loved by creators worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            See what our users have to say about their experience with Pixa
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-yellow-500"></i>
                ))}
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="flex h-full w-full items-center justify-center text-xl font-bold text-gray-500">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
