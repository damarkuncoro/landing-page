import React from "react";

// Base properties (shared)
export interface BaseLayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // Typography
  color?: string;
  fontSize?: string | number;
  lineHeight?: string | number;
  fontWeight?: number | string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textDecoration?: string;
  // Background
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round';
  // Spacing
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  // Border
  borderRadius?: string | number;
  border?: string;
  borderWidth?: string | number;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  // Dimensions
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  // Display
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
}

// Box: TIDAK ADA as, TIDAK ADA HTMLAttributes
export interface BoxOwnProps extends BaseLayoutProps, React.HTMLAttributes<HTMLElement> {}

// Flex: hanya behavior layout
export interface FlexOwnProps extends BoxOwnProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: string | number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

// Container: layout constraint
export interface ContainerOwnProps extends BoxOwnProps {
  maxWidth?: string | number;
  padding?: string | number;
  center?: boolean;
}

// Component props with HTML attributes support
export type BoxProps = BoxOwnProps & React.HTMLAttributes<HTMLElement> & { as?: React.ElementType };
export type FlexProps = FlexOwnProps & React.HTMLAttributes<HTMLElement> & { as?: React.ElementType };
export type ContainerProps = ContainerOwnProps & React.HTMLAttributes<HTMLElement> & { as?: React.ElementType };
