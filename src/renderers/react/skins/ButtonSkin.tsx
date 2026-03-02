import React from "react";
import { ButtonBase } from "../base/ButtonBase";
import type { ButtonContractProps } from "../contracts/ButtonContract";
import { getBestContrastColor } from "../../../core/utils/contrast";

/**
 * Skin untuk Button.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const ButtonSkin = (props: ButtonContractProps & { theme: any }) => {
  const { theme, ...config } = props;

  const backgroundColor =
    config.variant === "primary"
      ? theme.colors.primary
      : config.variant === "secondary"
        ? theme.colors.secondary
        : "transparent";

  const textColor =
    config.variant === "primary" || config.variant === "secondary"
      ? getBestContrastColor(backgroundColor)
      : theme.colors.primary;

  const buttonStyles: React.CSSProperties = {
    padding:
      theme.spacing[
        config.size === "sm" ? "sm" : config.size === "lg" ? "xl" : "md"
      ],
    backgroundColor,
    color: textColor,
    border:
      config.variant === "outline"
        ? `2px solid ${theme.colors.primary}`
        : "none",
    borderRadius: "0.5rem",
    fontSize:
      config.size === "sm"
        ? "0.875rem"
        : config.size === "lg"
          ? "1.125rem"
          : "1rem",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.2s ease",
    ...config.style,
  };

  // Adjust brightness helper
  const adjustBrightness = (color: string, amount: number) => {
    if (!color || color === "transparent") return color;
    try {
      const num = parseInt(color.replace("#", ""), 16);
      const amt = Math.round(2.55 * amount);
      const R = Math.max(0, Math.min(255, (num >> 16) + amt));
      const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
      const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
      return (
        "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)
      );
    } catch (e) {
      return color;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    if (config.variant === "primary") {
      el.style.backgroundColor = adjustBrightness(theme.colors.primary, -20);
      el.style.transform = "translateY(-2px)";
      el.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    } else if (config.variant === "secondary") {
      el.style.backgroundColor = adjustBrightness(theme.colors.secondary, -20);
      el.style.transform = "translateY(-2px)";
      el.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    } else if (config.variant === "outline") {
      el.style.backgroundColor = theme.colors.primary;
      // Jika primary adalah putih (kasus di CTA), gunakan warna teks asli sebagai warna teks saat hover
      el.style.color =
        theme.colors.primary === "#ffffff" ? theme.colors.text : "#ffffff";
    } else if (config.variant === "ghost") {
      el.style.backgroundColor = `${theme.colors.primary}10`;
    }
    config.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.backgroundColor = buttonStyles.backgroundColor as string;
    el.style.color = buttonStyles.color as string;
    el.style.transform = "translateY(0)";
    el.style.boxShadow = "none";
    config.onMouseLeave?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.href = config.url;
    }
    config.onKeyDown?.(e);
  };

  return (
    <ButtonBase
      {...config}
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onFocus={(e) => {
        e.currentTarget.style.outline = `2px solid ${theme.colors.primary}`;
        e.currentTarget.style.outlineOffset = "2px";
        config.onFocus?.(e);
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = "none";
        config.onBlur?.(e);
      }}
    />
  );
};
