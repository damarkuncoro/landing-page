import React from "react";
import type { FooterConfig } from "../../components/types";
import { FooterBase } from "./base/FooterBase";
import { FooterSkin } from "./skins/footer/FooterSkin";

/**
 * Komponen Footer yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Footer = ({ config }: { config: FooterConfig }) => {
  if (config.skin === "none") {
    return <FooterBase {...config} />;
  }

  return <FooterSkin {...config} />;
};

export default Footer;
