import type { LandingPageConfig, SectionConfig } from "./types";
import { validateSectionConfig } from "../schema/validate";

export function validateConfig(config: Partial<LandingPageConfig>): string[] {
  const errors: string[] = [];

  if (!config.title) errors.push("Title is required");
  if (!config.description) errors.push("Description is required");
  if (!config.sections || config.sections.length === 0)
    errors.push("At least one section is required");

  config.sections?.forEach((section, index) => {
    if (!section.id) errors.push(`Section ${index} is missing an id`);
    if (!section.type)
      errors.push(`Section ${section.id || index} is missing a type`);

    const sectionErrors = validateSection(section);
    sectionErrors.forEach((error) =>
      errors.push(`Section ${section.id || index}: ${error}`),
    );
  });

  return errors;
}

export function validateSection(section: Partial<SectionConfig>): string[] {
  const errors: string[] = [];

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
      section.config,
    );
    if (validationResult) {
      errors.push(
        ...validationResult.map((err: any) => `${err.field}: ${err.message}`),
      );
    }
  } catch (error) {
    errors.push(`Invalid section configuration: ${(error as Error).message}`);
  }

  return errors;
}

export function isValidConfig(config: Partial<LandingPageConfig>): boolean {
  return validateConfig(config).length === 0;
}

export function isValidSection(section: Partial<SectionConfig>): boolean {
  return validateSection(section).length === 0;
}
