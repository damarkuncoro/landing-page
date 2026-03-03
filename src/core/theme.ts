import type { ThemeConfig, DeepPartial } from "./types";

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    accent: "#10b981",
    background: "#ffffff",
    text: "#1f2937",
    muted: "#6b7280",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  fonts: {
    heading: "system-ui, -apple-system, sans-serif",
    body: "system-ui, -apple-system, sans-serif",
    mono: "monospace",
  },
  typography: {
    h1: "3rem",
    h2: "2.25rem",
    h3: "1.5rem",
    body: "1.25rem",
    small: "0.875rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  sizes: {
    subtitleMaxWidth: "600px",
    containerMaxWidth: "1280px",
  },
};

export function createTheme(config?: DeepPartial<ThemeConfig>): ThemeConfig {
  return {
    ...defaultTheme,
    ...config,
    colors: {
      ...defaultTheme.colors,
      ...config?.colors,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...config?.spacing,
    },
    fonts: {
      ...defaultTheme.fonts,
      ...config?.fonts,
    },
    typography: {
      ...defaultTheme.typography,
      ...config?.typography,
    },
    fontWeights: {
      ...defaultTheme.fontWeights,
      ...config?.fontWeights,
    },
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...config?.breakpoints,
    },
    sizes: {
      ...defaultTheme.sizes,
      ...config?.sizes,
    },
  };
}

export function validateTheme(theme: Partial<ThemeConfig>): string[] {
  const errors: string[] = [];

  if (theme.colors) {
    const requiredColors = [
      "primary",
      "secondary",
      "accent",
      "background",
      "text",
      "muted",
    ] as const;
    requiredColors.forEach((color) => {
      const colorValue = (theme.colors as any)[color];
      if (
        colorValue &&
        !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorValue)
      ) {
        errors.push(`Invalid color format for ${color}: ${colorValue}`);
      }
    });
  }

  if (theme.spacing) {
    const requiredSpacing = ["xs", "sm", "md", "lg", "xl"] as const;
    requiredSpacing.forEach((size) => {
      const spacingValue = (theme.spacing as any)[size];
      if (spacingValue && !/^\d+(\.\d+)?(px|rem|em)$/.test(spacingValue)) {
        errors.push(`Invalid spacing format for ${size}: ${spacingValue}`);
      }
    });
  }

  if (theme.breakpoints) {
    const requiredBreakpoints = ["sm", "md", "lg", "xl"] as const;
    requiredBreakpoints.forEach((breakpoint) => {
      const breakpointValue = (theme.breakpoints as any)[breakpoint];
      if (breakpointValue && !/^\d+(px|em|rem)$/.test(breakpointValue)) {
        errors.push(
          `Invalid breakpoint format for ${breakpoint}: ${breakpointValue}`,
        );
      }
    });
  }

  if (theme.typography) {
    const requiredTypography = ["h1", "h2", "h3", "body", "small"] as const;
    requiredTypography.forEach((size) => {
      const typographyValue = (theme.typography as any)[size];
      if (typographyValue && !/^\d+(\.\d+)?(px|rem|em)$/.test(typographyValue)) {
        errors.push(
          `Invalid typography format for ${size}: ${typographyValue}`,
        );
      }
    });
  }

  if (theme.fontWeights) {
    const requiredFontWeights = ["normal", "medium", "bold"] as const;
    requiredFontWeights.forEach((weight) => {
      const fontWeightValue = (theme.fontWeights as any)[weight];
      if (
        fontWeightValue &&
        typeof fontWeightValue !== "number" &&
        !["normal", "medium", "bold"].includes(fontWeightValue)
      ) {
        errors.push(
          `Invalid font weight format for ${weight}: ${fontWeightValue}`,
        );
      }
    });
  }

  return errors;
}
