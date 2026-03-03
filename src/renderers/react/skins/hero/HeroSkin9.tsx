import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin 9 untuk Hero Section.
 * Title, subtitle, dan buttons di atas gambar.
 */
export const HeroSkin9 = (props: HeroContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "6rem 0",
    backgroundColor: "#f8fafc",
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