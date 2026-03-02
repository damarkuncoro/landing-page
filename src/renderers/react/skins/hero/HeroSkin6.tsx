import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";

/**
 * Skin 6 untuk Hero Section.
 * Gambar di sebelah kanan dengan teks di kiri, latar belakang hitam dengan gradien.
 */
export const HeroSkin6 = (props: HeroContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "8rem 0",
    backgroundColor: "#000",
    backgroundImage: "linear-gradient(to right, #000, #1a1a1a)",
    color: "#fff",
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
      theme={theme}
      style={sectionStyle}
      containerStyle={containerStyle}
      contentStyle={contentStyle}
    />
  );
};