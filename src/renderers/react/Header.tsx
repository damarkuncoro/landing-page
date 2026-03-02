import React from "react";
import type { HeaderConfig } from "../../components/types";
import { HeaderSkin } from "./skins/header/HeaderSkin";

/**
 * Komponen Header yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Header = ({ config, theme }: { config: HeaderConfig; theme: any }) => {
  return <HeaderSkin {...config} theme={theme} />;
};

export default Header;
