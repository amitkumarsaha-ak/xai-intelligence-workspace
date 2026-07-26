import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import InsightFlow from "@/components/insight-flow/InsightFlow";
import Dashboard from "@/components/dashboard/Dashboard";
import WowSection from "@/components/wow/WowSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#050816] pt-[72px] text-white">

      {/* Global Background Glow */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-260px] top-[120px] h-[700px] w-[700px] rounded-full bg-[#5B8CFF]/8 blur-[220px]" />

        <div className="absolute right-[-260px] top-[900px] h-[700px] w-[700px] rounded-full bg-[#7C5CFF]/8 blur-[220px]" />

        <div className="absolute left-1/2 top-[1850px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4FD1FF]/6 blur-[180px]" />

      </div>

      {/* Navigation */}

      <Navbar />

      {/* Hero */}

      <Hero />

      {/* Insight Flow */}

      <InsightFlow />

      {/* Dashboard */}

      <Dashboard />

      {/* WOW Section */}

      <WowSection />

      {/* Footer */}

      <Footer />

    </main>
  );
}