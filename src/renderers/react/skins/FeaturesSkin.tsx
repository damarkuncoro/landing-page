import React from "react";
import { FeaturesBase } from "../base/FeaturesBase";
import type { FeaturesContractProps } from "../contracts/FeaturesContract";

/**
 * Skin untuk Features Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const FeaturesSkin = (props: FeaturesContractProps & { theme: any }) => {
  const { theme, ...config } = props;

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

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing.xl,
    ...config.gridStyle,
  };

  const featureStyle: React.CSSProperties = {
    padding: theme.spacing.lg,
    border: `1px solid ${theme.colors.muted}20`,
    borderRadius: "0.5rem",
    backgroundColor: theme.colors.background,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    ...config.featureStyle,
  };

  const iconStyle: React.CSSProperties = {
    marginBottom: theme.spacing.md,
    ...config.iconStyle,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
    ...config.titleStyle,
  };

  const descriptionStyle: React.CSSProperties = {
    color: theme.colors.muted,
    lineHeight: "1.6",
    ...config.descriptionStyle,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
    config.onFeatureMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    config.onFeatureMouseLeave?.(e);
  };

  return (
    <FeaturesBase
      {...config}
      theme={theme}
      style={sectionStyle}
      containerStyle={containerStyle}
      gridStyle={gridStyle}
      featureStyle={featureStyle}
      iconStyle={iconStyle}
      titleStyle={titleStyle}
      descriptionStyle={descriptionStyle}
      onFeatureMouseEnter={handleMouseEnter}
      onFeatureMouseLeave={handleMouseLeave}
    />
  );
};
