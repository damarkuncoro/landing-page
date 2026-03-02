import React from 'react'
import type { ButtonConfig } from '../../../components/types'

/**
 * Kontrak UI untuk Hero Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface HeroContractProps {
  title: string
  subtitle: string
  buttons: ButtonConfig[]
  image?: string
  video?: string
  alignment?: 'left' | 'center' | 'right'
  className?: string
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
}