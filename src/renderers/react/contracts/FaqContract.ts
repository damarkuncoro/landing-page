import React from 'react'

/**
 * Kontrak UI untuk Faq Section.
 * ❌ Tidak boleh depend apa pun (aturan 12).
 */
export interface FaqContractProps {
  items: {
    id?: string
    question: string
    answer: string
  }[]
  className?: string
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  itemStyle?: React.CSSProperties
  questionStyle?: React.CSSProperties
  answerStyle?: React.CSSProperties
}
