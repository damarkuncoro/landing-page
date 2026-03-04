import React from "react";
import { NavbarSkin } from "./skins/navbar/NavbarSkin";
import { NavbarSkinTailwind } from "./skins/navbar/NavbarSkinTailwind";
import type { NavbarContractProps } from "./contracts/NavbarContract";

/**
 * Komponen Navbar yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Navbar = ({
  links,
  isMobile,
  isOpen,
  className,
  style,
  linkStyle,
  activeLinkStyle,
  loadingLinkStyle,
  dropdownStyle,
  dropdownLinkStyle,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
  onDropdownToggle,
  searchPlaceholder,
  onSearch,
  searchValue,
  onSearchChange,
  languageSelector,
  themeSwitcher,
  skin = "default",
}: NavbarContractProps & { skin?: "default" | "tailwind" }) => {
  
  const NavbarComponent = skin === "tailwind" ? NavbarSkinTailwind : NavbarSkin;
  
  return (
    <NavbarComponent
      links={links}
      isMobile={isMobile}
      isOpen={isOpen}
      className={className}
      style={style}
      linkStyle={linkStyle}
      activeLinkStyle={activeLinkStyle}
      loadingLinkStyle={loadingLinkStyle}
      dropdownStyle={dropdownStyle}
      dropdownLinkStyle={dropdownLinkStyle}
      onLinkMouseEnter={onLinkMouseEnter}
      onLinkMouseLeave={onLinkMouseLeave}
      onLinkClick={onLinkClick}
      onDropdownToggle={onDropdownToggle}
      searchPlaceholder={searchPlaceholder}
      onSearch={onSearch}
      searchValue={searchValue}
      onSearchChange={onSearchChange}
      languageSelector={languageSelector}
      themeSwitcher={themeSwitcher}
    />
  );
};

export default Navbar;
