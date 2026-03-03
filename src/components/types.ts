import type { WithBaseConfig } from "../core/types";

export interface ButtonConfig extends WithBaseConfig<{
  text: string;
  url: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  target?: "_blank" | "_self";
  skin?: "default" | "tailwind";
}> {}

export interface HeaderConfig extends WithBaseConfig<{
  logo?: string;
  title?: string;
  links: {
    id?: string;
    text: string;
    url: string;
    target?: "_blank" | "_self";
  }[];
}> {}

export interface HeroConfig extends WithBaseConfig<{
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  captionsSrc?: string;
  buttons: ButtonConfig[];
  alignment?: "left" | "center" | "right";
  skin?: "default" | "skin2" | "skin3" | "skin4" | "skin5" | "skin6" | "skin7" | "skin8" | "skin9" | "skin10" | "tailwind";
}> {}

export interface FeatureConfig extends WithBaseConfig<{
  title: string;
  description: string;
  icon?: string;
  image?: string;
  skin?: "default" | "tailwind";
}> {}

export interface TestimonialConfig extends WithBaseConfig<{
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}> {}

export interface PricingConfig extends WithBaseConfig<{
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
}> {}

export interface FooterConfig extends WithBaseConfig<{
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
}> {}

export interface CtaConfig extends WithBaseConfig<{
  title: string;
  description: string;
  button: ButtonConfig;
  image?: string;
}> {}

export interface StatConfig extends WithBaseConfig<{
  number: string;
  label: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
}> {}

export interface FaqConfig extends WithBaseConfig<{
  items: {
    id?: string;
    question: string;
    answer: string;
  }[];
}> {}
