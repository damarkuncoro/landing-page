import React from "react";
import type { FaqConfig } from "../../components/types";
import { FaqSkin } from "./skins/faq/FaqSkin";

/**
 * Komponen Faq yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Faq = ({ config }: { config: FaqConfig }) => {
  return <FaqSkin {...config} />;
};

export default Faq;
