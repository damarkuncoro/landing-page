import type { BaseSectionConfig } from "../types";
import type { FeatureConfig } from "../../components/types";

export interface FeaturesSection extends BaseSectionConfig {
  type: "features";
  config: {
    features: FeatureConfig[];
    skin?: "default" | "tailwind" | "none";
  };
}

export function createFeaturesSection(
  config: { features: FeatureConfig[]; skin?: "default" | "tailwind" | "none" },
  id?: string,
  className?: string,
): FeaturesSection {
  return {
    id: id || `features-${Date.now()}`,
    className,
    type: "features",
    config,
  };
}
