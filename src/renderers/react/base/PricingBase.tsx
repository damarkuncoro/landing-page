import React from 'react'
import type { PricingContractProps } from '../contracts/PricingContract'
import { Container, Box, Flex } from './LayoutBase'
import Button from '../Button'

/**
 * Base UI untuk Pricing Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const PricingBase = React.forwardRef<HTMLElement, PricingContractProps & { theme: any }>((props, ref) => {
  const { 
    plans, 
    className, 
    style, 
    containerStyle, 
    gridStyle, 
    planStyle, 
    featuredBadgeStyle, 
    titleStyle, 
    descriptionStyle, 
    priceContainerStyle, 
    priceStyle, 
    periodStyle, 
    featuresListStyle, 
    featureItemStyle, 
    checkIcon,
    theme 
  } = props

  return (
    <Box as="section" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={gridStyle}>
          {plans.map((plan) => (
            <Box
              key={plan.id}
              className={plan.className}
              style={typeof planStyle === 'function' ? planStyle(plan) : planStyle}
            >
              {plan.featured && (
                <Box style={featuredBadgeStyle}>
                  Popular
                </Box>
              )}
              <Box as="h3" style={titleStyle}>
                {plan.title}
              </Box>
              <Box as="p" style={descriptionStyle}>{plan.description}</Box>
              <Box style={priceContainerStyle}>
                <Box as="span" style={priceStyle}>
                  {plan.price}
                </Box>
                {plan.period && <Box as="span" style={periodStyle}>/{plan.period}</Box>}
              </Box>
              <Box as="ul" style={featuresListStyle}>
                {plan.features.map((feature, index) => (
                  <Box as="li" key={index} style={featureItemStyle}>
                    {checkIcon || (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.colors.accent}
                        strokeWidth="2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    )}
                    {feature}
                  </Box>
                ))}
              </Box>
              <Button config={plan.button} theme={theme} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
})

PricingBase.displayName = 'PricingBase'
