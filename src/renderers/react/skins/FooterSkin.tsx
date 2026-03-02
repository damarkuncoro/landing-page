import React from "react";
import { FooterBase } from "../base/FooterBase";
import type { FooterContractProps } from "../contracts/FooterContract";

/**
 * Skin untuk Footer Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const FooterSkin = (props: FooterContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "4rem 0",
    backgroundColor: theme.colors.background,
    borderTop: `1px solid ${theme.colors.muted}20`,
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
    ...config.gridStyle,
  };

  const columnStyle: React.CSSProperties = {
    ...config.columnStyle,
  };

  const linkStyle: React.CSSProperties = {
    color: theme.colors.muted,
    textDecoration: "none",
    transition: "color 0.2s ease",
    ...config.linkStyle,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.colors.primary;
    config.onLinkMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = theme.colors.muted;
    config.onLinkMouseLeave?.(e);
  };

  return (
    <FooterBase
      {...config}
      theme={theme}
      style={sectionStyle}
      containerStyle={containerStyle}
      gridStyle={gridStyle}
      columnStyle={columnStyle}
      linkStyle={linkStyle}
      onLinkMouseEnter={handleMouseEnter}
      onLinkMouseLeave={handleMouseLeave}
    />
  );
};
