"use client";

import { motion } from "framer-motion";

const data = [42, 68, 58, 96, 74, 118, 105];

export default function RevenueChart() {
  const width = 620;
  const height = 220;
  const padding = 24;

  const max = Math.max(...data);

  const points = data
    .map((value, index) => {
      const x =
        padding +
        (index * (width - padding * 2)) /
          (data.length - 1);

      const y =
        height -
        padding -
        (value / max) *
          (height - padding * 2);

      return `${x},${y}`;
    })
    .join(" ");

  const area =
    `${padding},${height - padding} ` +
    points +
    ` ${width - padding},${height - padding}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
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
      {/* Background Glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#5B8CFF]/0 blur-3xl transition-all duration-500 group-hover:bg-[#5B8CFF]/10" />

      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Revenue Overview
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            Last 7 Days
          </p>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <span className="text-sm font-semibold text-emerald-400">
            +18.4%
          </span>
        </div>
      </div>

      {/* Chart */}

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-[220px] min-w-[520px] w-full"
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#4FD1FF"
              />
              <stop
                offset="100%"
                stopColor="#5B8CFF"
              />
            </linearGradient>

            <linearGradient
              id="fillGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#5B8CFF"
                stopOpacity="0.28"
              />

              <stop
                offset="100%"
                stopColor="#5B8CFF"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Grid */}

          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="24"
              x2={width - 24}
              y1={40 + i * 45}
              y2={40 + i * 45}
              stroke="#1E293B"
              strokeDasharray="5 5"
            />
          ))}

          {/* Area */}

          <motion.polygon
            points={area}
            fill="url(#fillGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Line */}

          <motion.polyline
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 1.4,
            }}
          />

          {/* Points */}

          {data.map((value, index) => {
            const x =
              padding +
              (index * (width - padding * 2)) /
                (data.length - 1);

            const y =
              height -
              padding -
              (value / max) *
                (height - padding * 2);

            return (
              <motion.g
                key={index}
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r="7"
                  fill="#5B8CFF"
                  opacity=".18"
                />

                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#4FD1FF"
                />
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-[#1E293B] pt-5">
        <span className="text-sm text-[#64748B]">
          Weekly Performance
        </span>

        <span className="font-semibold text-white">
          118K Revenue
        </span>
      </div>
    </motion.div>
  );
}