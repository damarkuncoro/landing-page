import React from "react";
import type { TestimonialsContractProps } from "../contracts/TestimonialsContract";
import { Container, Box, Flex } from "./LayoutBase";

/**
 * Base UI untuk Testimonials Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const TestimonialsBase = React.forwardRef<
  HTMLElement,
  TestimonialsContractProps & { theme: any }
>((props, ref) => {
  const {
    testimonials,
    className,
    style,
    containerStyle,
    gridStyle,
    testimonialStyle,
    quoteIconStyle,
    quoteStyle,
    authorContainerStyle,
    avatarStyle,
    authorInfoStyle,
    authorNameStyle,
    authorRoleStyle,
    onTestimonialMouseEnter,
    onTestimonialMouseLeave,
    theme,
  } = props;

  return (
    <Box as="section" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={gridStyle}>
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              className={testimonial.className}
              style={testimonialStyle}
              onMouseEnter={onTestimonialMouseEnter}
              onMouseLeave={onTestimonialMouseLeave}
            >
              <Box style={quoteIconStyle}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={theme.colors.primary}
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </Box>
              <Box as="blockquote" style={quoteStyle}>
                {testimonial.quote}
              </Box>
              <Flex
                align="center"
                gap={theme.spacing.md}
                style={authorContainerStyle}
              >
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    style={avatarStyle}
                    loading="lazy"
                  />
                )}
                <Box style={authorInfoStyle}>
                  <Box as="p" style={authorNameStyle}>
                    {testimonial.author}
                  </Box>
                  {testimonial.role && (
                    <Box as="p" style={authorRoleStyle}>
                      {testimonial.role}
                    </Box>
                  )}
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
});

TestimonialsBase.displayName = "TestimonialsBase";
