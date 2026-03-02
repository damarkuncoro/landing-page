import React from "react";
import type { HeroConfig } from "../../components/types";
import { HeroSkin } from "./skins/HeroSkin";
import { HeroSkin2 } from "./skins/HeroSkin2";
import { HeroSkin3 } from "./skins/HeroSkin3";
import { HeroSkin4 } from "./skins/HeroSkin4";

/**
 * Komponen Hero yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Hero = ({ config, theme }: { config: HeroConfig; theme: any }) => {
  switch (config.skin) {
    case "skin2":
      return <HeroSkin2 {...config} theme={theme} />;
    case "skin3":
      return <HeroSkin3 {...config} theme={theme} />;
    case "skin4":
      return <HeroSkin4 {...config} theme={theme} />;
    default:
      return <HeroSkin {...config} theme={theme} />;
  }
};

export default Hero;
