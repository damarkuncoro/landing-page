import React from 'react'
import type { PricingConfig } from '../../components/types'
import { PricingSkin } from './skins/PricingSkin'

/**
 * Komponen Pricing yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Pricing = ({ config, theme }: { config: PricingConfig; theme: any }) => {
  return (
    <PricingSkin
      {...config}
      theme={theme}
    />
  )
}

export default Pricing
