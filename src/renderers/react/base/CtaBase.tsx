import React from 'react'
import type { CtaContractProps } from '../contracts/CtaContract'
import Button from '../Button'
import { Container, Box } from './LayoutBase'
import type { ThemeConfig } from '../../../core/types'

/**
 * Base UI untuk Cta Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const CtaBase = React.forwardRef<HTMLElement, CtaContractProps & { theme: ThemeConfig }>((props, ref) => {
  const { 
    title, 
    description, 
    button, 
    image, 
    className, 
    style, 
    containerStyle, 
    contentStyle,
    theme 
  } = props

  return (
    <Box as="section" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={contentStyle}>
          <h2 style={{ fontSize: '2rem', marginBottom: theme.spacing.md }}>{title}</h2>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: theme.spacing.lg, 
            maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            {description}
          </p>
          <Button config={button} theme={theme} />
        </Box>
      </Container>
    </Box>
  )
})

CtaBase.displayName = 'CtaBase'
