import React from 'react'
import type { HeroContractProps } from '../contracts/HeroContract'
import Button from '../Button'
import { Container, Flex, Box } from './LayoutBase'
import type { ThemeConfig } from '../../../core/types'

/**
 * Base UI untuk Hero Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const HeroBase = React.forwardRef<HTMLElement, HeroContractProps & { theme: ThemeConfig }>((props, ref) => {
  const { 
    title, 
    subtitle, 
    buttons, 
    image, 
    video, 
    alignment = 'center', 
    className, 
    style, 
    containerStyle, 
    contentStyle,
    theme 
  } = props

  return (
    <Box as="section" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Flex
          direction="column"
          gap={theme.spacing.xl}
          align={alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start'}
          style={{ textAlign: alignment, ...contentStyle }}
        >
          <Box>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: theme.colors.text,
              marginBottom: theme.spacing.md,
              lineHeight: '1.2',
            }}>
              {title}
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: theme.colors.muted,
              marginBottom: theme.spacing.lg,
              maxWidth: '600px',
              marginLeft: alignment === 'center' ? 'auto' : '0',
              marginRight: alignment === 'center' ? 'auto' : '0',
            }}>
              {subtitle}
            </p>
          </Box>
          {image && (
            <img
              src={image}
              alt={title || 'Hero'}
              style={{
                maxWidth: '100%',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
              loading="lazy"
            />
          )}
          {video && (
            <video
              src={video}
              controls
              style={{
                maxWidth: '100%',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            />
          )}
          <Flex gap={theme.spacing.md} wrap="wrap" justify={alignment === 'center' ? 'center' : 'flex-start'}>
            {buttons.map((button) => (
              <Button key={button.id} config={button} theme={theme} />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
})

HeroBase.displayName = 'HeroBase'
