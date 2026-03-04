import React from "react";
import { HeaderBase } from "../../base/HeaderBase";
import type { HeaderContractProps } from "../../contracts/HeaderContract";
import { useTheme } from "../../ThemeProvider";
import { useHeaderSkin } from "./useHeaderSkin";

/**
 * Default Skin untuk Header.
 * Menggabungkan Base UI dengan styling inline.
 * Depend pada Base UI + Contract (aturan 15).
 */
export const HeaderSkin = (props: HeaderContractProps) => {
  const theme = useTheme();
  const {
    fixed = false,
    scrollEffect = false,
    searchPlaceholder,
    onSearch,
    initialSearchValue,
    showSearchInMobileMenu = true,
    languageSelector,
    themeSwitcher,
    ...config
  } = props;
  
  const { mobileMenuOpen, setMobileMenuOpen, isScrolled } = useHeaderSkin(scrollEffect);

  const headerStyle: React.CSSProperties = {
    position: fixed ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    zIndex: fixed ? 50 : 'auto',
    padding: "1rem 0",
    backgroundColor: isScrolled
      ? 'rgba(255, 255, 255, 0.8)'
      : theme.colors.background,
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
    boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease',
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  return (
    <HeaderBase
      {...config}
      searchPlaceholder={searchPlaceholder}
      onSearch={onSearch}
      initialSearchValue={initialSearchValue}
      showSearchInMobileMenu={showSearchInMobileMenu}
      languageSelector={languageSelector}
      themeSwitcher={themeSwitcher}
      style={headerStyle}
      containerStyle={containerStyle}
      isMobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      skin={config.skin || "default"}
    />
  );
};
