import React from 'react'
import type { HeroConfig } from '../../components/types'
import { HeroSkin } from './skins/HeroSkin'

/**
 * Komponen Hero yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Hero = ({ config, theme }: { config: HeroConfig; theme: any }) => {
  return (
    <HeroSkin
      {...config}
      theme={theme}
    />
  )
}

export default Hero
