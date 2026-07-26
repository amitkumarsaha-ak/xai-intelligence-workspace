"use client";

type Props = {
  variant: "ingest" | "analyze" | "insight";
};

export default function StepVisual({ variant }: Props) {
  switch (variant) {
    case "ingest":
      return <IngestVisual />;

    case "analyze":
      return <AnalyzeVisual />;

    default:
      return <InsightVisual />;
  }
}

function IngestVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0F172A]">

      {/* Database */}

      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B8CFF]/25 ring-2 ring-[#5B8CFF]/40" />

      {/* Inputs */}

      <div className="absolute left-4 top-6 h-9 w-9 rounded-lg border border-white/10 bg-[#121827]" />

      <div className="absolute left-4 top-16 h-9 w-9 rounded-lg border border-white/10 bg-[#121827]" />

      <div className="absolute left-4 top-26 h-9 w-9 rounded-lg border border-white/10 bg-[#121827]" />

      {/* Outputs */}

      <div className="absolute right-4 top-10 h-9 w-9 rounded-lg border border-[#5B8CFF]/40 bg-[#1A2236]" />

      <div className="absolute right-4 top-22 h-9 w-9 rounded-lg border border-[#5B8CFF]/40 bg-[#1A2236]" />

    </div>
  );
}

function AnalyzeVisual() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-[#0F172A]">

      <div className="absolute h-28 w-28 rounded-full border border-[#7C5CFF]/30" />

      <div className="absolute h-20 w-20 rounded-full border border-[#5B8CFF]/30" />

      <div className="h-4 w-4 rounded-full bg-[#C4B5FD]" />

    </div>
  );
}

function InsightVisual() {
  return (
    <div className="flex h-full gap-3 rounded-2xl bg-[#0F172A] p-4">

      <div className="flex flex-1 items-end gap-2">

        <div className="h-10 w-3 rounded bg-[#5B8CFF]" />

        <div className="h-16 w-3 rounded bg-[#5B8CFF]" />

        <div className="h-7 w-3 rounded bg-[#5B8CFF]" />

        <div className="h-20 w-3 rounded bg-[#5B8CFF]" />

      </div>

      <div className="flex-1 rounded-xl border border-white/10" />

    </div>
  );
}