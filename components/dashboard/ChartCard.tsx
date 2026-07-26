"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
};

const sources = [
  { name: "CRM", value: 42, color: "#5B8CFF" },
  { name: "API", value: 28, color: "#4FD1FF" },
  { name: "Files", value: 18, color: "#7C5CFF" },
  { name: "Other", value: 12, color: "#64748B" },
];

export default function ChartCard({ title }: Props) {
  if (title === "AI Summary") {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[#1E293B]
        bg-[#0F172A]/90
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#5B8CFF]/35
        hover:shadow-[0_24px_60px_rgba(91,140,255,.18)]
      "
    >
      {/* Glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#5B8CFF]/0 blur-3xl transition-all duration-500 group-hover:bg-[#5B8CFF]/10" />

      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            AI Summary
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            Generated a few seconds ago
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="h-2.5 w-2.5 rounded-full bg-emerald-400"
          />

          <span className="text-xs font-medium text-emerald-400">
            AI Active
          </span>
        </div>
      </div>

      {/* Summary */}

      <div className="mt-6 rounded-2xl border border-[#1E293B] bg-[#111827]/70 p-5">
        <p className="text-sm leading-7 text-[#CBD5E1]">
          Revenue trends remain positive across all monitored
          channels. AI detected higher customer engagement
          and recommends increasing automation investment
          for the next campaign cycle.
        </p>
      </div>

      {/* Recommendations */}

      <div className="mt-6 space-y-3">
        <div className="rounded-xl border border-[#1E293B] bg-[#111827]/50 p-4">
          <p className="text-xs uppercase tracking-wider text-[#64748B]">
            Recommendation
          </p>

          <p className="mt-2 text-sm text-white">
            Increase marketing automation budget by 12%.
          </p>
        </div>

        <div className="rounded-xl border border-[#1E293B] bg-[#111827]/50 p-4">
          <p className="text-xs uppercase tracking-wider text-[#64748B]">
            Expected Impact
          </p>

          <p className="mt-2 text-sm text-[#4FD1FF]">
            +18% conversion growth predicted.
          </p>
        </div>
      </div>

      {/* Confidence */}

      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-[#94A3B8]">
            Confidence
          </span>

          <span className="font-semibold text-emerald-400">
            98.6%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#1E293B]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "98%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-[#5B8CFF] via-[#4FD1FF] to-[#7C5CFF]"
          />
        </div>
      </div>

      {/* Footer */}

      <motion.button
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          mt-8
          w-full
          rounded-xl
          bg-gradient-to-r
          from-[#5B8CFF]
          to-[#7C5CFF]
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:shadow-[0_12px_30px_rgba(91,140,255,.35)]
        "
      >
        View Full Report
      </motion.button>
    </motion.div>
  );
}

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-[#1E293B] bg-[#0F172A] p-5 sm:p-6"
    >
      <h3 className="text-base font-semibold text-white sm:text-lg">
        {title}
      </h3>

      <div className="mt-8 flex items-center justify-center">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40">
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full -rotate-90"
          >
            <circle
              cx="60"
              cy="60"
              r="42"
              stroke="#1E293B"
              strokeWidth="12"
              fill="none"
            />

            <motion.circle
              cx="60"
              cy="60"
              r="42"
              stroke="#5B8CFF"
              strokeWidth="12"
              strokeDasharray="110 154"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <motion.circle
              cx="60"
              cy="60"
              r="42"
              stroke="#4FD1FF"
              strokeWidth="12"
              strokeDasharray="72 192"
              strokeDashoffset="-112"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            />

            <motion.circle
              cx="60"
              cy="60"
              r="42"
              stroke="#7C5CFF"
              strokeWidth="12"
              strokeDasharray="46 218"
              strokeDashoffset="-186"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              92%
            </span>

            <span className="text-xs text-[#64748B]">
              Healthy
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {sources.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-sm text-[#CBD5E1]">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-medium text-white">
              {item.value}%
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}