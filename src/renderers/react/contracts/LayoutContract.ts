import React from "react";

/**
 * Kontrak UI untuk Layout Dasar (Box, Flex, Container).
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */

export interface BaseLayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface BoxProps extends React.AllHTMLAttributes<HTMLElement>, BaseLayoutProps {
  as?: any;
}

export interface FlexProps extends BoxProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: string | number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export interface ContainerProps extends BoxProps {
  maxWidth?: string | number;
  padding?: string | number;
  center?: boolean;
}
