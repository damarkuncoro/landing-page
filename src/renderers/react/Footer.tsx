import React from "react";
import type { FooterConfig } from "../../components/types";
import { FooterSkin } from "./skins/FooterSkin";

/**
 * Komponen Footer yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Footer = ({ config, theme }: { config: FooterConfig; theme: any }) => {
  return <FooterSkin {...config} theme={theme} />;
};

export default Footer;
