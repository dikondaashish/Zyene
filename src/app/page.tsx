"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [resourcesNewsletterEmail, setResourcesNewsletterEmail] = useState("");
  const [resourcesNewsletterStatus, setResourcesNewsletterStatus] = useState<"success" | null>(null);

  useEffect(() => {
    setMounted(true);
    
    const RESPONSIVE_WIDTH = 1024;
    let typedInstance: any = null;
    
    // Initialize Typed.js for prompt animation
    const initTyped = () => {
      if (typeof window !== 'undefined' && (window as any).Typed) {
        const element = document.querySelector('#prompts-sample');
        if (element) {
          typedInstance = new (window as any).Typed('#prompts-sample', {
            strings: [
              "How to solve a rubik's cube? Step by step guide",
              "What's Pixa playground?",
              "How to build an AI SaaS App?",
              "How to integrate Pixa API?"
            ],
            typeSpeed: 80,
            smartBackspace: true,
            loop: true,
            backDelay: 2000,
          });
        }
      }
    };

    // Initialize GSAP animations
    const initGSAP = () => {
      if (typeof window !== 'undefined' && (window as any).gsap) {
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        
        if (ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
        }

        // Initial state for reveal-up elements
        gsap.set(".reveal-up", {
          opacity: 0,
          y: "100%",
        });

        // Dashboard 3D tilt animation on scroll
        const dashboard = document.querySelector("#dashboard");
        if (dashboard && ScrollTrigger) {
          gsap.to("#dashboard", {
            scale: 1,
            translateY: 0,
            rotateX: "0deg",
            scrollTrigger: {
              trigger: "#hero-section",
              start: window.innerWidth > RESPONSIVE_WIDTH ? "top 95%" : "top 70%",
              end: "bottom bottom",
              scrub: 1,
            }
          });
        }

        // Section reveal animations
        const sections = gsap.utils.toArray("section");
        sections.forEach((sec: any) => {
          const revealElements = sec.querySelectorAll(".reveal-up");
          if (revealElements.length > 0 && ScrollTrigger) {
            gsap.to(revealElements, {
              opacity: 1,
              duration: 0.8,
              y: "0%",
              stagger: 0.2,
              scrollTrigger: {
                trigger: sec,
                start: "10% 80%",
                end: "20% 90%",
              }
            });
          }
        });
      }
    };

    // Initialize FAQ accordion
    const initFAQ = () => {
      const faqAccordions = document.querySelectorAll('.faq-accordion');
      faqAccordions.forEach((btn) => {
        btn.addEventListener('click', function(this: HTMLElement) {
          this.classList.toggle('active');
          const content = this.nextElementSibling as HTMLElement;
          const icon = this.querySelector(".bi-plus") as HTMLElement;
          
          if (content && icon) {
            if (content.style.maxHeight === '240px') {
              content.style.maxHeight = '0px';
              content.style.padding = '0px 18px';
              icon.style.transform = "rotate(0deg)";
            } else {
              content.style.maxHeight = '240px';
              content.style.padding = '20px 18px';
              icon.style.transform = "rotate(45deg)";
            }
          }
        });
      });
    };

    // Initialize dropdown hover functionality
    const initDropdown = () => {
      const toggles = Array.from(document.querySelectorAll('[id^="nav-dropdown-toggle-"]')) as HTMLElement[];
      const cleanups: Array<() => void> = [];

      const closeAllDropdowns = () => {
        const dropdowns = Array.from(document.querySelectorAll('[id^="nav-dropdown-list-"]')) as HTMLElement[];
        dropdowns.forEach((dd) => {
          dd.classList.remove(
            "tw-opacity-100",
            "tw-scale-100",
            "max-lg:tw-min-h-[450px]",
            "tw-min-w-[320px]",
            "max-lg:!tw-h-fit"
          );
          dd.setAttribute("data-open", "false");
        });
      };

      toggles.forEach((navToggle) => {
        const index = navToggle.id.split("nav-dropdown-toggle-")[1];
        const navDropdown = document.querySelector(`#nav-dropdown-list-${index}`) as HTMLElement | null;
        if (!navDropdown) return;

        let closeTimeout: number | null = null;

        const clearCloseTimeout = () => {
          if (closeTimeout !== null) {
            window.clearTimeout(closeTimeout);
            closeTimeout = null;
          }
        };

        const openNavDropdown = () => {
          clearCloseTimeout();
          closeAllDropdowns();
          navDropdown.classList.add(
            "tw-opacity-100",
            "tw-scale-100",
            "max-lg:tw-min-h-[450px]",
            "max-lg:!tw-h-fit",
            "tw-min-w-[320px]"
          );
          navDropdown.setAttribute("data-open", "true");
        };

        const forceCloseNavDropdown = () => {
          clearCloseTimeout();
          navDropdown.classList.remove(
            "tw-opacity-100",
            "tw-scale-100",
            "max-lg:tw-min-h-[450px]",
            "tw-min-w-[320px]",
            "max-lg:!tw-h-fit"
          );
          navDropdown.setAttribute("data-open", "false");
        };

        const closeNavDropdown = () => {
          clearCloseTimeout();
          closeTimeout = window.setTimeout(() => {
            const isHoveringToggle = navToggle.matches(":hover");
            const isHoveringDropdown = navDropdown.matches(":hover");

            if (!isHoveringToggle && !isHoveringDropdown) {
              navDropdown.classList.remove(
                "tw-opacity-100",
                "tw-scale-100",
                "max-lg:tw-min-h-[450px]",
                "tw-min-w-[320px]",
                "max-lg:!tw-h-fit"
              );
              navDropdown.setAttribute("data-open", "false");
            }
          }, 120);
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

    // Delay initialization to ensure scripts are loaded
    const timer = setTimeout(() => {
      initTyped();
      initGSAP();
      initFAQ();
      const cleanupDropdown = initDropdown();
      (window as any).__zyeneDropdownCleanup__ = cleanupDropdown;
    }, 500);
    
    return () => {
      clearTimeout(timer);
      const cleanupDropdown = (window as any).__zyeneDropdownCleanup__ as undefined | (() => void);
      if (cleanupDropdown) cleanupDropdown();
      if (typedInstance) {
        typedInstance.destroy();
      }
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

  const openVideo = () => {
    setIsVideoOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    document.body.classList.remove("modal-open");
  };

  // Prevent hydration mismatch by using consistent initial values
  const headerOpenClass = mounted && isHeaderOpen ? "max-lg:!tw-opacity-100 max-lg:!tw-h-[50vh] max-lg:!tw-min-h-[50vh]" : "";
  const dropdownOpenClass = mounted && isDropdownOpen ? "tw-scale-100 tw-opacity-100 lg:tw-h-[450px]" : "tw-scale-0 tw-opacity-0 max-lg:tw-h-0 max-lg:tw-w-0";
  const videoOpenClass = mounted && isVideoOpen ? "tw-scale-100 tw-opacity-100" : "tw-scale-0 tw-opacity-0";
  const videoContainerClass = mounted && isVideoOpen ? "tw-scale-100" : "tw-scale-0";
  const menuIcon = mounted && isHeaderOpen ? "bi-x-lg" : "bi-list";
  const themeIcon = mounted && isDarkMode ? "bi-sun" : "bi-moon";

  return (
    <>
      {/* Header */}
      <header
        className="lg:tw-px-10 tw-max-w-[100vw] tw-max-w-lg:tw-mr-auto max-lg:tw-top-0 tw-fixed tw-top-4 lg:tw-left-1/2 lg:tw--translate-x-1/2 tw-z-20 tw-flex tw-h-[60px] tw-w-full 
                tw-text-gray-700 tw-bg-white dark:tw-text-gray-200 dark:tw-bg-[#17181b] tw-px-[2%] tw-rounded-md lg:tw-max-w-5xl tw-shadow-md dark:tw-shadow-gray-700
                lg:tw-justify-around lg:!tw-backdrop-blur-lg lg:tw-opacity-[0.99]"
        style={{ height: 72, maxWidth: 1280 }}
      >
        <Link className="tw-flex tw-p-[4px] tw-place-items-center lg:tw-ml-5" style={{ gap: 8 }} href="#">
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

                  {/* CTA Section in Dropdown */}
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
                        <span className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300 max-lg:tw-text-left">Thanks! You're subscribed.</span>
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

      {/* Hero Section */}
      <section
        className="hero-section tw-relative tw-mt-20 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-overflow-hidden max-lg:tw-mt-[100px]"
        id="hero-section"
      >
        {/* Video Modal */}
        <div 
          className={`tw-fixed tw-bg-[#000000af] dark:tw-bg-[#80808085] tw-top-0 tw-left-1/2 tw--translate-x-1/2 tw-z-20 tw-transition-opacity
            tw-duration-300 tw-p-2 tw-w-full tw-h-full tw-flex tw-place-content-center tw-place-items-center ${videoOpenClass}`}
          onClick={closeVideo}
        >
          <div 
            className={`tw-max-w-[80vw] max-lg:tw-max-w-full max-lg:tw-w-full tw-transition-transform tw-duration-500 tw-p-6 tw-rounded-xl max-lg:tw-px-2 tw-w-full tw-gap-2 tw-shadow-md 
                        tw-h-[90vh] max-lg:tw-h-auto max-lg:tw-min-h-[400px] tw-bg-white dark:tw-bg-[#16171A] tw-max-h-full ${videoContainerClass}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="tw-w-full tw-flex">
              <button type="button" onClick={closeVideo} className="tw-ml-auto tw-text-xl" title="close">
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
            <div className="tw-flex tw-w-full tw-rounded-xl tw-px-[5%] max-md:tw-px-2 tw-min-h-[300px] tw-max-h-[90%] tw-h-full">
              <div className="tw-relative tw-bg-black tw-min-w-full tw-min-h-full tw-overflow-clip tw-rounded-md">
                {isVideoOpen && (
                  <iframe 
                    className="tw-absolute tw-top-[50%] tw--translate-y-[50%] tw-left-[50%] tw--translate-x-[50%] tw-w-full tw-h-full" 
                    src="https://www.youtube.com/embed/6j4fPVkA3EA?si=llcTrXPRM-MRXDZB&controls=0&rel=0&showinfo=0&autoplay=1&loop=1&mute=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>  
        </div>

        <div    
          className="hero-bg-gradient tw-relative tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-gap-6 tw-p-[5%] max-xl:tw-place-items-center max-lg:tw-p-4"
        >
          <div className="purple-bg-grad tw-absolute tw-left-1/2 tw--translate-1/2 tw-top-[10%] tw-h-[120px] tw-w-[120px]"></div> 

          <div className="tw-flex tw-flex-col tw-min-h-[60vh] tw-place-content-center tw-items-center">
            <h2 className="tw-text-center tw-text-7xl tw-font-semibold tw-uppercase tw-leading-[90px] max-lg:tw-text-4xl max-md:tw-leading-snug">
              <span> All your AI models </span>
              <br />
              <span className="tw-font-thin tw-font-serif"> in one place </span>
            </h2>
            <div className="tw-mt-8 tw-max-w-[450px] tw-text-lg max-lg:tw-text-base tw-p-2 tw-text-center tw-text-gray-800 dark:tw-text-white max-lg:tw-max-w-full">
              Your all in one AI companion. generate Images, videos, codes, docs, debug your web apps all with Pixa&apos;s interface.
            </div>

            <div className="tw-mt-10 max-md:tw-flex-col tw-flex tw-place-items-center tw-gap-4">
              <button 
                onClick={openVideo}
                className="btn !tw-w-[170px] max-lg:!tw-w-[160px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-flex tw-gap-2 tw-group !tw-bg-transparent !tw-text-black dark:!tw-text-white tw-transition-colors 
                            tw-duration-[0.3s] tw-border-[1px] tw-border-black dark:tw-border-white"
              >
                <div className="tw-relative tw-flex tw-place-items-center tw-place-content-center tw-w-6 tw-h-6">
                  <div className="tw-absolute tw-inset-0 tw-top-0 tw-left-0 tw-scale-0 tw-duration-300 group-hover:tw-scale-100 tw-border-2
                                   tw-border-gray-600 dark:tw-border-gray-200 tw-rounded-full tw-w-full tw-h-full"></div>
                  <span className="bi bi-play-circle-fill"></span>
                </div>
                <span>Watch video</span>
              </button>

              <Link
                className="btn tw-group max-lg:!tw-w-[160px] tw-flex tw-gap-2 tw-shadow-lg !tw-w-[170px] !tw-rounded-xl !tw-py-4 max-lg:!tw-py-2 tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.03]"
                href="#"
              >
                <span>Get started</span>
                <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
              </Link>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="tw-relative tw-mt-8 tw-flex tw-w-full tw-place-content-center tw-place-items-center" id="dashboard-container">
            <div className="purple-bg-grad tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[5%] tw-h-[200px] tw-w-[200px]"></div>    

            <div
              className="tw-relative tw-max-w-[80%] tw-bg-white dark:tw-bg-black tw-border-[1px] dark:tw-border-[#36393c] lg:tw-w-[1024px]
                      lg:tw-h-[650px] tw-flex tw-shadow-xl max-lg:tw-h-[450px] max-lg:tw-w-full
                      tw-overflow-hidden
                      tw-min-w-[320px] md:tw-w-full tw-min-h-[450px] tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
              id="dashboard"
            >  
              <div className="purple-bg-grad tw-max-w-[80%] tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[0%] lg:tw-max-w-[1000px] tw-h-full tw-w-full"></div> 
              <div className="animated-border tw-w-full tw-h-full tw-p-[2px]">
                <div className="tw-w-full tw-h-full tw-rounded-xl tw-overflow-hidden tw-flex">
                  {/* Sidebar */}
                  <div className="tw-min-w-[250px] max-lg:tw-hidden tw-p-2 tw-gap-2 tw-flex tw-flex-col tw-bg-gray-100 dark:tw-bg-[#171717] tw-h-full">
                    <div className="tw-h-[30px] tw-w-fit tw-max-w-[100px]">
                      <img
                        src="/logo/logo.png"
                        alt="logo"
                        className="tw-object-contain tw-opacity-80 tw-h-full tw-w-full dark:tw-invert"
                      />
                    </div>

                    <div className="tw-flex tw-mt-2 tw-gap-2 tw-flex-col">
                      <Link href="#" className="tw-flex tw-rounded-sm tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200">
                        <i className="bi bi-image"></i>
                        <span>Image generator</span>
                      </Link>
                      <Link href="#" className="tw-flex tw-rounded-sm tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200">
                        <i className="bi bi-file-pdf"></i>
                        <span>Pdf generator</span>
                      </Link>
                      <Link href="#" className="tw-flex tw-rounded-sm tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200">
                        <i className="bi bi-code-square"></i>
                        <span>Code generator</span>
                      </Link>
                      <Link href="#" className="tw-flex tw-rounded-sm tw-group tw-gap-2 tw-p-2 dark:hover:tw-bg-[#2d2d2ddb] hover:tw-bg-gray-200">
                        <span>Show all</span>
                        <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1"></i>
                      </Link>
                    </div>

                    <div className="tw-mt-auto tw-w-full tw-flex tw-px-6 tw-place-content-center">
                      <Link href="#" className="btn !tw-w-full !tw-bg-transparent tw-duration-[0.3s] 
                                              hover:!tw-bg-black hover:!tw-text-white
                                              dark:hover:!tw-bg-white dark:hover:!tw-text-black
                                              !tw-border-[1px] !tw-border-black !tw-text-black
                                              dark:!tw-border-white dark:!tw-text-white">
                        Signup
                      </Link>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="tw-flex tw-w-full tw-p-4 tw-bg-white dark:tw-bg-black tw-h-full tw-flex-col" id="pixa-playground">
                    <div className="tw-relative tw-w-full tw-flex tw-place-content-center tw-h-full">
                      <div className="tw-absolute tw-top-[20%] max-lg:tw-top-[30%] tw-left-1/2 tw--translate-x-1/2 tw-w-[150px] tw-h-[150px]">
                        <img src="/logo/logo.png" className="tw-w-full tw-h-full dark:tw-invert tw-object-contain tw-opacity-20" alt="Pixa logo" />
                      </div>
                      <div className="prompt-container tw-overflow-y-auto tw-px-[5%] max-lg:tw-px-2 scrollbar max-lg:tw-max-h-[80%] tw-max-h-[550px] 
                                  max-lg:tw-mt-12 tw-w-full tw-h-full tw-z-10 tw-flex tw-flex-col" id="prompt-container">
                        <div className="tw-w-full tw-flex tw-text-center tw-flex-col tw-place-content-center">
                          <h2 className="tw-text-4xl max-md:tw-text-2xl max-md:tw-mt-3 tw-opacity-80">
                            Try Prompts
                          </h2>
                          <div className="tw-inline tw-mt-6 max-md:tw-mt-3">
                            <span id="prompts-sample"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form 
                      className="tw-place-content-center tw-mt-auto tw-h-[50px] tw-p-1 tw-place-items-center 
                              tw-justify-around tw-flex tw-gap-1 tw-bottom-2 tw-w-full tw-rounded-md tw-bg-[#f3f4f6] dark:tw-bg-[#171717]"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="tw-min-w-[140px] tw-min-h-[80px] max-lg:tw-absolute tw-z-10 tw-top-1 tw-left-1/2 max-lg:tw--translate-x-1/2 
                                  tw-flex tw-flex-col tw-text-sm tw-gap-1 tw-place-content-center">
                        <div className="dropdown tw-p-2 tw-rounded-md tw-bg-[#f3f4f6] dark:tw-bg-[#171717]">
                          <button type="button" className="dropdown-toggle tw-flex tw-gap-5">
                            <span className="tw-flex tw-w-fit tw-gap-2 tw-place-items-center">
                              <div className="tw-w-[20px] tw-h-[20px]">
                                <img src="/images/brand-logos/openai.svg" alt="Gpt3.5" className="dark:tw-invert" />
                              </div>
                              <span>GPT 4o</span>
                            </span>
                            <i className="bi bi-chevron-up tw-ml-auto lg:tw-block tw-hidden"></i>
                          </button>
                        </div>
                      </div>
                      <input 
                        placeholder="How to develop a saas app?" 
                        type="text" 
                        className="tw-p-2 !tw-outline-none tw-bg-transparent tw-border-none tw-w-full tw-placeholder-gray-500
                                    dark:tw-placeholder-opacity-60 dark:tw-placeholder-gray-300 tw-max-w-[80%] tw-h-full" 
                        name="prompt" 
                      />
                      <button type="submit" className="btn !tw-bg-[#6366f1] !tw-p-2 !tw-px-3 !tw-text-white" title="submit">
                        <i className="bi bi-arrow-up"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="tw-relative tw-flex tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden tw-p-8">
        <h2 className="tw-text-3xl max-md:tw-text-xl">
          Trusted by brands you love
        </h2>

        <div className="carousel-container">
          <div className="carousel lg:w-place-content-center tw-mt-10 tw-flex tw-w-full tw-gap-5 max-md:tw-gap-2">
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img src="/images/brand-logos/google.svg" alt="Google" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img src="/images/brand-logos/microsoft.svg" alt="Microsoft" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img src="/images/brand-logos/adobe.svg" alt="Adobe" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img src="/images/brand-logos/airbnb.svg" alt="Airbnb" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img src="/images/brand-logos/stripe.svg" alt="Stripe" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
            </div>
            <div className="carousel-img tw-h-[30px] tw-w-[150px]">
              <img src="/images/brand-logos/reddit.svg" alt="Reddit" className="tw-h-full tw-w-full tw-object-contain tw-grayscale tw-transition-colors hover:tw-grayscale-0" />
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-lg:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">   
        <div className="tw-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[900px] tw-gap-4 tw-p-4">
          <div className="purple-bg-grad tw-absolute tw-right-[20%] tw-top-[20%] tw-h-[200px] tw-w-[200px]"></div>
          <h2 className="tw-text-6xl max-lg:tw-text-4xl tw-text-center tw-leading-normal tw-uppercase">
            <span className="tw-font-semibold">Build your own AI Apps </span>
            <br />
            <span className="tw-font-serif">on top of Pixa APIs</span>
          </h2>
          <p className="tw-mt-8 tw-max-w-[650px] tw-text-gray-900 dark:tw-text-gray-200 tw-text-center max-md:tw-text-sm">   
            Pixa&apos;s Playground is powered by Pixa&apos;s cutting-edge LLM API endpoints. Our powerful models simplify task automation, offering 
            advanced capabilities in summarization, text generation, and Q&amp;A handling. 
          </p>
          <div className="tw-flex tw-mt-8">
            <Link href="#" className="tw-shadow-md hover:tw-shadow-xl dark:tw-shadow-gray-800 tw-transition-all tw-duration-300 
                            tw-border-[1px] tw-p-3 tw-px-4 tw-border-black dark:tw-border-white tw-rounded-md">
              Check Pixa APIs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="tw-relative tw-flex tw-max-w-[100vw] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">   
        <div className="tw-mt-8 tw-flex tw-flex-col tw-w-full tw-h-full tw-place-items-center tw-gap-5">
          <div className="tw-mt-5 tw-flex tw-flex-col tw-gap-3 tw-text-center">
            <h2 className="tw-text-6xl tw-font-medium max-md:tw-text-3xl tw-p-2">
              Experience all the benefits of AI
            </h2>
          </div>
          <div className="tw-mt-6 tw-flex tw-flex-col tw-max-w-[1150px] max-lg:tw-max-w-full tw-h-full tw-p-4 max-lg:tw-place-content-center tw-gap-8">   
            <div className="max-xl:tw-flex max-xl:tw-flex-col tw-place-items-center tw-grid tw-grid-cols-3 tw-gap-8 tw-place-content-center tw-auto-rows-auto">
              {/* Feature Card 1 */}
              <div className="tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex 
                    tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                  <div className="tw-overflow-hidden tw-w-full tw-min-h-[180px] tw-h-[180px]">
                    <img src="/images/home/api.png" className="tw-w-full tw-object-contain tw-h-auto" alt="unified interface" />
                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Unified interface</h2>
                  <p className="tw-text-base tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Our&apos;s is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </Link>
              </div>

              {/* Feature Card 2 */}
              <div className="tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex 
                    tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                  <div className="tw-w-full tw-min-h-[180px] tw-h-[180px] tw-overflow-hidden">
                    <img src="/images/home/api.png" alt="API" className="tw-w-full tw-h-auto tw-object-contain" />
                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">API Access</h2>
                  <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Pixa&apos;s LLM API offers advanced summarization, text generation, and question-answering.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </Link>
              </div>

              {/* Feature Card 3 */}
              <div className="tw-w-[350px] tw-h-[540px] tw-flex max-md:tw-w-full">
                <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex 
                    tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                  <div className="tw-w-full tw-flex tw-place-contet-center tw-min-h-[180px] tw-h-[180px] tw-rounded-xl tw-overflow-hidden">
                    <img src="/images/home/integrations1.png" className="tw-w-full tw-h-auto tw-object-contain" alt="Prebuilt integrations" />
                  </div>
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Pre-built Tools</h2>
                  <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* AI Models Card */}
            <div className="tw-w-full md:tw-h-[350px] max-md:tw-min-h-[350px] tw-flex">
              <Link href="#" className="tw-relative tw-p-10 tw-transition-all tw-duration-300 tw-group/card tw-gap-5 tw-flex 
                  max-md:tw-flex-col tw-w-full tw-h-full tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-rounded-3xl hover:tw-scale-[1.02]">
                <div className="tw-text-6xl tw-overflow-hidden tw-rounded-xl tw-w-full tw-h-full max-md:tw-h-[180px]">
                  <img src="/images/home/ai-models.png" className="tw-w-full tw-object-contain tw-h-full" alt="AI models" />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h2 className="tw-text-3xl max-md:tw-text-2xl tw-font-medium">Multiple AI models</h2>
                  <p className="tw-leading-normal tw-text-gray-800 dark:tw-text-gray-200">
                    Pixa supports various AI models, including ChatGPT, Gemini, Claude, Mistral and more.
                  </p>
                  <div className="tw-flex tw-items-center tw-gap-2 tw-mt-auto">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right tw-transform tw-transition-transform tw-duration-300 group-hover/card:tw-translate-x-2"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-built AI Tools Section */}
      <section className="tw-relative tw-mt-10 tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col tw-place-items-center lg:tw-p-6">
        <div className="tw-mt-[5%] tw-flex tw-h-full tw-w-full tw-place-content-center tw-gap-2 tw-p-4 max-lg:tw-max-w-full max-lg:tw-flex-col">
          <div className="tw-relative tw-flex tw-max-w-[30%] max-lg:tw-max-w-full tw-flex-col tw-place-items-start tw-gap-4 tw-p-2 max-lg:tw-place-items-center max-lg:tw-place-content-center max-lg:tw-w-full">
            <div className="tw-top-40 tw-flex tw-flex-col lg:tw-sticky tw-place-items-center tw-max-h-fit tw-max-w-[850px] max-lg:tw-max-h-fit max-lg:tw-max-w-[320px] tw-overflow-hidden">
              <h2 className="tw-text-5xl tw-font-serif tw-text-center tw-font-medium max-md:tw-text-3xl">Pre-built AI Tools</h2>
              <Link href="#" className="btn !tw-mt-8 !tw-bg-transparent !tw-text-black !tw-border-[1px] !tw-border-black dark:!tw-border-white dark:!tw-text-white">Start Chat</Link>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-10 tw-h-full tw-max-w-1/2 max-lg:tw-max-w-full tw-px-[10%] max-lg:tw-px-4 max-lg:tw-gap-3 max-lg:tw-w-full lg:tw-top-[20%] tw-place-items-center">
            {/* AI Code Generator */}
            <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
                <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-code-square"></i></div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">AI code generator</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">AI code generation tools to create code from natural language or patterns, streamlining development and improving efficiency.</p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
            {/* PDF Generator */}
            <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
                <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-file-pdf-fill"></i></div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">PDF generator</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Use AI tools to automate PDF creation and content extraction, improving document management and data processing.</p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
            {/* Image Generation */}
            <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300 tw-transition-all dark:tw-shadow-[#171717] tw-p-8 tw-group/card">
                <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-image-fill"></i></div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">Image generation</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Prebuilt AI tools for image generation create visuals from text or patterns, enhancing design and creative projects.</p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
            {/* AI Analytics */}
            <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <Link href="#" className="tw-flex tw-w-full dark:tw-shadow-[#171717] tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
                <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-bar-chart-line-fill"></i></div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">AI Analytics</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Our AI analytics tools analyze data patterns and trends, providing actionable insights and enhancing decision-making.</p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
            {/* Music Generator */}
            <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl dark:tw-shadow-[#171717] hover:tw-shadow-lg tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
                <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-music-note-beamed"></i></div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">Music generator</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Access our AI music generation tools create original compositions from input parameters, enabling effortless music creation for various needs.</p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
            {/* Video Generator */}
            <div className="tw-h-[240px] tw-w-[450px] max-md:tw-w-full">
              <Link href="#" className="tw-flex tw-w-full tw-h-full tw-gap-8 tw-rounded-xl hover:tw-shadow-lg dark:tw-shadow-[#171717] tw-duration-300 tw-transition-all tw-p-8 tw-group/card">
                <div className="tw-text-4xl max-md:tw-text-2xl"><i className="bi bi-camera-video-fill"></i></div>
                <div className="tw-flex tw-flex-col tw-gap-4">
                  <h3 className="tw-text-2xl max-md:tw-text-xl">Video generator</h3>
                  <p className="tw-text-gray-800 dark:tw-text-gray-100 max-md:tw-text-sm">Use our AI video generation tools create videos from text or templates, streamlining content creation and production.</p>
                  <div className="tw-mt-auto tw-flex tw-gap-2 tw-underline tw-underline-offset-4">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-up-right group-hover/card:tw--translate-y-1 group-hover/card:tw-translate-x-1 tw-duration-300 tw-transition-transform"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="tw-relative tw-flex tw-w-full tw-min-h-[110vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
        <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
          <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">Additional Features</h3>
          <div className="tw-mt-8 tw-relative tw-gap-10 tw-p-4 tw-grid tw-place-items-center tw-grid-cols-3 max-lg:tw-flex max-lg:tw-flex-col">
            {/* Prompt Library */}
            <div className="tw-w-[350px] tw-border-[1px] tw-h-[400px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] max-md:tw-w-[320px] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
              <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img src="/images/home/prompts2.png" alt="Prompt library" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">Prompt Library</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Forget about writing your own prompt, use the prompt templates and supercharge your workflow.</p>
            </div>
            {/* Real-time Web Search */}
            <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-md tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
              <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img src="/images/home/search.png" alt="Web search" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">Real-time web search</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.</p>
            </div>
            {/* Image Generation */}
            <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
              <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img src="/images/home/image.png" alt="Image generation" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">Image Generation</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Generate Image instantly from multiple models, create visuals from text descriptions or templates.</p>
            </div>
            {/* History */}
            <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
              <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img src="/images/home/history.png" alt="History" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">History</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">All of the models can recall previous topic, so you can continue your conversation at any point of time.</p>
            </div>
            {/* Import Content */}
            <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
              <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img src="/images/home/import.png" alt="Import content" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">Import content</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.</p>
            </div>
            {/* Multilingual */}
            <div className="tw-w-[350px] max-md:tw-w-[320px] tw-border-[1px] tw-h-[400px] tw-rounded-lg tw-place-items-center tw-p-4 tw-bg-[#f2f3f4] dark:tw-bg-[#141414] dark:tw-border-[#1f2123] tw-flex tw-flex-col tw-gap-3">
              <div className="tw-w-full tw-h-[250px] tw-p-4 tw-rounded-xl tw-backdrop-blur-2xl tw-overflow-hidden tw-flex tw-place-content-center">
                <img src="/images/home/multilingual.png" alt="Multilingual" className="tw-w-auto tw-h-full tw-object-contain" />
              </div>
              <h3 className="tw-text-2xl">Multilingual support</h3>
              <p className="tw-text-gray-700 dark:tw-text-gray-300 tw-px-4 tw-text-center tw-text-sm">ChatGPT, and Gemini can understand and respond in over 100 languages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* One Subscription Section */}
      <section className="tw-relative tw-flex tw-w-full tw-min-h-[100vh] max-md:tw-min-h-[80vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
        <div className="tw-w-full max-lg:tw-max-w-full tw-place-content-center tw-place-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
          <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">One Subscription for it all</h3>
          <p className="tw-mt-3 tw-max-w-[600px] tw-text-center">Why pay for multiple expensive subscriptions when one subscription can do it all? Access multiple AI models and save 1000&apos;s of dollar per year.</p>
          <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">
            <div className="tw-flex tw-w-full tw-max-w-[650px] max-md:tw-max-w-full tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-2 tw-shadow-xl max-lg:tw-w-[320px]">
              <img src="/images/home/multi-sub.png" alt="Multi sub" />
            </div>
            <div className="tw-flex tw-w-full tw-max-w-[650px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-2 tw-shadow-xl max-lg:tw-w-[320px]">
              <img src="/images/home/single-sub.jpg" alt="Single sub" />
            </div>
          </div>
          <Link href="#" className="tw-group tw-shadow-xl btn tw-flex tw-gap-2 tw-mt-10">
            <span>Start Chat</span>
            <i className="bi bi-arrow-right tw-duration-300 group-hover:tw-translate-x-1"></i>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="tw-flex tw-min-h-[100vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%]">
        <h3 className="tw-text-4xl tw-font-medium tw-text-center max-md:tw-text-2xl">Join the professionals using Pixa</h3>
        <div className="tw-mt-20 tw-gap-10 tw-space-y-8 max-md:tw-columns-1 lg:tw-columns-2 xl:tw-columns-3">
          {/* Testimonial 1 */}
          <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]">
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img src="/images/people/man2.jpg" className="tw-h-full tw-w-full tw-object-cover" alt="man" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Mante</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">Glu, cto</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore deleniti iusto Numquam!</p>
          </div>
          {/* Testimonial 2 */}
          <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]">
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img src="/images/people/women.jpg" className="tw-h-full tw-w-full tw-object-cover" alt="women" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Trich B</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">AMI, ceo</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem ipsum dolor sit amet.</p>
          </div>
          {/* Testimonial 3 */}
          <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]">
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img src="/images/people/man.jpg" className="tw-h-full tw-w-full tw-object-cover" alt="man" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">John B</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">Benz, ceo</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, expedita nihil repellendus accusamus itaque facere labore, suscipit tempore in harum repellat.</p>
          </div>
          {/* Testimonial 4 */}
          <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]">
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img src="/images/people/man2.jpg" className="tw-h-full tw-w-full tw-object-cover" alt="man" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Ben Alfert B</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">XZ tech, cto</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero.</p>
          </div>
          {/* Testimonial 5 */}
          <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]">
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img src="/images/people/women.jpg" className="tw-h-full tw-w-full tw-object-cover" alt="women" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Rachel</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">Gem, cto</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, vero. Lorem, ipsum dolor.</p>
          </div>
          {/* Testimonial 6 */}
          <div className="tw-flex tw-h-fit tw-w-[350px] tw-break-inside-avoid tw-flex-col tw-gap-4 tw-rounded-lg tw-border-[1px] tw-bg-[#f6f7fb] dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-4 max-lg:tw-w-[320px]">
            <div className="tw-flex tw-place-items-center tw-gap-3">
              <div className="tw-h-[50px] tw-w-[50px] tw-overflow-hidden tw-rounded-full">
                <img src="/images/people/man.jpg" className="tw-h-full tw-w-full tw-object-cover" alt="man" />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-1">
                <div className="tw-font-semibold">Jamie</div>
                <div className="tw-text-gray-700 dark:tw-text-gray-300">SnapFist.ai, ceo</div>
              </div>
            </div>
            <p className="tw-mt-4 tw-text-gray-800 dark:tw-text-gray-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil vitae fuga ab reiciendis optio et corporis dolorem alias deserunt.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="tw-mt-5 tw-flex tw-w-full tw-flex-col tw-gap-6 tw-place-items-center tw-p-[2%]" id="pricing">
        <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-2xl">Choose the right plan for you</h3>
        <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-8 max-lg:tw-flex-col">
          {/* Plan 1 */}
          <div className="tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]">
            <h3><span className="tw-text-5xl max-md:tw-text-3xl tw-font-semibold">$9</span><span className="tw-text-2xl tw-text-gray-600 dark:tw-text-gray-300">/mo</span></h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-100">Essential AI tools for everyday use</p>
            <hr />
            <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-text-base tw-text-gray-800 dark:tw-text-gray-200">
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>1,000 AI powered chat messages</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>30 premium image generations</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>10 premium music generation</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill tw-text-gray-400 dark:tw-text-gray-500"></i><span>Access to all premium AI models</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill tw-text-gray-400 dark:tw-text-gray-500"></i><span>Early access to new features</span></li>
            </ul>
            <Link href="#" className="btn tw-mt-auto !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02] !tw-text-black !tw-bg-transparent !tw-border-[1px] tw-border-black dark:tw-border-white dark:!tw-text-white">Choose plan</Link>
          </div>
          {/* Plan 2 - Featured */}
          <div className="tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-2 tw-border-outlineColor tw-bg-white dark:tw-bg-[#080808] dark:tw-border-[#595858] tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]">
            <h3><span className="tw-text-5xl max-md:tw-text-3xl tw-font-semibold">$17</span><span className="tw-text-2xl max-md:tw-text-xl tw-text-gray-600 dark:tw-text-gray-300">/mo</span></h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-200">Advanced features for serious AI enthusiasts.</p>
            <hr />
            <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-text-base tw-text-gray-800 dark:tw-text-gray-100">
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>5,000 AI powered chat messages</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>100 premium image generations</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>40 premium music generation</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>Access to all premium AI models</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill tw-text-gray-400 dark:tw-text-gray-500"></i><span>Early access to new features</span></li>
            </ul>
            <Link href="#" className="btn tw-mt-auto !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02]">Choose plan</Link>
          </div>
          {/* Plan 3 */}
          <div className="tw-flex tw-w-[350px] tw-flex-col tw-place-items-center tw-gap-2 tw-rounded-lg tw-border-[1px] tw-border-outlineColor dark:tw-bg-[#080808] dark:tw-border-[#1f2123] tw-bg-white tw-p-8 tw-shadow-xl max-lg:tw-w-[320px]">
            <h3><span className="tw-text-5xl max-md:tw-text-3xl tw-font-semibold">$29</span><span className="tw-text-2xl tw-text-gray-600 dark:tw-text-gray-300">/mo</span></h3>
            <p className="tw-mt-3 tw-text-center tw-text-gray-800 dark:tw-text-gray-100">Unlimited potential for power users</p>
            <hr />
            <ul className="tw-mt-4 tw-flex tw-flex-col tw-gap-4 tw-text-base tw-text-gray-800 dark:tw-text-gray-200">
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>10,000 AI powered chat messages</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>300 premium image generations</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>100 premium music generations</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>Access to all premium AI models</span></li>
              <li className="tw-flex tw-gap-2"><i className="bi bi-check-circle-fill"></i><span>Early access to new features</span></li>
            </ul>
            <Link href="#" className="btn tw-mt-8 !tw-w-full tw-transition-transform tw-duration-[0.3s] hover:tw-scale-x-[1.02] !tw-text-black !tw-bg-transparent !tw-border-[1px] tw-border-black dark:tw-border-white dark:!tw-text-white">Choose plan</Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="tw-mt-5 tw-flex tw-min-h-[80vh] tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-p-[2%] max-lg:tw-p-3">
        <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">Read resources by experts ✨</h3>
        <div className="tw-mt-10 tw-flex tw-flex-wrap tw-place-content-center tw-gap-10 max-lg:tw-flex-col">
          <Link href="#" className="tw-flex tw-h-[500px] tw-w-[400px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[350px]">
            <div className="tw-h-[350px] tw-min-h-[350px] tw-w-full tw-overflow-hidden tw-rounded-2xl">
              <img src="/images/home/article1.png" alt="article image" className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-[1.3]" />
            </div>
            <div className="tw-text-gray-600 dark:tw-text-gray-300 tw-justify-between tw-flex tw-gap-2">
              <div className="tw-text-gray-800 dark:tw-text-gray-200">Machine learning</div>
              <div className="tw-text-gray-600 dark:tw-text-gray-400">Jul, 17, 2024</div>
            </div>
            <h3 className="tw-mt-1 tw-font-medium tw-text-xl max-md:tw-text-xl">Latest AI tools</h3>
          </Link>
          <Link href="#" className="tw-flex tw-h-[500px] tw-w-[400px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[350px]">
            <div className="tw-h-[350px] tw-min-h-[350px] tw-w-full tw-overflow-hidden tw-rounded-2xl">
              <img src="/images/home/article2.jpg" alt="article image" className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-[1.3]" />
            </div>
            <div className="tw-text-gray-600 dark:tw-text-gray-300 tw-justify-between tw-flex tw-gap-2">
              <div className="tw-text-gray-800 dark:tw-text-gray-200">Announcement</div>
              <div className="tw-text-gray-600 dark:tw-text-gray-400">June, 22, 2024</div>
            </div>
            <h3 className="tw-mt-1 tw-font-medium tw-text-xl max-md:tw-text-xl">Pixa Unveils new technology</h3>
          </Link>
          <Link href="#" className="tw-flex tw-h-[500px] tw-w-[400px] tw-flex-col tw-gap-2 tw-overflow-clip tw-rounded-lg tw-p-4 max-lg:tw-w-[350px]">
            <div className="tw-h-[350px] tw-min-h-[350px] tw-w-full tw-overflow-hidden tw-rounded-2xl">
              <img src="/images/home/article3.png" alt="article image" className="tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-[1.3]" />
            </div>
            <div className="tw-text-gray-600 dark:tw-text-gray-300 tw-justify-between tw-flex tw-gap-2">
              <div className="tw-text-gray-800 dark:tw-text-gray-200">Announcement</div>
              <div className="tw-text-gray-600 dark:tw-text-gray-400">Apr, 27, 2024</div>
            </div>
            <h3 className="tw-mt-1 tw-font-medium tw-text-xl max-md:tw-text-xl">Launching Pixa playground</h3>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tw-relative tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%]">
        <h3 className="tw-text-4xl tw-font-medium max-md:tw-text-2xl">Faq</h3>
        <div className="tw-mt-5 tw-flex tw-min-h-[300px] tw-w-full tw-max-w-[850px] tw-flex-col tw-gap-4">
          <div className="faq tw-w-full">
            <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
              <span>What&apos;s Pixa playground?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">Pixa&apos;s playground is an integrated webapp to seamlessly test different LLM models such as GPT4, Claude, Gemini, etc.</div>
          </div>
          <hr />
          <div className="faq tw-w-full">
            <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
              <span>What are LLM?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">LLM stands for &quot;Large Language Model.&quot; It&apos;s a type of artificial intelligence model trained on vast amounts of text data to understand and generate human-like text.</div>
          </div>
          <hr />
          <div className="faq tw-w-full">
            <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
              <span>Where can I test different AI models?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">You can use Pixa&apos;s AI Playground to test different models, including GPT4, Claude, Perplexity and more.</div>
          </div>
          <hr />
          <div className="faq tw-w-full">
            <h4 className="faq-accordion tw-flex tw-w-full tw-select-none tw-text-xl max-md:tw-text-lg">
              <span>Is Pixa Free to use?</span>
              <i className="bi bi-plus tw-text-xl tw-origin-center tw-duration-300 tw-transition-transform tw-ml-auto tw-font-semibold"></i>
            </h4>
            <div className="content max-lg:tw-text-sm">You can start using Pixa for free, and later upgrade your plan to access all its features.</div>
          </div>
          <hr />
        </div>
        <div className="purple-bg-grad max-md:tw-hidden tw-absolute tw-bottom-14 tw-right-[20%] tw-h-[150px] tw-w-[150px] tw-rounded-full"></div>
      </section>

      {/* CTA Section */}
      <section className="tw-relative tw-flex tw-p-2 tw-w-full tw-min-h-[60vh] tw-flex-col tw-place-content-center tw-place-items-center tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-min-h-[450px] max-lg:tw-max-w-full tw-rounded-md lg:tw-py-[5%] tw-bg-[#f6f7fb] dark:tw-bg-[#171717] tw-place-content-center tw-items-center tw-flex tw-flex-col tw-max-w-[80%] tw-gap-4 tw-p-4">
          <h3 className="tw-text-5xl tw-font-medium max-md:tw-text-3xl tw-text-center tw-leading-normal">Not sure where to start?</h3>
          <div className="tw-mt-8 tw-relative tw-flex max-lg:tw-flex-col tw-gap-5">
            <Link href="#" className="btn !tw-rounded-full !tw-p-4 tw-font-medium">Book Free Strategy Call</Link>
            <Link href="#" className="btn !tw-rounded-full !tw-p-4 tw-font-medium">Get Custom Proposal</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="tw-flex tw-w-full tw-flex-col tw-place-content-center tw-place-items-center tw-gap-[10%] tw-p-[5%] tw-px-[10%] max-md:tw-px-2">
        <div className="tw-flex tw-w-full tw-max-w-[80%] tw-place-content-center tw-place-items-center tw-justify-between tw-gap-3 tw-rounded-lg tw-bg-[#F6F7FB] dark:tw-bg-[#171717] tw-p-6 max-md:tw-max-w-full max-md:tw-flex-col">
          <div className="tw-flex tw-flex-col max-lg:tw-text-center tw-gap-1">
            <h2 className="tw-text-2xl tw-text-gray-800 dark:tw-text-gray-200 max-md:tw-text-xl">Join our newsletter</h2>
            <div className="tw-text-gray-700 dark:tw-text-gray-300">Get product insights and updates.</div>
          </div>
          <div className="tw-flex tw-h-[60px] tw-place-items-center tw-gap-2 tw-overflow-hidden tw-p-2">
            <input type="email" className="input tw-h-full tw-w-full !tw-border-gray-600 tw-p-2 tw-outline-none" placeholder="email" />
            <Link className="btn !tw-rounded-full !tw-border-[1px] !tw-text-black !tw-border-solid !tw-border-black dark:!tw-text-white dark:!tw-border-gray-300 !tw-bg-transparent tw-transition-colors tw-duration-[0.3s]" href="#">Signup</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tw-mt-auto tw-flex tw-flex-col tw-w-full tw-gap-4 tw-text-sm tw-pt-[5%] tw-pb-10 tw-px-[10%] tw-text-black dark:tw-text-white max-md:tw-flex-col">
        <div className="tw-flex max-md:tw-flex-col max-md:tw-gap-6 tw-gap-3 tw-w-full tw-place-content-around">
          <div className="tw-flex tw-h-full tw-w-[250px] tw-flex-col tw-place-items-center tw-gap-6 max-md:tw-w-full">
            <Link href="#" className="tw-w-full tw-place-items-center tw-flex tw-flex-col tw-gap-6">
              <img src="/logo/logo.png" alt="logo" className="tw-max-w-[120px] dark:tw-invert" />
              <div className="tw-max-w-[120px] tw-text-center tw-text-3xl tw-h-fit">PIXA</div>
            </Link>
            <div className="tw-flex tw-gap-4 tw-text-lg">
              <Link href="#" aria-label="Github"><i className="bi bi-github"></i></Link>
              <Link href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></Link>
              <Link href="#" aria-label="Linkedin"><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>
          <div className="tw-flex max-md:tw-flex-col tw-flex-wrap tw-gap-6 tw-h-full tw-w-full tw-justify-around">
            <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
              <h2 className="tw-text-xl">Resources</h2>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <Link href="#" className="footer-link">Getting started</Link>
                <Link href="#" className="footer-link">API Docs</Link>
                <Link href="#" className="footer-link">API Endpoints</Link>
                <Link href="#" className="footer-link">Health status</Link>
                <Link href="#" className="footer-link">Pricing</Link>
              </div>
            </div>
            <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
              <h2 className="tw-text-xl">Company</h2>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <Link href="#" className="footer-link">Support channels</Link>
                <Link href="#" className="footer-link">Systems</Link>
                <Link href="#" className="footer-link">Blog</Link>
                <Link href="#" className="footer-link">Twitter</Link>
                <Link href="#" className="footer-link">Github</Link>
              </div>
            </div>
            <div className="tw-flex tw-h-full tw-w-[200px] tw-flex-col tw-gap-4">
              <h2 className="tw-text-xl">Legal</h2>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <Link href="#" className="footer-link">Terms of service</Link>
                <Link href="#" className="footer-link">Privacy Policy</Link>
                <Link href="#" className="footer-link">DCMA - Content Takedown</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="tw-mt-8" />
        <div className="tw-mt-2 tw-flex tw-gap-2 tw-flex-col tw-text-gray-700 dark:tw-text-gray-300 tw-place-items-center tw-text-[12px] tw-w-full tw-text-center tw-place-content-around">
          <span>Copyright © 2023-2025</span>
          <span>All trademarks and copyrights belong to their respective owners.</span>
        </div>
      </footer>
    </>
  );
}
