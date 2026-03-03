import type { BaseSectionConfig } from "../types";
import type { PricingConfig } from "../../components/types";

export interface PricingSection extends BaseSectionConfig {
  type: "pricing";
  config: PricingConfig;
}

export function createPricingSection(
  config: PricingConfig,
  id?: string,
  className?: string,
): PricingSection {
  return {
    id: id || `pricing-${Date.now()}`,
    className,
    type: "pricing",
    config,
  };
}
