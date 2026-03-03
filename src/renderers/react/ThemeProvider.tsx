import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import type { ThemeConfig, DeepPartial } from '../../core/types';
import { createTheme } from '../../core/theme';

// Create context
const ThemeContext = createContext<ThemeConfig>(createTheme());

// ThemeProvider component
interface ThemeProviderProps {
  theme?: DeepPartial<ThemeConfig>;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  // Merge user theme with default theme
  const mergedTheme = useMemo(
    () => createTheme(theme),
    [theme],
  );

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook
export const useTheme = (): ThemeConfig => {
  const theme = useContext(ThemeContext);
  return theme;
};