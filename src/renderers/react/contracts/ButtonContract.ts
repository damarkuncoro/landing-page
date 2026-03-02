import React from "react";

/**
 * Kontrak UI untuk Button.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface ButtonContractProps {
  text: string;
  url: string;
  target?: "_blank" | "_self";
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLAnchorElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLAnchorElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
}
