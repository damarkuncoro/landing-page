import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin untuk Hero Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const HeroSkin = (props: HeroContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "4rem 0",
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
    alignItems: config.alignment || "center",
    textAlign: config.alignment || "center",
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
