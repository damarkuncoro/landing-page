import type { SectionConfig } from "../types";
import type { FooterConfig } from "../../components/types";

export interface FooterSection extends SectionConfig {
  type: "footer";
  config: FooterConfig;
}

export function createFooterSection(
  config: FooterConfig,
  id?: string,
  className?: string,
): FooterSection {
  return {
    id: id || `footer-${Date.now()}`,
    className,
    type: "footer",
    config,
  };
}
