import React from "react";
import type { BoxOwnProps, FlexOwnProps, ContainerOwnProps } from "../contracts/LayoutContract";

// Shared utility for unit normalization
const normalizeUnit = (value?: string | number): string | undefined => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

// Base properties (shared)
interface BaseLayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Shared style properties type
type StyleProps = {
  style?: React.CSSProperties;
};

// Shared component implementation
const createLayoutComponent = <P extends BaseLayoutProps>(
  displayName: string,
  defaultElement: string,
  styleResolver?: (props: P) => React.CSSProperties
) => {
  const Component = React.forwardRef<HTMLElement, P & { as?: React.ElementType }>((props, ref) => {
    const { as: Element = defaultElement, children, ...restProps } = props;
    const resolvedStyle = styleResolver ? styleResolver(props as unknown as P) : undefined;

    return (
      <Element
        ref={ref}
        style={{ ...props.style, ...resolvedStyle }}
        {...restProps as any}
      >
        {children}
      </Element>
    );
  });

  Component.displayName = displayName;
  return Component;
};

// Box component - no style resolver needed
export const Box = createLayoutComponent<BoxOwnProps>("Box", "div");

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
export const Flex = createLayoutComponent<FlexOwnProps>("Flex", "div", resolveFlexStyle);

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
export const Container = createLayoutComponent<ContainerOwnProps>("Container", "div", resolveContainerStyle);
