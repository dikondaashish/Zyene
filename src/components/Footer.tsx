"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src="/logo/logo.png" alt="Pixa Logo" width={40} height={40} />
              <span className="text-2xl font-bold">Pixa</span>
            </Link>
            <p className="mb-4 max-w-sm text-gray-600 dark:text-gray-400">
              All your AI models in one place. Create stunning content with the power of artificial intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="footer-link text-2xl">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="footer-link text-2xl">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="footer-link text-2xl">
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="footer-link text-2xl">
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="footer-link">Features</Link></li>
              <li><Link href="#pricing" className="footer-link">Pricing</Link></li>
              <li><Link href="#" className="footer-link">API</Link></li>
              <li><Link href="#" className="footer-link">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="footer-link">About</Link></li>
              <li><Link href="#" className="footer-link">Blog</Link></li>
              <li><Link href="#" className="footer-link">Careers</Link></li>
              <li><Link href="#" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="#" className="footer-link">Terms of Service</Link></li>
              <li><Link href="#" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <hr className="mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Pixa. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Made with <span className="text-red-500">♥</span> for creators everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
