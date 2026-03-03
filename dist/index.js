"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createCtaSection: () => createCtaSection,
  createFaqSection: () => createFaqSection,
  createFeaturesSection: () => createFeaturesSection,
  createFooterSection: () => createFooterSection,
  createHeaderSection: () => createHeaderSection,
  createHeroSection: () => createHeroSection,
  createPricingSection: () => createPricingSection,
  createReactRenderer: () => createReactRenderer,
  createStatsSection: () => createStatsSection,
  createTestimonialsSection: () => createTestimonialsSection,
  defaultTheme: () => defaultTheme,
  defineLandingPage: () => defineLandingPage,
  landingPageSchema: () => landingPageSchema,
  sectionConfigSchemas: () => sectionConfigSchemas,
  validateConfig: () => validateConfig,
  validateSection: () => validateSection2
});
module.exports = __toCommonJS(src_exports);

// src/core/theme.ts
var defaultTheme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    accent: "#10b981",
    background: "#ffffff",
    text: "#1f2937",
    muted: "#6b7280"
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  fonts: {
    heading: "system-ui, -apple-system, sans-serif",
    body: "system-ui, -apple-system, sans-serif",
    mono: "monospace"
  },
  typography: {
    h1: "3rem",
    h2: "2.25rem",
    h3: "1.5rem",
    body: "1.25rem",
    small: "0.875rem"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px"
  },
  sizes: {
    subtitleMaxWidth: "600px",
    containerMaxWidth: "1280px"
  }
};
function createTheme(config) {
  return {
    ...defaultTheme,
    ...config,
    colors: {
      ...defaultTheme.colors,
      ...config?.colors
    },
    spacing: {
      ...defaultTheme.spacing,
      ...config?.spacing
    },
    fonts: {
      ...defaultTheme.fonts,
      ...config?.fonts
    },
    typography: {
      ...defaultTheme.typography,
      ...config?.typography
    },
    fontWeights: {
      ...defaultTheme.fontWeights,
      ...config?.fontWeights
    },
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...config?.breakpoints
    },
    sizes: {
      ...defaultTheme.sizes,
      ...config?.sizes
    }
  };
}

// src/schema/validate.ts
var import_ajv = __toESM(require("ajv"));
var import_ajv_formats = __toESM(require("ajv-formats"));

