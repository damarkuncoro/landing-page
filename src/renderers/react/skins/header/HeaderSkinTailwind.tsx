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
  
  // Container style - exact match to user's design
  const defaultContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  };

  // Base classes for the header
  // Exact match: background-color: rgb(248, 250, 252), padding: 1rem 0px
  const baseHeaderStyle: React.CSSProperties = {
    backgroundColor: "rgb(248, 250, 252)",
    padding: "1rem 0px",
    ...(fixed && {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
    }),
    ...config.style,
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
      scrollEffect={scrollEffect}
      fixed={fixed}
      style={baseHeaderStyle}
      containerStyle={{
        ...defaultContainerStyle,
        ...externalContainerStyle,
      }}
      isMobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      skin={config.skin || "modern"}
    />
  );
};