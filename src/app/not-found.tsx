import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Search, Mail } from "lucide-react";

const suggestions = [
  { href: "/services", label: "See our services" },
  { href: "/pricing", label: "View pricing" },
  { href: "/about", label: "Learn about Zyene" },
  { href: "/contact", label: "Get in touch" },
];

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Status */}
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-6">
            404 · Page Not Found
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            We can&apos;t find that page.
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            The link might be broken, the page may have moved, or it never
            existed. Here are some places to go instead:
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-10">
            {suggestions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-border bg-card hover:border-brand/50 hover:bg-muted text-sm font-medium text-foreground transition-all duration-200 group"
              >
                {s.label}
                <ArrowRight
                  className="h-3.5 w-3.5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="primary" size="md">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Button>
            </Link>
            <Link href="mailto:support@zyene.com">
              <Button variant="outline" size="md">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Email Support
              </Button>
            </Link>
          </div>

          {/* Search hint */}
          <p className="mt-10 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Search className="h-4 w-4" aria-hidden="true" />
            Looking for something specific? Email{" "}
            <a
              href="mailto:support@zyene.com"
              className="text-foreground underline underline-offset-2 hover:text-brand transition-colors"
            >
              support@zyene.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
