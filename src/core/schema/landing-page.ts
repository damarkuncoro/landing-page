import { landingPageSchema, sectionConfigSchemas } from "../../schema";

export const landingPageJsonSchema = landingPageSchema;

export function getLandingPageSchema() {
  return landingPageJsonSchema;
}

export function getSectionSchema(type: string) {
  return (
    sectionConfigSchemas[type as keyof typeof sectionConfigSchemas] || null
  );
}
