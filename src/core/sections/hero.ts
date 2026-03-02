import type { SectionConfig } from "../types";
import type { HeroConfig } from "../../components/types";

export interface HeroSection extends SectionConfig {
  type: "hero";
  config: HeroConfig;
}

export function createHeroSection(
  config: HeroConfig,
  id?: string,
  className?: string,
): HeroSection {
  return {
    id: id || `hero-${Date.now()}`,
    className,
    type: "hero",
    config,
  };
}