// src/schema/landingPageSchema.ts
var landingPageSchema = {
  $id: "urn:landing-page:schema",
  title: "Landing Page",
  description: "Configuration for a config-driven landing page",
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier for the landing page"
    },
    className: {
      type: "string",
      description: "CSS class name for the landing page container"
    },
    title: {
      type: "string",
      description: "Page title for SEO and accessibility",
      minLength: 1
    },
    description: {
      type: "string",
      description: "Page description for SEO",
      minLength: 1
    },
    sections: {
      type: "array",
      description: "Sections that make up the landing page",
      minItems: 1,
      items: {
        $ref: "#/definitions/Section"
      }
    },
    theme: {
      $ref: "#/definitions/Theme"
    }
  },
  required: ["title", "description", "sections"],
  definitions: {
    Section: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Unique identifier for the section"
        },
        className: {
          type: "string",
          description: "CSS class name for the section"
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
            "header"
          ]
        },
        config: {
          type: "object",
          description: "Section configuration"
        }
      },
      required: ["type", "config"]
    },
    Theme: {
      type: "object",
      properties: {
        colors: {
          $ref: "#/definitions/Colors"
        },
        spacing: {
          $ref: "#/definitions/Spacing"
        },
        fonts: {
          $ref: "#/definitions/Fonts"
        },
        typography: {
          $ref: "#/definitions/Typography"
        },
        fontWeights: {
          $ref: "#/definitions/FontWeights"
        },
        breakpoints: {
          $ref: "#/definitions/Breakpoints"
        },
        sizes: {
          $ref: "#/definitions/Sizes"
        }
      }
    },
    Typography: {
      type: "object",
      properties: {
        h1: {
          type: "string",
          description: 'Font size for H1 headings (e.g., "3rem")'
        },
        h2: {
          type: "string",
          description: 'Font size for H2 headings (e.g., "2.25rem")'
        },
        h3: {
          type: "string",
          description: 'Font size for H3 headings (e.g., "1.5rem")'
        },
        body: {
          type: "string",
          description: 'Font size for body text (e.g., "1.25rem")'
        },
        small: {
          type: "string",
          description: 'Font size for small text (e.g., "0.875rem")'
        }
      },
      required: ["h1", "h2", "h3", "body", "small"]
    },
    FontWeights: {
      type: "object",
      properties: {
        normal: {
          type: ["number", "string"],
          description: "Normal font weight (e.g., 400 or 'normal')"
        },
        medium: {
          type: ["number", "string"],
          description: "Medium font weight (e.g., 500 or 'medium')"
        },
        bold: {
          type: ["number", "string"],
          description: "Bold font weight (e.g., 700 or 'bold')"
        }
      },
      required: ["normal", "medium", "bold"]
    },
    Sizes: {
      type: "object",
      properties: {
        subtitleMaxWidth: {
          type: "string",
          description: 'Maximum width for subtitles (e.g., "600px")'
        },
        containerMaxWidth: {
          type: "string",
          description: 'Maximum width for containers (e.g., "1280px")'
        }
      }
    },
    Colors: {
      type: "object",
      properties: {
        primary: {
          type: "string",
          description: "Primary brand color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        },
        secondary: {
          type: "string",
          description: "Secondary brand color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        },
        accent: {
          type: "string",
          description: "Accent color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        },
        background: {
          type: "string",
          description: "Background color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        },
        text: {
          type: "string",
          description: "Text color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        },
        muted: {
          type: "string",
          description: "Muted text color",
          pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        }
      },
      required: [
        "primary",
        "secondary",
        "accent",
        "background",
        "text",
        "muted"
      ]
    },
    Spacing: {
      type: "object",
      properties: {
        xs: {
          type: "string",
          description: 'Extra small spacing unit (e.g., "4px")'
        },
        sm: {
          type: "string",
          description: 'Small spacing unit (e.g., "8px")'
        },
        md: {
          type: "string",
          description: 'Medium spacing unit (e.g., "16px")'
        },
        lg: {
          type: "string",
          description: 'Large spacing unit (e.g., "24px")'
        },
        xl: {
          type: "string",
          description: 'Extra large spacing unit (e.g., "32px")'
        }
      },
      required: ["xs", "sm", "md", "lg", "xl"]
    },
    Fonts: {
      type: "object",
      properties: {
        heading: {
          type: "string",
          description: 'Font family for headings (e.g., "Roboto, sans-serif")'
        },
        body: {
          type: "string",
          description: 'Font family for body text (e.g., "Open Sans, sans-serif")'
        },
        mono: {
          type: "string",
          description: 'Font family for monospace text (e.g., "Fira Code, monospace")'
        }
      },
      required: ["heading", "body", "mono"]
    },
    Breakpoints: {
      type: "object",
      properties: {
        sm: {
          type: "string",
          description: 'Small breakpoint (e.g., "640px")'
        },
        md: {
          type: "string",
          description: 'Medium breakpoint (e.g., "768px")'
        },
        lg: {
          type: "string",
          description: 'Large breakpoint (e.g., "1024px")'
        },
        xl: {
          type: "string",
          description: 'Extra large breakpoint (e.g., "1280px")'
        }
      },
      required: ["sm", "md", "lg", "xl"]
    },
    ButtonConfig: {
      type: "object",
      properties: {
        text: { type: "string" },
        url: { type: "string", format: "uri-reference" },
        variant: {
          type: "string",
          enum: ["primary", "secondary", "outline", "ghost"]
        },
        size: { type: "string", enum: ["sm", "md", "lg"] },
        target: { type: "string", enum: ["_blank", "_self"] }
      },
      required: ["text", "url", "variant", "size"]
    }
  }
};

// src/schema/sectionConfigSchemas.ts
var sectionConfigSchemas = {
  // Placeholder for individual section schemas
  // These will be populated with actual JSON schemas for each section type (HeroConfig, FeatureConfig, etc.)
  hero: {
    type: "object",
    properties: {
      title: { type: "string" },
      subtitle: { type: "string" },
      image: { type: "string", format: "uri-reference" },
      imageAlt: { type: "string" },
      video: { type: "string", format: "uri-reference" },
      captionsSrc: { type: "string", format: "uri-reference" },
      buttons: {
        type: "array",
        items: { $ref: "urn:landing-page:schema#/definitions/ButtonConfig" }
      },
      alignment: { type: "string", enum: ["left", "center", "right"] },
      skin: { type: "string", enum: ["default", "skin2", "skin3", "skin4", "skin5", "skin6", "skin7", "skin8", "skin9", "skin10"] }
    },
    required: ["title", "subtitle", "buttons"]
  },
  features: {
    type: "object",
    properties: {
      features: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            className: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            icon: { type: "string" },
            image: { type: "string", format: "uri-reference" }
          },
          required: ["title", "description"]
        }
      }
    },
    required: ["features"]
  },
  testimonials: {
    type: "object",
    properties: {
      testimonials: {
        type: "array",
        items: {
          type: "object",
          properties: {
            quote: { type: "string" },
            author: { type: "string" },
            role: { type: "string" },
            avatar: { type: "string", format: "uri-reference" }
          },
          required: ["quote", "author"]
        }
      }
    },
    required: ["testimonials"]
  },
  pricing: {
    type: "object",
    properties: {
      plans: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            title: { type: "string" },
            description: { type: "string" },
            price: { type: "number" },
            period: { type: "string" },
            features: {
              type: "array",
              items: { type: "string" }
            },
            button: {
              $ref: "urn:landing-page:schema#/definitions/ButtonConfig"
            },
            featured: { type: "boolean" }
          },
          required: ["title", "description", "price", "features", "button"]
        }
      }
    },
    required: ["plans"]
  },
  cta: {
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
      button: { $ref: "urn:landing-page:schema#/definitions/ButtonConfig" },
      image: { type: "string", format: "uri-reference" }
    },
    required: ["title", "description", "button"]
  },
  footer: {
    type: "object",
    properties: {
      logo: { type: "string", format: "uri-reference" },
      title: { type: "string" },
      description: { type: "string" },
      links: {
        type: "array",
        items: {
          type: "object",
          properties: {
            title: { type: "string" },
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  text: { type: "string" },
                  url: { type: "string", format: "uri-reference" },
                  target: { type: "string", enum: ["_blank", "_self"] }
                },
                required: ["text", "url"]
              }
            }
          },
          required: ["title", "items"]
        }
      },
      socialLinks: {
        type: "array",
        items: {
          type: "object",
          properties: {
            platform: { type: "string" },
            url: { type: "string", format: "uri-reference" },
            icon: { type: "string" }
          },
          required: ["platform", "url"]
        }
      },
      copyright: { type: "string" }
    },
    required: ["links", "socialLinks"]
  },
  stats: {
    type: "object",
    properties: {
      stats: {
        type: "array",
        items: {
          type: "object",
          properties: {
            number: { type: "string" },
            label: { type: "string" },
            icon: { type: "string" },
            prefix: { type: "string" },
            suffix: { type: "string" }
          },
          required: ["number", "label"]
        }
      }
    },
    required: ["stats"]
  },
  faq: {
    type: "object",
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            question: { type: "string" },
            answer: { type: "string" }
          },
          required: ["question", "answer"]
        }
      }
    },
    required: ["items"]
  },
  header: {
    type: "object",
    properties: {
      logo: { type: "string", format: "uri-reference" },
      title: { type: "string" },
      links: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            text: { type: "string" },
            url: { type: "string", format: "uri-reference" },
            target: { type: "string", enum: ["_blank", "_self"] }
          },
          required: ["text", "url"]
        }
      }
    },
    required: ["links"]
  }
};

// src/schema/validate.ts
var ajv = new import_ajv.default({ allErrors: true });
(0, import_ajv_formats.default)(ajv);
var validateLandingPage = ajv.compile(landingPageSchema);
var validateSection = {
  hero: ajv.compile(sectionConfigSchemas.hero),
  features: ajv.compile(sectionConfigSchemas.features),
  testimonials: ajv.compile(sectionConfigSchemas.testimonials),
  pricing: ajv.compile(sectionConfigSchemas.pricing),
  cta: ajv.compile(sectionConfigSchemas.cta),
  footer: ajv.compile(sectionConfigSchemas.footer),
  stats: ajv.compile(sectionConfigSchemas.stats),
  faq: ajv.compile(sectionConfigSchemas.faq),
  header: ajv.compile(sectionConfigSchemas.header)
};
var validateSectionConfig = (type, config) => {
  if (validateSection[type]) {
    const valid = validateSection[type](config);
    if (!valid && validateSection[type].errors) {
      return validateSection[type].errors.map((err) => ({
        field: err.instancePath || "root",
        message: err.message,
        type: err.keyword
      }));
    }
  }
  return null;
};

// src/core/validators.ts
function validateConfig(config) {
  const errors = [];
  if (!config.title)
    errors.push("Title is required");
  if (!config.description)
    errors.push("Description is required");
  if (!config.sections || config.sections.length === 0)
    errors.push("At least one section is required");
  config.sections?.forEach((section, index) => {
    if (!section.id)
      errors.push(`Section ${index} is missing an id`);
    if (!section.type)
      errors.push(`Section ${section.id || index} is missing a type`);
    const sectionErrors = validateSection2(section);
    sectionErrors.forEach(
      (error) => errors.push(`Section ${section.id || index}: ${error}`)
    );
  });
  return errors;
}
function validateSection2(section) {
  const errors = [];
  if (!section.type) {
    errors.push("Section type is required");
    return errors;
  }
  if (!section.config) {
    errors.push("Section config is required");
    return errors;
  }
  try {
    const validationResult = validateSectionConfig(
      section.type,
      section.config
    );
    if (validationResult) {
      errors.push(
        ...validationResult.map((err) => `${err.field}: ${err.message}`)
      );
    }
  } catch (error) {
    errors.push(`Invalid section configuration: ${error.message}`);
  }
  return errors;
}

