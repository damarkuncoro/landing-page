import React from "react";
import type {
  BoxOwnProps,
  FlexOwnProps,
  ContainerOwnProps,
} from "../contracts/LayoutContract";

const normalizeUnit = (value?: string | number): string | undefined => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

const resolveFlexStyle = (props: {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: string | number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  style?: React.CSSProperties;
}): React.CSSProperties => {
  return {
    display: "flex",
    flexDirection: props.direction,
    justifyContent: props.justify,
    alignItems: props.align,
    gap: normalizeUnit(props.gap),
    flexWrap: props.wrap,
    ...props.style,
  };
};

const resolveContainerStyle = (props: {
  maxWidth?: string | number;
  padding?: string | number;
  center?: boolean;
  style?: React.CSSProperties;
}): React.CSSProperties => {
  return {
    maxWidth: normalizeUnit(props.maxWidth),
    padding: normalizeUnit(props.padding),
    margin: props.center ? "0 auto" : undefined,
    ...props.style,
  };
};

export const Box = React.forwardRef<HTMLElement, BoxOwnProps & React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }>((props, ref) => {
  const { as: Component = "div", children, ...rest } = props;
  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export const Flex = React.forwardRef<HTMLElement, FlexOwnProps & React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }>((props, ref) => {
  const { as: Component = "div", children, direction = "row", justify = "flex-start", align = "stretch", gap = 0, wrap = "nowrap", style, ...rest } = props;
  const flexStyle = resolveFlexStyle({
    direction,
    justify,
    align,
    gap,
    wrap,
    style,
  });
  return (
    <Component ref={ref} style={flexStyle} {...rest}>
      {children}
    </Component>
  );
});

export const Container = React.forwardRef<HTMLElement, ContainerOwnProps & React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }>((props, ref) => {
  const { as: Component = "div", children, maxWidth, padding, center, style, ...rest } = props;
  const containerStyle = resolveContainerStyle({
    maxWidth,
    padding,
    center,
    style,
  });
  return (
    <Component ref={ref} style={containerStyle} {...rest}>
      {children}
    </Component>
  );
});

// Set display names for better debugging
Box.displayName = "Box";
Flex.displayName = "Flex";
Container.displayName = "Container";
