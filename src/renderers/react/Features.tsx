import React from "react";
import { FeaturesSkin } from "./skins/features/FeaturesSkin";

/**
 * Komponen Features yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Features = ({ config }: { config: any }) => {
  return <FeaturesSkin {...config} />;
};

export default Features;
