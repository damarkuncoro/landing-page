import React, { useState } from "react";
import { HeaderBase } from "../../base/HeaderBase";
import type { HeaderContractProps } from "../../contracts/HeaderContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Tailwind-based Skin untuk Header dengan desain seperti GreenHarvest.
 * Menggabungkan Base UI dengan styling Tailwind.
 * Depend pada Base UI + Tailwind + Contract (aturan 15).
 */
export const HeaderSkinTailwind = (props: HeaderContractProps) => {
  const theme = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const {
    fixed = true,
    scrollEffect = true,
    searchPlaceholder,
    onSearch,
    initialSearchValue,
    showSearchInMobileMenu = true,
    languageSelector,
    themeSwitcher,
    className: externalClassName,
    containerStyle: externalContainerStyle,
    ...config
  } = props;
  
  // HeaderBase will handle scroll effect internally
  // Pass external isScrolled if provided (for controlled component)
  
  const defaultContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  // Base classes for the header
  const baseHeaderClass = `
    ${fixed ? 'fixed top-0 left-0 right-0 z-50' : ''}
    transition-all duration-300
  `.trim().replace(/\s+/g, ' ');

  return (
    <HeaderBase
      {...config}
      searchPlaceholder={searchPlaceholder}
      onSearch={onSearch}
      initialSearchValue={initialSearchValue}
      showSearchInMobileMenu={showSearchInMobileMenu}
      languageSelector={languageSelector}
      themeSwitcher={themeSwitcher}
      scrollEffect={scrollEffect}
      fixed={fixed}
      className={`${baseHeaderClass} ${externalClassName || ''}`.trim()}
      containerStyle={{
        ...defaultContainerStyle,
        ...externalContainerStyle,
      }}
      isMobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      skin={config.skin || "tailwind"}
    />
  );
};