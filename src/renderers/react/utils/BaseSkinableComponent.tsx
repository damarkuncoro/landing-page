import React from "react";
import { skinManager } from "./SkinManager";
import { isValidSkinType } from "./typeGuards";
import ErrorBoundary from "./ErrorBoundary";

/**
 * Base Skinable Component - Generic base component for all skinable components.
 * Handles skin selection, prop validation, and error handling.
 */

interface BaseSkinableComponentProps {
  skin?: "default" | "tailwind";
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export function createBaseSkinableComponent<TProps extends BaseSkinableComponentProps>(
  componentName: string
) {
  const BaseSkinableComponent = ({ skin = "default", className = "", style = {}, ...props }: TProps) => {
    // Validate skin type
    const validSkin = isValidSkinType(skin) ? skin : "default";
    
    if (skin !== validSkin) {
      console.warn(`Invalid skin type "${skin}" for component "${componentName}", falling back to default skin`);
    }

    const renderContent = () => {
      try {
        const SkinComponent = skinManager.getSkin(componentName, validSkin);
        
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

    return (
      <ErrorBoundary
        fallback={
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
            <p>Failed to render {componentName} component</p>
          </div>
        }
      >
        {renderContent()}
      </ErrorBoundary>
    );
  };

  BaseSkinableComponent.displayName = componentName;

  return BaseSkinableComponent;
}