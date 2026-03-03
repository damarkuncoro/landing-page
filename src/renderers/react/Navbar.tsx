import React from "react";
import { NavbarSkin } from "./skins/navbar/NavbarSkin";

/**
 * Komponen Navbar yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Navbar = ({
  links,
  isMobile,
  isOpen,
  className,
  style,
}: {
  links: any[];
  isMobile?: boolean;
  isOpen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  
  return (
    <NavbarSkin
      links={links}
      isMobile={isMobile}
      isOpen={isOpen}
      className={className}
      style={style}
    />
  );
};

export default Navbar;
