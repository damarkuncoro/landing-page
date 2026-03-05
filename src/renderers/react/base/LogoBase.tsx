import React from "react";
import { useTheme } from "../ThemeProvider";

/**
 * Base UI for Logo component.
 * Separates DOM structure from styling.
 * Provides consistent logo rendering with proper accessibility.
 */
export interface LogoBaseProps {
  /** Logo image URL */
  src?: string;
  /** Alt text for the logo */
  alt?: string;
  /** Brand name text (shown next to logo) */
  title?: string;
  /** Logo image height */
  height?: string;
  /** Logo image width */
  width?: string;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Logo click handler */
  onClick?: () => void;
}

export const LogoBase = (props: LogoBaseProps) => {
  const {
    src,
    alt = "Logo",
    title,
    height = "40px",
    width,
    className,
    style,
    onClick,
  } = props;

  const theme = useTheme();

  const logoImageStyle: React.CSSProperties = {
    height,
    width: width || "auto",
    objectFit: "contain",
    ...style,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: theme.colors.text,
  };

  // If there's an onClick, render as anchor
  if (onClick) {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        {src && (
          <img
            src={src}
            alt={alt}
            style={logoImageStyle}
            width={width ? undefined : 150}
            height={40}
            loading="lazy"
          />
        )}
        {title && <span style={titleStyle}>{title}</span>}
      </a>
    );
  }

  // Default: render as div with logo and optional title
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          style={logoImageStyle}
          width={width ? undefined : 150}
          height={40}
          loading="lazy"
        />
      )}
      {title && <span style={titleStyle}>{title}</span>}
    </div>
  );
};

LogoBase.displayName = "LogoBase";

export default LogoBase;