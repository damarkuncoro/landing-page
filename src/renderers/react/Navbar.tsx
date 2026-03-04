import { createSkinComponent } from "./utils/skinFactory";
import { NavbarSkin } from "./skins/navbar/NavbarSkin";
import { NavbarSkinTailwind } from "./skins/navbar/NavbarSkinTailwind";
import type { NavbarContractProps } from "./contracts/NavbarContract";

/**
 * Komponen Navbar yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Navbar = createSkinComponent<NavbarContractProps & { skin?: "default" | "tailwind" }>(
  NavbarSkin,
  NavbarSkinTailwind,
  "Navbar"
);

export default Navbar;
