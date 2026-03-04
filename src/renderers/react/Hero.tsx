import React from "react";
import type { HeroConfig } from "../../components/types";
import { HeroBase } from "./base/HeroBase";
import { HeroSkin } from "./skins/hero/HeroSkin";
import { HeroSkin2 } from "./skins/hero/HeroSkin2";
import { HeroSkin3 } from "./skins/hero/HeroSkin3";
import { HeroSkin4 } from "./skins/hero/HeroSkin4";
import { HeroSkin5 } from "./skins/hero/HeroSkin5";
import { HeroSkin6 } from "./skins/hero/HeroSkin6";
import { HeroSkin7 } from "./skins/hero/HeroSkin7";
import { HeroSkin8 } from "./skins/hero/HeroSkin8";
import { HeroSkin9 } from "./skins/hero/HeroSkin9";
import { HeroSkin10 } from "./skins/hero/HeroSkin10";
import { HeroSkinTailwind } from "./skins/hero/HeroSkinTailwind";

/**
 * Komponen Hero yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Hero = ({ config }: { config: HeroConfig }) => {
  if (config.skin === "none") {
    return <HeroBase {...config} />;
  }

  switch (config.skin) {
    case "skin2":
      return <HeroSkin2 {...config} />;
    case "skin3":
      return <HeroSkin3 {...config} />;
    case "skin4":
      return <HeroSkin4 {...config} />;
    case "skin5":
      return <HeroSkin5 {...config} />;
    case "skin6":
      return <HeroSkin6 {...config} />;
    case "skin7":
      return <HeroSkin7 {...config} />;
    case "skin8":
      return <HeroSkin8 {...config} />;
    case "skin9":
      return <HeroSkin9 {...config} />;
    case "skin10":
      return <HeroSkin10 {...config} />;
    case "tailwind":
      return <HeroSkinTailwind {...config} />;
    default:
      return <HeroSkin {...config} />;
  }
};

export default Hero;
