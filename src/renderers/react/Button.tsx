import React from "react";
import type { ButtonConfig } from "../../components/types";
import { createBaseSkinableComponent } from "./utils/BaseSkinableComponent";

/**
 * Komponen Button yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const BaseButton = createBaseSkinableComponent<ButtonConfig>("Button");

const Button = ({ config }: { config: ButtonConfig }) => {
  return <BaseButton {...config} skin={config.skin} />;
};

export default Button;
