"use client";

import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import MetricCard from "./MetricCard";
import RevenueChart from "./RevenueChart";
import ChartCard from "./ChartCard";
import DataTable from "./DataTable";

import { metrics } from "@/data/dashboard";

export default function Dashboard() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 md:py-28 xl:py-32">

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-[-220px] top-[80px] h-[500px] w-[500px] rounded-full bg-[#5B8CFF]/10 blur-[180px]" />

      <div className="pointer-events-none absolute right-[-220px] bottom-[-120px] h-[520px] w-[520px] rounded-full bg-[#7C5CFF]/10 blur-[180px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4FD1FF]/5 blur-[160px]" />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-8 xl:px-10"
      >        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="mb-10 text-center md:mb-12 xl:mb-14"
        >
          <h2
            className="
              text-[34px]
              font-bold
              tracking-[-0.03em]

              bg-gradient-to-r
              from-white
              via-[#EEF4FF]
              to-[#AFC7FF]
              bg-clip-text
              text-transparent

              md:text-[44px]
              xl:text-[52px]
            "
          >
            Intelligence Workspace
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-[#9FB0CA] md:text-lg">
            Everything you need to understand your business,
            monitor AI performance, and transform data into
            actionable intelligence.
          </p>
        </motion.div>

        {/* Dashboard */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-[#1E293B]
            bg-[#0B1020]/90
            backdrop-blur-2xl
            shadow-[0_45px_120px_rgba(0,0,0,.45)]
          "
        >

          {/* Glass Overlay */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.03),transparent_35%,transparent)]" />

          {/* Top Glow */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[600px] -translate-x-1/2 rounded-full bg-[#5B8CFF]/10 blur-[130px]" />

          {/* Bottom Glow */}

          <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#7C5CFF]/10 blur-[140px]" />

          <div className="relative z-10 grid lg:grid-cols-[250px_1fr]">

            <Sidebar />

            <div
              className="
                relative
                border-t
                border-[#1E293B]
                p-5

                lg:border-l
                lg:border-t-0
                lg:p-8
              "
            >

              {/* Top */}

              <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">                <input
                  type="text"
                  placeholder="Search anything..."
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-[#1E293B]
                    bg-white/[0.04]
                    backdrop-blur-xl
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#64748B]
                    transition-all
                    duration-300

                    focus:border-[#5B8CFF]/40
                    focus:bg-white/[0.06]
                    focus:ring-2
                    focus:ring-[#5B8CFF]/20

                    lg:max-w-[360px]
                  "
                />

                <div className="flex items-center justify-end gap-4">

                  <button
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#1E293B]
                      bg-white/[0.04]
                      backdrop-blur-xl
                      transition-all
                      duration-300

                      hover:border-[#5B8CFF]/35
                      hover:bg-[#172033]
                      hover:shadow-[0_8px_25px_rgba(91,140,255,.18)]
                    "
                  >
                    🔔
                  </button>

                  <button
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#1E293B]
                      bg-white/[0.04]
                      backdrop-blur-xl
                      transition-all
                      duration-300

                      hover:border-[#5B8CFF]/35
                      hover:bg-[#172033]
                      hover:shadow-[0_8px_25px_rgba(91,140,255,.18)]
                    "
                  >
                    ⚙️
                  </button>

                  <div
                    className="
                      h-11
                      w-11
                      rounded-full
                      border
                      border-white/10
                      bg-gradient-to-br
                      from-[#5B8CFF]
                      via-[#6E7DFF]
                      to-[#7C5CFF]
                      shadow-[0_0_35px_rgba(91,140,255,.35)]
                    "
                  />

                </div>

              </div>

              {/* Metric Cards */}

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {metrics.map((metric) => (

                  <MetricCard
                    key={metric.title}
                    {...metric}
                  />

                ))}

              </div>

              {/* Charts */}

              <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">

                <RevenueChart />

                <ChartCard title="Data Sources" />

              </div>

              {/* Bottom */}              <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">

                <DataTable />

                <ChartCard title="AI Summary" />

              </div>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}