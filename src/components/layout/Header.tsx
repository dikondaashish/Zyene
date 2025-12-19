"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";

export default function Header() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [resourcesNewsletterEmail, setResourcesNewsletterEmail] = useState("");
  const [resourcesNewsletterStatus, setResourcesNewsletterStatus] = useState<"success" | null>(null);

  useEffect(() => {
    const initDropdown = () => {
      const dropdownToggles = document.querySelectorAll('[id^="nav-dropdown-toggle-"]');
      const cleanups: (() => void)[] = [];

      dropdownToggles.forEach((toggle) => {
        const id = toggle.id.replace("nav-dropdown-toggle-", "");
        const navToggle = toggle as HTMLElement;
        const navDropdown = document.getElementById(`nav-dropdown-list-${id}`) as HTMLElement | null;
        if (!navDropdown) return;

        let closeTimeout: ReturnType<typeof setTimeout> | null = null;

        const clearCloseTimeout = () => {
          if (closeTimeout) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
          }
        };

        const openNavDropdown = () => {
          clearCloseTimeout();
          navDropdown.setAttribute("data-open", "true");
          navDropdown.classList.remove("tw-scale-0", "tw-opacity-0", "max-lg:tw-h-0", "max-lg:tw-w-0");
          navDropdown.classList.add("tw-scale-100", "tw-opacity-100", "lg:tw-h-[450px]");
        };

        const forceCloseNavDropdown = () => {
          clearCloseTimeout();
          navDropdown.setAttribute("data-open", "false");
          navDropdown.classList.add("tw-scale-0", "tw-opacity-0", "max-lg:tw-h-0", "max-lg:tw-w-0");
          navDropdown.classList.remove("tw-scale-100", "tw-opacity-100", "lg:tw-h-[450px]");
        };

        const closeNavDropdown = () => {
          clearCloseTimeout();
          closeTimeout = setTimeout(() => {
            forceCloseNavDropdown();
          }, 180);
        };

        navToggle.addEventListener("mouseenter", openNavDropdown);
        navToggle.addEventListener("mouseleave", closeNavDropdown);
        navDropdown.addEventListener("mouseenter", clearCloseTimeout);
        navDropdown.addEventListener("mouseleave", closeNavDropdown);

        const onToggleClick = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = navDropdown.getAttribute("data-open") === "true";
          if (isOpen) {
            forceCloseNavDropdown();
          } else {
            openNavDropdown();
          }
        };

        const onDocClick = (e: MouseEvent) => {
          const target = e.target as Node | null;
          if (!target) return;
          if (navToggle.contains(target) || navDropdown.contains(target)) return;
          forceCloseNavDropdown();
        };

        navToggle.addEventListener("click", onToggleClick);
        document.addEventListener("click", onDocClick);

        cleanups.push(() => {
          clearCloseTimeout();
          navToggle.removeEventListener("mouseenter", openNavDropdown);
          navToggle.removeEventListener("mouseleave", closeNavDropdown);
          navDropdown.removeEventListener("mouseenter", clearCloseTimeout);
          navDropdown.removeEventListener("mouseleave", closeNavDropdown);
          navToggle.removeEventListener("click", onToggleClick);
          document.removeEventListener("click", onDocClick);
        });
      });

      if (cleanups.length === 0) return undefined;
      return () => cleanups.forEach((fn) => fn());
    };

    const timer = setTimeout(() => {
      const cleanupDropdown = initDropdown();
      (window as any).__zyeneDropdownCleanup__ = cleanupDropdown;
    }, 500);

    return () => {
      clearTimeout(timer);
      const cleanupDropdown = (window as any).__zyeneDropdownCleanup__ as undefined | (() => void);
      if (cleanupDropdown) cleanupDropdown();
    };
  }, []);

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("tw-dark");
    } else {
      document.documentElement.classList.add("tw-dark");
    }
  };

  const handleResourcesNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!resourcesNewsletterEmail.trim()) return;
    setResourcesNewsletterStatus("success");
    setResourcesNewsletterEmail("");
    window.setTimeout(() => setResourcesNewsletterStatus(null), 3500);
  };

  const headerOpenClass = isHeaderOpen ? "max-lg:!tw-opacity-100 max-lg:!tw-h-[50vh] max-lg:!tw-min-h-[50vh]" : "";
  const dropdownOpenClass = isDropdownOpen ? "tw-scale-100 tw-opacity-100 lg:tw-h-[450px]" : "tw-scale-0 tw-opacity-0 max-lg:tw-h-0 max-lg:tw-w-0";
  const menuIcon = isHeaderOpen ? "bi-x-lg" : "bi-list";
  const themeIcon = isDarkMode ? "bi-sun" : "bi-moon";

  return (
    <header
      className="lg:tw-px-10 tw-max-w-[100vw] tw-max-w-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-h-[60px] tw-w-full 
              tw-text-gray-700 tw-bg-white dark:tw-text-gray-200 dark:tw-bg-[#17181b] tw-px-[2%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700
              lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]"
      style={{ height: 72, maxWidth: 1280 }}
    >
      <Link className="tw-flex tw-p-[12px] tw-place-items-center lg:tw-ml-5 lg:tw-mr-4" style={{ gap: 8 }} href="#">
        <div className="tw-h-[30px]" style={{ height: 36, width: 36 }}>
          <img
            src="/logo/logo.png"
            alt="logo"
            className="tw-object-contain tw-h-full tw-w-full dark:tw-invert"
          />
        </div>
        <div className="tw-flex tw-flex-col" style={{ lineHeight: "1" }}>
          <span className="tw-font-semibold" style={{ fontSize: 28, lineHeight: "28px" }}>Zyene™</span>
          <span className="tw-text-gray-500 dark:tw-text-gray-400" style={{ fontSize: 9, lineHeight: "10px", marginTop: 2, whiteSpace: "nowrap" }}>Growth Powered by Intelligence</span>
        </div>
      </Link>
      <div
        className={`collapsible-header animated-collapse max-lg:tw-shadow-md ${headerOpenClass}`}
        id="collapsed-header-items"
      >
        <nav
          className="tw-relative tw-flex tw-h-full max-lg:tw-h-max tw-w-max tw-gap-3 tw-text-base max-lg:tw-mt-[30px] max-lg:tw-flex-col 
                          max-lg:tw-gap-5 lg:tw-mx-auto tw-place-items-center"
        >
          <Link className="header-links" href="#" style={{ whiteSpace: "nowrap" }}> Home </Link>

          <div className="tw-relative tw-flex tw-flex-col tw-place-items-center">
            <div 
              id="nav-dropdown-toggle-0"
              className="max-lg:tw-max-w-fit tw-flex header-links tw-gap-1 tw-place-items-center tw-cursor-pointer"
              style={{ whiteSpace: "nowrap" }}
            >
              <span> Our Services </span>
              <i className="tw-text-sm bi bi-chevron-down"></i>
            </div>
            <nav 
              id="nav-dropdown-list-0"
              data-open="false"
              className={`${dropdownOpenClass} lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 
                      tw-w-[90%] tw-rounded-lg
                      tw-overflow-hidden
                       tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 
                       tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4`}
            >
              <div className="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-justify-around tw-grid-cols-2 tw-w-full">
                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Answer Engine Optimization (AEO)</div>
                    <p>Get cited in AI search</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-file-text"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Content Marketing</div>
                    <p>Research-backed content</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">SEO Services</div>
                    <p>Organic traffic growth</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-envelope-paper"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Email Marketing</div>
                    <p>Campaigns that Leads</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Strategic Research & Reports</div>
                    <p>Survey-driven reports</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-share"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Distribution & Amplification</div>
                    <p>Backlinks & amplification</p>
                  </div> 
                </Link>

                <div className="tw-flex tw-flex-col">
                  <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="#">
                    <div className="tw-font-semibold tw-text-3xl">
                      <i className="bi bi-palette"></i>
                    </div>
                    <div className="tw-flex tw-flex-col tw-gap-2">
                      <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Creative & Design</div>
                      <p>Visual content & assets</p>
                    </div> 
                  </Link>
                  <Link href="/services" className="btn !tw-rounded-full !tw-px-4 !tw-py-2 tw-text-sm" style={{ marginLeft: 56, marginTop: 6, display: "inline-flex", width: "fit-content" }}>
                    View All Services →
                  </Link>
                </div>

                <div className="tw-col-span-2 tw-mt-4 tw-flex tw-items-center tw-justify-between tw-gap-6 tw-rounded-lg tw-bg-gray-50 dark:tw-bg-[#0f1012] tw-border tw-border-gray-200 dark:tw-border-gray-700 tw-px-6 tw-py-4 max-lg:tw-flex-col max-lg:tw-items-start">
                  <div className="tw-flex tw-flex-col tw-gap-1 tw-flex-1">
                    <h4 className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Not sure where to start?</h4>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-3 tw-flex-shrink-0 tw-items-end max-lg:tw-items-start max-lg:tw-w-full">
                    <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300 max-lg:tw-text-left">Let our experts guide you to the right solution</p>
                    <div className="tw-flex tw-gap-3 max-lg:tw-w-full max-lg:tw-flex-col">
                      <Link href="#" className="btn !tw-rounded-full !tw-px-5 !tw-py-2 tw-text-sm !tw-text-black !tw-bg-transparent !tw-border-[1px] tw-border-black dark:tw-border-white dark:!tw-text-white max-lg:!tw-w-full tw-text-center">Book Free Strategy Call</Link>
                      <Link href="#" className="btn !tw-rounded-full !tw-px-5 !tw-py-2 tw-text-sm max-lg:!tw-w-full tw-text-center">Get Custom Proposal</Link>
                    </div>
                  </div>
                </div>
              </div>           
            </nav>
          </div>
          
          <div className="tw-relative tw-flex tw-flex-col tw-place-items-center">
            <div 
              id="nav-dropdown-toggle-2"
              className="max-lg:tw-max-w-fit tw-flex header-links tw-gap-1 tw-place-items-center tw-cursor-pointer"
              style={{ whiteSpace: "nowrap" }}
            >
              <span> About Us </span>
              <i className="tw-text-sm bi bi-chevron-down"></i>
            </div>
            <nav 
              id="nav-dropdown-list-2"
              data-open="false"
              className={`${dropdownOpenClass} lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 
                      tw-w-[90%] tw-rounded-lg
                      tw-overflow-hidden
                       tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 
                       tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4`}
              style={{ maxWidth: 760 }}
            >
              <div className="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-grid-cols-2 tw-w-full">
                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/about#Our-story">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-compass"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Our Story</div>
                    <p>Why Zyene exists</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/about#mission">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Mission &amp; Values</div>
                    <p>What we stand for</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/about#team">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Team</div>
                    <p>Meet the people behind Zyene</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/careers">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Careers</div>
                    <p>Join the team</p>
                  </div> 
                </Link>
              </div>
            </nav>
          </div>

          <Link className="header-links" href="#" style={{ whiteSpace: "nowrap" }}> Our Products </Link>

          <div className="tw-relative tw-flex tw-flex-col tw-place-items-center">
            <div 
              id="nav-dropdown-toggle-1"
              className="max-lg:tw-max-w-fit tw-flex header-links tw-gap-1 tw-place-items-center tw-cursor-pointer"
              style={{ whiteSpace: "nowrap" }}
            >
              <span> Resources </span>
              <i className="tw-text-sm bi bi-chevron-down"></i>
            </div>
            <nav 
              id="nav-dropdown-list-1"
              data-open="false"
              className={`${dropdownOpenClass} lg:tw-fixed tw-flex lg:tw-top-[80px] lg:tw-left-1/2 lg:tw--translate-x-1/2 
                      tw-w-[90%] tw-rounded-lg
                      tw-overflow-hidden
                       tw-bg-white dark:tw-bg-[#17181B] tw-duration-300 
                       tw-transition-opacity tw-transition-height tw-shadow-lg tw-p-4`}
            >
              <div className="tw-grid max-xl:tw-flex max-xl:tw-flex-col tw-justify-around tw-grid-cols-2 tw-w-full">
                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/blog">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-journal-text"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Blog</div>
                    <p>Insights and updates</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/resources/guides">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-book"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Guides & White Papers</div>
                    <p>Deep-dive playbooks</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/resources/webinars">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-camera-video"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Webinars</div>
                    <p>Sessions and replays</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/resources/reports">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-clipboard-data"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Industry Reports</div>
                    <p>Benchmarks and research</p>
                  </div> 
                </Link>

                <Link className="header-links tw-flex tw-text-left tw-gap-4 !tw-p-4" href="/resources/tools">
                  <div className="tw-font-semibold tw-text-3xl">
                    <i className="bi bi-tools"></i>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div className="tw-text-lg tw-text-black dark:tw-text-white tw-font-medium">Marketing Tools</div>
                    <p>Free calculators & tools</p>
                  </div> 
                </Link>

                <div className="tw-col-span-2 tw-mt-4 tw-flex tw-items-center tw-justify-between tw-gap-6 tw-rounded-lg tw-bg-gray-50 dark:tw-bg-[#0f1012] tw-border tw-border-gray-200 dark:tw-border-gray-700 tw-px-6 tw-py-4 max-lg:tw-flex-col max-lg:tw-items-stretch">
                  <div className="tw-flex tw-flex-col tw-gap-1">
                    <div className="tw-text-lg tw-font-semibold tw-text-gray-900 dark:tw-text-white">Newsletter Signup</div>
                    <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300">Get weekly marketing insights.</p>
                  </div>
                  <form onSubmit={handleResourcesNewsletterSubmit} className="tw-flex tw-gap-3 max-lg:tw-flex-col">
                    <input
                      type="email"
                      value={resourcesNewsletterEmail}
                      onChange={(e) => setResourcesNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="tw-w-[320px] max-lg:tw-w-full tw-rounded-full tw-border tw-border-gray-300 dark:tw-border-gray-600 tw-bg-white dark:tw-bg-[#17181B] tw-px-4 tw-py-2 tw-text-sm tw-text-gray-800 dark:tw-text-gray-100"
                      style={{ outline: "none", boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.35)" }}
                    />
                    <button type="submit" className="btn !tw-rounded-full !tw-px-5 !tw-py-2 tw-text-sm">Subscribe</button>
                    {resourcesNewsletterStatus === "success" && (
                      <span className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300 max-lg:tw-text-left">Thanks! You&apos;re subscribed.</span>
                    )}
                  </form>
                </div>
              </div>
            </nav>
          </div>

          <Link className="header-links" href="#pricing" style={{ whiteSpace: "nowrap" }}> Contact Us </Link>
        </nav>
        <div
          className="lg:tw-mx-4 tw-flex tw-place-items-center tw-gap-[20px] tw-text-base max-md:tw-w-full 
                          max-md:tw-flex-col max-md:tw-place-items-start"
        >
          <button 
            type="button" 
            onClick={toggleMode} 
            className="header-links tw-text-gray-600 dark:tw-text-gray-300" 
            title="toggle-theme"
          > 
            <i className={`bi ${themeIcon}`}></i>
          </button>
          <Link
            href="#playground"
            className="btn tw-flex tw-gap-3 tw-px-3 tw-py-2 tw-transition-transform 
                          tw-duration-[0.3s] hover:tw-translate-x-2"
          >
            <span>Get A Proposal</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
      <button
        className={`bi ${menuIcon} tw-absolute tw-right-3 tw-top-3 tw-z-50 tw-text-3xl tw-text-gray-500 lg:tw-hidden`}
        onClick={toggleHeader}
        aria-label="menu"
      ></button>
    </header>
  );
}
