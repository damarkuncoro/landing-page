import React from "react";
import { MenuToggleSkin } from "./skins/MenuToggleSkin";

/**
 * Komponen MenuToggle yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const MenuToggle = ({
  isOpen,
  onClick,
  theme,
  className,
  style,
}: {
  isOpen: boolean;
  onClick: () => void;
  theme: any;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <MenuToggleSkin
      isOpen={isOpen}
      onClick={onClick}
      theme={theme}
      className={className}
      style={style}
    />
  );
};

export default MenuToggle;
