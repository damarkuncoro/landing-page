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
  HeaderContractProps
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
  } = props;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollEffect) {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollEffect]);

  return (
    <Box
      as="header"
      ref={ref}
      style={style}
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
          <Box className="hidden md:block">
            <Flex align="center" gap="1.5rem">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.target || "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  style={{
                    color: theme.colors.text,
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.primary}
                  onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.text}
                >
                  {link.text}
                </a>
              ))}
            </Flex>
          </Box>

          {/* Desktop Buttons - Hidden on mobile, visible on md screens */}
          <Box className="hidden md:block">
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