// src/core/define.ts
function defineLandingPage(config) {
  const errors = validateConfig(config);
  if (errors.length > 0) {
    throw new Error(`Invalid landing page configuration: ${errors.join(", ")}`);
  }
  const landingPage = {
    ...config,
    sections: [...config.sections],
    // Convert to mutable array
    theme: createTheme(config.theme),
    // Methods
    getSection(id) {
      return this.sections.find((section) => section.id === id);
    },
    addSection(section) {
      const sectionErrors = validateSection2(section);
      if (sectionErrors.length > 0) {
        throw new Error(`Invalid section: ${sectionErrors.join(", ")}`);
      }
      this.sections.push(section);
      return this;
    },
    removeSection(id) {
      this.sections = this.sections.filter((section) => section.id !== id);
      return this;
    },
    updateSection(id, updates) {
      const index = this.sections.findIndex((section) => section.id === id);
      if (index !== -1) {
        const updatedSection = { ...this.sections[index], ...updates };
        const sectionErrors = validateSection2(updatedSection);
        if (sectionErrors.length > 0) {
          throw new Error(
            `Invalid section updates: ${sectionErrors.join(", ")}`
          );
        }
        this.sections[index] = updatedSection;
      }
      return this;
    },
    // Render method - returns the raw config for consumption by renderers
    toJSON() {
      const { id, className, title, description, sections, theme } = this;
      return { id, className, title, description, sections, theme };
    },
    // Validate the landing page configuration
    validate() {
      return validateConfig(this);
    },
    // Get section by type
    getSectionsByType(type) {
      return this.sections.filter((section) => section.type === type);
    },
    // Check if configuration is valid
    isValid() {
      return this.validate().length === 0;
    }
  };
  return landingPage;
}

// src/core/sections/header.ts
function createHeaderSection(config, id, className) {
  return {
    id: id || `header-${Date.now()}`,
    className,
    type: "header",
    config
  };
}

// src/core/sections/hero.ts
function createHeroSection(config, id, className) {
  return {
    id: id || `hero-${Date.now()}`,
    className,
    type: "hero",
    config
  };
}

// src/core/sections/features.ts
function createFeaturesSection(config, id, className) {
  return {
    id: id || `features-${Date.now()}`,
    className,
    type: "features",
    config
  };
}

// src/core/sections/testimonials.ts
function createTestimonialsSection(config, id, className) {
  return {
    id: id || `testimonials-${Date.now()}`,
    className,
    type: "testimonials",
    config
  };
}

// src/core/sections/pricing.ts
function createPricingSection(config, id, className) {
  return {
    id: id || `pricing-${Date.now()}`,
    className,
    type: "pricing",
    config
  };
}

// src/core/sections/cta.ts
function createCtaSection(config, id, className) {
  return {
    id: id || `cta-${Date.now()}`,
    className,
    type: "cta",
    config
  };
}

// src/core/sections/footer.ts
function createFooterSection(config, id, className) {
  return {
    id: id || `footer-${Date.now()}`,
    className,
    type: "footer",
    config
  };
}

// src/core/sections/stats.ts
function createStatsSection(config, id, className) {
  return {
    id: id || `stats-${Date.now()}`,
    className,
    type: "stats",
    config
  };
}

// src/core/sections/faq.ts
function createFaqSection(config, id, className) {
  return {
    id: id || `faq-${Date.now()}`,
    className,
    type: "faq",
    config
  };
}

// src/renderers/react/index.tsx
var import_react16 = __toESM(require("react"));

// src/renderers/react/skins/header/HeaderSkin.tsx
var import_react6 = require("react");

// src/renderers/react/base/HeaderBase.tsx
var import_react5 = __toESM(require("react"));

// src/renderers/react/base/NavbarBase.tsx
var import_react2 = __toESM(require("react"));

// src/renderers/react/base/LayoutBase.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var Box = import_react.default.forwardRef((props, ref) => {
  const { as: Component = "div", children, className, style, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ref, className, style, ...rest, children });
});
var Flex = import_react.default.forwardRef((props, ref) => {
  const {
    as: Component = "div",
    children,
    className,
    style,
    direction = "row",
    justify = "flex-start",
    align = "stretch",
    gap = 0,
    wrap = "nowrap",
    ...rest
  } = props;
  const flexStyle = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    flexWrap: wrap,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ref, className, style: flexStyle, ...rest, children });
});
var Container = import_react.default.forwardRef((props, ref) => {
  const {
    as: Component = "div",
    children,
    className,
    style,
    maxWidth = "1200px",
    padding = "0 1rem",
    center = true,
    ...rest
  } = props;
  const containerStyle = {
    maxWidth,
    padding,
    margin: center ? "0 auto" : void 0,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { ref, className, style: containerStyle, ...rest, children });
});
Box.displayName = "Box";
Flex.displayName = "Flex";
Container.displayName = "Container";

// src/renderers/react/base/NavbarBase.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var NavbarBase = import_react2.default.forwardRef(
  (props, ref) => {
    const {
      links,
      isMobile,
      isOpen,
      className,
      style,
      linkStyle,
      onLinkMouseEnter,
      onLinkMouseLeave
    } = props;
    if (isMobile && !isOpen)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Box, { as: "nav", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Flex,
      {
        as: "ul",
        direction: isMobile ? "column" : "row",
        gap: "1.5rem",
        style: { listStyle: "none", padding: 0 },
        children: links.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Box,
          {
            as: "li",
            style: { marginBottom: isMobile ? "0.5rem" : 0 },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "a",
              {
                href: link.url,
                target: link.target || "_self",
                rel: link.target === "_blank" ? "noopener noreferrer" : void 0,
                style: linkStyle,
                onMouseEnter: (e) => onLinkMouseEnter?.(e, link),
                onMouseLeave: (e) => onLinkMouseLeave?.(e, link),
                onFocus: (e) => {
                  e.currentTarget.style.outline = "2px solid currentColor";
                  e.currentTarget.style.outlineOffset = "2px";
                },
                onBlur: (e) => {
                  e.currentTarget.style.outline = "none";
                },
                children: link.text
              }
            )
          },
          index
        ))
      }
    ) });
  }
);
NavbarBase.displayName = "NavbarBase";

// src/renderers/react/ThemeProvider.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var ThemeContext = (0, import_react3.createContext)(createTheme());
var ThemeProvider = ({
  theme = {},
  children,
  dark = false
}) => {
  const mergedTheme = (0, import_react3.useMemo)(() => {
    const baseTheme = createTheme(theme);
    if (dark) {
      return {
        ...baseTheme,
        colors: {
          ...baseTheme.colors,
          background: "#000000",
          text: "#ffffff",
          muted: "#64748b",
          mutedBackground: "#1e293b",
          border: "#334155"
        }
      };
    }
    return baseTheme;
  }, [theme, dark]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ThemeContext.Provider, { value: mergedTheme, children });
};
var useTheme = () => {
  const theme = (0, import_react3.useContext)(ThemeContext);
  return theme;
};

