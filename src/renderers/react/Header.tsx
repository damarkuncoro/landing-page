import React from "react";
import type { HeaderConfig } from "../../components/types";
import { HeaderSkin } from "./skins/header/HeaderSkin";
import { HeaderSkinTailwind } from "./skins/header/HeaderSkinTailwind";

/**
 * Komponen Header yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Header = ({ config }: { config: HeaderConfig }) => {
  const SkinComponent = config.skin === "tailwind" ? HeaderSkinTailwind : HeaderSkin;
  return <SkinComponent {...config} />;
};

export default Header;
