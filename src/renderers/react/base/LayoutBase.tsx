import React from 'react'
import type { BoxProps, FlexProps, ContainerProps } from '../contracts/LayoutContract'

/**
 * Base UI untuk Layout (Box, Flex, Container).
 * Depend pada UI Contract (aturan 13).
 */

export const Box = React.forwardRef<any, BoxProps>((props, ref) => {
  const { as: Component = 'div', children, className, style, ...rest } = props
  return (
    <Component ref={ref} className={className} style={style} {...rest}>
      {children}
    </Component>
  )
})

export const Flex = React.forwardRef<any, FlexProps>((props, ref) => {
  const {
    as: Component = 'div',
    children,
    className,
    style,
    direction = 'row',
    justify = 'flex-start',
    align = 'stretch',
    gap = 0,
    wrap = 'nowrap',
    ...rest
  } = props

  const flexStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: typeof gap === 'number' ? `${gap}px` : gap,
    flexWrap: wrap,
    ...style,
  }

  return (
    <Component ref={ref} className={className} style={flexStyle} {...rest}>
      {children}
    </Component>
  )
})

export const Container = React.forwardRef<any, ContainerProps>((props, ref) => {
  const {
    as: Component = 'div',
    children,
    className,
    style,
    maxWidth = '1200px',
    padding = '0 1rem',
    center = true,
    ...rest
  } = props

  const containerStyle: React.CSSProperties = {
    maxWidth,
    padding,
    margin: center ? '0 auto' : undefined,
    ...style,
  }

  return (
    <Component ref={ref} className={className} style={containerStyle} {...rest}>
      {children}
    </Component>
  )
})

Box.displayName = 'Box'
Flex.displayName = 'Flex'
Container.displayName = 'Container'
