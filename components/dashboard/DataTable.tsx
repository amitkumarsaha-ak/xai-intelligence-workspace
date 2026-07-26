"use client";

import { motion } from "framer-motion";

const rows = [
  {
    id: "#XA-1024",
    source: "Sales CRM",
    status: "Completed",
    confidence: "98%",
  },
  {
    id: "#XA-1025",
    source: "Marketing API",
    status: "Running",
    confidence: "95%",
  },
  {
    id: "#XA-1026",
    source: "Customer Data",
    status: "Completed",
    confidence: "97%",
  },
  {
    id: "#XA-1027",
    source: "Finance Report",
    status: "Pending",
    confidence: "89%",
  },
];

const statusStyle: Record<string, string> = {
  Completed:
    "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Running:
    "border border-sky-500/20 bg-sky-500/10 text-sky-400",
  Pending:
    "border border-amber-500/20 bg-amber-500/10 text-amber-400",
};

export default function DataTable() {
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
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-[#5B8CFF]/35
        hover:shadow-[0_24px_60px_rgba(91,140,255,.18)]
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-0 top-0 h-48 w-48 rounded-full bg-[#5B8CFF]/0 blur-3xl transition-all duration-500 group-hover:bg-[#5B8CFF]/10" />

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Recent Analysis
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            Latest AI processed datasets
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-lg border border-[#1E293B] bg-[#111827] px-4 py-2 text-sm text-[#CBD5E1] transition hover:border-[#5B8CFF]/30 hover:bg-[#172033]"
        >
          View All
        </motion.button>
      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-2xl border border-[#1E293B]">
        <table className="min-w-full">
          <thead className="bg-[#111827]">
            <tr>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                ID
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                Source
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                Status
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-[#64748B]">
                Confidence
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  border-t
                  border-[#1E293B]
                  transition-all
                  duration-200
                  odd:bg-white/[0.01]
                  hover:bg-white/[0.04]
                "
              >
                <td className="px-5 py-4 font-medium text-white">
                  {row.id}
                </td>

                <td className="px-5 py-4 text-[#CBD5E1]">
                  {row.source}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyle[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <span className="font-semibold text-[#4FD1FF]">
                    {row.confidence}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Accent */}

      <div className="mt-6 h-px bg-gradient-to-r from-[#5B8CFF] via-[#4FD1FF] to-transparent" />
    </motion.div>
  );
}