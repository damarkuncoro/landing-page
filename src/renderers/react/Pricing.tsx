import React from "react";
import type { PricingConfig } from "../../components/types";
import { PricingSkin } from "./skins/pricing/PricingSkin";

/**
 * Komponen Pricing yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Pricing = ({ config }: { config: PricingConfig }) => {
  return <PricingSkin {...config} />;
};

export default Pricing;
