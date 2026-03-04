import React, { useState, useEffect, useCallback, useRef } from "react";
import type { NavbarContractProps, NavbarLink } from "../contracts/NavbarContract";
import { Box, Flex } from "./LayoutBase";

/**
 * Base UI untuk Navbar.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */

// ─── Loading Spinner ──────────────────────────────────────────────────────────

const LoadingSpinner = () => (
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
        animation: "spin 0.8s linear infinite",
      }}
      role="status"
      aria-label="Loading"
    />
    <Box>Loading...</Box>
  </Flex>
);

// ─── Link Content ─────────────────────────────────────────────────────────────

const LinkContent = ({
  link,
  showChevron = false,
  iconMargin = "0",
}: {
  link: NavbarLink;
  showChevron?: boolean;
  iconMargin?: string;
}) => {
  if (link.isLoading) return <LoadingSpinner />;
  return (
    <>
      {link.icon && (
        <span style={{ fontSize: "1rem", marginRight: iconMargin }}>{link.icon}</span>
      )}
      {link.text}
      {showChevron && <span style={{ fontSize: "0.75rem" }}>▼</span>}
    </>
  );
};

// ─── Search Form ──────────────────────────────────────────────────────────────

const SearchForm = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  fullWidth = false,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  fullWidth?: boolean;
}) => (
  <form
    onSubmit={onSubmit}
    style={{ display: "flex", width: "100%", maxWidth: fullWidth ? "100%" : "300px" }}
  >
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
);

// ─── NavbarBase ───────────────────────────────────────────────────────────────

export const NavbarBase = React.forwardRef<
  HTMLElement,
  NavbarContractProps & { as?: React.ElementType }
