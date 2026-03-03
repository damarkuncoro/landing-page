import React from "react";
import { FeaturesSkin } from "./skins/features/FeaturesSkin";
import { FeaturesSkinTailwind } from "./skins/features/FeaturesSkinTailwind";

/**
 * Komponen Features yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Features = ({ config }: { config: any }) => {
  switch (config.skin) {
    case "tailwind":
      return <FeaturesSkinTailwind {...config} />;
    default:
      return <FeaturesSkin {...config} />;
  }
};

export default Features;
