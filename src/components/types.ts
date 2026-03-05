import type { WithBaseConfig } from "../core/types";

/**
 * Base configuration for all list items.
 * Provides consistent id field for React keys.
 */
export interface BaseItemConfig {
  /** Unique identifier for React keys */
  id?: string;
  /** Display text */
  text: string;
  /** URL link */
  url: string;
  /** Link target */
  target?: "_blank" | "_self";
}

export interface ButtonConfig extends WithBaseConfig<{
  text: string;
  url: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  target?: "_blank" | "_self";
  skin?: "default" | "tailwind" | "none";
  padding?: string;
  fontSize?: string;
}> {}

export interface NavbarLinkConfig {
  id?: string;
  text: string;
  url?: string;
  target?: "_blank" | "_self";
  isActive?: boolean;
  isLoading?: boolean;
  children?: NavbarLinkConfig[];
}

export interface LanguageConfig {
  code: string;
  name: string;
}

export interface LanguageSelectorConfig {
  currentLanguage: string;
  languages: LanguageConfig[];
  onLanguageChange?: (code: string) => void;
}

export interface ThemeSwitcherConfig {
  currentTheme: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
}

export interface HeaderConfig extends WithBaseConfig<{
  logo?: string;
  title?: string;
  links: NavbarLinkConfig[];
  buttons?: ButtonConfig[];
  fixed?: boolean;
  scrollEffect?: boolean;
  skin?: "default" | "tailwind" | "modern" | "none";
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  initialSearchValue?: string;
  showSearchInMobileMenu?: boolean;
  languageSelector?: LanguageSelectorConfig;
  themeSwitcher?: ThemeSwitcherConfig;
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
  skin?: "default" | "skin2" | "skin3" | "skin4" | "skin5" | "skin6" | "skin7" | "skin8" | "skin9" | "skin10" | "tailwind" | "none";
}> {}

export interface FeatureConfig extends WithBaseConfig<{
  title: string;
  description: string;
  icon?: string;
  image?: string;
  skin?: "default" | "tailwind" | "none";
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
  skin?: "default" | "tailwind" | "none";
}> {}

export interface FooterLinkItemConfig extends BaseItemConfig {}

export interface FooterLinkGroupConfig {
  title: string;
  items: FooterLinkItemConfig[];
}

export interface FooterConfig extends WithBaseConfig<{
  logo?: string;
  title?: string;
  description?: string;
  links: FooterLinkGroupConfig[];
  socialLinks: {
    platform: string;
    url: string;
    icon?: string;
  }[];
  copyright?: string;
  skin?: "default" | "tailwind" | "none";
  // Custom styles for fine-tuning
  styles?: {
    container?: React.CSSProperties;
    column?: React.CSSProperties;
    link?: React.CSSProperties;
    title?: React.CSSProperties;
  };
}> {}

export interface CtaConfig extends WithBaseConfig<{
  title: string;
  description: string;
  button: ButtonConfig;
  image?: string;
  skin?: "default" | "tailwind" | "none";
}> {}

export interface StatConfig extends WithBaseConfig<{
  id?: string;
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
  skin?: "default" | "tailwind" | "none";
  // Custom styles for fine-tuning
  styles?: {
    container?: React.CSSProperties;
    item?: React.CSSProperties;
    question?: React.CSSProperties;
    answer?: React.CSSProperties;
  };
}> {}
