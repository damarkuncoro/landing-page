import type { SectionConfig } from '../types'
import type { CtaConfig } from '../../components/types'

export interface CtaSection extends SectionConfig {
  type: 'cta'
  config: CtaConfig
}

export function createCtaSection(config: CtaConfig, id?: string, className?: string): CtaSection {
  return {
    id: id || `cta-${Date.now()}`,
    className,
    type: 'cta',
    config,
  }
}