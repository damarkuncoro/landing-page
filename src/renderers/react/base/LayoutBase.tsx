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
  // Typography
  color?: string;
  fontSize?: string | number;
  lineHeight?: string | number;
  fontWeight?: number | string;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textDecoration?: string;
  // Background
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'space' | 'round';
  // Spacing
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  // Border
  borderRadius?: string | number;
  border?: string;
  borderWidth?: string | number;
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
  borderColor?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  // Dimensions
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  // Display
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
}

// Shared style properties type
type StyleProps = {
  style?: React.CSSProperties;
};

// Type for polymorphic ref
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

// Shared component implementation for polymorphic components
const createLayoutComponent = <P extends BaseLayoutProps>(
  displayName: string,
  defaultElement: React.ElementType,
  styleResolver?: (props: P) => React.CSSProperties
) => {
  return React.forwardRef<HTMLElement, P & { as?: React.ElementType }>((props, ref) => {
    const { as: Element = defaultElement, children, ...restProps } = props;
    const castProps = restProps as unknown as BaseLayoutProps;
    const baseStyle = {
      // Typography
      color: castProps.color,
      fontSize: normalizeUnit(castProps.fontSize),
      lineHeight: normalizeUnit(castProps.lineHeight),
      fontWeight: castProps.fontWeight,
      fontStyle: castProps.fontStyle,
      textAlign: castProps.textAlign,
      textDecoration: castProps.textDecoration,
      // Background
      backgroundColor: castProps.backgroundColor,
      backgroundImage: castProps.backgroundImage,
      backgroundSize: castProps.backgroundSize,
      backgroundPosition: castProps.backgroundPosition,
      backgroundRepeat: castProps.backgroundRepeat,
      // Spacing
      padding: normalizeUnit(castProps.padding),
      paddingTop: normalizeUnit(castProps.paddingTop),
      paddingRight: normalizeUnit(castProps.paddingRight),
      paddingBottom: normalizeUnit(castProps.paddingBottom),
      paddingLeft: normalizeUnit(castProps.paddingLeft),
      margin: normalizeUnit(castProps.margin),
      marginTop: normalizeUnit(castProps.marginTop),
      marginRight: normalizeUnit(castProps.marginRight),
      marginBottom: normalizeUnit(castProps.marginBottom),
      marginLeft: normalizeUnit(castProps.marginLeft),
      // Border
      borderRadius: normalizeUnit(castProps.borderRadius),
      border: castProps.border,
      borderWidth: normalizeUnit(castProps.borderWidth),
      borderStyle: castProps.borderStyle,
      borderColor: castProps.borderColor,
      borderTop: castProps.borderTop,
      borderRight: castProps.borderRight,
      borderBottom: castProps.borderBottom,
      borderLeft: castProps.borderLeft,
      // Dimensions
      width: normalizeUnit(castProps.width),
      height: normalizeUnit(castProps.height),
      minWidth: normalizeUnit(castProps.minWidth),
      minHeight: normalizeUnit(castProps.minHeight),
      maxWidth: normalizeUnit(castProps.maxWidth),
      maxHeight: normalizeUnit(castProps.maxHeight),
      // Positioning
      position: castProps.position,
      top: normalizeUnit(castProps.top),
      right: normalizeUnit(castProps.right),
      bottom: normalizeUnit(castProps.bottom),
      left: normalizeUnit(castProps.left),
      zIndex: castProps.zIndex,
      // Display
      display: castProps.display,
      overflow: castProps.overflow,
    };
    const resolvedStyle = styleResolver ? styleResolver(restProps as unknown as P) : undefined;

    return (
      <Element
        ref={ref}
        style={{ ...baseStyle, ...restProps.style, ...resolvedStyle }}
        {...restProps as any}
      >
        {children}
      </Element>
    );
  });
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
