export type SectionType = 'hero' | 'features' | 'testimonials' | 'pricing' | 'cta' | 'footer' | 'stats' | 'faq' | 'header'

export type ComponentType = 'button' | 'card' | 'image' | 'text' | 'video'

export interface BaseConfig {
  id?: string
  className?: string
}

export interface LandingPageConfig extends BaseConfig {
  title: string
  description: string
  sections: SectionConfig[]
  theme?: Partial<ThemeConfig>
}

export interface ThemeConfig {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    muted: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  fonts: {
    heading: string
    body: string
    mono: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export interface SectionConfig extends BaseConfig {
  type: SectionType
  config: any
}

export interface Component extends BaseConfig {
  type: ComponentType
  config: any
}