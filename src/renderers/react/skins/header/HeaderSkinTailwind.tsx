import React, { useState, useEffect } from "react";
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
  const {
    fixed = true,
    scrollEffect = true,
    searchPlaceholder,
    onSearch,
    initialSearchValue,
    languageSelector,
    themeSwitcher,
    ...config
  } = props;
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollEffect) {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollEffect]);

  const headerClassName = `
    ${fixed ? 'fixed top-0 left-0 right-0 z-50' : ''}
    transition-all duration-300 px-6 py-4
    ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'}
    ${config.className || ''}
  `;

  const containerStyle = {
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
      languageSelector={languageSelector}
      themeSwitcher={themeSwitcher}
      className={headerClassName}
      containerStyle={containerStyle}
      isMobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
    />
  );
};