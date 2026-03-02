import type { SectionConfig } from "../types";
import type { TestimonialConfig } from "../../components/types";

export interface TestimonialsSection extends SectionConfig {
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
