export const sectionConfigSchemas = {
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
        items: { $ref: "urn:landing-page:schema#/definitions/ButtonConfig" },
      },
      alignment: { type: "string", enum: ["left", "center", "right"] },
      skin: { type: "string", enum: ["default", "skin2", "skin3", "skin4", "skin5", "skin6", "skin7", "skin8", "skin9", "skin10", "tailwind"] },
    },
    required: ["title", "subtitle", "buttons"],
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
            image: { type: "string", format: "uri-reference" },
          },
          required: ["title", "description"],
        },
      },
    },
    required: ["features"],
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
            avatar: { type: "string", format: "uri-reference" },
          },
          required: ["quote", "author"],
        },
      },
    },
    required: ["testimonials"],
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
              items: { type: "string" },
            },
            button: {
              $ref: "urn:landing-page:schema#/definitions/ButtonConfig",
            },
            featured: { type: "boolean" },
          },
          required: ["title", "description", "price", "features", "button"],
        },
      },
    },
    required: ["plans"],
  },
  cta: {
    type: "object",
    properties: {
      title: { type: "string" },
      description: { type: "string" },
      button: { $ref: "urn:landing-page:schema#/definitions/ButtonConfig" },
      image: { type: "string", format: "uri-reference" },
    },
    required: ["title", "description", "button"],
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
                  target: { type: "string", enum: ["_blank", "_self"] },
                },
                required: ["text", "url"],
              },
            },
          },
          required: ["title", "items"],
        },
      },
      socialLinks: {
        type: "array",
        items: {
          type: "object",
          properties: {
            platform: { type: "string" },
            url: { type: "string", format: "uri-reference" },
            icon: { type: "string" },
          },
          required: ["platform", "url"],
        },
      },
      copyright: { type: "string" },
    },
    required: ["links", "socialLinks"],
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
            suffix: { type: "string" },
          },
          required: ["number", "label"],
        },
      },
    },
    required: ["stats"],
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
            answer: { type: "string" },
          },
          required: ["question", "answer"],
        },
      },
    },
    required: ["items"],
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
            target: { type: "string", enum: ["_blank", "_self"] },
            isActive: { type: "boolean" },
            isLoading: { type: "boolean" },
            children: {
              type: "array",
              items: { $ref: "#/properties/links/items" },
            },
          },
          required: ["text"],
        },
      },
      buttons: {
        type: "array",
        items: { $ref: "urn:landing-page:schema#/definitions/ButtonConfig" },
      },
      fixed: { type: "boolean" },
      scrollEffect: { type: "boolean" },
      skin: { type: "string", enum: ["default", "tailwind", "modern"] },
      searchPlaceholder: { type: "string" },
      initialSearchValue: { type: "string" },
      showSearchInMobileMenu: { type: "boolean" },
      languageSelector: {
        type: "object",
        properties: {
          currentLanguage: { type: "string" },
          languages: {
            type: "array",
            items: {
              type: "object",
              properties: {
                code: { type: "string" },
                name: { type: "string" },
              },
              required: ["code", "name"],
            },
          },
        },
        required: ["currentLanguage", "languages"],
      },
      themeSwitcher: {
        type: "object",
        properties: {
          currentTheme: { type: "string", enum: ["light", "dark"] },
        },
        required: ["currentTheme"],
      },
    },
    required: ["links"],
  },
};
