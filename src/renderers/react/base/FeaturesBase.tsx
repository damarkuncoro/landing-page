import React from "react";
import type { FeaturesContractProps } from "../contracts/FeaturesContract";
import { Container, Box } from "./LayoutBase";

/**
 * Base UI untuk Features Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const FeaturesBase = React.forwardRef<
  HTMLElement,
  FeaturesContractProps & { theme: any }
>((props, ref) => {
  const {
    features,
    className,
    style,
    containerStyle,
    gridStyle,
    featureStyle,
    iconStyle,
    titleStyle,
    descriptionStyle,
    onFeatureMouseEnter,
    onFeatureMouseLeave,
  } = props;

  return (
    <Box as="section" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={gridStyle}>
          {features.map((feature) => (
            <Box
              key={feature.id}
              className={feature.className}
              style={featureStyle}
              onMouseEnter={onFeatureMouseEnter}
              onMouseLeave={onFeatureMouseLeave}
            >
              {feature.icon && <Box style={iconStyle}>{feature.icon}</Box>}
              <Box as="h3" style={titleStyle}>
                {feature.title}
              </Box>
              <Box as="p" style={descriptionStyle}>
                {feature.description}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

FeaturesBase.displayName = "FeaturesBase";
