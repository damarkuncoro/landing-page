import React from "react";
import type { CtaConfig } from "../../components/types";
import { CtaSkin } from "./skins/cta/CtaSkin";

/**
 * Komponen Cta yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Cta = ({ config }: { config: CtaConfig }) => {
  return <CtaSkin {...config} />;
};

export default Cta;
