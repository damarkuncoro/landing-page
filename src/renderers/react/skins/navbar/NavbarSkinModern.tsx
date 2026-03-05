import React from "react";
import { NavbarBase } from "../../base/NavbarBase";
import type { NavbarContractProps, NavbarLink } from "../../contracts/NavbarContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Modern minimalist Tailwind Skin untuk Navbar.
 * Desain: Clean, modern, dengan hover effects yang halus.
 * Depend pada Base UI + Tailwind + Contract.
 */
export const NavbarSkinModern = (props: NavbarContractProps) => {
  const theme = useTheme();
  const { 
    isMobile,
    linkStyle,
    activeLinkStyle,
    loadingLinkStyle,
    dropdownStyle,
    dropdownLinkStyle,
    onLinkMouseEnter,
    onLinkMouseLeave,
    onLinkClick,
    onDropdownToggle,
    onSearch,
    onSearchChange,
    ...config 
  } = props;

  // Tailwind classes for navbar container
  const navbarClassName = ``;

  // Link styles - exact match to user's design:
  // color: rgb(100, 116, 139) = slate-500
  // transition: color 0.2s
  // font-size: 1rem
  // font-weight: 500
  // padding: 0.25rem 0px (desktop), 0.25rem 0px (mobile)
  // border-radius: 0px
  const mergedLinkStyle: React.CSSProperties = {
    color: "rgb(100, 116, 139)",
    textDecoration: "none",
    transition: "color 0.2s",
    display: "block",
    padding: "0.25rem 0",
    borderRadius: 0,
    fontSize: "1rem",
    fontWeight: 500,
    ...linkStyle,
  };

  // Active link styles
  const mergedActiveLinkStyle: React.CSSProperties = {
    color: "rgb(100, 116, 139)",
    fontWeight: 700,
    ...activeLinkStyle,
  };

  // Loading link styles
  const mergedLoadingLinkStyle: React.CSSProperties = {
    opacity: 0.6,
    cursor: "not-allowed",
    ...loadingLinkStyle,
  };

  // Dropdown styles
  const mergedDropdownStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.5rem",
    padding: "0.5rem 0",
    ...dropdownStyle,
  };

  // Dropdown link styles
  const mergedDropdownLinkStyle: React.CSSProperties = {
    color: "#374151",
    textDecoration: "none",
    display: "block",
    padding: "0.5rem 1rem",
    transition: "background-color 0.2s ease, color 0.2s ease",
    ...dropdownLinkStyle,
  };

  // Hover handlers - exact match to user's design
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
    e.currentTarget.style.color = "rgb(100, 116, 139)";
    onLinkMouseEnter?.(e, link);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
    e.currentTarget.style.color = "rgb(100, 116, 139)";
    onLinkMouseLeave?.(e, link);
  };

  return (
    <NavbarBase
      {...config}
      isMobile={isMobile}
      className={`${navbarClassName} ${config.className || ''}`.trim()}
      style={config.style}
      linkStyle={mergedLinkStyle}
      activeLinkStyle={mergedActiveLinkStyle}
      loadingLinkStyle={mergedLoadingLinkStyle}
      dropdownStyle={mergedDropdownStyle}
      dropdownLinkStyle={mergedDropdownLinkStyle}
      onLinkMouseEnter={handleMouseEnter}
      onLinkMouseLeave={handleMouseLeave}
      onLinkClick={onLinkClick}
      onDropdownToggle={onDropdownToggle}
      onSearch={onSearch}
      onSearchChange={onSearchChange}
    />
  );
};

export default NavbarSkinModern;