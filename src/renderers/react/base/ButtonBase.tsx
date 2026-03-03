import React from "react";
import type { ButtonContractProps } from "../contracts/ButtonContract";

/**
 * Base UI untuk Button.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const ButtonBase = React.forwardRef(
  <C extends React.ElementType = "a">(
    {
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
      disabled = false,
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      as: Component = "a" as unknown as C,
      ...rest
    }: ButtonContractProps & { as?: C },
    ref: React.ComponentPropsWithRef<C>["ref"]
  ) => {
    return (
      <Component
        ref={ref}
        href={Component === "a" ? url : undefined}
        target={Component === "a" ? target : undefined}
        rel={Component === "a" && target === "_blank" ? "noopener noreferrer" : undefined}
        style={{ ...style, width: fullWidth ? "100%" : undefined }}
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        role={Component !== "button" && Component !== "a" ? "button" : undefined}
        tabIndex={Component !== "button" && Component !== "a" ? 0 : undefined}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest as any}
      >
        {loading && <span className="loading-spinner mr-2">⏳</span>}
        {icon && iconPosition === "left" && <span className="button-icon mr-2">{icon}</span>}
        {text}
        {icon && iconPosition === "right" && <span className="button-icon ml-2">{icon}</span>}
      </Component>
    );
  }
);

ButtonBase.displayName = "ButtonBase";
