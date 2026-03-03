import React from "react";

/**
 * Kontrak UI untuk Navbar.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface NavbarLink {
  id?: string;
  text: string;
  url?: string;
  target?: "_blank" | "_self";
  isActive?: boolean;
  isLoading?: boolean;
  children?: NavbarLink[];
  icon?: React.ReactNode;
}

export interface NavbarContractProps {
  links: NavbarLink[];
  isMobile?: boolean;
  isOpen?: boolean;
  className?: string;
  style?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
  activeLinkStyle?: React.CSSProperties;
  loadingLinkStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  dropdownLinkStyle?: React.CSSProperties;
  onLinkMouseEnter?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavbarLink,
  ) => void;
  onLinkMouseLeave?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavbarLink,
  ) => void;
  onLinkClick?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavbarLink,
  ) => void;
  onDropdownToggle?: (e: React.MouseEvent<HTMLElement>, link: NavbarLink) => void;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  languageSelector?: {
    currentLanguage: string;
    languages: { code: string; name: string }[];
    onLanguageChange?: (code: string) => void;
  };
  themeSwitcher?: {
    currentTheme: "light" | "dark";
    onThemeChange?: (theme: "light" | "dark") => void;
  };
  logo?: string;
  logoAlt?: string;
  logoStyle?: React.CSSProperties;
  brandName?: string;
  brandNameStyle?: React.CSSProperties;
  fixed?: boolean;
  sticky?: boolean;
  searchDebounceDelay?: number;
  maxDropdownWidth?: string | number;
  mobileBreakpoint?: string;
  mobileMenuButtonText?: string;
  mobileMenuButtonIcon?: React.ReactNode;
  mobileMenuPosition?: "left" | "right" | "top" | "bottom";
  mobileMenuOverlay?: boolean;
  mobileMenuTransitionDuration?: number;
  mobileSearchBarPosition?: "top" | "bottom";
}