// src/renderers/react/skins/navbar/NavbarSkin.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var NavbarSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const navbarStyle = {
    marginTop: config.isMobile ? theme.spacing.md : 0,
    ...config.style
  };
  const linkStyle = {
    color: theme.colors.muted,
    textDecoration: "none",
    transition: "color 0.2s ease",
    display: "block",
    padding: config.isMobile ? `${theme.spacing.sm} ${theme.spacing.md}` : "0.25rem 0",
    borderRadius: config.isMobile ? "0.5rem" : 0,
    fontSize: "1rem",
    fontWeight: "500",
    ...config.linkStyle
  };
  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    el.style.color = theme.colors.primary;
    config.onLinkMouseEnter?.(e, {});
  };
  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.color = theme.colors.muted;
    config.onLinkMouseLeave?.(e, {});
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    NavbarBase,
    {
      ...config,
      style: navbarStyle,
      linkStyle,
      onLinkMouseEnter: handleMouseEnter,
      onLinkMouseLeave: handleMouseLeave
    }
  );
};

// src/renderers/react/Navbar.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Navbar = ({
  links,
  isMobile,
  isOpen,
  className,
  style
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    NavbarSkin,
    {
      links,
      isMobile,
      isOpen,
      className,
      style
    }
  );
};
var Navbar_default = Navbar;

// src/renderers/react/base/MenuToggleBase.tsx
var import_react4 = __toESM(require("react"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var MenuToggleBase = import_react4.default.forwardRef((props, ref) => {
  const {
    isOpen,
    onClick,
    ariaLabel = "Toggle menu",
    className,
    style,
    iconOpen = "\u2630",
    iconClose = "\u2715"
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Box,
    {
      as: "button",
      ref,
      onClick,
      style,
      className,
      "aria-label": isOpen ? "Close menu" : ariaLabel,
      children: isOpen ? iconClose : iconOpen
    }
  );
});
MenuToggleBase.displayName = "MenuToggleBase";

// src/renderers/react/skins/menu-toggle/MenuToggleSkin.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var MenuToggleSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const toggleStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: theme.colors.text,
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: theme.spacing.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.2s ease",
    ...config.style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MenuToggleBase, { ...config, style: toggleStyle });
};

// src/renderers/react/MenuToggle.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var MenuToggle = ({
  isOpen,
  onClick,
  className,
  style
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    MenuToggleSkin,
    {
      isOpen,
      onClick,
      className,
      style
    }
  );
};
var MenuToggle_default = MenuToggle;

// src/renderers/react/base/HeaderBase.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var HeaderBase = import_react5.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    logo,
    title,
    links,
    className,
    isMobileMenuOpen = false,
    onMobileMenuToggle,
    style,
    containerStyle
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Box, { as: "header", ref, style, className, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Container, { style: containerStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Flex, { justify: "space-between", align: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Flex, { align: "center", gap: "1rem", children: [
        logo && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "img",
          {
            src: logo,
            alt: title || "Logo",
            style: { height: "40px" },
            loading: "lazy"
          }
        ),
        title && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { style: { fontSize: "1.5rem", color: theme.colors.text }, children: title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Box, { style: { display: "none" } }),
      onMobileMenuToggle && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        MenuToggle_default,
        {
          isOpen: isMobileMenuOpen,
          onClick: onMobileMenuToggle
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Navbar_default,
      {
        links,
        isMobile: true,
        isOpen: isMobileMenuOpen
      }
    )
  ] }) });
});
HeaderBase.displayName = "HeaderBase";

// src/renderers/react/skins/header/HeaderSkin.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var HeaderSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react6.useState)(false);
  const headerStyle = {
    padding: "1rem 0",
    backgroundColor: theme.colors.background,
    borderBottom: `1px solid ${theme.colors.muted}20`,
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    HeaderBase,
    {
      ...config,
      style: headerStyle,
      containerStyle,
      isMobileMenuOpen: mobileMenuOpen,
      onMobileMenuToggle: () => setMobileMenuOpen(!mobileMenuOpen)
    }
  );
};

// src/renderers/react/Header.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Header = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(HeaderSkin, { ...config });
};
var Header_default = Header;

// src/renderers/react/base/HeroBase.tsx
var import_react8 = __toESM(require("react"));

// src/renderers/react/base/ButtonBase.tsx
var import_react7 = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var ButtonBase = import_react7.default.forwardRef((props, ref) => {
  const {
    text,
    url,
    target = "_self",
    variant: _variant,
    // Destructure to avoid spreading to DOM
    size: _size,
    // Destructure to avoid spreading to DOM
    className,
    style,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onKeyDown,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "a",
    {
      ref,
      href: url,
      target,
      rel: target === "_blank" ? "noopener noreferrer" : void 0,
      style,
      className,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      onKeyDown,
      role: "button",
      tabIndex: 0,
      ...rest,
      children: text
    }
  );
});
ButtonBase.displayName = "ButtonBase";

// src/core/utils/contrast.ts
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(
    shorthandRegex,
    (_, r, g, b) => r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
function getRelativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2)
    return 1;
  const l1 = getRelativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = getRelativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
function getBestContrastColor(bgColor, lightColor = "#ffffff", darkColor = "#000000") {
  const ratioLight = getContrastRatio(bgColor, lightColor);
  const ratioDark = getContrastRatio(bgColor, darkColor);
  return ratioLight > ratioDark ? lightColor : darkColor;
}

