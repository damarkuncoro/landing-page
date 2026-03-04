import React from "react";

/**
 * Generic skin factory to create component with skin support.
 * Menerapkan prinsip DRY (Don't Repeat Yourself) dan reusability.
 * Mengurangi duplikasi kode dalam komponen yang memiliki multiple skins.
 */
export function createSkinComponent<TProps extends { skin?: "default" | "tailwind" }>(
  DefaultSkin: React.ComponentType<TProps>,
  TailwindSkin: React.ComponentType<TProps>,
  displayName: string
) {
  const Component = ({ skin = "default", ...props }: TProps) => {
    const SkinComponent = skin === "tailwind" ? TailwindSkin : DefaultSkin;
    return <SkinComponent {...(props as any)} />;
  };

  Component.displayName = displayName;

  return Component;
}