import React from "react";
import type { HeaderConfig } from "../../components/types";
import { HeaderSkin } from "./skins/header/HeaderSkin";
import { HeaderSkinTailwind } from "./skins/header/HeaderSkinTailwind";

/**
 * Komponen Header yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Header = ({ config }: { config: HeaderConfig }) => {
  switch (config.skin) {
    case "tailwind":
      return <HeaderSkinTailwind {...config} />;
    default:
      return <HeaderSkin {...config} />;
  }
};

export default Header;
