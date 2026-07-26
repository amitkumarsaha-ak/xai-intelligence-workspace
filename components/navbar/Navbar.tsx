"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navItems = [
  { label: "Solutions", href: "#" },
  { label: "Platform", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* Logo */}

        <Link
          href="/"
          className="text-[28px] font-bold tracking-tight text-white lg:text-[34px]"
        >
          XAI
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-[14px] font-medium text-[#B8C0D4] transition-colors hover:text-white"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Right */}

        <div className="hidden items-center gap-6 lg:flex">
          <button className="text-[14px] font-medium text-white">
            Sign In
          </button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-[#5B8CFF] px-5 py-2.5 text-[14px] font-medium text-white"
          >
            Book Demo →
          </motion.button>
        </div>

        {/* Mobile Toggle */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? (
            <HiOutlineX size={22} />
          ) : (
            <HiOutlineMenuAlt3 size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-6">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-4 text-[#CBD5E1] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <button className="mt-6 rounded-lg border border-white/10 py-3 text-white">
                Sign In
              </button>

              <button className="mt-3 rounded-lg bg-[#5B8CFF] py-3 font-medium text-white">
                Book Demo →
              </button>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}