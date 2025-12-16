"use client";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "100 AI generations/month",
      "Access to basic models",
      "Community support",
      "1 project",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professionals and creators",
    features: [
      "Unlimited AI generations",
      "Access to all models",
      "Priority support",
      "10 projects",
      "API access",
      "Custom styles",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large teams and organizations",
    features: [
      "Everything in Pro",
      "Unlimited projects",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--bg-color)] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                  : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {plan.period}
                </span>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {plan.description}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <i className="bi bi-check-circle-fill text-green-500"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`btn w-full ${
                  plan.popular ? "!bg-purple-600" : ""
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
