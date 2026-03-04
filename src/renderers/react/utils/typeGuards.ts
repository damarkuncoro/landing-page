import type { ButtonConfig, HeaderConfig, HeroConfig, FeatureConfig, TestimonialConfig, FooterConfig, PricingConfig, CtaConfig, StatConfig, FaqConfig } from "@/components/types";

/**
 * Type guards for component configurations.
 * Ensures type safety when working with dynamic configurations.
 */

export function isButtonConfig(config: any): config is ButtonConfig {
  return config && typeof config === 'object' && typeof config.text === 'string' && typeof config.url === 'string';
}

export function isHeaderConfig(config: any): config is HeaderConfig {
  return config && typeof config === 'object' && Array.isArray(config.links);
}

export function isHeroConfig(config: any): config is HeroConfig {
  return config && typeof config === 'object' && typeof config.title === 'string' && Array.isArray(config.buttons);
}

export function isFeatureConfig(config: any): config is FeatureConfig {
  return config && typeof config === 'object' && typeof config.title === 'string' && typeof config.description === 'string';
}

export function isTestimonialConfig(config: any): config is TestimonialConfig {
  return config && typeof config === 'object' && typeof config.quote === 'string' && typeof config.author === 'string';
}

export function isFooterConfig(config: any): config is FooterConfig {
  return config && typeof config === 'object' && Array.isArray(config.links) && Array.isArray(config.socialLinks);
}

export function isPricingConfig(config: any): config is PricingConfig {
  return config && typeof config === 'object' && Array.isArray(config.plans);
}

export function isCtaConfig(config: any): config is CtaConfig {
  return config && typeof config === 'object' && typeof config.title === 'string' && typeof config.description === 'string';
}

export function isStatConfig(config: any): config is StatConfig {
  return config && typeof config === 'object' && typeof config.number === 'string' && typeof config.label === 'string';
}

export function isFaqConfig(config: any): config is FaqConfig {
  return config && typeof config === 'object' && Array.isArray(config.items);
}

export function isValidSkinType(skin: any): skin is "default" | "tailwind" | "none" {
  return skin === "default" || skin === "tailwind" || skin === "none";
}