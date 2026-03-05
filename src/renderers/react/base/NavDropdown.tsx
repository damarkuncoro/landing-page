import React from "react";
import { Box, Flex } from "./LayoutBase";
import { LinkContent } from "./LinkContent";
import type { NavbarLink } from "../contracts/NavbarContract";

/**
 * Dropdown component for navigation links with children.
 */
export interface NavDropdownProps {
  /** Parent link data */
  link: NavbarLink;
  /** Whether dropdown is active/open */
  isOpen: boolean;
  /** Whether in mobile mode */
  isMobile?: boolean;
  /** Max dropdown width */
  maxWidth?: string | number;
  /** Custom dropdown styles */
  style?: React.CSSProperties;
  /** Link style resolver */
  resolveLinkStyle: (link: NavbarLink, baseStyle?: React.CSSProperties, activeStyle?: React.CSSProperties) => React.CSSProperties | undefined;
  /** Dropdown link style */
  dropdownLinkStyle?: React.CSSProperties;
  /** Click handler */
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
  /** Hover handlers */
  onLinkMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
  onLinkMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
  /** Menu close handler */
  onClose: () => void;
  /** Keyboard navigation handler */
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>, link: NavbarLink) => void;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  link,
  isOpen,
  isMobile,
  maxWidth,
  style,
  resolveLinkStyle,
  dropdownLinkStyle,
  onLinkClick,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onClose,
  onKeyDown,
}) => {
  if (!isOpen || !link.children) return null;

  // Resolve styles with fallbacks
  const getResolvedStyle = (childLink: NavbarLink) => {
    const resolved = resolveLinkStyle(childLink, dropdownLinkStyle);
    return resolved || {};
  };

  return (
    <Box
      as="ul"
      style={{
        position: isMobile ? "relative" : "absolute",
        top: "100%",
        left: 0,
        minWidth: "160px",
        maxWidth: maxWidth || "100%",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        borderRadius: "0.5rem",
        padding: "0.5rem 0",
        marginTop: "0.25rem",
        zIndex: 1000,
        listStyle: "none",
        ...style,
      }}
      aria-label={link.text}
    >
      {link.children.map((childLink) => (
        <Box as="li" key={childLink.id ?? childLink.text} style={{ margin: 0 }}>
          <a
            href={childLink.isLoading ? "#" : childLink.url}
            target={childLink.target ?? "_self"}
            rel={childLink.target === "_blank" ? "noopener noreferrer" : undefined}
            style={{
              ...getResolvedStyle(childLink),
              display: "block",
              padding: "0.5rem 1rem",
              color: "#374151",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => onLinkMouseEnter?.(e, childLink)}
            onMouseLeave={(e) => onLinkMouseLeave?.(e, childLink)}
            onClick={(e) => {
              if (childLink.isLoading) {
                e.preventDefault();
                return;
              }
              onLinkClick?.(e, childLink);
              onClose();
            }}
            aria-disabled={childLink.isLoading}
            tabIndex={0}
            data-link-id={childLink.id}
            onKeyDown={(e) => onKeyDown?.(e, childLink)}
          >
            <LinkContent link={childLink} iconMargin="0.5rem" />
          </a>
        </Box>
      ))}
    </Box>
  );
};

NavDropdown.displayName = "NavDropdown";

export default NavDropdown;