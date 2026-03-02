import React from "react";
import type { HeroConfig } from "../../components/types";
import { HeroSkin } from "./skins/HeroSkin";
import { HeroSkin2 } from "./skins/HeroSkin2";
import { HeroSkin3 } from "./skins/HeroSkin3";
import { HeroSkin4 } from "./skins/HeroSkin4";
import { HeroSkin5 } from "./skins/HeroSkin5";
import { HeroSkin6 } from "./skins/HeroSkin6";
import { HeroSkin7 } from "./skins/HeroSkin7";
import { HeroSkin8 } from "./skins/HeroSkin8";
import { HeroSkin9 } from "./skins/HeroSkin9";

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
    case "skin5":
      return <HeroSkin5 {...config} theme={theme} />;
    case "skin6":
      return <HeroSkin6 {...config} theme={theme} />;
    case "skin7":
      return <HeroSkin7 {...config} theme={theme} />;
    case "skin8":
      return <HeroSkin8 {...config} theme={theme} />;
    case "skin9":
      return <HeroSkin9 {...config} theme={theme} />;
    default:
      return <HeroSkin {...config} theme={theme} />;
  }
};

export default Hero;
