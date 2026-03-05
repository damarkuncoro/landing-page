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
  buttons?: Array<{
    text: string;
    url: string;
    variant: "primary" | "secondary" | "outline" | "ghost";
    target?: "_blank" | "_self";
    padding?: string;
    fontSize?: string;
  }>;
  fixed?: boolean;
  scrollEffect?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  initialSearchValue?: string;
  showSearchInMobileMenu?: boolean;
  languageSelector?: LanguageSelectorConfig;
  themeSwitcher?: ThemeSwitcherConfig;
  className?: string;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  mobileBreakpoint?: string;
  scrollEffectThreshold?: number;
  scrollEffectStyles?: {
    scrolled?: React.CSSProperties;
    notScrolled?: React.CSSProperties;
  };
  menuToggleStyle?: React.CSSProperties;
  skin?: "default" | "tailwind" | "modern";
}
