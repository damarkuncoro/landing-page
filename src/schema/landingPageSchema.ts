// Landing Page Schema (JSON Schema for validation and documentation)
export const landingPageSchema = {
  $id: "urn:landing-page:schema",
  title: "Landing Page",
  description: "Configuration for a config-driven landing page",
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the landing page",
    },
    className: {
      type: "string",
      description: "CSS class name for the landing page container",
    },
    title: {
      type: "string",
      description: "Page title for SEO and accessibility",
      minLength: 1,
    },
    description: {
      type: "string",
      description: "Page description for SEO",
      minLength: 1,
    },
    sections: {
      type: "array",
      description: "Sections that make up the landing page",
      minItems: 1,
      items: {
        $ref: "#/definitions/Section",
      },
    },
    theme: {
      $ref: "#/definitions/Theme",
    },
  },
  required: ["title", "description", "sections"],
  definitions: {
    Section: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Unique identifier for the section",
        },
        className: {
          type: "string",
          description: "CSS class name for the section",
        },
        type: {
          type: "string",
          description: "Section type",
          enum: [
            "hero",
            "features",
            "testimonials",
            "pricing",
            "cta",
            "footer",
            "stats",
            "faq",
            "header",
          ],
        },
        config: {
          type: "object",
          description: "Section configuration",
        },
      },
      required: ["type", "config"],
    },
    Theme: {
      type: "object",
      properties: {
        colors: {
          $ref: "#/definitions/Colors",
        },
        spacing: {
          $ref: "#/definitions/Spacing",
        },
        fonts: {
          $ref: "#/definitions/Fonts",
        },
        typography: {
          $ref: "#/definitions/Typography",
        },
        fontWeights: {
          $ref: "#/definitions/FontWeights",
        },
        breakpoints: {
          $ref: "#/definitions/Breakpoints",
        },
        sizes: {
          $ref: "#/definitions/Sizes",
        },
      },
    },
    Typography: {
      type: "object",
      properties: {
        h1: {
          type: "string",
          description: 'Font size for H1 headings (e.g., "3rem")',
        },
        h2: {
          type: "string",
          description: 'Font size for H2 headings (e.g., "2.25rem")',
        },
        h3: {
          type: "string",
          description: 'Font size for H3 headings (e.g., "1.5rem")',
        },
        body: {
          type: "string",
          description: 'Font size for body text (e.g., "1.25rem")',
        },
        small: {
          type: "string",
          description: 'Font size for small text (e.g., "0.875rem")',
        },
      },
      required: ["h1", "h2", "h3", "body", "small"],
    },
    FontWeights: {
      type: "object",
      properties: {
        normal: {
          type: ["number", "string"],
          description: "Normal font weight (e.g., 400 or 'normal')",
        },
        medium: {
          type: ["number", "string"],
          description: "Medium font weight (e.g., 500 or 'medium')",
        },
        bold: {
          type: ["number", "string"],
          description: "Bold font weight (e.g., 700 or 'bold')",
        },
      },
      required: ["normal", "medium", "bold"],
    },
    Sizes: {
      type: "object",
      properties: {
        subtitleMaxWidth: {
          type: "string",
          description: 'Maximum width for subtitles (e.g., "600px")',
        },
        containerMaxWidth: {
          type: "string",
          description: 'Maximum width for containers (e.g., "1280px")',
        },
      },
    },
    Colors: {
      type: "object",
      properties: {
        primary: {
          type: "string",
          description: "Primary brand color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        },
        secondary: {
          type: "string",
          description: "Secondary brand color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        },
        accent: {
          type: "string",
          description: "Accent color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        },
        background: {
          type: "string",
          description: "Background color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        },
        text: {
          type: "string",
          description: "Text color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        },
        muted: {
          type: "string",
          description: "Muted text color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
        },
      },
      required: [
        "primary",
        "secondary",
        "accent",
        "background",
        "text",
        "muted",
      ],
    },
    Spacing: {
      type: "object",
      properties: {
        xs: {
          type: "string",
          description: 'Extra small spacing unit (e.g., "4px")',
        },
        sm: {
          type: "string",
          description: 'Small spacing unit (e.g., "8px")',
        },
        md: {
          type: "string",
          description: 'Medium spacing unit (e.g., "16px")',
        },
        lg: {
          type: "string",
          description: 'Large spacing unit (e.g., "24px")',
        },
        xl: {
          type: "string",
          description: 'Extra large spacing unit (e.g., "32px")',
        },
      },
      required: ["xs", "sm", "md", "lg", "xl"],
    },
    Fonts: {
      type: "object",
      properties: {
        heading: {
          type: "string",
          description: 'Font family for headings (e.g., "Roboto, sans-serif")',
        },
        body: {
          type: "string",
          description:
            'Font family for body text (e.g., "Open Sans, sans-serif")',
        },
        mono: {
          type: "string",
          description:
            'Font family for monospace text (e.g., "Fira Code, monospace")',
        },
      },
      required: ["heading", "body", "mono"],
    },
    Breakpoints: {
      type: "object",
      properties: {
        sm: {
          type: "string",
          description: 'Small breakpoint (e.g., "640px")',
        },
        md: {
          type: "string",
          description: 'Medium breakpoint (e.g., "768px")',
        },
        lg: {
          type: "string",
          description: 'Large breakpoint (e.g., "1024px")',
        },
        xl: {
          type: "string",
          description: 'Extra large breakpoint (e.g., "1280px")',
        },
      },
      required: ["sm", "md", "lg", "xl"],
    },
    ButtonConfig: {
      type: "object",
      properties: {
        text: { type: "string" },
        url: { type: "string", format: "uri-reference" },
        variant: {
          type: "string",
          enum: ["primary", "secondary", "outline", "ghost"],
        },
        size: { type: "string", enum: ["sm", "md", "lg"] },
        target: { type: "string", enum: ["_blank", "_self"] },
        skin: { type: "string", enum: ["default", "tailwind"] },
      },
      required: ["text", "url", "variant", "size"],
    },
  },
};
