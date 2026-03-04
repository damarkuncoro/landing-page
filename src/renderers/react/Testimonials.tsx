import React from "react";
import { TestimonialsBase } from "./base/TestimonialsBase";
import { TestimonialsSkin } from "./skins/testimonials/TestimonialsSkin";

/**
 * Komponen Testimonials yang menggunakan arsitektur Skin.
 * Depend pada Skins + Modules (aturan 16).
 */
const Testimonials = ({ config }: { config: any }) => {
  if (config.skin === "none") {
    return <TestimonialsBase {...config} />;
  }

  return <TestimonialsSkin {...config} />;
};

export default Testimonials;
