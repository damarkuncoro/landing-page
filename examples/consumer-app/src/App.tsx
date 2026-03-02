import { createReactRenderer } from '@damarkuncoro/landing-page'
import { landingPageConfig } from './config/landingPage'

// Create the React renderer
const LandingPage = createReactRenderer()

// Main App component
function App() {
  return <LandingPage config={landingPageConfig} />
}

export default App