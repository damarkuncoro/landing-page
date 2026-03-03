import React from "react";
import { MenuToggleSkin } from "./skins/menu-toggle/MenuToggleSkin";

/**
 * Komponen MenuToggle yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const MenuToggle = ({
  isOpen,
  onClick,
  className,
  style,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  
  return (
    <MenuToggleSkin
      isOpen={isOpen}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
};

export default MenuToggle;
