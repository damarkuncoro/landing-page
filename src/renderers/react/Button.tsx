import React from 'react'
import type { ButtonConfig } from '../../components/types'
import { ButtonSkin } from './skins/ButtonSkin'

/**
 * Komponen Button yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Button = ({ config, theme }: { config: ButtonConfig; theme: any }) => {
  return (
    <ButtonSkin
      {...config}
      theme={theme}
    />
  )
}

export default Button
