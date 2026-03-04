import React from "react";
import type { CtaConfig } from "../../components/types";
import { CtaBase } from "./base/CtaBase";
import { CtaSkin } from "./skins/cta/CtaSkin";

/**
 * Komponen Cta yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Cta = ({ config }: { config: CtaConfig }) => {
  if (config.skin === "none") {
    return <CtaBase {...config} />;
  }

  return <CtaSkin {...config} />;
};

export default Cta;
