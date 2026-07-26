"use client";

import { motion } from "framer-motion";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  subtitle: string;
};

export default function MetricCard({
  title,
  value,
  change,
  subtitle,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.45,
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-[#1E293B]
        bg-[#0F172A]/90
        backdrop-blur-xl
        p-5
        transition-all
        duration-300

        hover:border-[#5B8CFF]/35
        hover:shadow-[0_22px_60px_rgba(91,140,255,.18)]
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#5B8CFF]/0 blur-3xl transition-all duration-500 group-hover:bg-[#5B8CFF]/15" />

      {/* Top Border */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-[#5B8CFF]
          via-[#4FD1FF]
          to-transparent
        "
      />

      {/* Title */}

      <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
        {title}
      </p>

      {/* Value */}

      <div className="relative mt-5 flex items-end justify-between">
        <motion.h3
          initial={{
            scale: 0.95,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className="text-[36px] font-bold leading-none text-white"
        >
          {value}
        </motion.h3>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <span className="text-sm font-semibold text-emerald-400">
            {change}
          </span>
        </div>
      </div>

      {/* Subtitle */}

      <p className="relative mt-4 text-sm leading-7 text-[#94A3B8]">
        {subtitle}
      </p>

      {/* Bottom Accent */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.25,
        }}
        className="mt-6 h-px bg-gradient-to-r from-[#5B8CFF] via-[#4FD1FF] to-transparent"
      />

      {/* Corner Glow */}

      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 rounded-full bg-[#7C5CFF]/0 blur-2xl transition-all duration-500 group-hover:bg-[#7C5CFF]/15" />
    </motion.div>
  );
}