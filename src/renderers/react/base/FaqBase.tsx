import React from 'react'
import type { FaqContractProps } from '../contracts/FaqContract'
import { Container, Box } from './LayoutBase'

/**
 * Base UI untuk Faq Section.
 * Memisahkan struktur DOM dari styling.
 * Depend pada UI Contract (aturan 13).
 */
export const FaqBase = React.forwardRef<HTMLElement, FaqContractProps & { theme: any }>((props, ref) => {
  const { 
    items, 
    className, 
    style, 
    containerStyle, 
    itemStyle, 
    questionStyle, 
    answerStyle, 
    theme 
  } = props

  return (
    <Box as="section" ref={ref} className={className} style={style}>
      <Container style={containerStyle}>
        <Box style={{ maxWidth: '800px', margin: '0 auto' }}>
          {items.map((item) => (
            <Box key={item.id} style={itemStyle}>
              <details style={{ padding: theme.spacing.md }}>
                <summary style={questionStyle}>
                  {item.question}
                </summary>
                <p style={answerStyle}>
                  {item.answer}
                </p>
              </details>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
})

FaqBase.displayName = 'FaqBase'
