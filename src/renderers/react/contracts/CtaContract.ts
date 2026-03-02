import React from 'react'
import type { ButtonConfig } from '../../../components/types'

/**
 * Kontrak UI untuk Cta Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface CtaContractProps {
  title: string
  description: string
  button: ButtonConfig
  image?: string
  className?: string
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
}
