import React from "react";

/**
 * Kontrak UI untuk Footer Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface FooterContractProps {
  logo?: string;
  title?: string;
  description?: string;
  links: {
    title: string;
    items: {
      text: string;
      url: string;
      target?: "_blank" | "_self";
    }[];
  }[];
  socialLinks: {
    platform: string;
    url: string;
    icon?: React.ReactNode;
  }[];
  copyright?: string;
  className?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  gridStyle?: React.CSSProperties;
  columnStyle?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
  onLinkMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onLinkMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
