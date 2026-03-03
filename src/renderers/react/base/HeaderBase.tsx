import React from "react";
import type { HeaderContractProps } from "../contracts/HeaderContract";
import Navbar from "../Navbar";
import MenuToggle from "../MenuToggle";
import { Container, Flex, Box } from "./LayoutBase";
import { useTheme } from "../ThemeProvider";

/**
 * Base UI untuk Header.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const HeaderBase = React.forwardRef<
  HTMLElement,
  HeaderContractProps
>((props, ref) => {
  const theme = useTheme();
  const {
    logo,
    title,
    links,
    className,
    isMobileMenuOpen = false,
    onMobileMenuToggle,
    style,
    containerStyle,
  } = props;

  return (
    <Box as="header" ref={ref} style={style} className={className}>
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

          {/* Desktop Navbar - Hidden on mobile, can be shown via skin media query if needed */}
          <Box style={{ display: "none" }}>{/* Future: Desktop Navbar */}</Box>

          {onMobileMenuToggle && (
            <MenuToggle
              isOpen={isMobileMenuOpen}
              onClick={onMobileMenuToggle}
            />
          )}
        </Flex>

        {/* Mobile Navbar */}
        <Navbar
          links={links}
          isMobile={true}
          isOpen={isMobileMenuOpen}
        />
      </Container>
    </Box>
  );
});

HeaderBase.displayName = "HeaderBase";
