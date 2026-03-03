import React from "react";
import { TestimonialsBase } from "../../base/TestimonialsBase";
import type { TestimonialsContractProps } from "../../contracts/TestimonialsContract";
import { useTheme } from "../../ThemeProvider";

/**
 * Skin untuk Testimonials Section.
 * Menggabungkan Base UI dengan styling (Tailwind/inline).
 * Depend pada Base UI + Tailwind (optional) + Contract (aturan 15).
 */
export const TestimonialsSkin = (
  props: TestimonialsContractProps,
) => {
  const theme = useTheme();
  const { ...config } = props;

  const sectionStyle: React.CSSProperties = {
    padding: "4rem 0",
    ...config.style,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle,
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing.xl,
    ...config.gridStyle,
  };

  const testimonialStyle: React.CSSProperties = {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    border: `1px solid ${theme.colors.muted}20`,
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    ...config.testimonialStyle,
  };

  const quoteIconStyle: React.CSSProperties = {
    marginBottom: theme.spacing.md,
    ...config.quoteIconStyle,
  };

  const quoteStyle: React.CSSProperties = {
    fontSize: "1.125rem",
    fontStyle: "italic",
    color: theme.colors.text,
    ...config.quoteStyle,
  };

  const authorContainerStyle: React.CSSProperties = {
    marginTop: theme.spacing.md,
    ...config.authorContainerStyle,
  };

  const avatarStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    ...config.avatarStyle,
  };

  const authorInfoStyle: React.CSSProperties = {
    ...config.authorInfoStyle,
  };

  const authorNameStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: theme.colors.text,
    ...config.authorNameStyle,
  };

  const authorRoleStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    color: theme.colors.muted,
    ...config.authorRoleStyle,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
    config.onTestimonialMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    config.onTestimonialMouseLeave?.(e);
  };

  return (
    <TestimonialsBase
      {...config}
      style={sectionStyle}
      containerStyle={containerStyle}
      gridStyle={gridStyle}
      testimonialStyle={testimonialStyle}
      quoteIconStyle={quoteIconStyle}
      quoteStyle={quoteStyle}
      authorContainerStyle={authorContainerStyle}
      avatarStyle={avatarStyle}
      authorInfoStyle={authorInfoStyle}
      authorNameStyle={authorNameStyle}
      authorRoleStyle={authorRoleStyle}
      onTestimonialMouseEnter={handleMouseEnter}
      onTestimonialMouseLeave={handleMouseLeave}
    />
  );
};
