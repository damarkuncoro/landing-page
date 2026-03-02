import React from 'react'
import type { NavbarContractProps } from '../contracts/NavbarContract'
import { Box, Flex } from './LayoutBase'

/**
 * Base UI untuk Navbar.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const NavbarBase = React.forwardRef<HTMLElement, NavbarContractProps>((props, ref) => {
  const { 
    links, 
    isMobile, 
    isOpen, 
    className, 
    style, 
    linkStyle,
    onLinkMouseEnter,
    onLinkMouseLeave 
  } = props

  if (isMobile && !isOpen) return null

  return (
    <Box as="nav" ref={ref} className={className} style={style}>
      <Flex as="ul" direction={isMobile ? 'column' : 'row'} gap="1.5rem" style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link, index) => (
          <Box as="li" key={index} style={{ marginBottom: isMobile ? '0.5rem' : 0 }}>
            <a
              href={link.url}
              target={link.target || '_self'}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              style={linkStyle}
              onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
              onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid currentColor'
                e.currentTarget.style.outlineOffset = '2px'
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none'
              }}
            >
              {link.text}
            </a>
          </Box>
        ))}
      </Flex>
    </Box>
  )
})

NavbarBase.displayName = 'NavbarBase'
