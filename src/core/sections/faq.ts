import type { SectionConfig } from '../types'
import type { FaqConfig } from '../../components/types'

export interface FaqSection extends SectionConfig {
  type: 'faq'
  config: FaqConfig
}

export function createFaqSection(config: FaqConfig, id?: string, className?: string): FaqSection {
  return {
    id: id || `faq-${Date.now()}`,
    className,
    type: 'faq',
    config,
  }
}