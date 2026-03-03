import React from "react";

/**
 * Kontrak UI untuk Header.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface HeaderContractProps {
  logo?: string;
  title?: string;
  links: {
    text: string;
    url: string;
    target?: "_blank" | "_self";
  }[];
  buttons?: {
    text: string;
    url: string;
    variant: "primary" | "secondary" | "outline" | "ghost";
    target?: "_blank" | "_self";
  }[];
  fixed?: boolean;
  scrollEffect?: boolean;
  className?: string;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}
