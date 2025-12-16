"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What AI models are available on Pixa?",
    answer: "Pixa provides access to leading AI models including GPT-4, GPT-3.5, Claude, Gemini, DALL-E 3, Stable Diffusion XL, and many more. We continuously add new models as they become available.",
  },
  {
    question: "How does the pricing work?",
    answer: "We offer three plans: Free (100 generations/month), Pro ($29/month for unlimited generations), and Enterprise (custom pricing). All plans include access to our core features, with Pro and Enterprise offering additional capabilities.",
  },
  {
    question: "Can I use Pixa for commercial projects?",
    answer: "Yes! All content generated through Pixa can be used for commercial purposes. You retain full rights to anything you create using our platform.",
  },
  {
    question: "Is there an API available?",
    answer: "Yes, API access is available on Pro and Enterprise plans. Our API allows you to integrate Pixa's AI capabilities directly into your applications with simple REST endpoints.",
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We never share your data with third parties, and you can delete your data at any time.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 px-4 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-cyan-100 px-4 py-2 text-sm text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Everything you need to know about Pixa
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <button
                className="faq-accordion flex w-full items-center justify-between text-left text-lg font-medium"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <i
                  className={`bi ${
                    openIndex === index ? "bi-dash" : "bi-plus"
                  } text-2xl transition-transform`}
                ></i>
              </button>
              <div
                className="content"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                  padding: openIndex === index ? "0 18px 15px" : "0 18px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
