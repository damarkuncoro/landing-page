# @damarkuncoro/landing-page

Config-driven landing page library for building beautiful, responsive landing pages with minimal code.

## Features

- 🚀 **Config-driven**: Define your landing page with a simple JSON configuration
- 📦 **Framework-agnostic**: Works with any framework (React, Vue, Svelte, etc.)
- 🎨 **Themeable**: Customize colors, fonts, spacing, and breakpoints
- 📱 **Responsive**: Built with mobile-first design principles
- ⚡ **Fast**: Lightweight and optimized for performance
- 🔌 **Extensible**: Add custom sections and components
- 📝 **Type-safe**: Full TypeScript support

## Installation

```bash
npm install @damarkuncoro/landing-page
```

## Quick Start

1. Define your landing page configuration:

```typescript
import { defineLandingPage } from '@damarkuncoro/landing-page'

const landingPage = defineLandingPage({
  title: 'My Awesome Landing Page',
  description: 'A beautiful landing page built with @damarkuncoro/landing-page',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      config: {
        title: 'Welcome to Our Platform',
        subtitle: 'Discover amazing features that will transform your workflow',
        buttons: [
          {
            id: 'primary-button',
            text: 'Get Started',
            url: '/signup',
            variant: 'primary',
            size: 'md',
          },
          {
            id: 'secondary-button',
            text: 'Learn More',
            url: '/about',
            variant: 'secondary',
            size: 'md',
          },
        ],
      },
    },
    {
      id: 'features',
      type: 'features',
      config: {
        features: [
          {
            id: 'feature-1',
            title: 'Fast Performance',
            description: 'Our platform is optimized for speed and efficiency',
          },
          {
            id: 'feature-2',
            title: 'Modern Design',
            description: 'Beautiful, responsive interface that works on all devices',
          },
          {
            id: 'feature-3',
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security and reliability',
          },
        ],
      },
    },
  ],
})
```

2. Render it with your framework:

### React

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createReactRenderer } from '@damarkuncoro/landing-page'

const LandingPage = createReactRenderer()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage config={landingPage} />
  </React.StrictMode>
)
```

## Schema & Validation

The library includes comprehensive JSON schemas for validating landing page configurations. You can use these schemas to:

- Validate configurations before rendering
- Generate documentation
- Build no-code editors

### Validation API

```typescript
import { validateLandingPageConfig, validateSectionConfig } from '@damarkuncoro/landing-page'

// Validate entire landing page
const config = {
  title: 'My Landing Page',
  description: 'A beautiful landing page',
  sections: [],
}

const errors = validateLandingPageConfig(config)
console.log(errors) // [{ field: 'root', message: 'must NOT have fewer than 1 items', type: 'minItems' }]

// Validate single section
const heroSection = {
  title: 'Welcome',
  subtitle: 'This is my landing page',
}

const sectionErrors = validateSectionConfig('hero', heroSection)
console.log(sectionErrors) // null - valid
```

### Accessing Schemas

```typescript
import { landingPageSchema, sectionSchemas, schemaDefinitions } from '@damarkuncoro/landing-page'

// Get the entire landing page schema
console.log(landingPageSchema)

// Get specific section schemas
console.log(sectionSchemas.hero) // Hero section schema
console.log(sectionSchemas.features) // Features section schema
```

## Configuration

### LandingPageConfig

The main configuration object that defines your entire landing page.

```typescript
interface LandingPageConfig {
  id?: string
  className?: string
  title: string
  description: string
  sections: Section[]
  theme?: ThemeConfig
}
```

### Section Types

#### Hero Section

```typescript
interface HeroConfig {
  title: string
  subtitle: string
  image?: string
  video?: string
  buttons: ButtonConfig[]
  alignment?: 'left' | 'center' | 'right'
}
```

#### Features Section

```typescript
interface FeatureConfig {
  features: Feature[]
}

interface Feature {
  id: string
  title: string
  description: string
  icon?: string
  image?: string
}
```

#### Testimonials Section

```typescript
interface TestimonialConfig {
  testimonials: Testimonial[]
}

interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  avatar?: string
}
```

#### Pricing Section

```typescript
interface PricingConfig {
  plans: PricingPlan[]
}

interface PricingPlan {
  id: string
  title: string
  description: string
  price: number
  period?: string
  features: string[]
  button: ButtonConfig
  featured?: boolean
}
```

#### CTA Section

```typescript
interface CtaConfig {
  title: string
  description: string
  button: ButtonConfig
  image?: string
}
```

#### Footer Section

```typescript
interface FooterConfig {
  logo?: string
  title?: string
  description?: string
  links: {
    title: string
    items: {
      text: string
      url: string
      target?: '_blank' | '_self'
    }[]
  }[]
  socialLinks: {
    platform: string
    url: string
    icon?: string
  }[]
  copyright?: string
}
```

### Theme Configuration

```typescript
interface ThemeConfig {
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
```

## API

### defineLandingPage(config: LandingPageConfig)

Creates a landing page instance from a configuration object.

```typescript
const landingPage = defineLandingPage(config)
```

### Methods

- **getSection(id: string)**: Returns a section by id
- **addSection(section: Section)**: Adds a new section
- **removeSection(id: string)**: Removes a section by id
- **updateSection(id: string, updates: any)**: Updates a section
- **validate()**: Validates the configuration
- **toJSON()**: Returns the raw config

## Extensibility

You can create custom section types and renderers by extending the library.

### Custom Section Type

```typescript
// types.ts
export type SectionType = 'hero' | 'features' | 'testimonials' | 'pricing' | 'cta' | 'footer' | 'custom'

// components/types.ts
export interface CustomSectionConfig {
  content: string
}

// renderers/react.tsx
const CustomSection = ({ config, theme }: { config: CustomSectionConfig; theme: any }) => (
  <Section className={config.className}>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: config.content }} />
    </Container>
  </Section>
)

// In createReactRenderer
switch (section.type) {
  // ... existing types
  case 'custom':
    return <CustomSection config={section.config} theme={theme} key={section.id} />
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT