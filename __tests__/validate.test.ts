import { describe, it, expect } from 'vitest'
import { validateLandingPageConfig, validateSectionConfig } from '../src/schema/validate'

describe('Validation', () => {
  describe('validateLandingPageConfig', () => {
    it('should validate a valid configuration', () => {
      const config = {
        title: 'Test Landing Page',
        description: 'A test landing page',
        sections: [
          {
            id: 'hero',
            type: 'hero',
            config: {
              title: 'Welcome',
              subtitle: 'This is a test landing page',
              buttons: [
                {
                  id: 'cta',
                  text: 'Get Started',
                  url: 'https://example.com/signup',
                  variant: 'primary',
                  size: 'md',
                },
              ],
            },
          },
        ],
      }

      const errors = validateLandingPageConfig(config)
      expect(errors).toBeNull()
    })

    it('should return errors for invalid configuration', () => {
      const config = {
        // Missing title (required)
        description: 'A test landing page',
        sections: [], // Empty sections array (minItems: 1)
      }

      const errors = validateLandingPageConfig(config)
      expect(errors).not.toBeNull()
      expect(errors).toEqual([
        {
          field: 'root',
          message: "must have required property 'title'",
          type: 'required',
        },
        {
          field: '/sections',
          message: 'must NOT have fewer than 1 items',
          type: 'minItems',
        },
      ])
    })

    it('should validate hero section', () => {
      const config = {
        title: 'Test Landing Page',
        description: 'A test landing page',
        sections: [
          {
            id: 'hero',
            type: 'hero',
            config: {
              // Missing title (required)
              subtitle: 'This is a test landing page',
              buttons: [
                {
                  id: 'cta',
                  text: 'Get Started',
                  url: 'https://example.com/signup',
                  variant: 'primary',
                  size: 'md',
                },
              ],
            },
          },
        ],
      }

      const errors = validateLandingPageConfig(config)
      expect(errors).toEqual([
        {
          field: 'sections[0]',
          errors: [
            {
              field: 'config',
              message: "must have required property 'title'",
              type: 'required',
            },
          ],
        },
      ])
    })
  })

  describe('validateSectionConfig', () => {
    it('should validate hero section config', () => {
      const heroConfig = {
        title: 'Welcome',
        subtitle: 'This is a test landing page',
        buttons: [
          {
            id: 'cta',
            text: 'Get Started',
            url: 'https://example.com/signup',
            variant: 'primary',
            size: 'md',
          },
        ],
      }

      const errors = validateSectionConfig('hero', heroConfig)
      expect(errors).toBeNull()
    })

    it('should validate features section config', () => {
      const featuresConfig = {
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
        ],
      }

      const errors = validateSectionConfig('features', featuresConfig)
      expect(errors).toBeNull()
    })

    it('should return errors for invalid hero section', () => {
      const heroConfig = {
        // Missing title (required)
        subtitle: 'This is a test landing page',
        buttons: [
          {
            id: 'cta',
            text: 'Get Started',
            url: 'https://example.com/signup',
            variant: 'primary',
            size: 'md',
          },
        ],
      }

      const errors = validateSectionConfig('hero', heroConfig)
      expect(errors).toEqual([
        {
          field: 'root',
          message: "must have required property 'title'",
          type: 'required',
        },
      ])
    })

    it('should return null for unknown section type', () => {
      const config = {
        content: 'Custom content',
      }

      const errors = validateSectionConfig('unknown', config)
      expect(errors).toBeNull()
    })
  })
})