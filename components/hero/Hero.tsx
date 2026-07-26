"use client";

import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">

      {/* Left Glow */}

      <div className="pointer-events-none absolute left-[-240px] top-[-180px] h-[560px] w-[560px] rounded-full bg-[#5B8CFF]/10 blur-[190px]" />

      {/* Right Glow */}

      <div className="pointer-events-none absolute right-[-220px] top-[120px] h-[520px] w-[520px] rounded-full bg-[#7C5CFF]/10 blur-[190px]" />

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#4FD1FF]/6 blur-[180px]" />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Hero Layout */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          gap-16
          px-6
          pb-20
          pt-32

          md:px-10

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-8
          lg:px-16

          xl:px-20
        "
      >
        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex-1"
        >
          <HeroContent />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="flex flex-1 justify-center lg:justify-end"
        >
          <HeroCanvas />
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3

          xl:flex
        "
      >
        <div className="h-12 w-[2px] rounded-full bg-gradient-to-b from-[#5B8CFF] to-transparent" />

        <span className="text-[11px] uppercase tracking-[0.35em] text-[#64748B]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}