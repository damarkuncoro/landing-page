export { createHeaderSection } from './header'
export type { HeaderSection } from './header'

export { createHeroSection } from './hero'
export type { HeroSection } from './hero'

export { createFeaturesSection } from './features'
export type { FeaturesSection } from './features'

export { createTestimonialsSection } from './testimonials'
export type { TestimonialsSection } from './testimonials'

export { createPricingSection } from './pricing'
export type { PricingSection } from './pricing'

export { createCtaSection } from './cta'
export type { CtaSection } from './cta'

export { createFooterSection } from './footer'
export type { FooterSection } from './footer'

export { createStatsSection } from './stats'
export type { StatsSection } from './stats'

export { createFaqSection } from './faq'
export type { FaqSection } from './faq'

import type { HeaderSection as He } from './header'
import type { HeroSection as H } from './hero'
import type { FeaturesSection as F } from './features'
import type { TestimonialsSection as T } from './testimonials'
import type { PricingSection as P } from './pricing'
import type { CtaSection as C } from './cta'
import type { FooterSection as Fo } from './footer'
import type { StatsSection as S } from './stats'
import type { FaqSection as Fa } from './faq'

export type SectionTypes = {
  header: He
  hero: H
  features: F
  testimonials: T
  pricing: P
  cta: C
  footer: Fo
  stats: S
  faq: Fa
}

export type SectionType = keyof SectionTypes