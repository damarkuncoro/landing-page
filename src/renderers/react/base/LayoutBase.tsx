import React from "react";
import type {
  BoxProps,
  FlexProps,
  ContainerProps,
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

export const Box = React.forwardRef<any, BoxProps>((props, ref) => {
  const { as: Component = "div", children, className, style, ...rest } = props;
  return (
    <Component ref={ref} className={className} style={style} {...rest as any}>
      {children}
    </Component>
  );
});

export const Flex = React.forwardRef<any, FlexProps>((props, ref) => {
  const { as: Component = "div", children, className, style, direction = "row", justify = "flex-start", align = "stretch", gap = 0, wrap = "nowrap", ...rest } = props;
  const flexStyle = resolveFlexStyle({
    direction,
    justify,
    align,
    gap,
    wrap,
    style,
  });
  return (
    <Component ref={ref} className={className} style={flexStyle} {...rest as any}>
      {children}
    </Component>
  );
});

export const Container = React.forwardRef<any, ContainerProps>((props, ref) => {
  const { as: Component = "div", children, className, style, maxWidth, padding, center, ...rest } = props;
  const containerStyle = resolveContainerStyle({
    maxWidth,
    padding,
    center,
    style,
  });
  return (
    <Component ref={ref} className={className} style={containerStyle} {...rest as any}>
      {children}
    </Component>
  );
});

Box.displayName = "Box";
Flex.displayName = "Flex";
Container.displayName = "Container";
