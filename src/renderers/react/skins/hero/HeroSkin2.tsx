import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin 2 untuk Hero Section.
 * Gambar di sebelah kiri dengan teks di sebelah kanan.
 */
export const HeroSkin2 = (props: HeroContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "6rem 0",
    backgroundColor: theme.colors.background,
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  const contentStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing.xl,
    alignItems: "center",
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