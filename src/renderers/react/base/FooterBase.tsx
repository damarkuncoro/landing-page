import React from "react";
import type { FooterContractProps } from "../contracts/FooterContract";
import { Container, Box } from "./LayoutBase";
import { useTheme } from "../ThemeProvider";
import { FooterLogo } from "./FooterLogo";
import { LinkGroup } from "./LinkGroup";

/**
 * Base UI untuk Footer Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const FooterBase = React.forwardRef<
  HTMLElement,
  FooterContractProps & { as?: React.ElementType }
>((props, ref) => {
  const theme = useTheme();
  const {
    logo,
    title,
    description,
    links,
    copyright,
    className,
    style,
    containerStyle,
    gridStyle,
    columnStyle,
    linkStyle,
    onLinkMouseEnter,
    onLinkMouseLeave,
  } = props;

  return (
    <Box as={props.as || "footer"} ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={gridStyle}>
          {/* Logo & Description Section */}
          <FooterLogo
            logo={logo}
            title={title}
            description={description}
            style={columnStyle}
          />

          {/* Link Groups */}
          {links.map((linkGroup) => (
            <LinkGroup
              key={linkGroup.title}
              title={linkGroup.title}
              items={linkGroup.items}
              style={columnStyle}
              linkStyle={linkStyle}
              onLinkMouseEnter={onLinkMouseEnter}
              onLinkMouseLeave={onLinkMouseLeave}
            />
          ))}
        </Box>

        {/* Copyright */}
        {copyright && (
          <Box
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: `1px solid ${theme.colors.muted}20`,
              textAlign: "center",
            }}
          >
            <Box as="p" style={{ color: theme.colors.muted }}>
              {copyright}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
});

FooterBase.displayName = "FooterBase";
