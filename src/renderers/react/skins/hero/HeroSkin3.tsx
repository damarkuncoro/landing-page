import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin 3 untuk Hero Section.
 * Latar belakang gradien dengan teks putih.
 */
export const HeroSkin3 = (props: HeroContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "8rem 0",
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
    color: "#ffffff",
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    ...config.contentStyle,
  };

  return (
    <HeroBase
      {...config}
      style={sectionStyle}
      containerStyle={containerStyle}
      contentStyle={contentStyle}
    />
  );
};