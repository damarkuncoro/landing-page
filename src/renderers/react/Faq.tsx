import React from 'react'
import type { FaqConfig } from '../../components/types'
import { FaqSkin } from './skins/FaqSkin'

/**
 * Komponen Faq yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Faq = ({ config, theme }: { config: FaqConfig; theme: any }) => {
  return (
    <FaqSkin
      {...config}
      theme={theme}
    />
  )
}

export default Faq
