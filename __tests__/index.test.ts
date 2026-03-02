import { describe, it, expect } from 'vitest'
import { defineLandingPage } from '../src/core/define'
import type { LandingPageConfig } from '../src/core/types'

describe('defineLandingPage', () => {
  it('should create a landing page instance', () => {
    const config: LandingPageConfig = {
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

    const landingPage = defineLandingPage(config)

    expect(landingPage).toBeDefined()
    expect(landingPage.title).toBe(config.title)
    expect(landingPage.description).toBe(config.description)
    expect(landingPage.sections).toEqual(config.sections)
  })

  it('should validate configuration', () => {
    const config: LandingPageConfig = {
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

    const landingPage = defineLandingPage(config)
    const errors = landingPage.validate()
    expect(errors).toEqual([])
  })

  it('should get section by id', () => {
    const config: LandingPageConfig = {
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

    const landingPage = defineLandingPage(config)
    const heroSection = landingPage.getSection('hero')
    expect(heroSection).toBeDefined()
    expect(heroSection?.id).toBe('hero')
  })

  it('should add and remove sections', () => {
    const config: LandingPageConfig = {
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

    const landingPage = defineLandingPage(config)
    expect(landingPage.sections.length).toBe(1)

    landingPage.addSection({
      id: 'features',
      type: 'features',
      config: {
        features: [
          {
            id: 'feature1',
            title: 'Test Feature',
            description: 'This is a test feature',
          },
        ],
      },
    } as any)
    expect(landingPage.sections.length).toBe(2)

    landingPage.removeSection('features')
    expect(landingPage.sections.length).toBe(1)
  })

  it('should update section', () => {
    const config: LandingPageConfig = {
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

    const landingPage = defineLandingPage(config)
    landingPage.updateSection('hero', {
      config: {
        ...landingPage.getSection('hero')?.config,
        title: 'Updated Title',
      },
    })

    expect(landingPage.getSection('hero')?.config.title).toBe('Updated Title')
  })

  it('should throw error when missing required fields', () => {
    // @ts-expect-error Testing missing required fields
    expect(() => defineLandingPage({})).toThrow()
  })
})