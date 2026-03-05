import React from "react";
import type { NavbarLink } from "../contracts/NavbarContract";
import { LoadingSpinner } from "./LoadingSpinner";

/**
 * Link Content component for navbar links.
 * Handles display of link text, icon, and loading states.
 */
export interface LinkContentProps {
  /** The navbar link data */
  link: NavbarLink;
  /** Show chevron indicator for dropdowns */
  showChevron?: boolean;
  /** Icon margin spacing */
  iconMargin?: string;
}

export const LinkContent: React.FC<LinkContentProps> = ({
  link,
  showChevron = false,
  iconMargin = "0",
}) => {
  if (link.isLoading) return <LoadingSpinner showText={false} />;

  return (
    <>
      {link.icon && (
        <span style={{ fontSize: "1rem", marginRight: iconMargin }}>
          {link.icon}
        </span>
      )}
      {link.text}
      {showChevron && <span style={{ fontSize: "0.75rem" }}>▼</span>}
    </>
  );
};

LinkContent.displayName = "LinkContent";

export default LinkContent;