import React from "react";
import { Box } from "./LayoutBase";

/**
 * Language data interface
 */
export interface LanguageConfig {
  code: string;
  name: string;
}

/**
 * Language Selector props
 */
export interface LanguageSelectorProps {
  /** Languages array */
  languages: LanguageConfig[];
  /** Current language code */
  currentLanguage: string;
  /** Language change handler */
  onLanguageChange?: (code: string) => void;
  /** Current dropdown state */
  isOpen: boolean;
  /** Dropdown toggle handler */
  onToggle: () => void;
  /** Dropdown close handler */
  onClose: () => void;
  /** Link style */
  linkStyle?: React.CSSProperties;
  /** Dropdown style */
  dropdownStyle?: React.CSSProperties;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  currentLanguage,
  onLanguageChange,
  isOpen,
  onToggle,
  onClose,
  linkStyle,
  dropdownStyle,
}) => {
  return (
    <Box style={{ position: "relative" }}>
      <a
        href="#"
        style={{
          ...linkStyle,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <span style={{ fontSize: "0.875rem" }}>🌐</span>
        <span>{currentLanguage.toUpperCase()}</span>
        <span style={{ fontSize: "0.75rem" }}>▼</span>
      </a>

      {isOpen && (
        <Box
          as="ul"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            minWidth: "120px",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "0.5rem 0",
            marginTop: "0.25rem",
            zIndex: 1000,
            listStyle: "none",
            ...dropdownStyle,
          }}
        >
          {languages.map((lang) => (
            <Box as="li" key={lang.code} style={{ margin: 0 }}>
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  color: "#374151",
                  textDecoration: "none",
                  fontWeight: lang.code === currentLanguage ? "bold" : "normal",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  onLanguageChange?.(lang.code);
                  onClose();
                }}
                tabIndex={0}
              >
                {lang.name} ({lang.code.toUpperCase()})
              </a>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

LanguageSelector.displayName = "LanguageSelector";

export default LanguageSelector;