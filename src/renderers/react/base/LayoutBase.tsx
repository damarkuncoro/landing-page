import React from "react";
import type { BoxOwnProps, FlexOwnProps, ContainerOwnProps } from "../contracts/LayoutContract";

// Shared utility for unit normalization
const normalizeUnit = (value?: string | number): string | undefined => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

// Shared style properties type
type StyleProps = {
  style?: React.CSSProperties;
};

// Shared component implementation
const createLayoutComponent = (
  displayName: string,
  defaultElement: string,
  styleResolver?: (props: any) => React.CSSProperties
) => {
  const Component = React.forwardRef<HTMLElement, any>((props, ref) => {
    const { as: Element = defaultElement, children, ...restProps } = props;
    const resolvedStyle = styleResolver ? styleResolver(props) : undefined;

    return (
      <Element
        ref={ref}
        style={{ ...props.style, ...resolvedStyle }}
        {...restProps}
      >
        {children}
      </Element>
    );
  });

  Component.displayName = displayName;
  return Component;
};

// Box component - no style resolver needed
export const Box = createLayoutComponent("Box", "div");

// Flex specific style resolver
const resolveFlexStyle = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap",
  style,
}: FlexOwnProps & StyleProps): React.CSSProperties => ({
  display: "flex",
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  gap: normalizeUnit(gap),
  flexWrap: wrap,
  ...style,
});

// Flex component - with style resolver
export const Flex = createLayoutComponent("Flex", "div", resolveFlexStyle);

// Container specific style resolver
const resolveContainerStyle = ({
  maxWidth,
  padding,
  center,
  style,
}: ContainerOwnProps & StyleProps): React.CSSProperties => ({
  maxWidth: normalizeUnit(maxWidth),
  padding: normalizeUnit(padding),
  margin: center ? "0 auto" : undefined,
  ...style,
});

// Container component - with style resolver
export const Container = createLayoutComponent("Container", "div", resolveContainerStyle);
