import React from "react";
import type { MenuToggleContractProps } from "../contracts/MenuToggleContract";
import { Box } from "./LayoutBase";

/**
 * Base UI untuk Menu Toggle.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const MenuToggleBase = React.forwardRef<
  HTMLButtonElement,
  MenuToggleContractProps
>((props, ref) => {
  const {
    isOpen,
    onClick,
    ariaLabel = "Toggle menu",
    className,
    style,
    iconOpen = "☰",
    iconClose = "✕",
  } = props;

  return (
    <Box
      as="button"
      ref={ref}
      onClick={onClick}
      style={style}
      className={className}
      aria-label={isOpen ? "Close menu" : ariaLabel}
    >
      {isOpen ? iconClose : iconOpen}
    </Box>
  );
});

MenuToggleBase.displayName = "MenuToggleBase";
