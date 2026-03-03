import type { ThemeConfig } from "../../../core/types";

export function getHeroStyles(theme: ThemeConfig, alignment: "left" | "center" | "right") {
  return {
    title: {
      fontSize: theme.typography.h1,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
      lineHeight: "1.2",
    },
    subtitle: {
      fontSize: theme.typography.body,
      color: theme.colors.muted,
      marginBottom: theme.spacing.lg,
      maxWidth: theme.sizes?.subtitleMaxWidth ?? "600px",
      marginInline: alignment === "center" ? "auto" : undefined,
    },
    media: {
      maxWidth: "100%",
      borderRadius: "0.5rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
  };
}

export function getAlignmentStyles(alignment: "left" | "center" | "right") {
  const styles = {
    flexAlign: alignment === "center"
      ? "center"
      : alignment === "right"
      ? "flex-end"
      : "flex-start",
    textAlign: alignment === "left" ? "left" : alignment === "center" ? "center" : "right",
    justifyContent: alignment === "center"
      ? "center"
      : alignment === "right"
      ? "flex-end"
      : "flex-start",
  } as const;
  
  return styles;
}