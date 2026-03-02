import { defineLandingPage } from '@damarkuncoro/landing-page'
import type { LandingPageConfig } from '@damarkuncoro/landing-page'
import { themeConfig } from './theme'
import { sectionsConfig } from './sections'

export const landingPageConfig: LandingPageConfig = defineLandingPage({
  title: 'Modern Landing Page',
  description: 'A beautiful, config-driven landing page',
  theme: themeConfig,
  sections: sectionsConfig,
})