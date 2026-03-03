import React, { createContext, useContext, useMemo } from "react";
import type { ThemeConfig, DeepPartial } from "../../core/types";
import { createTheme } from "../../core/theme";

// Create theme context
const ThemeContext = createContext<ThemeConfig | undefined>(undefined);

/**
 * Provider to pass theme configuration through the React component tree
 * using context API.
 */
interface ThemeProviderProps {
  /** Theme configuration or partial theme overrides */
  theme?: DeepPartial<ThemeConfig>;
  /** Children components to wrap */
  children: React.ReactNode;
}

/**
 * Theme provider component that wraps your application and provides
 * theme context to all nested components.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  // Create complete theme by merging with default theme
  const resolvedTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <ThemeContext.Provider value={resolvedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access the current theme configuration from context.
 * @returns Complete theme configuration
 */
export const useTheme = (): ThemeConfig => {
  const theme = useContext(ThemeContext);
  
  if (!theme) {
    throw new Error(
      "useTheme hook must be used within a ThemeProvider component"
    );
  }
  
  return theme;
};