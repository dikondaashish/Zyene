import { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zyene. Send a message, book a free 30-minute consultation, or reach us directly at support@zyene.com.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-muted" aria-labelledby="contact-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="contact-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Let&apos;s Talk
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Send a message, book a call, or reach us at{" "}
              <a
                href="mailto:support@zyene.com"
                className="text-foreground underline underline-offset-2 hover:text-brand transition-colors"
              >
                support@zyene.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <ContactPageClient />
    </>
  );
}
