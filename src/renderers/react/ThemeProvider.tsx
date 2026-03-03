import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import type { ThemeConfig, DeepPartial } from '../../core/types';
import { createTheme } from '../../core/theme';

// Create context
const ThemeContext = createContext<ThemeConfig>(createTheme());

// ThemeProvider component
interface ThemeProviderProps {
  theme?: DeepPartial<ThemeConfig>;
  children: ReactNode;
  dark?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
  dark = false,
}) => {
  // Merge user theme with default theme
  const mergedTheme = useMemo(() => {
    const baseTheme = createTheme(theme);
    
    // Dark mode overrides
    if (dark) {
      return {
        ...baseTheme,
        colors: {
          ...baseTheme.colors,
          background: '#000000',
          text: '#ffffff',
          muted: '#64748b',
          mutedBackground: '#1e293b',
          border: '#334155',
        },
      };
    }
    
    return baseTheme;
  }, [theme, dark]);

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