import React from "react";
import type { ButtonConfig } from "../../components/types";
import { ButtonSkin } from "./skins/button/ButtonSkin";
import { ButtonSkinTailwind } from "./skins/button/ButtonSkinTailwind";

/**
 * Komponen Button yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Button = ({ config }: { config: ButtonConfig }) => {
  const SkinComponent = config.skin === "tailwind" ? ButtonSkinTailwind : ButtonSkin;
  return <SkinComponent {...config} />;
};

export default Button;
