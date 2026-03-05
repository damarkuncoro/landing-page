/**
 * Example: How to create a custom skin for Navbar
 * 
 * Consumers can create their own skin by following this pattern:
 * 1. Create a component that accepts NavbarContractProps
 * 2. Use NavbarBase as the base component
 * 3. Add custom styling (Tailwind, CSS, or inline styles)
 * 4. Register the skin with skinManager
 * 
 * NOTE: This is a conceptual example. In practice, you would import
 * from the library's internal modules or use the provided skins.
 */

// Example 1: Custom "corporate" skin pattern
/*
import React from "react";
import { skinManager } from "@damarkuncoro/landing-page";
import { NavbarBase } from "@damarkuncoro/landing-page";
import type { NavbarContractProps } from "@damarkuncoro/landing-page";

export const NavbarSkinCorporate = (props: NavbarContractProps) => {
  const { isMobile, linkStyle, activeLinkStyle, ...config } = props;

  const corporateLinkStyle = {
    color: "#1e40af", // Blue-800
    fontWeight: 500,
    padding: "0.5rem 0.75rem",
    ...linkStyle,
  };

  return (
    <NavbarBase
      {...config}
      isMobile={isMobile}
      linkStyle={corporateLinkStyle}
      activeLinkStyle={{
        color: "#1d4ed8",
        backgroundColor: "#eff6ff",
        ...activeLinkStyle,
      }}
    />
  );
};

export function registerCorporateSkin() {
  skinManager.registerSkin("Navbar", "corporate", NavbarSkinCorporate);
}
*/

// Example 2: Using existing "modern" skin
/*
import { createHeaderSection } from "@damarkuncoro/landing-page";

export const sectionsConfig = [
  createHeaderSection({
    logo: "https://example.com/logo.png",
    title: "My Company",
    links: [
      { text: "Home", url: "/" },
      { text: "Features", url: "#features" },
      { text: "Pricing", url: "#pricing" },
    ],
    buttons: [
      { text: "Login", url: "/login", variant: "outline" },
      { text: "Get Started", url: "/signup", variant: "primary" },
    ],
    fixed: true,
    scrollEffect: true,
    skin: "modern",  // Using the modern skin
  }),
];
*/

// Available skins in the library:
// - "default" - Base styling (inline styles)
// - "tailwind" - Tailwind CSS styling
// - "modern" - Modern minimalist with Tailwind (NEW!)

// To use a custom skin, you would:
// 1. Create the skin component
// 2. Register it with skinManager.registerSkin("Navbar", "your-skin-name", YourSkin)
// 3. Use it in your config: skin: "your-skin-name"