import React from "react";
import type { PricingConfig } from "../../components/types";
import { PricingBase } from "./base/PricingBase";
import { PricingSkin } from "./skins/pricing/PricingSkin";

/**
 * Komponen Pricing yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Pricing = ({ config }: { config: PricingConfig }) => {
  if (config.skin === "none") {
    return <PricingBase {...config} />;
  }

  return <PricingSkin {...config} />;
};

export default Pricing;
