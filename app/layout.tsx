import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import SmoothScroll from "@/components/ui/SmoothScroll";
import CursorGlow from "@/components/ui/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "XAI – Intelligence Workspace",
    template: "%s | XAI",
  },

  description:
    "Transform raw data into structured intelligence with AI-powered analytics, automation, and interactive visualization.",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "Analytics",
    "Dashboard",
    "Visualization",
    "Automation",
    "Workspace",
  ],

  authors: [
    {
      name: "XAI",
    },
  ],

  creator: "XAI",

  metadataBase: new URL("https://xai-workspace.vercel.app"),

  openGraph: {
    title: "XAI – Intelligence Workspace",

    description:
      "Transform raw data into structured intelligence.",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "XAI – Intelligence Workspace",

    description:
      "Transform raw data into structured intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${inter.variable} ${inter.className} bg-[#050816] text-white antialiased`}
      >
        {/* Smooth Scroll */}
        <SmoothScroll />

        {/* Cursor Glow */}
        <CursorGlow />

        {/* Application */}
        {children}
      </body>
    </html>
  );
}