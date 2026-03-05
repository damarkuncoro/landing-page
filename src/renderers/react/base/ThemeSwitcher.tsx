import React from "react";
import { Box } from "./LayoutBase";

/**
 * Theme Switcher component for toggling between light/dark mode.
 */
export interface ThemeSwitcherProps {
  /** Current theme */
  currentTheme: "light" | "dark";
  /** Theme change handler */
  onThemeChange?: (theme: "light" | "dark") => void;
  /** Custom link style */
  linkStyle?: React.CSSProperties;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  currentTheme,
  onThemeChange,
  linkStyle,
}) => {
  const toggleTheme = () => {
    const next = currentTheme === "light" ? "dark" : "light";
    onThemeChange?.(next);
  };

  return (
    <Box>
      <button
        onClick={toggleTheme}
        style={{
          ...linkStyle,
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "inherit",
        }}
        aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
      >
        <span style={{ fontSize: "1.25rem" }}>
          {currentTheme === "light" ? "🌙" : "☀️"}
        </span>
        <span style={{ fontSize: "0.875rem" }}>
          {currentTheme === "light" ? "Dark" : "Light"}
        </span>
      </button>
    </Box>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;