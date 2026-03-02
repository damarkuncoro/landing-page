import { defineLandingPage, validateConfig } from '@damarkuncoro/landing-page'

const config = {
  title: 'Verify Install',
  description: 'Testing import from published package',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      config: {
        title: 'Hello',
        subtitle: 'World',
        buttons: [
          { text: 'Go', url: 'https://example.com', variant: 'primary', size: 'md' },
        ],
      },
    },
  ],
}

const landingPage = defineLandingPage(config)
const errors = validateConfig(landingPage.toJSON())
if ((Array.isArray(errors) && errors.length === 0) || errors === null) {
  console.log('Import OK, validation OK')
} else {
  console.error('Validation errors:', errors)
  process.exit(1)
}
