import React from "react";
import { FeaturesBase } from "./base/FeaturesBase";
import { FeaturesSkin } from "./skins/features/FeaturesSkin";
import { FeaturesSkinTailwind } from "./skins/features/FeaturesSkinTailwind";

/**
 * Komponen Features yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Features = ({ config }: { config: any }) => {
  if (config.skin === "none") {
    return <FeaturesBase {...config} />;
  }

  switch (config.skin) {
    case "tailwind":
      return <FeaturesSkinTailwind {...config} />;
    default:
      return <FeaturesSkin {...config} />;
  }
};

export default Features;
