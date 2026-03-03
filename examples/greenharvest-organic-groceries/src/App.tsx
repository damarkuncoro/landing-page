import { createReactRenderer } from '@damarkuncoro/landing-page'
import { greenHarvestLandingPage } from './config/landingPage'

const LandingPage = createReactRenderer()

export default function App() {
  return (
    <div className="min-h-screen">
      <LandingPage config={greenHarvestLandingPage} />
    </div>
  )
}
