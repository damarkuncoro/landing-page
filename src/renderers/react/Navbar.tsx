import { createBaseSkinableComponent } from "./utils/BaseSkinableComponent";
import type { NavbarContractProps } from "./contracts/NavbarContract";

/**
 * Komponen Navbar yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Navbar = createBaseSkinableComponent<NavbarContractProps & { skin?: "default" | "tailwind" | "modern" | "none" }>(
  "Navbar"
);

export default Navbar;
