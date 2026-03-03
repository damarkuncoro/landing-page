import type { BaseSectionConfig } from "../types";
import type { TestimonialConfig } from "../../components/types";

export interface TestimonialsSection extends BaseSectionConfig {
  type: "testimonials";
  config: {
    testimonials: TestimonialConfig[];
  };
}

export function createTestimonialsSection(
  config: { testimonials: TestimonialConfig[] },
  id?: string,
  className?: string,
): TestimonialsSection {
  return {
    id: id || `testimonials-${Date.now()}`,
    className,
    type: "testimonials",
    config,
  };
}
