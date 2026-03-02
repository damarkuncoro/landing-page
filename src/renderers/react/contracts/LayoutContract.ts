import React from 'react'

/**
 * Kontrak UI untuk Layout Dasar (Box, Flex, Container).
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */

export interface BoxProps extends React.AllHTMLAttributes<HTMLElement> {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  as?: any // Menggunakan any untuk fleksibilitas elemen (div, section, header, dsb)
}

export interface FlexProps extends BoxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  gap?: string | number
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export interface ContainerProps extends BoxProps {
  maxWidth?: string
  padding?: string
  center?: boolean
}
