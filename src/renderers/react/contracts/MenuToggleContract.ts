import React from 'react'

/**
 * Kontrak UI untuk Menu Toggle (Hamburger).
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface MenuToggleContractProps {
  isOpen: boolean
  onClick: () => void
  ariaLabel?: string
  className?: string
  style?: React.CSSProperties
  iconOpen?: React.ReactNode
  iconClose?: React.ReactNode
}
