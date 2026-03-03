import React from "react";
import { HeroBase } from "../../base/HeroBase";
import type { HeroContractProps } from "../../contracts/HeroContract";

/**
 * Tailwind-based skin for Hero Section.
 * Combines Base UI with Tailwind CSS styling.
 */
export const HeroSkinTailwind = (props: HeroContractProps) => {
  const { ...config } = props;

  return (
    <HeroBase
      {...config}
      className={`py-16 md:py-24 ${config.className || ""}`}
      containerStyle={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        ...config.containerStyle,
      }}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: config.image ? "1fr 1fr" : "1fr",
        gap: "3rem",
        alignItems: "center",
        textAlign: config.alignment || "center",
        ...config.contentStyle,
      }}
    />
  );
};