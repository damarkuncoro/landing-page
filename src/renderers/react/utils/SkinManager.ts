import React from "react";

/**
 * Skin Manager - Centralized skin registration and resolution system.
 * Implements a registry pattern for dynamic skin management.
 */

type SkinType = "default" | "tailwind" | "modern" | "none";

interface SkinRegistry {
  [componentName: string]: {
    [skinType in SkinType]?: React.ComponentType<any>;
  };
}

class SkinManager {
  private registry: SkinRegistry = {};

  /**
   * Register a skin for a component
   */
  registerSkin(componentName: string, skinType: SkinType, component: React.ComponentType<any>) {
    if (!this.registry[componentName]) {
      this.registry[componentName] = {};
    }
    this.registry[componentName][skinType] = component;
  }

  /**
   * Get a skin component for a specific component and skin type
   */
  getSkin(componentName: string, skinType: SkinType = "default"): React.ComponentType<any> {
    const componentRegistry = this.registry[componentName];
    
    if (!componentRegistry) {
      throw new Error(`Component "${componentName}" not found in skin registry`);
    }

    const skin = componentRegistry[skinType];
    
    if (!skin) {
      console.warn(`Skin type "${skinType}" not available for component "${componentName}", falling back to default skin`);
      return componentRegistry.default || (() => null);
    }

    return skin;
  }

  /**
   * Check if a component has a specific skin type
   */
  hasSkin(componentName: string, skinType: SkinType): boolean {
    return !!(this.registry[componentName]?.[skinType]);
  }

  /**
   * List all registered components
   */
  listComponents(): string[] {
    return Object.keys(this.registry);
  }

  /**
   * List all available skin types for a component
   */
  listSkins(componentName: string): string[] {
    const componentRegistry = this.registry[componentName];
    return componentRegistry ? Object.keys(componentRegistry).filter(key => componentRegistry[key as keyof typeof componentRegistry]) : [];
  }
}

// Create a singleton instance
export const skinManager = new SkinManager();