import React from 'react'
import { createReactRenderer } from '@damarkuncoro/landing-page'
import { organicGroceriesLandingPage } from './config/landingPage'

const Landing = createReactRenderer()

export default function App() {
  return <Landing config={organicGroceriesLandingPage} />
}
