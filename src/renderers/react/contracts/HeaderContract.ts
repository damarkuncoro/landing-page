import React from 'react'

/**
 * Kontrak UI untuk Header.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface HeaderContractProps {
  logo?: string
  title?: string
  links: {
    text: string
    url: string
    target?: '_blank' | '_self'
  }[]
  className?: string
  isMobileMenuOpen?: boolean
  onMobileMenuToggle?: () => void
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
}
