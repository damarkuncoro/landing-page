import type { BaseSectionConfig } from "../types";
import type { StatConfig } from "../../components/types";

export interface StatsSection extends BaseSectionConfig {
  type: "stats";
  config: {
    stats: StatConfig[];
    skin?: "default" | "tailwind" | "none";
  };
}

export function createStatsSection(
  config: { stats: StatConfig[]; skin?: "default" | "tailwind" | "none" },
  id?: string,
  className?: string,
): StatsSection {
  return {
    id: id || `stats-${Date.now()}`,
    className,
    type: "stats",
    config,
  };
}
