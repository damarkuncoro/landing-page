import React from "react";
import type { FooterConfig } from "../../components/types";
import { FooterSkin } from "./skins/footer/FooterSkin";

/**
 * Komponen Footer yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Footer = ({ config }: { config: FooterConfig }) => {
  return <FooterSkin {...config} />;
};

export default Footer;
