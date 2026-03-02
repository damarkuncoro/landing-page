import React from 'react'
import type { ButtonConfig } from '../../../components/types'

/**
 * Kontrak UI untuk Pricing Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface PricingContractProps {
  plans: {
    id?: string
    title: string
    description: string
    price: number
    period?: string
    features: string[]
    button: ButtonConfig
    featured?: boolean
    className?: string
  }[]
  className?: string
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  gridStyle?: React.CSSProperties
  planStyle?: (plan: any) => React.CSSProperties
  featuredBadgeStyle?: React.CSSProperties
  titleStyle?: React.CSSProperties
  descriptionStyle?: React.CSSProperties
  priceContainerStyle?: React.CSSProperties
  priceStyle?: React.CSSProperties
  periodStyle?: React.CSSProperties
  featuresListStyle?: React.CSSProperties
  featureItemStyle?: React.CSSProperties
  checkIcon?: React.ReactNode
}
