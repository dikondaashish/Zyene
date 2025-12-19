"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShootingStars } from "@/components/motions/shooting-stars";
import { HeroPill } from "@/components/motions/hero-pill";

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

export default function MainHero() {
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
      </div>
    </section>
  );
}
