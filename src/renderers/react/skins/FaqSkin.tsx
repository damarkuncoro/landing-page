import React from 'react'
import { FaqBase } from '../base/FaqBase'
import type { FaqContractProps } from '../contracts/FaqContract'

/**
 * Skin untuk Faq Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const FaqSkin = (props: FaqContractProps & { theme: any }) => {
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

  const itemStyle: React.CSSProperties = {
    marginBottom: theme.spacing.lg,
    border: `1px solid ${theme.colors.muted}20`,
    borderRadius: '0.5rem',
    overflow: 'hidden',
    ...config.itemStyle,
  }

  const questionStyle: React.CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: theme.colors.text,
    cursor: 'pointer',
    listStyle: 'none',
    ...config.questionStyle,
  }

  const answerStyle: React.CSSProperties = {
    marginTop: theme.spacing.md,
    color: theme.colors.muted,
    lineHeight: '1.6',
    ...config.answerStyle,
  }

  return (
    <FaqBase
      {...config}
      theme={theme}
      style={sectionStyle}
      containerStyle={containerStyle}
      itemStyle={itemStyle}
      questionStyle={questionStyle}
      answerStyle={answerStyle}
    />
  )
}
