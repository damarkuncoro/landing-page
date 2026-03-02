import type { SectionConfig } from '../types'
import type { StatConfig } from '../../components/types'

export interface StatsSection extends SectionConfig {
  type: 'stats'
  config: {
    stats: StatConfig[]
  }
}

export function createStatsSection(config: { stats: StatConfig[] }, id?: string, className?: string): StatsSection {
  return {
    id: id || `stats-${Date.now()}`,
    className,
    type: 'stats',
    config,
  }
}