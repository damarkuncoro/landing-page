import React from "react";
import { MenuToggleSkin } from "./skins/menu-toggle/MenuToggleSkin";
import { MenuToggleSkinTailwind } from "./skins/menu-toggle/MenuToggleSkinTailwind";

/**
 * Komponen MenuToggle yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const MenuToggle = ({
  isOpen,
  onClick,
  className,
  style,
  skin = "default",
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  skin?: "default" | "tailwind";
}) => {
  
  const MenuToggleComponent = skin === "tailwind" ? MenuToggleSkinTailwind : MenuToggleSkin;
  
  return (
    <MenuToggleComponent
      isOpen={isOpen}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
};

export default MenuToggle;