// src/renderers/react/skins/button/ButtonSkin.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var ButtonSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const backgroundColor = config.variant === "primary" ? theme.colors.primary : config.variant === "secondary" ? theme.colors.secondary : "transparent";
  const textColor = config.variant === "primary" || config.variant === "secondary" ? getBestContrastColor(backgroundColor) : theme.colors.primary;
  const buttonStyles = {
    padding: theme.spacing[config.size === "sm" ? "sm" : config.size === "lg" ? "xl" : "md"],
    backgroundColor,
    color: textColor,
    border: config.variant === "outline" ? `2px solid ${theme.colors.primary}` : "none",
    borderRadius: "0.5rem",
    fontSize: config.size === "sm" ? "0.875rem" : config.size === "lg" ? "1.125rem" : "1rem",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.2s ease",
    ...config.style
  };
  const adjustBrightness = (color, amount) => {
    if (!color || color === "transparent")
      return color;
    try {
      const num = parseInt(color.replace("#", ""), 16);
      const amt = Math.round(2.55 * amount);
      const R = Math.max(0, Math.min(255, (num >> 16) + amt));
      const G = Math.max(0, Math.min(255, (num >> 8 & 255) + amt));
      const B = Math.max(0, Math.min(255, (num & 255) + amt));
      return "#" + (16777216 + R * 65536 + G * 256 + B).toString(16).slice(1);
    } catch (e) {
      return color;
    }
  };
  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    if (config.variant === "primary") {
      el.style.backgroundColor = adjustBrightness(theme.colors.primary, -20);
      el.style.transform = "translateY(-2px)";
      el.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    } else if (config.variant === "secondary") {
      el.style.backgroundColor = adjustBrightness(theme.colors.secondary, -20);
      el.style.transform = "translateY(-2px)";
      el.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    } else if (config.variant === "outline") {
      el.style.backgroundColor = theme.colors.primary;
      el.style.color = theme.colors.primary === "#ffffff" ? theme.colors.text : "#ffffff";
    } else if (config.variant === "ghost") {
      el.style.backgroundColor = `${theme.colors.primary}10`;
    }
    config.onMouseEnter?.(e);
  };
  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = buttonStyles.backgroundColor;
    el.style.color = buttonStyles.color;
    el.style.transform = "translateY(0)";
    el.style.boxShadow = "none";
    config.onMouseLeave?.(e);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.href = config.url;
    }
    config.onKeyDown?.(e);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    ButtonBase,
    {
      ...config,
      style: buttonStyles,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onKeyDown: handleKeyDown,
      onFocus: (e) => {
        e.currentTarget.style.outline = `2px solid ${theme.colors.primary}`;
        e.currentTarget.style.outlineOffset = "2px";
        config.onFocus?.(e);
      },
      onBlur: (e) => {
        e.currentTarget.style.outline = "none";
        config.onBlur?.(e);
      }
    }
  );
};

// src/renderers/react/Button.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var Button = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ButtonSkin, { ...config });
};
var Button_default = Button;

// src/renderers/react/base/heroStyles.ts
function getHeroStyles(theme, alignment) {
  return {
    title: {
      fontSize: theme.typography.h1,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
      lineHeight: "1.2"
    },
    subtitle: {
      fontSize: theme.typography.body,
      color: theme.colors.muted,
      marginBottom: theme.spacing.lg,
      maxWidth: theme.sizes?.subtitleMaxWidth ?? "600px",
      marginInline: alignment === "center" ? "auto" : void 0
    },
    media: {
      maxWidth: "100%",
      borderRadius: "0.5rem",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
    }
  };
}
function getAlignmentStyles(alignment) {
  const styles = {
    flexAlign: alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start",
    textAlign: alignment === "left" ? "left" : alignment === "center" ? "center" : "right",
    justifyContent: alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"
  };
  return styles;
}

// src/renderers/react/base/HeroBase.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var HeroBase = import_react8.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    title,
    subtitle,
    buttons,
    image,
    imageAlt,
    video,
    captionsSrc,
    alignment = "center",
    className,
    style,
    containerStyle,
    contentStyle,
    testId
  } = props;
  const headingId = props.id ? `${props.id}-title` : "hero-title";
  const styles = (0, import_react8.useMemo)(
    () => getHeroStyles(theme, alignment),
    [theme, alignment]
  );
  const alignmentStyles = (0, import_react8.useMemo)(
    () => getAlignmentStyles(alignment),
    [alignment]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Box,
    {
      as: "section",
      ref,
      className,
      style,
      "aria-labelledby": headingId,
      "data-testid": testId || "hero-section",
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Container, { style: containerStyle, "data-testid": "hero-container", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        Flex,
        {
          direction: "column",
          gap: theme.spacing.xl,
          align: alignmentStyles.flexAlign,
          style: {
            textAlign: alignmentStyles.textAlign,
            ...contentStyle
          },
          "data-testid": "hero-content",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Box, { "data-testid": "hero-text-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "h1",
                {
                  id: headingId,
                  style: styles.title,
                  "data-testid": "hero-title",
                  children: title
                }
              ),
              subtitle && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { style: styles.subtitle, "data-testid": "hero-subtitle", children: subtitle })
            ] }),
            (image || video) && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Box, { "data-testid": "hero-media", children: [
              image && !video && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "img",
                {
                  src: image,
                  alt: imageAlt || title || "Hero",
                  style: styles.media,
                  loading: "lazy",
                  "data-testid": "hero-image"
                }
              ),
              video && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "video",
                {
                  src: video,
                  controls: true,
                  "aria-label": title || "Hero video",
                  title: title || "Hero video",
                  style: styles.media,
                  "data-testid": "hero-video",
                  children: captionsSrc && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("track", { kind: "captions", src: captionsSrc, default: true })
                }
              )
            ] }),
            !!buttons?.length && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              Flex,
              {
                gap: theme.spacing.md,
                wrap: "wrap",
                justify: alignmentStyles.justifyContent,
                "data-testid": "hero-buttons",
                children: buttons.map((button, index) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button_default, { config: button }, button.id || index))
              }
            )
          ]
        }
      ) })
    }
  );
});
HeroBase.displayName = "HeroBase";

// src/renderers/react/skins/hero/HeroSkin.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var HeroSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: config.alignment || "center",
    textAlign: config.alignment || "center",
    ...config.contentStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin2.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var HeroSkin2 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "6rem 0",
    backgroundColor: theme.colors.background,
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing.xl,
    alignItems: "center",
    ...config.contentStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin3.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var HeroSkin3 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "8rem 0",
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
    color: "#ffffff",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    ...config.contentStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin4.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var HeroSkin4 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "8rem 0",
    position: "relative",
    overflow: "hidden",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    position: "relative",
    zIndex: 1,
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
    ...config.contentStyle
  };
  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    zIndex: 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { style: sectionStyle, className: config.className, children: [
    config.video && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "video",
      {
        src: config.video,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        style: videoStyle
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: overlayStyle }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      HeroBase,
      {
        ...config,
        style: { position: "relative", zIndex: 1 },
        containerStyle,
        contentStyle
      }
    )
  ] });
};

