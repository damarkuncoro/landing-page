import React from "react";
import { NavbarBase } from "../../base/NavbarBase";
import type { NavbarContractProps } from "../../contracts/NavbarContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin untuk Navbar.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const NavbarSkin = (props: NavbarContractProps) => {
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

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.color = theme.colors.primary;
    config.onLinkMouseEnter?.(e, {});
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.color = theme.colors.muted;
    config.onLinkMouseLeave?.(e, {});
  };

  return (
    <NavbarBase
      {...config}
      style={navbarStyle}
      linkStyle={linkStyle}
      onLinkMouseEnter={handleMouseEnter}
      onLinkMouseLeave={handleMouseLeave}
    />
  );
};
