"use client";

import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

const navigation = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#" },
      { label: "Intelligence", href: "#" },
      { label: "Analytics", href: "#" },
      { label: "Automation", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Support", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#050816]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-10 xl:px-12 xl:py-20">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              XAI
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-8 text-[#94A3B8]">
              Transforming raw data into structured intelligence,
              actionable insight, and AI-powered automation
              through thoughtful product design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              {[
                {
                  icon: <FiGithub size={18} />,
                  href: "#",
                },
                {
                  icon: <FiLinkedin size={18} />,
                  href: "#",
                },
                {
                  icon: <FiTwitter size={18} />,
                  href: "#",
                },
                {
                  icon: <FiMail size={18} />,
                  href: "#",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1E293B] text-[#CBD5E1] transition-all duration-300 hover:border-[#5B8CFF] hover:bg-[#5B8CFF]/10 hover:text-white"
                >
                  {item.icon}
                </Link>
              ))}

            </div>
          </div>

          {/* Navigation */}

          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#94A3B8] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-5 border-t border-[#1E293B] pt-8 text-center text-sm text-[#64748B] md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()} XAI Intelligence Workspace.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-end">

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}