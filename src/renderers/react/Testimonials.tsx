import React from "react";
import { TestimonialsSkin } from "./skins/testimonials/TestimonialsSkin";

/**
 * Komponen Testimonials yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Testimonials = ({ config }: { config: any }) => {
  return <TestimonialsSkin {...config} />;
};

export default Testimonials;
