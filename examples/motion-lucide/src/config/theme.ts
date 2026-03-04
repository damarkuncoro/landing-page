import type { ThemeConfig } from '@damarkuncoro/landing-page';

export const organicGroceriesTheme: ThemeConfig = {
  colors: {
    primary: '#16a34a', // Dark green - Fresh and organic
    secondary: '#22c55e', // Bright green - Natural and healthy
    accent: '#facc15', // Yellow - Cheerful and appetizing
    background: '#f6fef9', // Very light green - Fresh and clean
    text: '#052e16', // Dark green text - Readable and natural
    muted: '#64748b', // Gray for muted text - Subtle
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    mono: 'monospace',
  },
  typography: {
    h1: '3rem',
    h2: '2.25rem',
    h3: '1.5rem',
    body: '1.25rem',
    small: '0.875rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};