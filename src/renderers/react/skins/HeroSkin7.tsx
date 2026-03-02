import React from "react";
import { HeroBase } from "../base/HeroBase";
import type { HeroContractProps } from "../contracts/HeroContract";

/**
 * Skin 7 untuk Hero Section.
 * Desain minimalis dengan latar belakang putih dan elemen yang bersih.
 * Gambar di atas teks.
 */
export const HeroSkin7 = (props: HeroContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "5rem 0",
    backgroundColor: "#fff",
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

  const titleStyle: React.CSSProperties = {
    fontWeight: 400,
    letterSpacing: "-0.02em",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#64748b",
    fontSize: "1.125rem",
    lineHeight: 1.6,
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