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

export type ColorScheme = "light" | "dark" | "system";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  /** Dark mode colors - optional for theming */
  colorsDark?: ThemeColors;
  /** Color scheme preference */
  colorScheme?: ColorScheme;
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

export interface BaseSectionConfig {
  type: SectionType;
  id?: string;
  className?: string;
  label?: string;
}

export type SectionConfig =
  | WithBaseConfig<{ type: "hero"; config: import("../components/types").HeroConfig; label?: string }>
  | WithBaseConfig<{ type: "features"; config: { features: import("../components/types").FeatureConfig[] }; label?: string }>
  | WithBaseConfig<{ type: "testimonials"; config: { testimonials: import("../components/types").TestimonialConfig[] }; label?: string }>
  | WithBaseConfig<{ type: "pricing"; config: import("../components/types").PricingConfig; label?: string }>
  | WithBaseConfig<{ type: "cta"; config: import("../components/types").CtaConfig; label?: string }>
  | WithBaseConfig<{ type: "footer"; config: import("../components/types").FooterConfig; label?: string }>
  | WithBaseConfig<{ type: "stats"; config: { stats: import("../components/types").StatConfig[] }; label?: string }>
  | WithBaseConfig<{ type: "faq"; config: import("../components/types").FaqConfig; label?: string }>
  | WithBaseConfig<{ type: "header"; config: import("../components/types").HeaderConfig; label?: string }>;

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
