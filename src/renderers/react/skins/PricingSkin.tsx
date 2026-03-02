import React from 'react'
import { PricingBase } from '../base/PricingBase'
import type { PricingContractProps } from '../contracts/PricingContract'

/**
 * Skin untuk Pricing Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const PricingSkin = (props: PricingContractProps & { theme: any }) => {
  const { theme, ...config } = props

  const sectionStyle: React.CSSProperties = {
    padding: '4rem 0',
    ...config.style,
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    ...config.containerStyle,
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: theme.spacing.xl,
    maxWidth: '1000px',
    margin: '0 auto',
    ...config.gridStyle,
  }

  const planStyle = (plan: any): React.CSSProperties => ({
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    border: `2px solid ${plan.featured ? theme.colors.primary : `${theme.colors.muted}20`}`,
    borderRadius: '0.5rem',
    boxShadow: plan.featured ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    ...config.planStyle?.(plan),
  })

  const featuredBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    ...config.featuredBadgeStyle,
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
    ...config.titleStyle,
  }

  const descriptionStyle: React.CSSProperties = {
    color: theme.colors.muted,
    marginBottom: theme.spacing.md,
    ...config.descriptionStyle,
  }

  const priceContainerStyle: React.CSSProperties = {
    marginBottom: theme.spacing.lg,
    ...config.priceContainerStyle,
  }

  const priceStyle: React.CSSProperties = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.colors.text,
    ...config.priceStyle,
  }

  const periodStyle: React.CSSProperties = {
    color: theme.colors.muted,
    ...config.periodStyle,
  }

  const featuresListStyle: React.CSSProperties = {
    marginBottom: theme.spacing.lg,
    listStyle: 'none',
    padding: 0,
    flex: 1,
    ...config.featuresListStyle,
  }

  const featureItemStyle: React.CSSProperties = {
    padding: `${theme.spacing.sm} 0`,
    color: theme.colors.text,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    ...config.featureItemStyle,
  }

  return (
    <PricingBase
      {...config}
      theme={theme}
      style={sectionStyle}
      containerStyle={containerStyle}
      gridStyle={gridStyle}
      planStyle={planStyle}
      featuredBadgeStyle={featuredBadgeStyle}
      titleStyle={titleStyle}
      descriptionStyle={descriptionStyle}
      priceContainerStyle={priceContainerStyle}
      priceStyle={priceStyle}
      periodStyle={periodStyle}
      featuresListStyle={featuresListStyle}
      featureItemStyle={featureItemStyle}
    />
  )
}
