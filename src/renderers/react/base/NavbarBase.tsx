import React, { useState, useEffect, useCallback, useRef } from "react";
import type { NavbarContractProps, NavbarLink } from "../contracts/NavbarContract";
import { Box, Flex } from "./LayoutBase";
import { LogoBase } from "./LogoBase";
import { SearchForm } from "./SearchForm";
import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileOverlay } from "./MobileOverlay";

/**
 * Base UI untuk Navbar.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */

// Mobile Menu Toggle Button component
const MobileMenuToggle: React.FC<{
  isOpen: boolean;
  icon?: React.ReactNode;
  text?: string;
  onClick: () => void;
}> = ({ isOpen, icon, text, onClick }) => (
  <Box style={{ marginBottom: "1rem", display: "flex", justifyContent: "flex-end" }}>
    <button
      onClick={onClick}
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
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {icon ?? (isOpen ? "✕" : "☰")}
      {text && <span>{text}</span>}
    </button>
  </Box>
);

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
    showSearchInMobileMenu = true,
    navbarHeight,
    stickyOffset = 0,
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

  const showSearchTop = searchPlaceholder && (mobileSearchBarPosition === "top" || (!isMobile && !showSearchInMobileMenu));
  const showSearchBottom = searchPlaceholder && mobileSearchBarPosition === "bottom" && isMobile && showSearchInMobileMenu;
  const showSearchInMenu = searchPlaceholder && isMobile && showSearchInMobileMenu && mobileSearchBarPosition !== "top";

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
      aria-label="Main navigation"
    >
      {/* Mobile Overlay */}
      {isMobile && isMenuOpen && mobileMenuOverlay && (
        <MobileOverlay
          isVisible={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      )}

      {/* Logo & Brand - Using LogoBase component */}
      {(logo || brandName) && (
        <Box style={{ marginBottom: isMobile ? "1rem" : "0" }}>
          <LogoBase
            src={logo}
            alt={logoAlt ?? brandName ?? "Logo"}
            title={brandName}
            height="40px"
            style={logoStyle}
          />
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
        <MobileMenuToggle
          isOpen={isMenuOpen}
          icon={mobileMenuButtonIcon}
          text={mobileMenuButtonText}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      )}

      {/* Navigation Links - Using native semantic HTML */}
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
      >
        {/* Regular Links */}
        {links.map((link) => {
          const hasChildren = !!link.children?.length;
          const isDropdownOpen = activeDropdown === link.id;

          return (
            <Box
              as="li"
              key={link.id ?? link.text}
              style={{ marginBottom: isMobile ? "0.5rem" : 0, position: "relative" }}
            >
              {hasChildren ? (
                <Box style={{ position: "relative" }}>
                  <NavLink
                    link={link}
                    isDropdownOpen={isDropdownOpen}
                    resolveLinkStyle={resolveLinkStyle}
                    onClick={handleLinkClick}
                    onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
                    onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
                    hasChildren={hasChildren}
                    onToggleDropdown={(e) => toggleDropdown(e, link)}
                  />
                  <NavDropdown
                    link={link}
                    isOpen={isDropdownOpen}
                    isMobile={isMobile || false}
                    maxWidth={maxDropdownWidth || undefined}
                    resolveLinkStyle={resolveLinkStyle}
                    dropdownLinkStyle={dropdownLinkStyle}
                    onLinkClick={onLinkClick}
                    onLinkMouseEnter={onLinkMouseEnter}
                    onLinkMouseLeave={onLinkMouseLeave}
                    onClose={() => setActiveDropdown(null)}
                  />
                </Box>
              ) : (
                <NavLink
                  link={link}
                  isDropdownOpen={isDropdownOpen}
                  resolveLinkStyle={resolveLinkStyle}
                  onClick={(e, l) => {
                    if (!l.isLoading) {
                      onLinkClick?.(e, l);
                      closeMobileMenu();
                    }
                  }}
                  onMouseEnter={(e) => onLinkMouseEnter?.(e, link)}
                  onMouseLeave={(e) => onLinkMouseLeave?.(e, link)}
                  hasChildren={hasChildren}
                />
              )}
            </Box>
          );
        })}

        {/* Language Selector */}
        {languageSelector && (
          <LanguageSelector
            languages={languageSelector.languages}
            currentLanguage={languageSelector.currentLanguage}
            onLanguageChange={languageSelector.onLanguageChange}
            isOpen={activeDropdown === "language"}
            onToggle={() => setActiveDropdown((prev) => (prev === "language" ? null : "language"))}
            onClose={() => {
              setActiveDropdown(null);
              closeMobileMenu();
            }}
            linkStyle={linkStyle}
            dropdownStyle={dropdownStyle}
          />
        )}

        {/* Theme Switcher */}
        {themeSwitcher && (
          <ThemeSwitcher
            currentTheme={themeSwitcher.currentTheme}
            onThemeChange={themeSwitcher.onThemeChange}
            linkStyle={linkStyle}
          />
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