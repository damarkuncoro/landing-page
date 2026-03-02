import React from "react";
import type { ButtonContractProps } from "../contracts/ButtonContract";

/**
 * Base UI untuk Button.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const ButtonBase = React.forwardRef<
  HTMLAnchorElement,
  ButtonContractProps
>((props, ref) => {
  const {
    text,
    url,
    target = "_self",
    variant: _variant, // Destructure to avoid spreading to DOM
    size: _size, // Destructure to avoid spreading to DOM
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onKeyDown,
    ...rest
  } = props;

  return (
    <a
      ref={ref}
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={style}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
      {...rest}
    >
      {text}
    </a>
  );
});

ButtonBase.displayName = "ButtonBase";
