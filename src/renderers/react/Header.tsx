import React from "react";
import type { HeaderConfig } from "../../components/types";
import { createBaseSkinableComponent } from "./utils/BaseSkinableComponent";

/**
 * Komponen Header yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const BaseHeader = createBaseSkinableComponent<HeaderConfig>("Header");

const Header = ({ config }: { config: HeaderConfig }) => {
  return <BaseHeader {...config} skin={config.skin} />;
};

export default Header;
