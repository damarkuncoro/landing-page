import React from "react";
import { HeroBase } from "../base/HeroBase";
import type { HeroContractProps } from "../contracts/HeroContract";

/**
 * Skin 8 untuk Hero Section.
 * Desain dengan latar belakang gradien biru muda dan teks berwarna putih.
 * Gambar di sebelah kanan dengan teks di kiri.
 */
export const HeroSkin8 = (props: HeroContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "8rem 0",
    backgroundColor: "#3b82f6",
    backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
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

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#3b82f6",
    fontWeight: "bold",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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