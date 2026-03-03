import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin 10 untuk Hero Section.
 * Full screen hero dengan latar belakang gradien dan konten di tengah.
 */
export const HeroSkin10 = (props: HeroContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  const sectionStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    backgroundImage: "linear-gradient(135deg, #000, #1a1a1a)",
    color: "#fff",
    padding: "0 1rem",
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
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