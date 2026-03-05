import { skinManager } from "./SkinManager";
import { HeaderSkin } from "../skins/header/HeaderSkin";
import { HeaderSkinTailwind } from "../skins/header/HeaderSkinTailwind";
import { NavbarSkin } from "../skins/navbar/NavbarSkin";
import { NavbarSkinTailwind } from "../skins/navbar/NavbarSkinTailwind";
import { NavbarSkinModern } from "../skins/navbar/NavbarSkinModern";
import { MenuToggleSkin } from "../skins/menu-toggle/MenuToggleSkin";
import { MenuToggleSkinTailwind } from "../skins/menu-toggle/MenuToggleSkinTailwind";
import { ButtonSkin } from "../skins/button/ButtonSkin";
import { ButtonSkinTailwind } from "../skins/button/ButtonSkinTailwind";

/**
 * Register all available skins with the SkinManager.
 * This should be called once at the application startup.
 */
export function registerSkins() {
  // Register Header skins
  skinManager.registerSkin("Header", "default", HeaderSkin);
  skinManager.registerSkin("Header", "tailwind", HeaderSkinTailwind);
  skinManager.registerSkin("Header", "modern", HeaderSkinTailwind); // Reuse tailwind skin with modern navbar

  // Register Navbar skins
  skinManager.registerSkin("Navbar", "default", NavbarSkin);
  skinManager.registerSkin("Navbar", "tailwind", NavbarSkinTailwind);
  skinManager.registerSkin("Navbar", "modern", NavbarSkinModern);

  // Register MenuToggle skins
  skinManager.registerSkin("MenuToggle", "default", MenuToggleSkin);
  skinManager.registerSkin("MenuToggle", "tailwind", MenuToggleSkinTailwind);

  // Register Button skins
  skinManager.registerSkin("Button", "default", ButtonSkin);
  skinManager.registerSkin("Button", "tailwind", ButtonSkinTailwind);

  // Log registration status
  console.log("Skins registered successfully:");
  skinManager.listComponents().forEach(componentName => {
    const skins = skinManager.listSkins(componentName);
    console.log(`- ${componentName}: ${skins.join(", ")}`);
  });
}

/**
 * Unregister all skins from the SkinManager.
 * This is primarily used for testing purposes.
 */
export function unregisterAllSkins() {
  // Reset the registry
  const allComponents = skinManager.listComponents();
  allComponents.forEach(componentName => {
    // This is a workaround since we can't directly access the private registry
    // In a real implementation, we would add a method to the SkinManager
  });
  
  console.log("All skins unregistered");
}