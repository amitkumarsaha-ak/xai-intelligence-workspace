"use client";

import { motion } from "framer-motion";

const menu = [
  "Dashboard",
  "Insights",
  "Analytics",
  "Automations",
  "Reports",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside
      className="
        relative
        flex
        min-h-full
        flex-col
        border-r
        border-[#1E293B]
        bg-[#0C1324]/90
        p-6
        backdrop-blur-xl

        lg:min-h-[760px]
        lg:p-8
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 rounded-full bg-[#5B8CFF]/10 blur-[90px]" />

      {/* Logo */}

      <div className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          XAI
        </h2>

        <p className="mt-2 text-sm text-[#64748B]">
          Intelligence Platform
        </p>
      </div>

      {/* Navigation */}

      <nav className="relative z-10 mt-10 space-y-2">
        {menu.map((item, index) => (
          <motion.button
            key={item}
            whileHover={{
              x: 6,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className={`
              group
              relative
              flex
              w-full
              items-center
              overflow-hidden
              rounded-xl
              px-4
              py-3
              text-left
              transition-all
              duration-300

              ${
                index === 0
                  ? "bg-[#5B8CFF]/15 border border-[#5B8CFF]/20 text-white"
                  : "border border-transparent text-[#94A3B8] hover:border-[#1E293B] hover:bg-white/5 hover:text-white"
              }
            `}
          >
            {/* Active Indicator */}

            {index === 0 && (
              <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-[#4FD1FF]" />
            )}

            <span className="relative z-10 ml-2 text-sm font-medium">
              {item}
            </span>
          </motion.button>
        ))}
      </nav>

      {/* Footer */}

      <div className="relative z-10 mt-auto space-y-3 pt-8">
        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            w-full
            rounded-xl
            border
            border-[#1E293B]
            bg-[#111827]
            py-3
            text-sm
            font-medium
            text-[#CBD5E1]
            transition-all
            duration-300
            hover:border-[#5B8CFF]/30
            hover:bg-[#182133]
          "
        >
          Help Center
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            w-full
            rounded-xl
            border
            border-[#1E293B]
            bg-[#111827]
            py-3
            text-sm
            font-medium
            text-[#CBD5E1]
            transition-all
            duration-300
            hover:border-red-500/30
            hover:bg-red-500/10
            hover:text-red-300
          "
        >
          Log Out
        </motion.button>

        {/* Version */}

        <div className="pt-4 text-center text-xs text-[#475569]">
          XAI Platform v1.0
        </div>
      </div>
    </aside>
  );
}