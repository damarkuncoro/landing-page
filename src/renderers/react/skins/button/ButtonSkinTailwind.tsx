import React from "react";
import { ButtonBase } from "../../base/ButtonBase";
import type { ButtonContractProps } from "../../contracts/ButtonContract";
import { getBestContrastColor } from "../../../../core/utils/contrast";
import { useTheme } from "../../ThemeProvider";

/**
 * Tailwind-based skin for Button.
 * Combines Base UI with Tailwind CSS styling.
 */
export const ButtonSkinTailwind = (props: ButtonContractProps) => {
  const theme = useTheme();
  const { ...config } = props;

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

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: `bg-primary text-primary-contrast`,
    secondary: `bg-secondary text-secondary-contrast`,
    outline: `border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white`,
    ghost: `text-primary bg-transparent hover:bg-primary/10`,
  };

  return (
    <ButtonBase
      {...config}
      className={`inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${sizeClasses[config.size || "md"]} ${variantClasses[config.variant || "primary"]} ${config.disabled ? "opacity-50 cursor-not-allowed" : ""} ${config.fullWidth ? "w-full" : ""} ${config.className || ""}`}
      onMouseEnter={(e) => {
        if (config.variant === "primary" && !config.disabled) {
          e.currentTarget.classList.add("brightness-95", "shadow-lg", "translate-y-[-1px]");
        } else if (config.variant === "secondary" && !config.disabled) {
          e.currentTarget.classList.add("brightness-95", "shadow-lg", "translate-y-[-1px]");
        }
        config.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove("brightness-95", "shadow-lg", "translate-y-[-1px]");
        config.onMouseLeave?.(e);
      }}
    />
  );
};