import { createBaseSkinableComponent } from "./utils/BaseSkinableComponent";
import type { MenuToggleContractProps } from "./contracts/MenuToggleContract";

/**
 * Komponen MenuToggle yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const MenuToggle = createBaseSkinableComponent<MenuToggleContractProps & { skin?: "default" | "tailwind" | "none" }>(
  "MenuToggle"
);

export default MenuToggle;
