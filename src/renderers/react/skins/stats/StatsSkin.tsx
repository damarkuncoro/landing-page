import React from "react";
import { StatsBase } from "../../base/StatsBase";
import type { StatsContractProps } from "../../contracts/StatsContract";

/**
 * Skin untuk Stats Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const StatsSkin = (props: StatsContractProps & { theme: any }) => {
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: theme.spacing.xl,
    textAlign: "center",
    ...config.gridStyle,
  };

  const statStyle: React.CSSProperties = {
    padding: theme.spacing.lg,
    borderRadius: "0.5rem",
    backgroundColor: theme.colors.background,
    ...config.statStyle,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "2rem",
    marginBottom: theme.spacing.md,
    ...config.iconStyle,
  };

  const numberContainerStyle: React.CSSProperties = {
    marginBottom: theme.spacing.sm,
    ...config.numberContainerStyle,
  };

  const numberStyle: React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: theme.colors.primary,
    ...config.numberStyle,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "1.125rem",
    color: theme.colors.muted,
    ...config.labelStyle,
  };

  return (
    <StatsBase
      {...config}
      theme={theme}
      style={sectionStyle}
      containerStyle={containerStyle}
      gridStyle={gridStyle}
      statStyle={statStyle}
      iconStyle={iconStyle}
      numberContainerStyle={numberContainerStyle}
      numberStyle={numberStyle}
      labelStyle={labelStyle}
    />
  );
};
