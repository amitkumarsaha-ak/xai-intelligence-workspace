"use client";

import StepCard from "./StepCard";
import { insightSteps } from "@/data/insightFlow";

export default function InsightFlow() {
  return (
    <section className="bg-[#050816] py-20 md:py-28 xl:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-12">

        {/* Heading */}

        <div className="text-center">

          <h2
            className="
              text-[36px]
              font-bold
              text-white

              md:text-[44px]

              xl:text-[52px]
            "
          >
            From Data To Intelligence
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[620px]
              text-[16px]
              leading-8
              text-[#94A3B8]

              md:text-[18px]
            "
          >
            Our AI-powered engine transforms complex information
            into structured intelligence and actionable insight.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-8

            lg:mt-20
            lg:flex-row
            lg:justify-center
            lg:gap-8

            xl:mt-24
            xl:gap-12
          "
        >
          {insightSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center xl:flex-row"
            >
              <StepCard
                id={step.id}
                title={step.title}
                description={step.description}
                variant={step.variant}
              />

              {index < insightSteps.length - 1 && (
                <>
                  {/* Desktop Connector */}

                  <div className="mx-8 hidden xl:flex items-center">
                    <div className="h-px w-16 bg-gradient-to-r from-[#3B82F6]/40 to-transparent" />
                  </div>

                  {/* Mobile Connector */}

                  <div className="my-5 flex xl:hidden">
                    <div className="h-12 w-px bg-gradient-to-b from-[#3B82F6]/40 to-transparent" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}