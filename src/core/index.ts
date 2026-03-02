export { defineLandingPage } from "./define";
export { createTheme, validateTheme, defaultTheme } from "./theme";
export {
  validateConfig,
  validateSection,
  isValidConfig,
  isValidSection,
} from "./validators";
export {
  createHeroSection,
  createFeaturesSection,
  createTestimonialsSection,
  createPricingSection,
  createCtaSection,
  createFooterSection,
  createStatsSection,
  createFaqSection,
  createHeaderSection,
} from "./sections";
export * from "./utils/contrast";

export type {
  LandingPageConfig,
  SectionType,
  ComponentType,
  ThemeConfig,
  SectionConfig,
  Component,
  BaseConfig,
} from "./types";

export type {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  PricingSection,
  CtaSection,
  FooterSection,
  StatsSection,
  FaqSection,
  HeaderSection,
  SectionTypes,
} from "./sections";