// src/renderers/react/skins/hero/HeroSkin5.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var HeroSkin5 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "6rem 0",
    backgroundColor: "#f8fafc",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    ...config.contentStyle
  };
  const imageStyle = {
    maxWidth: "80%",
    borderRadius: "0.5rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin6.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var HeroSkin6 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "8rem 0",
    backgroundColor: "#000",
    backgroundImage: "linear-gradient(to right, #000, #1a1a1a)",
    color: "#fff",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing.xl,
    alignItems: "center",
    ...config.contentStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin7.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var HeroSkin7 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "5rem 0",
    backgroundColor: "#fff",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    ...config.contentStyle
  };
  const titleStyle = {
    fontWeight: 400,
    letterSpacing: "-0.02em"
  };
  const descriptionStyle = {
    color: "#64748b",
    fontSize: "1.125rem",
    lineHeight: 1.6
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin8.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var HeroSkin8 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "8rem 0",
    backgroundColor: "#3b82f6",
    backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing.xl,
    alignItems: "center",
    ...config.contentStyle
  };
  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#3b82f6",
    fontWeight: "bold",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin9.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var HeroSkin9 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "6rem 0",
    backgroundColor: "#f8fafc",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    ...config.contentStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/skins/hero/HeroSkin10.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var HeroSkin10 = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    backgroundImage: "linear-gradient(135deg, #000, #1a1a1a)",
    color: "#fff",
    padding: "0 1rem",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    ...config.containerStyle
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.xl,
    alignItems: "center",
    textAlign: "center",
    ...config.contentStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    HeroBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/Hero.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var Hero = ({ config }) => {
  switch (config.skin) {
    case "skin2":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin2, { ...config });
    case "skin3":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin3, { ...config });
    case "skin4":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin4, { ...config });
    case "skin5":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin5, { ...config });
    case "skin6":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin6, { ...config });
    case "skin7":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin7, { ...config });
    case "skin8":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin8, { ...config });
    case "skin9":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin9, { ...config });
    case "skin10":
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin10, { ...config });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HeroSkin, { ...config });
  }
};
var Hero_default = Hero;

// src/renderers/react/base/FeaturesBase.tsx
var import_react9 = __toESM(require("react"));
var import_jsx_runtime27 = require("react/jsx-runtime");
var FeaturesBase = import_react9.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    features,
    className,
    style,
    containerStyle,
    gridStyle,
    featureStyle,
    iconStyle,
    titleStyle,
    descriptionStyle,
    onFeatureMouseEnter,
    onFeatureMouseLeave
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Box, { as: "section", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Container, { style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Box, { style: gridStyle, children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    Box,
    {
      className: feature.className,
      style: featureStyle,
      onMouseEnter: onFeatureMouseEnter,
      onMouseLeave: onFeatureMouseLeave,
      children: [
        feature.icon && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Box, { style: iconStyle, children: feature.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Box, { as: "h3", style: titleStyle, children: feature.title }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Box, { as: "p", style: descriptionStyle, children: feature.description })
      ]
    },
    feature.id
  )) }) }) });
});
FeaturesBase.displayName = "FeaturesBase";

// src/renderers/react/skins/features/FeaturesSkin.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var FeaturesSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing.xl,
    ...config.gridStyle
  };
  const featureStyle = {
    padding: theme.spacing.lg,
    border: `1px solid ${theme.colors.muted}20`,
    borderRadius: "0.5rem",
    backgroundColor: theme.colors.background,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    ...config.featureStyle
  };
  const iconStyle = {
    marginBottom: theme.spacing.md,
    ...config.iconStyle
  };
  const titleStyle = {
    fontSize: "1.5rem",
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
    ...config.titleStyle
  };
  const descriptionStyle = {
    color: theme.colors.muted,
    lineHeight: "1.6",
    ...config.descriptionStyle
  };
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
    config.onFeatureMouseEnter?.(e);
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    config.onFeatureMouseLeave?.(e);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    FeaturesBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      gridStyle,
      featureStyle,
      iconStyle,
      titleStyle,
      descriptionStyle,
      onFeatureMouseEnter: handleMouseEnter,
      onFeatureMouseLeave: handleMouseLeave
    }
  );
};

// src/renderers/react/Features.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var Features = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(FeaturesSkin, { ...config });
};
var Features_default = Features;

// src/renderers/react/base/TestimonialsBase.tsx
var import_react10 = __toESM(require("react"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var TestimonialsBase = import_react10.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    testimonials,
    className,
    style,
    containerStyle,
    gridStyle,
    testimonialStyle,
    quoteIconStyle,
    quoteStyle,
    authorContainerStyle,
    avatarStyle,
    authorInfoStyle,
    authorNameStyle,
    authorRoleStyle,
    onTestimonialMouseEnter,
    onTestimonialMouseLeave
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Box, { as: "section", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Container, { style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Box, { style: gridStyle, children: testimonials.map((testimonial) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    Box,
    {
      className: testimonial.className,
      style: testimonialStyle,
      onMouseEnter: onTestimonialMouseEnter,
      onMouseLeave: onTestimonialMouseLeave,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Box, { style: quoteIconStyle, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: theme.colors.primary,
            strokeWidth: "2",
            children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Box, { as: "blockquote", style: quoteStyle, children: testimonial.quote }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
          Flex,
          {
            align: "center",
            gap: theme.spacing.md,
            style: authorContainerStyle,
            children: [
              testimonial.avatar && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                "img",
                {
                  src: testimonial.avatar,
                  alt: testimonial.author,
                  style: avatarStyle,
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Box, { style: authorInfoStyle, children: [
                /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Box, { as: "p", style: authorNameStyle, children: testimonial.author }),
                testimonial.role && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Box, { as: "p", style: authorRoleStyle, children: testimonial.role })
              ] })
            ]
          }
        )
      ]
    },
    testimonial.id
  )) }) }) });
});
TestimonialsBase.displayName = "TestimonialsBase";

// src/renderers/react/skins/testimonials/TestimonialsSkin.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
var TestimonialsSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing.xl,
    ...config.gridStyle
  };
  const testimonialStyle = {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    border: `1px solid ${theme.colors.muted}20`,
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    ...config.testimonialStyle
  };
  const quoteIconStyle = {
    marginBottom: theme.spacing.md,
    ...config.quoteIconStyle
  };
  const quoteStyle = {
    fontSize: "1.125rem",
    fontStyle: "italic",
    color: theme.colors.text,
    ...config.quoteStyle
  };
  const authorContainerStyle = {
    marginTop: theme.spacing.md,
    ...config.authorContainerStyle
  };
  const avatarStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    ...config.avatarStyle
  };
  const authorInfoStyle = {
    ...config.authorInfoStyle
  };
  const authorNameStyle = {
    fontWeight: "bold",
    color: theme.colors.text,
    ...config.authorNameStyle
  };
  const authorRoleStyle = {
    fontSize: "0.875rem",
    color: theme.colors.muted,
    ...config.authorRoleStyle
  };
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
    config.onTestimonialMouseEnter?.(e);
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    config.onTestimonialMouseLeave?.(e);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    TestimonialsBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      gridStyle,
      testimonialStyle,
      quoteIconStyle,
      quoteStyle,
      authorContainerStyle,
      avatarStyle,
      authorInfoStyle,
      authorNameStyle,
      authorRoleStyle,
      onTestimonialMouseEnter: handleMouseEnter,
      onTestimonialMouseLeave: handleMouseLeave
    }
  );
};

// src/renderers/react/Testimonials.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var Testimonials = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(TestimonialsSkin, { ...config });
};
var Testimonials_default = Testimonials;

