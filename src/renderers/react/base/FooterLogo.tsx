import React from "react";
import { LogoBase } from "./LogoBase";

/**
 * Footer Logo component with description.
 * Displays logo, title, and description for footer.
 */
export interface FooterLogoProps {
  /** Logo image URL */
  logo?: string;
  /** Brand title */
  title?: string;
  /** Description text */
  description?: string;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Margin bottom for spacing */
  spacing?: string;
}

export const FooterLogo: React.FC<FooterLogoProps> = ({
  logo,
  title,
  description,
  className,
  style,
  spacing = "1rem",
}) => {
  return (
    <div className={className} style={style}>
      {logo && (
        <LogoBase
          src={logo}
          alt={title || "Logo"}
          height="40px"
        />
      )}
      {title && (
        <h3
          style={{
            fontSize: "1.25rem",
            marginBottom: spacing,
            color: "inherit",
          }}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          style={{
            color: "inherit",
            lineHeight: "1.6",
            opacity: 0.8,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

FooterLogo.displayName = "FooterLogo";

export default FooterLogo;