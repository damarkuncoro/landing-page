import React, { useState, useEffect } from "react";
import type { NavbarContractProps, NavbarLink } from "../contracts/NavbarContract";
import { Box, Flex } from "./LayoutBase";

/**
 * Base UI untuk Navbar.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const NavbarBase = React.forwardRef<HTMLElement, NavbarContractProps & { as?: React.ElementType }>(
  (props, ref) => {
    const {
      links,
      isMobile,
      isOpen,
      className,
      style,
      linkStyle,
      activeLinkStyle,
      loadingLinkStyle,
      dropdownStyle,
      dropdownLinkStyle,
      onLinkMouseEnter,
      onLinkMouseLeave,
      onLinkClick,
      onDropdownToggle,
      searchPlaceholder,
      onSearch,
      searchValue,
      onSearchChange,
      languageSelector,
      themeSwitcher,
      logo,
      logoAlt,
      logoStyle,
      brandName,
      brandNameStyle,
      fixed,
      sticky,
      searchDebounceDelay = 300,
      maxDropdownWidth,
      mobileBreakpoint = "md",
    } = props;

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState(searchValue ?? "");

    // Handle outside clicks to close dropdown
    useEffect(() => {
      const handleClickOutside = () => {
        setActiveDropdown(null);
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Update search query when searchValue prop changes
    useEffect(() => {
      if (searchValue !== undefined) {
        setSearchQuery(searchValue ?? "");
      }
    }, [searchValue]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);
      // Add debounce
      if (onSearchChange) {
        const timer = setTimeout(() => {
          onSearchChange(value);
        }, searchDebounceDelay);
        return () => clearTimeout(timer);
      }
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch?.(searchQuery);
    };

    const toggleDropdown = (e: React.MouseEvent<HTMLElement>, link: NavbarLink) => {
      e.preventDefault();
      e.stopPropagation();
      
      const newActiveDropdown = activeDropdown === link.id ? null : (link.id || null);
      setActiveDropdown(newActiveDropdown);
      onDropdownToggle?.(e, link);
    };

    const handleLinkClickInternal = (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
      if (link.children && link.children.length > 0) {
        toggleDropdown(e, link);
      } else {
        onLinkClick?.(e, link);
      }
    };

    if (isMobile && !isOpen) return null;

    return (
      <Box
        as={props.as || "nav"}
        ref={ref}
        className={className}
        style={{
          ...style,
          position: fixed ? "fixed" : sticky ? "sticky" : "static",
          top: fixed || sticky ? 0 : "auto",
          zIndex: fixed || sticky ? 1000 : "auto",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo and Brand Name */}
        {(logo || brandName) && (
          <Box style={{
            marginBottom: isMobile ? "1rem" : "0",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            {logo && (
              <img
                src={logo}
                alt={logoAlt || brandName || "Logo"}
                style={{
                  height: "40px",
                  ...logoStyle
                }}
              />
            )}
            {brandName && (
              <span style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                ...brandNameStyle
              }}>
                {brandName}
              </span>
            )}
          </Box>
        )}

        {/* Search Input */}
        {searchPlaceholder && (
          <Box style={{ marginBottom: isMobile ? "1rem" : "0", display: "flex", alignItems: "center" }}>
            <form onSubmit={handleSearchSubmit} style={{ display: "flex", width: "100%", maxWidth: isMobile ? "100%" : "300px" }}>
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  flex: 1,
                  padding: "0.5rem 1rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.25rem 0 0 0.25rem",
                  fontSize: "0.875rem",
                }}
                aria-label="Search"
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#4f46e5",
                  color: "white",
                  border: "none",
                  borderRadius: "0 0.25rem 0.25rem 0",
                  cursor: "pointer",
                }}
                aria-label="Search"
              >
                🔍
              </button>
            </form>
          </Box>
        )}

        <Flex
          as="ul"
          direction={isMobile ? "column" : "row"}
          gap="1.5rem"
          style={{ listStyle: "none", padding: 0 }}
          role="menubar"
        >
          {links.map((link) => {
            const hasChildren = link.children && link.children.length > 0;
            const isActive = link.isActive || activeDropdown === link.id;
            
            // Determine which style to use based on link state
            const currentLinkStyle = link.isLoading ? {
              ...linkStyle,
              ...loadingLinkStyle
            } : isActive ? {
              ...linkStyle,
              ...activeLinkStyle
            } : linkStyle;

            return (
              <Box
                as="li"
                key={link.id || link.text}
                style={{ marginBottom: isMobile ? "0.5rem" : 0, position: "relative" }}
                role="none"
              >
                {hasChildren ? (
                  <Box style={{ position: "relative" }}>
                    <a
                      href="#"
                      style={{
                        ...currentLinkStyle,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
                      onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
                      onFocus={(e) => {
                        e.currentTarget.style.outline = "2px solid currentColor";
                        e.currentTarget.style.outlineOffset = "2px";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.outline = "none";
                      }}
                      onClick={(e) => handleLinkClickInternal(e, link)}
                      role="menuitem"
                      aria-disabled={link.isLoading}
                      tabIndex={0}
                      aria-haspopup={hasChildren}
                      aria-expanded={activeDropdown === link.id}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                          e.preventDefault();
                          toggleDropdown(e as any, link);
                        } else if (e.key === "ArrowUp") {
                          e.preventDefault();
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      {link.isLoading ? (
                        <Flex align="center" gap="0.5rem">
                          <Box
                            as="span"
                            style={{
                              display: "inline-block",
                              width: "16px",
                              height: "16px",
                              border: "2px solid transparent",
                              borderTop: "2px solid currentColor",
                              borderRadius: "50%",
                              animation: "spin 0.8s linear infinite"
                            }}
                            role="status"
                            aria-label="Loading"
                          />
                          <Box>Loading...</Box>
                        </Flex>
                      ) : (
                        <>
                          {link.icon && <span style={{ fontSize: "1rem" }}>{link.icon}</span>}
                          {link.text}
                          <span style={{ fontSize: "0.75rem" }}>▼</span>
                        </>
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.id && (
                      <Box
                        as="ul"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          minWidth: "160px",
                          maxWidth: maxDropdownWidth,
                          backgroundColor: "#ffffff",
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                          borderRadius: "0.5rem",
                          padding: "0.5rem 0",
                          marginTop: "0.25rem",
                          zIndex: 1000,
                          ...dropdownStyle,
                        }}
                        role="menu"
                        aria-labelledby={link.id}
                      >
                        {link.children!.map((childLink) => {
                          const childCurrentStyle = childLink.isLoading ? {
                            ...dropdownLinkStyle,
                            ...loadingLinkStyle
                          } : childLink.isActive ? {
                            ...dropdownLinkStyle,
                            ...activeLinkStyle
                          } : dropdownLinkStyle;

                          return (
                            <Box
                              as="li"
                              key={childLink.id || childLink.text}
                              style={{ margin: 0 }}
                              role="none"
                            >
                              <a
                                href={childLink.isLoading ? "#" : childLink.url}
                                target={childLink.target || "_self"}
                                rel={
                                  childLink.target === "_blank" ? "noopener noreferrer" : undefined
                                }
                                style={{
                                  ...childCurrentStyle,
                                  display: "block",
                                  padding: "0.5rem 1rem",
                                  color: "#374151",
                                  textDecoration: "none",
                                }}
                                onMouseEnter={(e) => onLinkMouseEnter?.(e, childLink)}
                                onMouseLeave={(e) => onLinkMouseLeave?.(e, childLink)}
                                onClick={(e) => {
                                  if (childLink.isLoading) {
                                    e.preventDefault();
                                  }
                                  onLinkClick?.(e, childLink);
                                  setActiveDropdown(null);
                                }}
                                role="menuitem"
                                aria-disabled={childLink.isLoading}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    if (!childLink.isLoading) {
                                      onLinkClick?.(e as any, childLink);
                                      setActiveDropdown(null);
                                    }
                                  } else if (e.key === "ArrowUp") {
                                    e.preventDefault();
                                    const currentIndex = link.children!.findIndex(l => l.id === childLink.id);
                                    if (currentIndex > 0) {
                                      const prevLink = link.children![currentIndex - 1];
                                      const prevElement = document.querySelector(`[data-link-id="${prevLink.id}"]`) as HTMLElement;
                                      prevElement?.focus();
                                    }
                                  } else if (e.key === "ArrowDown") {
                                    e.preventDefault();
                                    const currentIndex = link.children!.findIndex(l => l.id === childLink.id);
                                    if (currentIndex < link.children!.length - 1) {
                                      const nextLink = link.children![currentIndex + 1];
                                      const nextElement = document.querySelector(`[data-link-id="${nextLink.id}"]`) as HTMLElement;
                                      nextElement?.focus();
                                    }
                                  } else if (e.key === "Escape") {
                                    e.preventDefault();
                                    setActiveDropdown(null);
                                  }
                                }}
                                data-link-id={childLink.id}
                              >
                                {childLink.isLoading ? (
                                  <Flex align="center" gap="0.5rem">
                                    <Box
                                      as="span"
                                      style={{
                                        display: "inline-block",
                                        width: "16px",
                                        height: "16px",
                                        border: "2px solid transparent",
                                        borderTop: "2px solid currentColor",
                                        borderRadius: "50%",
                                        animation: "spin 0.8s linear infinite"
                                      }}
                                      role="status"
                                      aria-label="Loading"
                                    />
                                    <Box>Loading...</Box>
                                  </Flex>
                                ) : (
                                  <>
                                    {childLink.icon && <span style={{ fontSize: "1rem", marginRight: "0.5rem" }}>{childLink.icon}</span>}
                                    {childLink.text}
                                  </>
                                )}
                              </a>
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <a
                    href={link.isLoading ? "#" : link.url}
                    target={link.target || "_self"}
                    rel={
                      link.target === "_blank" ? "noopener noreferrer" : undefined
                    }
                    style={currentLinkStyle}
                    onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
                    onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = "2px solid currentColor";
                      e.currentTarget.style.outlineOffset = "2px";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = "none";
                    }}
                    onClick={(e) => {
                      if (link.isLoading) {
                        e.preventDefault();
                      }
                      onLinkClick?.(e, link);
                    }}
                    role="menuitem"
                    aria-disabled={link.isLoading}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (!link.isLoading) {
                          onLinkClick?.(e as any, link);
                        }
                      }
                    }}
                  >
                    {link.isLoading ? (
                      <Flex align="center" gap="0.5rem">
                        <Box
                          as="span"
                          style={{
                            display: "inline-block",
                            width: "16px",
                            height: "16px",
                            border: "2px solid transparent",
                            borderTop: "2px solid currentColor",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite"
                          }}
                          role="status"
                          aria-label="Loading"
                        />
                        <Box>Loading...</Box>
                      </Flex>
                    ) : (
                      <>
                        {link.icon && <span style={{ fontSize: "1rem", marginRight: "0.5rem" }}>{link.icon}</span>}
                        {link.text}
                      </>
                    )}
                  </a>
                )}
              </Box>
            );
          })}

          {/* Language Selector */}
          {languageSelector && (
            <Box style={{ position: "relative" }} role="none">
              <a
                href="#"
                style={{
                  ...linkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === "language" ? null : "language");
                }}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={activeDropdown === "language"}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === "language" ? null : "language");
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveDropdown(null);
                  }
                }}
              >
                <span style={{ fontSize: "0.875rem" }}>🌐</span>
                <span>{languageSelector.currentLanguage.toUpperCase()}</span>
                <span style={{ fontSize: "0.75rem" }}>▼</span>
              </a>

              {activeDropdown === "language" && (
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
                    ...dropdownStyle,
                  }}
                  role="menu"
                >
                  {languageSelector.languages.map((lang) => (
                    <Box
                      as="li"
                      key={lang.code}
                      style={{ margin: 0 }}
                      role="none"
                    >
                      <a
                        href="#"
                        style={{
                          ...dropdownLinkStyle,
                          display: "block",
                          padding: "0.5rem 1rem",
                          color: "#374151",
                          textDecoration: "none",
                          fontWeight: lang.code === languageSelector.currentLanguage ? "bold" : "normal",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          languageSelector.onLanguageChange?.(lang.code);
                          setActiveDropdown(null);
                        }}
                        role="menuitem"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            languageSelector.onLanguageChange?.(lang.code);
                            setActiveDropdown(null);
                          }
                        }}
                      >
                        {lang.name} ({lang.code.toUpperCase()})
                      </a>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}

          {/* Theme Switcher */}
          {themeSwitcher && (
            <Box role="none">
              <button
                onClick={() => {
                  const newTheme = themeSwitcher.currentTheme === "light" ? "dark" : "light";
                  themeSwitcher.onThemeChange?.(newTheme);
                }}
                style={{
                  ...linkStyle,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                aria-label="Toggle theme"
              >
                <span style={{ fontSize: "1.25rem" }}>
                  {themeSwitcher.currentTheme === "light" ? "🌙" : "☀️"}
                </span>
                <span style={{ fontSize: "0.875rem" }}>
                  {themeSwitcher.currentTheme === "light" ? "Dark" : "Light"}
                </span>
              </button>
            </Box>
          )}
        </Flex>
      </Box>
    );
  },
);

NavbarBase.displayName = "NavbarBase";
