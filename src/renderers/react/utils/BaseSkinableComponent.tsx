import type React from "react";
import { skinManager } from "./SkinManager";
import { isValidSkinType } from "./typeGuards";

/**
 * Base Skinable Component - Generic base component for all skinable components.
 * Handles skin selection, prop validation, and error handling.
 */

interface BaseSkinableComponentProps {
  skin?: "default" | "tailwind" | "none";
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

// Map component name to base component
import { HeaderBase } from "../base/HeaderBase";
import { NavbarBase } from "../base/NavbarBase";
import { MenuToggleBase } from "../base/MenuToggleBase";
import { ButtonBase } from "../base/ButtonBase";
import { HeroBase } from "../base/HeroBase";
import { FeaturesBase } from "../base/FeaturesBase";
import { TestimonialsBase } from "../base/TestimonialsBase";
import { PricingBase } from "../base/PricingBase";
import { CtaBase } from "../base/CtaBase";
import { FooterBase } from "../base/FooterBase";
import { StatsBase } from "../base/StatsBase";
import { FaqBase } from "../base/FaqBase";

const BASE_COMPONENTS: Record<string, React.ComponentType<any>> = {
  Header: HeaderBase,
  Navbar: NavbarBase,
  MenuToggle: MenuToggleBase,
  Button: ButtonBase,
  Hero: HeroBase,
  Features: FeaturesBase,
  Testimonials: TestimonialsBase,
  Pricing: PricingBase,
  Cta: CtaBase,
  Footer: FooterBase,
  Stats: StatsBase,
  Faq: FaqBase,
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
        const BaseComponent = BASE_COMPONENTS[componentName];
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