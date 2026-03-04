import { createSkinComponent } from "./utils/skinFactory";
import { MenuToggleSkin } from "./skins/menu-toggle/MenuToggleSkin";
import { MenuToggleSkinTailwind } from "./skins/menu-toggle/MenuToggleSkinTailwind";
import type { MenuToggleContractProps } from "./contracts/MenuToggleContract";

/**
 * Komponen MenuToggle yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const MenuToggle = createSkinComponent<MenuToggleContractProps & { skin?: "default" | "tailwind" }>(
  MenuToggleSkin,
  MenuToggleSkinTailwind,
  "MenuToggle"
);

export default MenuToggle;
