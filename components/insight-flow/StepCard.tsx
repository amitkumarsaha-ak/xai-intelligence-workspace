"use client";

import StepVisual from "./StepVisual";

type StepCardProps = {
  id: string;
  title: string;
  description: string;
  variant: "ingest" | "analyze" | "insight";
};

export default function StepCard({
  id,
  title,
  description,
  variant,
}: StepCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        w-full
        max-w-[350px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[#1F2A44]
        bg-[#0B1020]
        p-6
        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-[#3B82F6]/40
        hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]

        sm:h-[340px]

        xl:h-[360px]
        xl:p-7
      "
    >
      {/* Step */}

      <span className="text-[20px] font-semibold text-[#7C5CFF] xl:text-[22px]">
        {id}
      </span>

      {/* Title */}

      <h3 className="mt-5 text-[20px] font-semibold text-white xl:text-[22px]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 text-[15px] leading-7 text-[#94A3B8]">
        {description}
      </p>

      {/* Visual */}

      <div className="mt-auto h-[120px] xl:h-[140px]">
        <StepVisual variant={variant} />
      </div>
    </div>
  );
}