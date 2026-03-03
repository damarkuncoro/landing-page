import { defineLandingPage } from '@damarkuncoro/landing-page'
import { organicGroceriesTheme } from './theme'
import { organicGroceriesSections } from './sections'

export const organicGroceriesLandingPage = defineLandingPage({
  title: 'Organic Groceries',
  description: 'Catering lezat & sehat untuk setiap acara. Fresh, tepat waktu, dan variatif.',
  theme: organicGroceriesTheme,
  sections: organicGroceriesSections,
})