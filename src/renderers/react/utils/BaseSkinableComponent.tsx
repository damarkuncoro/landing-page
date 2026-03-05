import type React from "react";
import { skinManager } from "./SkinManager";
import { isValidSkinType } from "./typeGuards";

/**
 * Base Skinable Component - Generic base component for all skinable components.
 * Handles skin selection, prop validation, and error handling.
 */

interface BaseSkinableComponentProps {
  skin?: "default" | "tailwind" | "modern" | "none";
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

// Map component name to base component
// Note: Import these lazily to avoid circular dependencies
// HeroBase imports Button which uses createBaseSkinableComponent
const BASE_COMPONENTS: Record<string, React.ComponentType<any>> = {};

// Lazy load base components to avoid circular dependencies
const getBaseComponent = (name: string): React.ComponentType<any> => {
  // These imports are lazy to avoid circular dependency with Button -> BaseSkinableComponent -> HeroBase -> Button
  switch (name) {
    case "Button":
      return require("../base/ButtonBase").ButtonBase;
    case "Header":
      return require("../base/HeaderBase").HeaderBase;
    case "Navbar":
      return require("../base/NavbarBase").NavbarBase;
    case "MenuToggle":
      return require("../base/MenuToggleBase").MenuToggleBase;
    case "Hero":
      return require("../base/HeroBase").HeroBase;
    case "Features":
      return require("../base/FeaturesBase").FeaturesBase;
    case "Testimonials":
      return require("../base/TestimonialsBase").TestimonialsBase;
    case "Pricing":
      return require("../base/PricingBase").PricingBase;
    case "Cta":
      return require("../base/CtaBase").CtaBase;
    case "Footer":
      return require("../base/FooterBase").FooterBase;
    case "Stats":
      return require("../base/StatsBase").StatsBase;
    case "Faq":
      return require("../base/FaqBase").FaqBase;
    default:
      return null as any;
  }
};

export function createBaseSkinableComponent<TProps extends BaseSkinableComponentProps>(
  componentName: string
) {
  const BaseSkinableComponent = ({ skin = "default", className = "", style = {}, ...props }: TProps) => {
    // Validate skin type
    const validSkin = isValidSkinType(skin) ? skin : "default";
    
    if (skin !== validSkin) {
      console.warn(`Invalid skin type "${skin}" for component "${componentName}", falling back to default skin`);
    }

    try {
      // If skin is "none", render base component directly
      if (validSkin === "none") {
        const BaseComponent = getBaseComponent(componentName);
        if (BaseComponent) {
          return (
            <BaseComponent
              {...props}
              className={className}
              style={style}
            />
          );
        }
        console.warn(`Base component not found for "${componentName}", falling back to default skin`);
      }

      // Otherwise, use skin manager to get skin component
      const SkinComponent = skinManager.getSkin(componentName, "default");
      
      return (
        <SkinComponent
          {...props}
          className={className}
          style={style}
        />
      );
    } catch (error) {
      console.error(`Error rendering skinable component "${componentName}":`, error);
      
      // Fallback UI
      return (
        <div
          className={`error-component ${className}`}
          style={{
            padding: "1rem",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "0.5rem",
            color: "#b91c1c",
            ...style,
          }}
        >
          <h3>Component Error</h3>
          <p>Failed to render {componentName} component with skin "{validSkin}"</p>
          {error instanceof Error && (
            <pre style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>
              {error.message}
            </pre>
          )}
        </div>
      );
    }
  };

  BaseSkinableComponent.displayName = componentName;

  return BaseSkinableComponent;
}