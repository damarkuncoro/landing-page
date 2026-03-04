import React from "react";
import { MenuToggleBase } from "../../base/MenuToggleBase";
import type { MenuToggleContractProps } from "../../contracts/MenuToggleContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Tailwind-based Skin untuk Menu Toggle dengan desain seperti GreenHarvest.
 * Menggabungkan Base UI dengan styling Tailwind.
 * Depend pada Base UI + Tailwind + Contract (aturan 15).
 */
export const MenuToggleSkinTailwind = (
  props: MenuToggleContractProps,
) => {
  const theme = useTheme();
  const { ...config } = props;

  const toggleStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    color: theme.colors.text,
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: theme.spacing.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.2s ease",
    ...config.style,
  };

  return <MenuToggleBase {...config} style={toggleStyle} />;
};