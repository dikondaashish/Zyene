"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between gap-2 bg-[var(--header-bg)] px-6 backdrop-blur-lg lg:px-12">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo/logo.png" alt="Zyene Logo" width={35} height={35} />
        <span className="text-xl font-medium">Zyene™</span>
      </Link>

      <div
        className={`collapsible-header ${
          isCollapsed ? "lg:flex" : "flex opacity-100 !h-auto !min-h-[50vh]"
        }`}
      >
        <nav className="flex items-center gap-1 lg:flex-row flex-col">
          <Link href="#features" className="header-links">
            Services
          </Link>
          <Link href="#playground" className="header-links">
            Playground
          </Link>
          <Link href="#testimonials" className="header-links">
            Testimonials
          </Link>
          <Link href="#pricing" className="header-links">
            Contact Us
          </Link>
          <Link href="#faq" className="header-links">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button className="btn">Sign in</button>
          <button className="btn !bg-purple-600">Get Started</button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <i className={`bi ${isDark ? "bi-sun" : "bi-moon"} text-xl`}></i>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          <button className="btn">Sign in</button>
          <button className="btn !bg-purple-600">Get Started</button>
        </div>

        <button
          onClick={toggleCollapse}
          className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
        >
          <i className={`bi ${isCollapsed ? "bi-list" : "bi-x-lg"} text-2xl`}></i>
        </button>
      </div>
    </header>
  );
}
