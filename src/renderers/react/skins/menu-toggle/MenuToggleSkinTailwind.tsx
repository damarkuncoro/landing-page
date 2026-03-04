import React from "react";
import { MenuToggleSkin } from "./MenuToggleSkin";
import type { MenuToggleContractProps } from "../../contracts/MenuToggleContract";

/**
 * Tailwind-based Skin untuk Menu Toggle dengan desain seperti GreenHarvest.
 * Menggunakan implementasi dari MenuToggleSkin dengan tambahan styling Tailwind.
 * Depend pada Base UI + Tailwind + Contract (aturan 15).
 */
export const MenuToggleSkinTailwind = (props: MenuToggleContractProps) => {
  return <MenuToggleSkin {...props} />;
};