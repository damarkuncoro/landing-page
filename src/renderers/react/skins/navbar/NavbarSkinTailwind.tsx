import React from "react";
import { NavbarSkin } from "./NavbarSkin";
import type { NavbarContractProps } from "../../contracts/NavbarContract";

/**
 * Tailwind-based Skin untuk Navbar dengan desain seperti GreenHarvest.
 * Menggunakan implementasi dari NavbarSkin dengan tambahan styling Tailwind.
 * Depend pada Base UI + Tailwind + Contract (aturan 15).
 */
export const NavbarSkinTailwind = (props: NavbarContractProps) => {
  return <NavbarSkin {...props} />;
};