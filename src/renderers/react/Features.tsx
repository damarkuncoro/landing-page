import React from "react";
import { FeaturesSkin } from "./skins/FeaturesSkin";

/**
 * Komponen Features yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Features = ({ config, theme }: { config: any; theme: any }) => {
  return <FeaturesSkin {...config} theme={theme} />;
};

export default Features;
