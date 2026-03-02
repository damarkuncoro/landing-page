export type SectionType =
  | "hero"
  | "features"
  | "testimonials"
  | "pricing"
  | "cta"
  | "footer"
  | "stats"
  | "faq"
  | "header";

export type ComponentType = "button" | "card" | "image" | "text" | "video";

export interface BaseConfig {
  id?: string;
  className?: string;
}

export interface LandingPageConfig extends BaseConfig {
  title: string;
  description: string;
  sections: SectionConfig[];
  theme?: Partial<ThemeConfig>;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fonts: {
   heading: string;
   body: string;
   mono: string;
 };
 typography: {
   h1: string;
   h2: string;
   h3: string;
   body: string;
   small: string;
 };
 fontWeights: {
   normal: string;
   medium: string;
   bold: string;
 };
 breakpoints: {
   sm: string;
   md: string;
    lg: string;
    xl: string;
  };
}

export interface SectionConfig extends BaseConfig {
  type: SectionType;
  config: any;
}

export interface Component extends BaseConfig {
  type: ComponentType;
  config: any;
}
