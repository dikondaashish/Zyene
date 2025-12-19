"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { HeroPill } from "@/components/ui/hero-pill";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      className="hero-section tw-relative tw-flex tw-min-h-[100vh] tw-w-full tw-max-w-[100vw] tw-flex-col"
      id="hero-section"
    >
      {/* Shooting Stars Background */}
      <div className="tw-absolute tw-inset-0 tw-z-0 tw-overflow-visible" style={{ width: "100%", height: "100%" }}>
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={8}
          maxSpeed={15}
          minDelay={500}
          maxDelay={1500}
          starWidth={80}
          starHeight={3}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={6}
          maxSpeed={12}
          minDelay={800}
          maxDelay={2000}
          starWidth={60}
          starHeight={2}
        />
        <ShootingStars
          starColor="#6366f1"
          trailColor="#a5b4fc"
          minSpeed={10}
          maxSpeed={18}
          minDelay={400}
          maxDelay={1200}
          starWidth={100}
          starHeight={3}
        />
      </div>

      <div className="hero-bg-gradient tw-relative tw-z-10 tw-flex tw-h-full tw-min-h-[100vh] tw-w-full tw-flex-col tw-items-center tw-justify-center tw-px-[5%] max-lg:tw-px-4" style={{ paddingTop: "180px", paddingBottom: "40px" }}>
        <div className="tw-flex tw-flex-col tw-items-center tw-w-full">
          <motion.div
            className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Announcement Pill */}
            <motion.div variants={itemVariants} style={{ marginBottom: "50px" }}>
              <HeroPill
                label="Zyene Inc. has officially acquired Webinflo."
                announcement="🎉 Milestone"
              />
            </motion.div>

            <motion.h1
              className="tw-text-center tw-font-semibold tw-uppercase tw-text-gray-900 dark:tw-text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: "0.9" }}
              variants={itemVariants}
            >
              We Don&apos;t Just Market.
              <br />
              <span className="tw-font-thin tw-font-serif">We Engineer Demand.</span>
            </motion.h1>

            <motion.p
              className="tw-mt-8 tw-max-w-[700px] tw-text-lg max-lg:tw-text-base tw-px-4 tw-text-center tw-text-gray-700 dark:tw-text-gray-300"
              variants={itemVariants}
            >
              Zyene transforms ambitious brands into category leaders through AI-powered search optimization
              <br className="max-md:tw-hidden" />
              and a content engine that drives real revenue.
            </motion.p>

            <motion.div
              className="tw-mt-10 tw-mb-16 tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-4"
              variants={itemVariants}
            >
              <Link
                href="/get-proposal"
                className="btn !tw-rounded-xl !tw-py-4 !tw-px-6 max-lg:!tw-py-3 max-lg:!tw-px-5 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-group !tw-bg-[#6366f1] !tw-text-white tw-transition-transform tw-duration-[0.3s] hover:tw-scale-[1.03]"
              >
                <span>Book Your Free Strategy Call</span>
                <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
              </Link>

              <Link
                href="/case-studies"
                className="btn !tw-rounded-xl !tw-py-4 !tw-px-6 max-lg:!tw-py-3 max-lg:!tw-px-5 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-group !tw-bg-transparent !tw-text-black dark:!tw-text-white tw-transition-colors tw-duration-[0.3s] tw-border-[1px] tw-border-black dark:tw-border-white"
              >
                <span>See Our Results</span>
                <i className="bi bi-arrow-right group-hover:tw-translate-x-1 tw-duration-300"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <div className="tw-relative tw-flex tw-w-full tw-place-content-center tw-place-items-center" style={{ marginTop: "80px" }} id="dashboard-container">
          <div className="purple-bg-grad tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-top-[5%] tw-h-[200px] tw-w-[200px]"></div>

          <div
            className="tw-relative tw-max-w-[80%] tw-bg-white dark:tw-bg-black tw-border-[1px] dark:tw-border-[#36393c] lg:tw-w-[1024px] lg:tw-h-[650px] tw-flex tw-shadow-xl max-lg:tw-h-[450px] max-lg:tw-w-full tw-overflow-hidden tw-min-w-[320px] md:tw-w-full tw-min-h-[450px] tw-rounded-xl tw-bg-transparent max-md:tw-max-w-full"
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
                    <Link
                      href="#"
                      className="btn !tw-w-full !tw-bg-transparent tw-duration-[0.3s] hover:!tw-bg-black hover:!tw-text-white dark:hover:!tw-bg-white dark:hover:!tw-text-black !tw-border-[1px] !tw-border-black !tw-text-black dark:!tw-border-white dark:!tw-text-white"
                    >
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
                    <div
                      className="prompt-container tw-overflow-y-auto tw-px-[5%] max-lg:tw-px-2 scrollbar max-lg:tw-max-h-[80%] tw-max-h-[550px] max-lg:tw-mt-12 tw-w-full tw-h-full tw-z-10 tw-flex tw-flex-col"
                      id="prompt-container"
                    >
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
                    className="tw-place-content-center tw-mt-auto tw-h-[50px] tw-p-1 tw-place-items-center tw-justify-around tw-flex tw-gap-1 tw-bottom-2 tw-w-full tw-rounded-md tw-bg-[#f3f4f6] dark:tw-bg-[#171717]"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="tw-min-w-[140px] tw-min-h-[80px] max-lg:tw-absolute tw-z-10 tw-top-1 tw-left-1/2 max-lg:tw--translate-x-1/2 tw-flex tw-flex-col tw-text-sm tw-gap-1 tw-place-content-center">
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
                      className="tw-p-2 !tw-outline-none tw-bg-transparent tw-border-none tw-w-full tw-placeholder-gray-500 dark:tw-placeholder-opacity-60 dark:tw-placeholder-gray-300 tw-max-w-[80%] tw-h-full"
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
  );
}
