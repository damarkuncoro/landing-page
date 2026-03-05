import React from "react";
import { Box } from "./LayoutBase";
import { LinkContent } from "./LinkContent";
import type { NavbarLink } from "../contracts/NavbarContract";

/**
 * Individual navigation link component.
 */
export interface NavLinkProps {
  /** Link data */
  link: NavbarLink;
  /** Whether dropdown is open (for parent links) */
  isDropdownOpen?: boolean;
  /** Style resolver function */
  resolveLinkStyle: (link: NavbarLink, baseStyle?: React.CSSProperties, activeStyle?: React.CSSProperties) => React.CSSProperties | undefined;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
  /** Hover handlers */
  onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
  /** Has children (dropdown) */
  hasChildren?: boolean;
  /** Toggle dropdown handler */
  onToggleDropdown?: (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  link,
  isDropdownOpen,
  resolveLinkStyle,
  onClick,
  onMouseEnter,
  onMouseLeave,
  hasChildren,
  onToggleDropdown,
}) => {
  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.outline = "2px solid currentColor";
      e.currentTarget.style.outlineOffset = "2px";
    },
    onBlur: (e: React.FocusEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.outline = "none";
    },
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasChildren) {
      e.preventDefault();
      onToggleDropdown?.(e, link);
    } else if (link.isLoading) {
      e.preventDefault();
    } else {
      onClick?.(e, link);
    }
  };

  // Resolve link style with fallback
  const resolvedStyle = resolveLinkStyle(link) || {};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (hasChildren && ["Enter", " ", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      onToggleDropdown?.(e as unknown as React.MouseEvent<HTMLAnchorElement>, link);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      // Parent handles this
    }
  };

  return (
    <a
      href={hasChildren ? "#" : link.isLoading ? "#" : link.url}
      target={link.target ?? "_self"}
      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
      style={{
        ...resolvedStyle,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        position: "relative",
      }}
      onMouseEnter={(e) => onMouseEnter?.(e, link)}
      onMouseLeave={(e) => onMouseLeave?.(e, link)}
      {...focusHandlers}
      onClick={handleClick}
      aria-disabled={link.isLoading}
      aria-haspopup={hasChildren}
      aria-expanded={isDropdownOpen}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <LinkContent link={link} showChevron={hasChildren} iconMargin="0" />
    </a>
  );
};

NavLink.displayName = "NavLink";

export default NavLink;