>((props, ref) => {
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
    mobileMenuButtonText,
    mobileMenuButtonIcon,
    mobileMenuPosition = "top",
    mobileMenuOverlay = true,
    mobileMenuTransitionDuration = 300,
    mobileSearchBarPosition = "top",
  } = props;

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(searchValue ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen ?? false);

  // Debounce timer ref agar tidak leak
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync isOpen prop
  useEffect(() => {
    if (isOpen !== undefined) setIsMenuOpen(isOpen);
  }, [isOpen]);

  // Sync searchValue prop
  useEffect(() => {
    if (searchValue !== undefined) setSearchQuery(searchValue);
  }, [searchValue]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    if (isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);

      if (onSearchChange) {
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => {
          onSearchChange(value);
        }, searchDebounceDelay);
      }
    },
    [onSearchChange, searchDebounceDelay]
  );

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSearch?.(searchQuery);
    },
    [onSearch, searchQuery]
  );

  const toggleDropdown = useCallback(
    (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, link: NavbarLink) => {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown((prev) => (prev === link.id ? null : link.id ?? null));
      onDropdownToggle?.(e as React.MouseEvent<HTMLElement>, link);
    },
    [onDropdownToggle]
  );

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: NavbarLink) => {
      if (link.children?.length) {
        toggleDropdown(e, link);
      } else {
        onLinkClick?.(e, link);
        closeMobileMenu();
      }
    },
    [toggleDropdown, onLinkClick, closeMobileMenu]
  );

  const resolveLinkStyle = (
    link: NavbarLink,
    baseStyle = linkStyle,
    activeStyle = activeLinkStyle
  ) =>
    link.isLoading
      ? { ...baseStyle, ...loadingLinkStyle }
      : link.isActive || activeDropdown === link.id
      ? { ...baseStyle, ...activeStyle }
      : baseStyle;

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.outline = "2px solid currentColor";
      e.currentTarget.style.outlineOffset = "2px";
    },
    onBlur: (e: React.FocusEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.outline = "none";
    },
  };

  // Navigate dropdown children with keyboard
  const handleChildKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    parentLink: NavbarLink,
    childLink: NavbarLink
  ) => {
    const children = parentLink.children!;
    const idx = children.findIndex((l) => l.id === childLink.id);

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!childLink.isLoading) {
        onLinkClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement>, childLink);
        setActiveDropdown(null);
        closeMobileMenu();
      }
    } else if (e.key === "ArrowUp" && idx > 0) {
      e.preventDefault();
      (document.querySelector(`[data-link-id="${children[idx - 1].id}"]`) as HTMLElement)?.focus();
    } else if (e.key === "ArrowDown" && idx < children.length - 1) {
      e.preventDefault();
      (document.querySelector(`[data-link-id="${children[idx + 1].id}"]`) as HTMLElement)?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setActiveDropdown(null);
    }
  };

  if (isMobile && !isMenuOpen) return null;

  const showSearchTop = searchPlaceholder && (mobileSearchBarPosition === "top" || !isMobile);
  const showSearchBottom = searchPlaceholder && mobileSearchBarPosition === "bottom" && isMobile;

  return (
    <Box
      as={props.as ?? ("nav" as unknown as React.ElementType)}
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
      {/* Mobile Overlay */}
      {isMobile && isMenuOpen && mobileMenuOverlay && (
        <Box
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            backdropFilter: "blur(1px)",
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Logo & Brand */}
      {(logo || brandName) && (
        <Box
          style={{
            marginBottom: isMobile ? "1rem" : "0",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {logo && (
            <img
              src={logo}
              alt={logoAlt ?? brandName ?? "Logo"}
              style={{ height: "40px", ...logoStyle }}
            />
          )}
          {brandName && (
            <span style={{ fontSize: "1.25rem", fontWeight: "bold", ...brandNameStyle }}>
              {brandName}
            </span>
          )}
        </Box>
      )}

      {/* Search — Top Position */}
      {showSearchTop && (
        <Box
          style={{
            marginBottom: isMobile ? "1rem" : "0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchForm
            placeholder={searchPlaceholder!}
            value={searchQuery}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
            fullWidth={isMobile}
          />
        </Box>
      )}

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <Box style={{ marginBottom: "1rem", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "transparent",
              color: "currentColor",
              border: "1px solid #e5e7eb",
              borderRadius: "0.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuButtonIcon ?? (isMenuOpen ? "✕" : "☰")}
            {mobileMenuButtonText && <span>{mobileMenuButtonText}</span>}
          </button>
        </Box>
      )}

      {/* Navigation Links */}
      <Flex
        as="ul"
        direction={isMobile ? "column" : "row"}
        gap="1.5rem"
        style={{
          listStyle: "none",
          padding: 0,
          transform: isMobile
            ? isMenuOpen
              ? "translateX(0)"
              : "translateX(-100%)"
            : "none",
          transition: `transform ${mobileMenuTransitionDuration}ms ease-in-out`,
          position: isMobile
            ? mobileMenuPosition === "top"
              ? "relative"
              : "fixed"
            : "static",
          top: mobileMenuPosition === "top" ? 0 : "auto",
          left: mobileMenuPosition === "left" ? 0 : "auto",
          right: mobileMenuPosition === "right" ? 0 : "auto",
          bottom: mobileMenuPosition === "bottom" ? 0 : "auto",
          width: isMobile ? "80%" : "auto",
          height:
            isMobile &&
            (mobileMenuPosition === "top" || mobileMenuPosition === "bottom")
              ? "auto"
              : "100%",
          maxHeight:
            isMobile &&
            (mobileMenuPosition === "top" || mobileMenuPosition === "bottom")
              ? "80vh"
              : "auto",
          backgroundColor: isMobile ? "#ffffff" : "transparent",
          boxShadow: isMobile ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
          overflow: isMobile ? "auto" : "visible",
          zIndex: isMobile ? 1001 : "auto",
        }}
        role="menubar"
      >
        {/* Regular Links */}
        {links.map((link) => {
          const hasChildren = !!link.children?.length;

          return (
            <Box
              as="li"
              key={link.id ?? link.text}
              style={{ marginBottom: isMobile ? "0.5rem" : 0, position: "relative" }}
              role="none"
            >
              {hasChildren ? (
                <Box style={{ position: "relative" }}>
                  <a
                    href="#"
                    style={{
                      ...resolveLinkStyle(link),
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
                    onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
                    {...focusHandlers}
                    onClick={(e) => handleLinkClick(e, link)}
                    role="menuitem"
                    aria-disabled={link.isLoading}
                    aria-haspopup={true}
                    aria-expanded={activeDropdown === link.id}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
                        e.preventDefault();
                        toggleDropdown(e, link);
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <LinkContent link={link} showChevron iconMargin="0" />
                  </a>

                  {/* Dropdown */}
                  {activeDropdown === link.id && (
                    <Box
                      as="ul"
                      style={{
                        position: isMobile ? "relative" : "absolute",
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
                      {link.children!.map((childLink) => (
                        <Box
                          as="li"
                          key={childLink.id ?? childLink.text}
                          style={{ margin: 0 }}
                          role="none"
                        >
                          <a
                            href={childLink.isLoading ? "#" : childLink.url}
                            target={childLink.target ?? "_self"}
                            rel={childLink.target === "_blank" ? "noopener noreferrer" : undefined}
                            style={{
                              ...resolveLinkStyle(childLink, dropdownLinkStyle),
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
                                return;
                              }
                              onLinkClick?.(e, childLink);
                              setActiveDropdown(null);
                              closeMobileMenu();
                            }}
                            role="menuitem"
                            aria-disabled={childLink.isLoading}
                            tabIndex={0}
                            onKeyDown={(e) => handleChildKeyDown(e, link, childLink)}
                            data-link-id={childLink.id}
                          >
                            <LinkContent link={childLink} iconMargin="0.5rem" />
                          </a>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ) : (
                <a
                  href={link.isLoading ? "#" : link.url}
                  target={link.target ?? "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  style={resolveLinkStyle(link)}
                  onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
                  onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
                  {...focusHandlers}
                  onClick={(e) => {
                    if (link.isLoading) {
                      e.preventDefault();
                      return;
                    }
                    onLinkClick?.(e, link);
                    closeMobileMenu();
                  }}
                  role="menuitem"
                  aria-disabled={link.isLoading}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (!link.isLoading) {
                        onLinkClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement>, link);
                        closeMobileMenu();
                      }
                    }
                  }}
                >
                  <LinkContent link={link} iconMargin="0.5rem" />
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
                setActiveDropdown((prev) => (prev === "language" ? null : "language"));
              }}
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "language"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (["Enter", " ", "ArrowDown"].includes(e.key)) {
                  e.preventDefault();
                  setActiveDropdown((prev) => (prev === "language" ? null : "language"));
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
                  position: isMobile ? "relative" : "absolute",
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
                  <Box as="li" key={lang.code} style={{ margin: 0 }} role="none">
                    <a
                      href="#"
                      style={{
                        ...dropdownLinkStyle,
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#374151",
                        textDecoration: "none",
                        fontWeight:
                          lang.code === languageSelector.currentLanguage ? "bold" : "normal",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        languageSelector.onLanguageChange?.(lang.code);
                        setActiveDropdown(null);
                        closeMobileMenu();
                      }}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          languageSelector.onLanguageChange?.(lang.code);
                          setActiveDropdown(null);
                          closeMobileMenu();
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
                const next = themeSwitcher.currentTheme === "light" ? "dark" : "light";
                themeSwitcher.onThemeChange?.(next);
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

        {/* Search — Bottom Position (Mobile Only) */}
        {showSearchBottom && (
          <Box style={{ marginTop: "1rem", marginBottom: "1rem", display: "flex", alignItems: "center" }}>
            <SearchForm
              placeholder={searchPlaceholder!}
              value={searchQuery}
              onChange={handleSearchChange}
              onSubmit={handleSearchSubmit}
              fullWidth
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
});

NavbarBase.displayName = "NavbarBase";