import React, { useState } from "react";

/**
 * Optimized Image component with lazy loading, placeholders, and error handling.
 * Provides better performance for landing page images.
 */
export interface OptimizedImageProps {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Image width */
  width?: string | number;
  /** Image height */
  height?: string | number;
  /** Object fit mode */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Enable lazy loading (default: true) */
  lazy?: boolean;
  /** Enable async decoding (default: true) */
  asyncDecoding?: boolean;
  /** Placeholder image while loading */
  placeholder?: string;
  /** Callback when image loads */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: (error: Error) => void;
  /** Test ID for testing */
  testId?: string;
}

/**
 * Optimized Image component with built-in lazy loading and error handling.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  style,
  width,
  height,
  objectFit = "cover",
  lazy = true,
  asyncDecoding = true,
  placeholder,
  onLoad,
  onError,
  testId,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(new Error(`Failed to load image: ${src}`));
  };

  const imageStyle: React.CSSProperties = {
    ...style,
    width: width || "100%",
    height: height || "auto",
    objectFit,
    transition: "opacity 0.3s ease-in-out",
    opacity: isLoaded ? 1 : placeholder ? 0.5 : 0,
  };

  // Show placeholder if available and image hasn't loaded
  if (placeholder && !isLoaded && !hasError) {
    return (
      <div
        className={className}
        style={{
          width: width || "100%",
          height: height || "auto",
          backgroundImage: `url(${placeholder})`,
          backgroundSize: objectFit,
          backgroundPosition: "center",
          ...style,
        }}
        data-testid={testId ? `${testId}-placeholder` : "optimized-image-placeholder"}
      >
        <img
          src={src}
          alt={alt}
          style={{ ...imageStyle, opacity: 0 }}
          loading={lazy ? "lazy" : undefined}
          decoding={asyncDecoding ? "async" : undefined}
          onLoad={handleLoad}
          onError={handleError}
          data-testid={testId}
        />
      </div>
    );
  }

  // Show error state
  if (hasError) {
    return (
      <div
        className={className}
        style={{
          width: width || "100%",
          height: height || "200px",
          backgroundColor: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9ca3af",
          fontSize: "0.875rem",
          ...style,
        }}
        data-testid={testId ? `${testId}-error` : "optimized-image-error"}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={imageStyle}
      width={width}
      height={height}
      loading={lazy ? "lazy" : undefined}
      decoding={asyncDecoding ? "async" : undefined}
      onLoad={handleLoad}
      onError={handleError}
      data-testid={testId}
    />
  );
};

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;