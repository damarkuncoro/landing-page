import React from "react";
import type { LanguageSelectorConfig, ThemeSwitcherConfig } from "@/components/types";

/**
 * Kontrak UI untuk Header.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface HeaderContractProps {
  logo?: string;
  title?: string;
  links: any[];
  buttons?: {
    text: string;
    url: string;
    variant: "primary" | "secondary" | "outline" | "ghost";
    target?: "_blank" | "_self";
  }[];
  fixed?: boolean;
  scrollEffect?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  initialSearchValue?: string;
  languageSelector?: LanguageSelectorConfig;
  themeSwitcher?: ThemeSwitcherConfig;
  className?: string;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}
