import React from "react";
import { NavbarSkin } from "./skins/NavbarSkin";

/**
 * Komponen Navbar yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Navbar = ({
  links,
  theme,
  isMobile,
  isOpen,
  className,
  style,
}: {
  links: any[];
  theme: any;
  isMobile?: boolean;
  isOpen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <NavbarSkin
      links={links}
      theme={theme}
      isMobile={isMobile}
      isOpen={isOpen}
      className={className}
      style={style}
    />
  );
};

export default Navbar;
