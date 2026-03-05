export { defineLandingPage } from "./core/define";
export {
  createHeaderSection,
  createHeroSection,
  createFeaturesSection,
  createTestimonialsSection,
  createPricingSection,
  createCtaSection,
  createFooterSection,
  createStatsSection,
  createFaqSection,
} from "./core/sections";
export { defaultTheme } from "./core/theme";
export type {
  LandingPageConfig,
  SectionType,
  ComponentType,
  ThemeConfig,
  ColorScheme,
} from "./core/types";
export type {
  ButtonConfig,
  HeaderConfig,
  HeroConfig,
  FeatureConfig,
  TestimonialConfig,
  FooterConfig,
  FooterLinkItemConfig,
  FooterLinkGroupConfig,
  PricingConfig,
  CtaConfig,
  StatConfig,
  FaqConfig,
  BaseItemConfig,
} from "./components/types";
export { createReactRenderer } from "./renderers/react";
export { landingPageSchema, sectionConfigSchemas } from "./schema";
export { validateConfig, validateSection } from "./core/validators";
