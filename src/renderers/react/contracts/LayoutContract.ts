import React from "react";

/**
 * Kontrak UI untuk Layout Dasar (Box, Flex, Container).
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */

// Base properties
export interface BaseLayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Box properties
export interface BoxProps extends BaseLayoutProps, React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

// Flex properties
export interface FlexProps extends BoxProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: string | number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

// Container properties
export interface ContainerProps extends BoxProps {
  maxWidth?: string | number;
  padding?: string | number;
  center?: boolean;
}
