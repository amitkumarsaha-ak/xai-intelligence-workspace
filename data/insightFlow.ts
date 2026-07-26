export type InsightVariant =
  | "ingest"
  | "analyze"
  | "insight";

export type InsightStep = {
  id: string;
  title: string;
  description: string;
  variant: InsightVariant;
};

export const insightSteps: InsightStep[] = [
  {
    id: "01",
    title: "Ingest Data",
    description:
      "Connect all your data sources and unify them into one place.",
    variant: "ingest",
  },
  {
    id: "02",
    title: "Analyze with AI",
    description:
      "Our AI models analyze, detect patterns, and uncover insights.",
    variant: "analyze",
  },
  {
    id: "03",
    title: "Generate Insight",
    description:
      "Turn analysis into actionable insights and recommendations.",
    variant: "insight",
  },
];