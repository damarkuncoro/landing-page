import { landingPageSchema } from '../../schema'

export const landingPageJsonSchema = landingPageSchema

export function getLandingPageSchema() {
  return landingPageJsonSchema
}

export function getSectionSchema(type: string) {
  const sectionSchemas = {
    hero: require('../../schema').sectionSchemas.hero,
    features: require('../../schema').sectionSchemas.features,
    testimonials: require('../../schema').sectionSchemas.testimonials,
    pricing: require('../../schema').sectionSchemas.pricing,
    cta: require('../../schema').sectionSchemas.cta,
    footer: require('../../schema').sectionSchemas.footer,
  }

  return sectionSchemas[type as keyof typeof sectionSchemas] || null
}