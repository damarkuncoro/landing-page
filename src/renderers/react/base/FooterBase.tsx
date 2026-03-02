import React from 'react'
import type { FooterContractProps } from '../contracts/FooterContract'
import { Container, Box, Flex } from './LayoutBase'

/**
 * Base UI untuk Footer Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const FooterBase = React.forwardRef<HTMLElement, FooterContractProps & { theme: any }>((props, ref) => {
  const { 
    logo, 
    title, 
    description, 
    links, 
    socialLinks, 
    copyright, 
    className, 
    style, 
    containerStyle, 
    gridStyle, 
    columnStyle, 
    linkStyle,
    onLinkMouseEnter,
    onLinkMouseLeave,
    theme 
  } = props

  return (
    <Box as="footer" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={gridStyle}>
          <Box style={columnStyle}>
            {logo && <img src={logo} alt={title || 'Logo'} style={{ marginBottom: theme.spacing.md }} loading="lazy" />}
            {title && (
              <Box as="h3" style={{ fontSize: '1.25rem', marginBottom: theme.spacing.md, color: theme.colors.text }}>
                {title}
              </Box>
            )}
            {description && <Box as="p" style={{ color: theme.colors.muted, lineHeight: '1.6' }}>{description}</Box>}
          </Box>
          
          {links.map((linkGroup) => (
            <Box key={linkGroup.title} style={columnStyle}>
              <Box as="h4" style={{ marginBottom: theme.spacing.md, color: theme.colors.text }}>{linkGroup.title}</Box>
              <Box as="ul" style={{ listStyle: 'none', padding: 0 }}>
                {linkGroup.items.map((link, index) => (
                  <Box as="li" key={index} style={{ marginBottom: theme.spacing.sm }}>
                    <a
                      href={link.url}
                      target={link.target || '_self'}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      style={linkStyle}
                      onMouseEnter={onLinkMouseEnter}
                      onMouseLeave={onLinkMouseLeave}
                    >
                      {link.text}
                    </a>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {copyright && (
          <Box style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: `1px solid ${theme.colors.muted}20`, textAlign: 'center' }}>
            <Box as="p" style={{ color: theme.colors.muted }}>{copyright}</Box>
          </Box>
        )}
      </Container>
    </Box>
  )
})

FooterBase.displayName = 'FooterBase'
