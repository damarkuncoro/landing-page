import React from "react";

/**
 * Kontrak UI untuk Layout Dasar (Box, Flex, Container).
 * ❌ Tidak boleh depend ke HTML element apa pun
 * ✅ HANYA own props
 */

// Base properties (shared)
export interface BaseLayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Box: TIDAK ADA as, TIDAK ADA HTMLAttributes
export interface BoxOwnProps extends BaseLayoutProps {}

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