// src/renderers/react/base/PricingBase.tsx
var import_react11 = __toESM(require("react"));
var import_jsx_runtime33 = require("react/jsx-runtime");
var PricingBase = import_react11.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    plans,
    className,
    style,
    containerStyle,
    gridStyle,
    planStyle,
    featuredBadgeStyle,
    titleStyle,
    descriptionStyle,
    priceContainerStyle,
    priceStyle,
    periodStyle,
    featuresListStyle,
    featureItemStyle,
    checkIcon
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { as: "section", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Container, { style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { style: gridStyle, children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    Box,
    {
      className: plan.className,
      style: typeof planStyle === "function" ? planStyle(plan) : planStyle,
      children: [
        plan.featured && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { style: featuredBadgeStyle, children: "Popular" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { as: "h3", style: titleStyle, children: plan.title }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { as: "p", style: descriptionStyle, children: plan.description }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Box, { style: priceContainerStyle, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { as: "span", style: priceStyle, children: plan.price }),
          plan.period && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Box, { as: "span", style: periodStyle, children: [
            "/",
            plan.period
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Box, { as: "ul", style: featuresListStyle, children: plan.features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Box, { as: "li", style: featureItemStyle, children: [
          checkIcon || /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: theme.colors.accent,
              strokeWidth: "2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("polyline", { points: "22 4 12 14.01 9 11.01" })
              ]
            }
          ),
          feature
        ] }, index)) }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button_default, { config: plan.button })
      ]
    },
    plan.id
  )) }) }) });
});
PricingBase.displayName = "PricingBase";

// src/renderers/react/skins/pricing/PricingSkin.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var PricingSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: theme.spacing.xl,
    maxWidth: "1000px",
    margin: "0 auto",
    ...config.gridStyle
  };
  const planStyle = (plan) => ({
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    border: `2px solid ${plan.featured ? theme.colors.primary : `${theme.colors.muted}20`}`,
    borderRadius: "0.5rem",
    boxShadow: plan.featured ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    ...config.planStyle?.(plan)
  });
  const featuredBadgeStyle = {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.colors.primary,
    color: "#ffffff",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    ...config.featuredBadgeStyle
  };
  const titleStyle = {
    fontSize: "1.5rem",
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
    ...config.titleStyle
  };
  const descriptionStyle = {
    color: theme.colors.muted,
    marginBottom: theme.spacing.md,
    ...config.descriptionStyle
  };
  const priceContainerStyle = {
    marginBottom: theme.spacing.lg,
    ...config.priceContainerStyle
  };
  const priceStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: theme.colors.text,
    ...config.priceStyle
  };
  const periodStyle = {
    color: theme.colors.muted,
    ...config.periodStyle
  };
  const featuresListStyle = {
    marginBottom: theme.spacing.lg,
    listStyle: "none",
    padding: 0,
    flex: 1,
    ...config.featuresListStyle
  };
  const featureItemStyle = {
    padding: `${theme.spacing.sm} 0`,
    color: theme.colors.text,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing.sm,
    ...config.featureItemStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    PricingBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      gridStyle,
      planStyle,
      featuredBadgeStyle,
      titleStyle,
      descriptionStyle,
      priceContainerStyle,
      priceStyle,
      periodStyle,
      featuresListStyle,
      featureItemStyle
    }
  );
};

// src/renderers/react/Pricing.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var Pricing = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(PricingSkin, { ...config });
};
var Pricing_default = Pricing;

// src/renderers/react/base/CtaBase.tsx
var import_react12 = __toESM(require("react"));
var import_jsx_runtime36 = require("react/jsx-runtime");
var CtaBase = import_react12.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    title,
    description,
    button,
    className,
    style,
    containerStyle,
    contentStyle
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Box, { as: "section", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Container, { style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Box, { style: contentStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h2", { style: { fontSize: "2rem", marginBottom: theme.spacing.md }, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "p",
      {
        style: {
          fontSize: "1.125rem",
          marginBottom: theme.spacing.lg,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto"
        },
        children: description
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Button_default, { config: button })
  ] }) }) });
});
CtaBase.displayName = "CtaBase";

// src/renderers/react/skins/cta/CtaSkin.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var CtaSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const backgroundColor = theme.colors.primary;
  const textColor = getBestContrastColor(backgroundColor);
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const contentStyle = {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor,
    color: textColor,
    borderRadius: "0.5rem",
    ...config.contentStyle
  };
  const buttonConfig = {
    ...config.button,
    variant: config.button.variant === "primary" ? "outline" : config.button.variant
  };
  const buttonTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: textColor,
      // Warna outline tombol mengikuti warna teks CTA yang kontras
      text: backgroundColor
      // Warna teks saat hover tombol mengikuti warna background CTA
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    CtaBase,
    {
      ...config,
      button: buttonConfig,
      style: sectionStyle,
      containerStyle,
      contentStyle
    }
  );
};

// src/renderers/react/Cta.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var Cta = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CtaSkin, { ...config });
};
var Cta_default = Cta;

// src/renderers/react/base/FooterBase.tsx
var import_react13 = __toESM(require("react"));
var import_jsx_runtime39 = require("react/jsx-runtime");
var FooterBase = import_react13.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    logo,
    title,
    description,
    links,
    copyright,
    className,
    style,
    containerStyle,
    gridStyle,
    columnStyle,
    linkStyle,
    onLinkMouseEnter,
    onLinkMouseLeave
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Box, { as: "footer", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Container, { style: containerStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Box, { style: gridStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Box, { style: columnStyle, children: [
        logo && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "img",
          {
            src: logo,
            alt: title || "Logo",
            style: { marginBottom: theme.spacing.md },
            loading: "lazy"
          }
        ),
        title && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          Box,
          {
            as: "h3",
            style: {
              fontSize: "1.25rem",
              marginBottom: theme.spacing.md,
              color: theme.colors.text
            },
            children: title
          }
        ),
        description && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          Box,
          {
            as: "p",
            style: { color: theme.colors.muted, lineHeight: "1.6" },
            children: description
          }
        )
      ] }),
      links.map((linkGroup) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(Box, { style: columnStyle, children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          Box,
          {
            as: "h4",
            style: {
              marginBottom: theme.spacing.md,
              color: theme.colors.text
            },
            children: linkGroup.title
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Box, { as: "ul", style: { listStyle: "none", padding: 0 }, children: linkGroup.items.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          Box,
          {
            as: "li",
            style: { marginBottom: theme.spacing.sm },
            children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              "a",
              {
                href: link.url,
                target: link.target || "_self",
                rel: link.target === "_blank" ? "noopener noreferrer" : void 0,
                style: linkStyle,
                onMouseEnter: onLinkMouseEnter,
                onMouseLeave: onLinkMouseLeave,
                children: link.text
              }
            )
          },
          index
        )) })
      ] }, linkGroup.title))
    ] }),
    copyright && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      Box,
      {
        style: {
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: `1px solid ${theme.colors.muted}20`,
          textAlign: "center"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Box, { as: "p", style: { color: theme.colors.muted }, children: copyright })
      }
    )
  ] }) });
});
FooterBase.displayName = "FooterBase";

