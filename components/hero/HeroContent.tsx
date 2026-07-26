"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      className="
        w-full
        max-w-[620px]
        text-center
        lg:text-left
      "
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.6,
        }}
        className="inline-flex items-center rounded-full border border-[#5B8CFF]/30 bg-[#5B8CFF]/10 px-4 py-2 backdrop-blur-xl"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#4FD1FF] sm:text-xs">
          AI-Powered Intelligence
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
        className="
          mt-8
          font-bold
          leading-[1.05]
          tracking-[-0.04em]
          text-[#F8FAFC]

          text-[42px]

          sm:text-[54px]

          lg:text-[64px]

          xl:text-[72px]
        "
      >
        Transform Raw Data

        <br />

        Into Actionable

        <br />

        <span className="bg-gradient-to-r from-[#4FD1FF] via-[#5B8CFF] to-[#7C5CFF] bg-clip-text text-transparent">
          Intelligence
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.8,
        }}
        className="
          mx-auto
          mt-8
          max-w-[520px]
          text-[16px]
          leading-8
          text-[#94A3B8]

          lg:mx-0

          lg:text-[18px]
        "
      >
        XAI helps teams collect, analyze, and transform scattered
        data into intelligent insights, predictive analytics,
        and AI-powered automations that accelerate decision making.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="
          mt-10
          flex
          flex-col
          gap-4

          sm:flex-row

          lg:justify-start
        "
      >
        <motion.button
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            rounded-xl
            bg-[#5B8CFF]
            px-8
            py-4
            text-sm
            font-medium
            text-white
            transition-all
            duration-300

            hover:bg-[#709BFF]
            hover:shadow-[0_18px_45px_rgba(91,140,255,.35)]
          "
        >
          Request Demo
        </motion.button>

        <motion.button
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            rounded-xl
            border
            border-white/10
            px-8
            py-4
            text-sm
            font-medium
            text-white
            transition-all
            duration-300

            hover:border-[#5B8CFF]/30
            hover:bg-white/5
          "
        >
          Explore Platform
        </motion.button>
      </motion.div>

      {/* Trusted */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.65,
          duration: 0.8,
        }}
        className="mt-16"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#64748B]">
          Trusted by Innovative Teams
        </p>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-5

            text-base
            font-medium

            text-[#CBD5E1]
            opacity-70

            transition-opacity
            duration-300

            hover:opacity-100

            lg:justify-start
          "
        >
          <span>Stripe</span>
          <span>Linear</span>
          <span>Notion</span>
          <span>Vercel</span>
          <span>OpenAI</span>
          <span>Slack</span>
        </div>
      </motion.div>
    </motion.div>
  );
}