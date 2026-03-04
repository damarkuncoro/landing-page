import { defineLandingPage } from '@damarkuncoro/landing-page';
import { organicGroceriesTheme } from './theme';
import { organicGroceriesSections } from './sections';

export const organicGroceriesLandingPage = defineLandingPage({
  title: 'Seedy - Catering Lezat & Sehat untuk Setiap Acara',
  description: 'Catering fresh, bahan pilihan, dan pelayanan tepat waktu untuk kebutuhan harian, event, hingga corporate.',
  theme: organicGroceriesTheme,
  sections: organicGroceriesSections,
});