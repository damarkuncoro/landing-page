import React from "react";
import { MenuToggleBase } from "../base/MenuToggleBase";
import type { MenuToggleContractProps } from "../contracts/MenuToggleContract";

/**
 * Skin untuk Menu Toggle.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const MenuToggleSkin = (
  props: MenuToggleContractProps & { theme: any },
) => {
  const { theme, ...config } = props;

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
