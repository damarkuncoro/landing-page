import React from "react";
import { NavbarBase } from "../../base/NavbarBase";
import type { NavbarContractProps, NavbarLink } from "../../contracts/NavbarContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Tailwind-based Skin untuk Navbar dengan desain seperti GreenHarvest.
 * Menggabungkan Base UI dengan styling Tailwind.
 * Depend pada Base UI + Tailwind + Contract (aturan 15).
 */
export const NavbarSkinTailwind = (props: NavbarContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  const navbarStyle: React.CSSProperties = {
    marginTop: config.isMobile ? theme.spacing.md : 0,
    ...config.style,
  };

  const linkStyle: React.CSSProperties = {
    color: theme.colors.muted,
    textDecoration: "none",
    transition: "color 0.2s ease",
    display: "block",
    padding: config.isMobile
      ? `${theme.spacing.sm} ${theme.spacing.md}`
      : "0.25rem 0",
    borderRadius: config.isMobile ? "0.5rem" : 0,
    fontSize: "1rem",
    fontWeight: "500",
    ...config.linkStyle,
  };

  const activeLinkStyle: React.CSSProperties = {
    color: theme.colors.primary,
    fontWeight: "bold",
    ...config.activeLinkStyle,
  };

  const loadingLinkStyle: React.CSSProperties = {
    opacity: 0.6,
    cursor: "not-allowed",
    ...config.loadingLinkStyle,
  };

  const dropdownStyle: React.CSSProperties = {
    backgroundColor: theme.colors.background,
    boxShadow: `0 10px 15px -3px ${theme.colors.text}10`,
    border: `1px solid ${theme.colors.muted}20`,
    ...config.dropdownStyle,
  };

  const dropdownLinkStyle: React.CSSProperties = {
    color: theme.colors.text,
    textDecoration: "none",
    transition: "background-color 0.2s ease, color 0.2s ease",
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: "0.25rem",
    ...config.dropdownLinkStyle,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
    const el = e.currentTarget;
    el.style.color = theme.colors.primary;
    config.onLinkMouseEnter?.(e, link);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
    const el = e.currentTarget;
    el.style.color = theme.colors.muted;
    config.onLinkMouseLeave?.(e, link);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
    config.onLinkClick?.(e, link);
  };

  const handleDropdownToggle = (e: React.MouseEvent<HTMLElement>, link: NavbarLink) => {
    config.onDropdownToggle?.(e, link);
  };

  const handleSearch = (query: string) => {
    config.onSearch?.(query);
  };

  const handleSearchChange = (value: string) => {
    config.onSearchChange?.(value);
  };

  return (
    <NavbarBase
      {...config}
      style={navbarStyle}
      linkStyle={linkStyle}
      activeLinkStyle={activeLinkStyle}
      loadingLinkStyle={loadingLinkStyle}
      dropdownStyle={dropdownStyle}
      dropdownLinkStyle={dropdownLinkStyle}
      onLinkMouseEnter={handleMouseEnter}
      onLinkMouseLeave={handleMouseLeave}
      onLinkClick={handleLinkClick}
      onDropdownToggle={handleDropdownToggle}
      onSearch={handleSearch}
      onSearchChange={handleSearchChange}
    />
  );
};