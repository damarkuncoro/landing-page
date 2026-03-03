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

export type WithBaseConfig<T> = T & {
  id?: string;
  className?: string;
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

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
    normal: string | number;
    medium: string | number;
    bold: string | number;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  sizes?: {
    subtitleMaxWidth?: string;
    containerMaxWidth?: string;
  };
}

export type ResolvedThemeConfig = ThemeConfig;

export type SectionConfig = WithBaseConfig<
  | { type: "hero"; config: import("../components/types").HeroConfig; label?: string }
  | { type: "features"; config: import("../components/types").FeatureConfig[]; label?: string }
  | { type: "testimonials"; config: import("../components/types").TestimonialConfig[]; label?: string }
  | { type: "pricing"; config: import("../components/types").PricingConfig; label?: string }
  | { type: "cta"; config: import("../components/types").CtaConfig; label?: string }
  | { type: "footer"; config: import("../components/types").FooterConfig; label?: string }
  | { type: "stats"; config: import("../components/types").StatConfig[]; label?: string }
  | { type: "faq"; config: import("../components/types").FaqConfig; label?: string }
  | { type: "header"; config: import("../components/types").HeaderConfig; label?: string }
>;

export type Component = WithBaseConfig<
  | { type: "button"; config: import("../components/types").ButtonConfig }
  | { type: "card"; config: any }
  | { type: "image"; config: any }
  | { type: "text"; config: any }
  | { type: "video"; config: any }
>;

export interface LandingPageConfig extends WithBaseConfig<{
  title: string;
  description: string;
  sections: readonly SectionConfig[];
  theme?: DeepPartial<ThemeConfig>;
}> {}
