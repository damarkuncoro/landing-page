import Ajv from "ajv";
import addFormats from "ajv-formats";
import { landingPageSchema, sectionConfigSchemas } from "./index";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Compile the landing page schema
const validateLandingPage = ajv.compile(landingPageSchema);

// Compile section schemas
const validateSection = {
  hero: ajv.compile(sectionConfigSchemas.hero),
  features: ajv.compile(sectionConfigSchemas.features),
  testimonials: ajv.compile(sectionConfigSchemas.testimonials),
  pricing: ajv.compile(sectionConfigSchemas.pricing),
  cta: ajv.compile(sectionConfigSchemas.cta),
  footer: ajv.compile(sectionConfigSchemas.footer),
  stats: ajv.compile(sectionConfigSchemas.stats),
  faq: ajv.compile(sectionConfigSchemas.faq),
  header: ajv.compile(sectionConfigSchemas.header),
} as any;

// Validate a landing page configuration
export const validateLandingPageConfig = (config: any) => {
  const valid = validateLandingPage(config);
  if (!valid && validateLandingPage.errors) {
    return validateLandingPage.errors.map((err: any) => ({
      field: err.instancePath || "root",
      message: err.message,
      type: err.keyword,
    }));
  }

  // Validate each section's configuration
  const sectionErrors: any[] = [];
  if (config.sections) {
    config.sections.forEach((section: any, index: number) => {
      if (validateSection[section.type]) {
        const valid = validateSection[section.type](section.config);
        if (!valid && validateSection[section.type].errors) {
          sectionErrors.push({
            field: `sections[${index}]`,
            errors: validateSection[section.type].errors.map((err: any) => ({
              field: err.instancePath || "config",
              message: err.message,
              type: err.keyword,
            })),
          });
        }
      }
    });
  }

  if (sectionErrors.length > 0) {
    return sectionErrors;
  }

  return null;
};

// Validate a single section
export const validateSectionConfig = (type: string, config: any) => {
  if (validateSection[type]) {
    const valid = validateSection[type](config);
    if (!valid && validateSection[type].errors) {
      return validateSection[type].errors.map((err: any) => ({
        field: err.instancePath || "root",
        message: err.message,
        type: err.keyword,
      }));
    }
  }
  return null;
};
