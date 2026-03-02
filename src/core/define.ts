import type { LandingPageConfig, SectionConfig } from './types'
import { createTheme } from './theme'
import { validateConfig, validateSection } from './validators'

export function defineLandingPage(config: LandingPageConfig) {
  // Validate required fields
  const errors = validateConfig(config)
  if (errors.length > 0) {
    throw new Error(`Invalid landing page configuration: ${errors.join(', ')}`)
  }

  // Create the landing page instance
  const landingPage = {
    ...config,
    theme: createTheme(config.theme),

    // Methods
    getSection(id: string) {
      return this.sections.find((section) => section.id === id)
    },

    addSection(section: SectionConfig) {
      const sectionErrors = validateSection(section)
      if (sectionErrors.length > 0) {
        throw new Error(`Invalid section: ${sectionErrors.join(', ')}`)
      }
      this.sections.push(section)
      return this
    },

    removeSection(id: string) {
      this.sections = this.sections.filter((section) => section.id !== id)
      return this
    },

    updateSection(id: string, updates: Partial<SectionConfig>) {
      const index = this.sections.findIndex((section) => section.id === id)
      if (index !== -1) {
        const updatedSection = { ...this.sections[index], ...updates }
        const sectionErrors = validateSection(updatedSection)
        if (sectionErrors.length > 0) {
          throw new Error(`Invalid section updates: ${sectionErrors.join(', ')}`)
        }
        this.sections[index] = updatedSection
      }
      return this
    },

    // Render method - returns the raw config for consumption by renderers
    toJSON() {
      return JSON.parse(JSON.stringify(this))
    },

    // Validate the landing page configuration
    validate() {
      return validateConfig(this)
    },

    // Get section by type
    getSectionsByType(type: string) {
      return this.sections.filter((section) => section.type === type)
    },

    // Check if configuration is valid
    isValid() {
      return this.validate().length === 0
    },
  }

  return landingPage
}