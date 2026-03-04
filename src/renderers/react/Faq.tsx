import React from "react";
import type { FaqConfig } from "../../components/types";
import { FaqBase } from "./base/FaqBase";
import { FaqSkin } from "./skins/faq/FaqSkin";

/**
 * Komponen Faq yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Faq = ({ config }: { config: FaqConfig }) => {
  if (config.skin === "none") {
    return <FaqBase {...config} />;
  }

  return <FaqSkin {...config} />;
};

export default Faq;
