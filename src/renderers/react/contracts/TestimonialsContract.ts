import React from "react";

/**
 * Kontrak UI untuk Testimonials Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface TestimonialsContractProps {
  testimonials: {
    id?: string;
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
    className?: string;
  }[];
  className?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  gridStyle?: React.CSSProperties;
  testimonialStyle?: React.CSSProperties;
  quoteIconStyle?: React.CSSProperties;
  quoteStyle?: React.CSSProperties;
  authorContainerStyle?: React.CSSProperties;
  avatarStyle?: React.CSSProperties;
  authorInfoStyle?: React.CSSProperties;
  authorNameStyle?: React.CSSProperties;
  authorRoleStyle?: React.CSSProperties;
  onTestimonialMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onTestimonialMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
