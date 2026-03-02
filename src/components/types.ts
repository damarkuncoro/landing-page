import type { BaseConfig } from "../core/types";

export interface ButtonConfig extends BaseConfig {
  text: string;
  url: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  target?: "_blank" | "_self";
}

export interface HeaderConfig extends BaseConfig {
  logo?: string;
  title?: string;
  links: {
    id?: string;
    text: string;
    url: string;
    target?: "_blank" | "_self";
  }[];
}

export interface HeroConfig extends BaseConfig {
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
  buttons: ButtonConfig[];
  alignment?: "left" | "center" | "right";
  skin?: "default" | "skin2" | "skin3" | "skin4";
}

export interface FeatureConfig extends BaseConfig {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface TestimonialConfig extends BaseConfig {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

export interface PricingConfig extends BaseConfig {
  plans: {
    id?: string;
    title: string;
    description: string;
    price: number;
    period?: string;
    features: string[];
    button: ButtonConfig;
    featured?: boolean;
  }[];
}

export interface FooterConfig extends BaseConfig {
  logo?: string;
  title?: string;
  description?: string;
  links: {
    title: string;
    items: {
      text: string;
      url: string;
      target?: "_blank" | "_self";
    }[];
  }[];
  socialLinks: {
    platform: string;
    url: string;
    icon?: string;
  }[];
  copyright?: string;
}

export interface CtaConfig extends BaseConfig {
  title: string;
  description: string;
  button: ButtonConfig;
  image?: string;
}
export interface StatConfig extends BaseConfig {
  number: string;
  label: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
}

export interface FaqConfig extends BaseConfig {
  items: {
    id?: string;
    question: string;
    answer: string;
  }[];
}
