import React, { useState, useEffect } from "react";
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
    languageSelector,
    themeSwitcher,
    mobileBreakpoint = "md",
    scrollEffectThreshold = 20,
    scrollEffectStyles,
    menuToggleStyle,
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollEffect) {
      const handleScroll = () => setIsScrolled(window.scrollY > scrollEffectThreshold);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollEffect, scrollEffectThreshold]);

  // Determine header styles based on scroll state
  const headerStyle = {
    ...style,
    ...(fixed && {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
    }),
    ...(scrollEffect && isScrolled && scrollEffectStyles?.scrolled),
    ...(scrollEffect && !isScrolled && scrollEffectStyles?.notScrolled),
  };

  return (
    <Box
      as={props.as || "header"}
      ref={ref}
      style={headerStyle}
      className={className}
    >
      <Container style={containerStyle}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap="1rem">
            {logo && (
              <img
                src={logo}
                alt={title || "Logo"}
                style={{ height: "40px" }}
                loading="lazy"
              />
            )}
            {title && (
              <h1 style={{ fontSize: "1.5rem", color: theme.colors.text }}>
                {title}
              </h1>
            )}
          </Flex>

          {/* Desktop Navbar - Hidden on mobile, visible on md screens */}
          <Box className={`hidden ${mobileBreakpoint}:block`}>
            <Navbar
              links={links}
              isMobile={false}
              isOpen={true}
              searchPlaceholder={searchPlaceholder}
              onSearch={onSearch}
              searchValue={initialSearchValue}
              languageSelector={languageSelector}
              themeSwitcher={themeSwitcher}
            />
          </Box>

          {/* Desktop Buttons - Hidden on mobile, visible on md screens */}
          <Box className={`hidden ${mobileBreakpoint}:block`}>
            <Flex align="center" gap="1rem">
              {buttons.map((button, index) => (
                <Button key={index} config={button} />
              ))}
            </Flex>
          </Box>

          {onMobileMenuToggle && (
            <MenuToggle
              isOpen={isMobileMenuOpen}
              onClick={onMobileMenuToggle}
              style={menuToggleStyle}
            />
          )}
        </Flex>

        {/* Mobile Navbar */}
        <Navbar
          links={links}
          isMobile={true}
          isOpen={isMobileMenuOpen}
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
