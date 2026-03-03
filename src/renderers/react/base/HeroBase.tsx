import React, { useMemo } from "react";
import type { HeroContractProps } from "../contracts/HeroContract";
import Button from "../Button";
import { Container, Flex, Box } from "./LayoutBase";
import { useTheme } from "../ThemeProvider";
import { getHeroStyles, getAlignmentStyles } from "./HeroStyles";

/**
 * Base UI untuk Hero Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const HeroBase = React.forwardRef<
  HTMLElement,
  HeroContractProps & { as?: React.ElementType }
>((props, ref) => {
  const theme = useTheme();
  const {
    title,
    subtitle,
    buttons,
    image,
    imageAlt,
    video,
    captionsSrc,
    alignment = "center",
    className,
    style,
    containerStyle,
    contentStyle,
    testId,
    backgroundGradient,
    parallaxEffect,
    fullHeight,
    imagePosition = "top",
    imageSize = "medium",
    videoAutoPlay = false,
    videoLoop = false,
    videoMuted = true,
    contentMaxWidth,
  } = props;

  // Derive unique heading id from props for accessibility
  const headingId = props.id ? `${props.id}-title` : "hero-title";

  // Memoize styles to avoid unnecessary re-renders
  const styles = useMemo(
    () => getHeroStyles(theme, alignment),
    [theme, alignment]
  );

  const alignmentStyles = useMemo(
    () => getAlignmentStyles(alignment),
    [alignment]
  );

  return (
    <Box
      as={props.as || "section"}
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundImage: backgroundGradient,
        minHeight: fullHeight ? "100vh" : undefined,
        display: fullHeight ? "flex" : undefined,
        alignItems: fullHeight ? "center" : undefined,
      }}
      aria-labelledby={headingId}
      data-testid={testId || "hero-section"}
    >
      <Container style={containerStyle} data-testid="hero-container">
        <Flex
          direction={imagePosition === "left" || imagePosition === "right" ? "row" : "column"}
          gap={theme.spacing.xl}
          align={alignmentStyles.flexAlign}
          style={{
            textAlign: alignmentStyles.textAlign,
            ...contentStyle,
            maxWidth: contentMaxWidth,
            margin: "0 auto",
          }}
          data-testid="hero-content"
        >
          {imagePosition === "left" && (image || video) && (
            <Box data-testid="hero-media" style={{ flex: 1 }}>
              {image && !video && (
                <img
                  src={image}
                  alt={imageAlt || title || "Hero"}
                  style={{
                    ...styles.media,
                    width: imageSize === "small" ? "300px" : imageSize === "large" ? "600px" : "450px",
                    height: "auto",
                  }}
                  loading="lazy"
                  data-testid="hero-image"
                />
              )}
              {video && (
                <video
                  src={video}
                  controls={!videoAutoPlay}
                  autoPlay={videoAutoPlay}
                  loop={videoLoop}
                  muted={videoMuted}
                  aria-label={title || "Hero video"}
                  title={title || "Hero video"}
                  style={{
                    ...styles.media,
                    width: imageSize === "small" ? "300px" : imageSize === "large" ? "600px" : "450px",
                    height: "auto",
                  }}
                  data-testid="hero-video"
                >
                  {captionsSrc && (
                    <track kind="captions" src={captionsSrc} default />
                  )}
                </video>
              )}
            </Box>
          )}
          <Box data-testid="hero-text-content" style={{ flex: 1 }}>
            <h1
              id={headingId}
              style={styles.title}
              data-testid="hero-title"
            >
              {title}
            </h1>
            {subtitle && (
              <p style={styles.subtitle} data-testid="hero-subtitle">
                {subtitle}
              </p>
            )}
          </Box>
          {imagePosition === "right" && (image || video) && (
            <Box data-testid="hero-media" style={{ flex: 1 }}>
              {image && !video && (
                <img
                  src={image}
                  alt={imageAlt || title || "Hero"}
                  style={{
                    ...styles.media,
                    width: imageSize === "small" ? "300px" : imageSize === "large" ? "600px" : "450px",
                    height: "auto",
                  }}
                  loading="lazy"
                  data-testid="hero-image"
                />
              )}
              {video && (
                <video
                  src={video}
                  controls={!videoAutoPlay}
                  autoPlay={videoAutoPlay}
                  loop={videoLoop}
                  muted={videoMuted}
                  aria-label={title || "Hero video"}
                  title={title || "Hero video"}
                  style={{
                    ...styles.media,
                    width: imageSize === "small" ? "300px" : imageSize === "large" ? "600px" : "450px",
                    height: "auto",
                  }}
                  data-testid="hero-video"
                >
                  {captionsSrc && (
                    <track kind="captions" src={captionsSrc} default />
                  )}
                </video>
              )}
            </Box>
          )}
          {imagePosition === "top" || imagePosition === "bottom" ? (
            (image || video) && (
              <Box data-testid="hero-media">
                {image && !video && (
                  <img
                    src={image}
                    alt={imageAlt || title || "Hero"}
                    style={{
                      ...styles.media,
                      width: imageSize === "small" ? "300px" : imageSize === "large" ? "600px" : "450px",
                      height: "auto",
                    }}
                    loading="lazy"
                    data-testid="hero-image"
                  />
                )}
                {video && (
                  <video
                    src={video}
                    controls={!videoAutoPlay}
                    autoPlay={videoAutoPlay}
                    loop={videoLoop}
                    muted={videoMuted}
                    aria-label={title || "Hero video"}
                    title={title || "Hero video"}
                    style={{
                      ...styles.media,
                      width: imageSize === "small" ? "300px" : imageSize === "large" ? "600px" : "450px",
                      height: "auto",
                    }}
                    data-testid="hero-video"
                  >
                    {captionsSrc && (
                      <track kind="captions" src={captionsSrc} default />
                    )}
                  </video>
                )}
              </Box>
            )
          ) : null}
          {!!buttons?.length && (
            <Flex
              gap={theme.spacing.md}
              wrap="wrap"
              justify={alignmentStyles.justifyContent}
              data-testid="hero-buttons"
            >
              {buttons.map((button, index) => (
                <Button key={button.id || index} config={button} />
              ))}
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
});

HeroBase.displayName = "HeroBase";
