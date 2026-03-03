import React from "react";
import { FeaturesBase } from "../../base/FeaturesBase";
import type { FeaturesContractProps } from "../../contracts/FeaturesContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Tailwind-based skin for Features Section.
 * Combines Base UI with Tailwind CSS styling.
 */
export const FeaturesSkinTailwind = (props: FeaturesContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

  return (
    <FeaturesBase
      {...config}
      className={`py-16 md:py-24 ${config.className || ""}`}
      containerStyle={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        ...config.containerStyle,
      }}
      gridStyle={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        ...config.gridStyle,
      }}
      featureStyle={{
        padding: "2rem",
        border: `1px solid ${theme.colors.muted}20`,
        borderRadius: "1rem",
        backgroundColor: theme.colors.background,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
        ...config.featureStyle,
      }}
      iconStyle={{
        marginBottom: "1rem",
        ...config.iconStyle,
      }}
      titleStyle={{
        fontSize: "1.5rem",
        marginBottom: "1rem",
        color: theme.colors.text,
        ...config.titleStyle,
      }}
      descriptionStyle={{
        color: theme.colors.muted,
        lineHeight: "1.6",
        ...config.descriptionStyle,
      }}
      onFeatureMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
        config.onFeatureMouseEnter?.(e);
      }}
      onFeatureMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        config.onFeatureMouseLeave?.(e);
      }}
    />
  );
};