// src/renderers/react/skins/footer/FooterSkin.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var FooterSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    backgroundColor: theme.colors.background,
    borderTop: `1px solid ${theme.colors.muted}20`,
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
    ...config.gridStyle
  };
  const columnStyle = {
    ...config.columnStyle
  };
  const linkStyle = {
    color: theme.colors.muted,
    textDecoration: "none",
    transition: "color 0.2s ease",
    ...config.linkStyle
  };
  const handleMouseEnter = (e) => {
    e.currentTarget.style.color = theme.colors.primary;
    config.onLinkMouseEnter?.(e);
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.color = theme.colors.muted;
    config.onLinkMouseLeave?.(e);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    FooterBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      gridStyle,
      columnStyle,
      linkStyle,
      onLinkMouseEnter: handleMouseEnter,
      onLinkMouseLeave: handleMouseLeave
    }
  );
};

// src/renderers/react/Footer.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
var Footer = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(FooterSkin, { ...config });
};
var Footer_default = Footer;

// src/renderers/react/base/StatsBase.tsx
var import_react14 = __toESM(require("react"));
var import_jsx_runtime42 = require("react/jsx-runtime");
var StatsBase = import_react14.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    stats,
    className,
    style,
    containerStyle,
    gridStyle,
    statStyle,
    iconStyle,
    numberContainerStyle,
    numberStyle,
    labelStyle
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { as: "section", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Container, { style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { style: gridStyle, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Box, { className: stat.className, style: statStyle, children: [
    stat.icon && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { style: iconStyle, children: stat.icon }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(Box, { style: numberContainerStyle, children: [
      stat.prefix && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { as: "span", style: numberStyle, children: stat.prefix }),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { as: "span", style: numberStyle, children: stat.number }),
      stat.suffix && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { as: "span", style: numberStyle, children: stat.suffix })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Box, { as: "p", style: labelStyle, children: stat.label })
  ] }, stat.id)) }) }) });
});
StatsBase.displayName = "StatsBase";

// src/renderers/react/skins/stats/StatsSkin.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var StatsSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: theme.spacing.xl,
    textAlign: "center",
    ...config.gridStyle
  };
  const statStyle = {
    padding: theme.spacing.lg,
    borderRadius: "0.5rem",
    backgroundColor: theme.colors.background,
    ...config.statStyle
  };
  const iconStyle = {
    fontSize: "2rem",
    marginBottom: theme.spacing.md,
    ...config.iconStyle
  };
  const numberContainerStyle = {
    marginBottom: theme.spacing.sm,
    ...config.numberContainerStyle
  };
  const numberStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: theme.colors.primary,
    ...config.numberStyle
  };
  const labelStyle = {
    fontSize: "1.125rem",
    color: theme.colors.muted,
    ...config.labelStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    StatsBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      gridStyle,
      statStyle,
      iconStyle,
      numberContainerStyle,
      numberStyle,
      labelStyle
    }
  );
};

// src/renderers/react/Stats.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
var Stats = ({
  config
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(StatsSkin, { ...config });
};
var Stats_default = Stats;

// src/renderers/react/base/FaqBase.tsx
var import_react15 = __toESM(require("react"));
var import_jsx_runtime45 = require("react/jsx-runtime");
var FaqBase = import_react15.default.forwardRef((props, ref) => {
  const theme = useTheme();
  const {
    items,
    className,
    style,
    containerStyle,
    itemStyle,
    questionStyle,
    answerStyle
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Box, { as: "section", ref, className, style, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Container, { style: containerStyle, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Box, { style: { maxWidth: "800px", margin: "0 auto" }, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Box, { style: itemStyle, children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("details", { style: { padding: theme.spacing.md }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("summary", { style: questionStyle, children: item.question }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { style: answerStyle, children: item.answer })
  ] }) }, item.id)) }) }) });
});
FaqBase.displayName = "FaqBase";

// src/renderers/react/skins/faq/FaqSkin.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var FaqSkin = (props) => {
  const theme = useTheme();
  const { ...config } = props;
  const sectionStyle = {
    padding: "4rem 0",
    ...config.style
  };
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    ...config.containerStyle
  };
  const itemStyle = {
    marginBottom: theme.spacing.lg,
    border: `1px solid ${theme.colors.muted}20`,
    borderRadius: "0.5rem",
    overflow: "hidden",
    ...config.itemStyle
  };
  const questionStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: theme.colors.text,
    cursor: "pointer",
    listStyle: "none",
    ...config.questionStyle
  };
  const answerStyle = {
    marginTop: theme.spacing.md,
    color: theme.colors.muted,
    lineHeight: "1.6",
    ...config.answerStyle
  };
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    FaqBase,
    {
      ...config,
      style: sectionStyle,
      containerStyle,
      itemStyle,
      questionStyle,
      answerStyle
    }
  );
};

// src/renderers/react/Faq.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
var Faq = ({ config }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(FaqSkin, { ...config });
};
var Faq_default = Faq;

// src/renderers/react/index.tsx
var import_jsx_runtime48 = require("react/jsx-runtime");
var createReactRenderer = () => {
  const SectionRenderer = ({
    section
  }) => {
    switch (section.type) {
      case "header":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Header_default,
          {
            config: section.config
          },
          section.id
        );
      case "hero":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Hero_default,
          {
            config: section.config
          },
          section.id
        );
      case "features":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Features_default,
          {
            config: section.config
          },
          section.id
        );
      case "testimonials":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Testimonials_default,
          {
            config: section.config
          },
          section.id
        );
      case "pricing":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Pricing_default,
          {
            config: section.config
          },
          section.id
        );
      case "cta":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Cta_default,
          {
            config: section.config
          },
          section.id
        );
      case "footer":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Footer_default,
          {
            config: section.config
          },
          section.id
        );
      case "stats":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Stats_default,
          {
            config: section.config
          },
          section.id
        );
      case "faq":
        return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
          Faq_default,
          {
            config: section.config
          },
          section.id
        );
      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  };
  const LandingPage = ({ config }) => {
    import_react16.default.useEffect(() => {
      const style = document.createElement("style");
      style.textContent = `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: ${config.theme?.fonts?.body || "system-ui, sans-serif"};
            background-color: ${config.theme?.colors?.background || "#ffffff"};
            color: ${config.theme?.colors?.text || "#000000"};
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
        `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, [config]);
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(ThemeProvider, { theme: config.theme, dark: config.theme?.colors?.background === "#000000", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(Box, { children: config.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      SectionRenderer,
      {
        section
      },
      section.id
    )) }) });
  };
  return LandingPage;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCtaSection,
  createFaqSection,
  createFeaturesSection,
  createFooterSection,
  createHeaderSection,
  createHeroSection,
  createPricingSection,
  createReactRenderer,
  createStatsSection,
  createTestimonialsSection,
  defaultTheme,
  defineLandingPage,
  landingPageSchema,
  sectionConfigSchemas,
  validateConfig,
  validateSection
});
//# sourceMappingURL=index.js.map