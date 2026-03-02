import type { SectionConfig } from "../types";
import type { HeaderConfig } from "../../components/types";

export interface HeaderSection extends SectionConfig {
  type: "header";
  config: HeaderConfig;
}

export function createHeaderSection(
  config: HeaderConfig,
  id?: string,
  className?: string,
): HeaderSection {
  return {
    id: id || `header-${Date.now()}`,
    className,
    type: "header",
    config,
  };
}
