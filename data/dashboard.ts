export type Metric = {
  title: string;
  value: string;
  change: string;
  subtitle: string;
};

export const metrics: Metric[] = [
  {
    title: "Total Revenue",
    value: "$12,540",
    change: "+12.5%",
    subtitle: "vs last month",
  },
  {
    title: "AI Accuracy",
    value: "98.6%",
    change: "+2.1%",
    subtitle: "vs last month",
  },
  {
    title: "Predictions",
    value: "1,245",
    change: "+18.2%",
    subtitle: "vs last month",
  },
  {
    title: "Efficiency",
    value: "76%",
    change: "+8.5%",
    subtitle: "vs last month",
  },
];