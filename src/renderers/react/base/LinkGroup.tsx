import React from "react";
import type { FooterLinkItemConfig } from "../../../components/types";

/**
 * Link Group component for footer links.
 * Displays a group of links with a title.
 */
export interface LinkGroupProps {
  /** Group title */
  title: string;
  /** Array of links */
  items: FooterLinkItemConfig[];
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Link item styles */
  linkStyle?: React.CSSProperties;
  /** Spacing between items */
  itemSpacing?: string;
  /** Link hover handlers */
  onLinkMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onLinkMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const LinkGroup: React.FC<LinkGroupProps> = ({
  title,
  items,
  className,
  style,
  linkStyle,
  itemSpacing = "0.5rem",
  onLinkMouseEnter,
  onLinkMouseLeave,
}) => {
  return (
    <div className={className} style={style}>
      <h4
        style={{
          marginBottom: "1rem",
          color: "inherit",
          fontSize: "1rem",
          fontWeight: 600,
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((link) => (
          <li
            key={link.id ?? link.text}
            style={{ marginBottom: itemSpacing }}
          >
            <a
              href={link.url}
              target={link.target || "_self"}
              rel={
                link.target === "_blank" ? "noopener noreferrer" : undefined
              }
              style={{
                color: "inherit",
                textDecoration: "none",
                opacity: 0.8,
                transition: "opacity 0.2s",
                ...linkStyle,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                onLinkMouseEnter?.(e);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.8";
                onLinkMouseLeave?.(e);
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

LinkGroup.displayName = "LinkGroup";

export default LinkGroup;