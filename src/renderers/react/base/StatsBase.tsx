import React from "react";
import type { StatsContractProps } from "../contracts/StatsContract";
import { Container, Box } from "./LayoutBase";
import { useTheme } from "../ThemeProvider";

/**
 * Base UI untuk Stats Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const StatsBase = React.forwardRef<
  HTMLElement,
  StatsContractProps & { as?: React.ElementType }
>((props, ref) => {
  const theme = useTheme();
  const {
    stats,
    className,
    style,
    containerStyle,
    gridStyle,
    statStyle,
    iconStyle,
    numberContainerStyle,
    numberStyle,
    labelStyle,
  } = props;

  return (
    <Box as={props.as || "section"} ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={gridStyle}>
          {stats.map((stat) => (
            <Box key={stat.id} className={stat.className} style={statStyle}>
              {stat.icon && <Box style={iconStyle}>{stat.icon}</Box>}
              <Box style={numberContainerStyle}>
                {stat.prefix && (
                  <Box as="span" style={numberStyle}>
                    {stat.prefix}
                  </Box>
                )}
                <Box as="span" style={numberStyle}>
                  {stat.number}
                </Box>
                {stat.suffix && (
                  <Box as="span" style={numberStyle}>
                    {stat.suffix}
                  </Box>
                )}
              </Box>
              <Box as="p" style={labelStyle}>
                {stat.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

StatsBase.displayName = "StatsBase";
