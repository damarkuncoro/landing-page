import React, { useState, useEffect, useMemo } from "react";
import type { HeaderContractProps } from "../contracts/HeaderContract";
import Navbar from "../Navbar";
import MenuToggle from "../MenuToggle";
import { Container, Flex, Box } from "./LayoutBase";
import { useTheme } from "../ThemeProvider";
import Button from "../Button";

/**
 * Base UI untuk Header.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */

// Mapping statis untuk menghindari dynamic Tailwind class yang tidak di-generate
const BREAKPOINT_HIDDEN_CLASS: Record<string, string> = {
  sm: "hidden sm:block",
  md: "hidden md:block",
  lg: "hidden lg:block",
  xl: "hidden xl:block",
  "2xl": "hidden 2xl:block",
};

const BREAKPOINT_VISIBLE_CLASS: Record<string, string> = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  "2xl": "2xl:hidden",
};

const BREAKPOINT_WIDTH: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const DEFAULT_SCROLL_EFFECT_STYLES = {
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    padding: "0.5rem 1rem",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  },
  notScrolled: {
    backgroundColor: "transparent",
  },
};

export const HeaderBase = React.forwardRef<
  HTMLElement,
  HeaderContractProps & { as?: React.ElementType }
>((props, ref) => {
  const theme = useTheme();
  const {
    logo,
    title,
    links,
    buttons = [],
    fixed = false,
    scrollEffect = false,
    className,
    isMobileMenuOpen = false,
    onMobileMenuToggle,
    style,
    containerStyle,
    searchPlaceholder,
    onSearch,
    initialSearchValue,
    showSearchInMobileMenu = true,
    languageSelector,
    themeSwitcher,
    mobileBreakpoint = "md",
    scrollEffectThreshold = 40,
    scrollEffectStyles = DEFAULT_SCROLL_EFFECT_STYLES,
    menuToggleStyle,
    skin = "default",
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < (BREAKPOINT_WIDTH[mobileBreakpoint] ?? 768)
  );

  // Resolve breakpoint width sekali saja
  const breakpointWidth = BREAKPOINT_WIDTH[mobileBreakpoint] ?? 768;

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < breakpointWidth;
      setIsMobile(mobile);
    };

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpointWidth]);

  // Scroll effect listener
  useEffect(() => {
    if (!scrollEffect) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollEffectThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEffect, scrollEffectThreshold]);

  // Memoize header style agar tidak dikalkulasi ulang setiap render
  const headerStyle = useMemo(
    () => ({
      ...style,
      ...(fixed && {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
      }),
      ...(scrollEffect && isScrolled
        ? scrollEffectStyles.scrolled
        : scrollEffect
        ? scrollEffectStyles.notScrolled
        : {}),
    }),
    [style, fixed, scrollEffect, isScrolled, scrollEffectStyles]
  );

  // Implement responsive visibility using inline styles instead of Tailwind classes
  const isMobileView = isMobile;
  
  return (
    <Box
      as={props.as ?? ("header" as unknown as React.ElementType)}
      ref={ref}
      style={headerStyle}
      className={className}
    >
      <Container style={containerStyle}>
        <Flex justify="space-between" align="center">
          {/* Logo & Title */}
          <Flex align="center" gap="1rem">
            {logo && (
              <img
                src={logo}
                alt={title ?? "Logo"}
                style={{ height: "40px" }}
                loading="lazy"
              />
            )}
            {title && (
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600, // fix: "semibold" bukan nilai CSS yang valid
                  color: theme.colors.text,
                }}
              >
                {title}
              </span>
            )}
          </Flex>

          {/* Desktop Navbar */}
          {!isMobileView && (
            <Box>
              <nav aria-label="Primary Navigation">
                <Navbar
                  links={links}
                  isMobile={false}
                  isOpen={true}
                  searchPlaceholder={searchPlaceholder}
                  onSearch={onSearch}
                  searchValue={initialSearchValue}
                  languageSelector={languageSelector}
                  themeSwitcher={themeSwitcher}
                  showSearchInMobileMenu={showSearchInMobileMenu}
                  skin={skin}
                />
              </nav>
            </Box>
          )}

          {/* Desktop Buttons */}
          {buttons.length > 0 && !isMobileView && (
            <Box>
              <Flex align="center" gap="1rem">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    config={{
                      ...button,
                      padding: button.padding ?? "0.5rem 1rem",
                      fontSize: button.fontSize ?? "0.875rem",
                    }}
                  />
                ))}
              </Flex>
            </Box>
          )}

          {/* Mobile Menu Toggle */}
          {onMobileMenuToggle && isMobileView && (
            <Box>
              <MenuToggle
                isOpen={isMobileMenuOpen}
                onClick={onMobileMenuToggle}
                style={menuToggleStyle}
                skin={skin}
              />
            </Box>
          )}
        </Flex>

        {/* Mobile Navbar */}
        <Navbar
          links={links}
          isMobile={true}
          isOpen={isMobileMenuOpen}
          searchPlaceholder={searchPlaceholder}
          onSearch={onSearch}
          searchValue={initialSearchValue}
          languageSelector={languageSelector}
          themeSwitcher={themeSwitcher}
          showSearchInMobileMenu={showSearchInMobileMenu}
          skin={skin}
        />

        {/* Mobile Buttons */}
        {isMobileMenuOpen && buttons.length > 0 && (
          <Flex direction="column" gap="1rem" style={{ marginTop: "1rem" }}>
            {buttons.map((button, index) => (
              <Button key={index} config={button} />
            ))}
          </Flex>
        )}
      </Container>
    </Box>
  );
});

HeaderBase.displayName = "HeaderBase";