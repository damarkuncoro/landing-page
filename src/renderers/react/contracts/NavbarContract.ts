import React from 'react'

/**
 * Kontrak UI untuk Navbar.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface NavbarContractProps {
  links: {
    text: string
    url: string
    target?: '_blank' | '_self'
  }[]
  isMobile?: boolean
  isOpen?: boolean
  className?: string
  style?: React.CSSProperties
  linkStyle?: React.CSSProperties
  onLinkMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>, link: any) => void
  onLinkMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>, link: any) => void
}
