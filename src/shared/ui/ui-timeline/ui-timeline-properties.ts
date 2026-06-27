import type { UiColors } from '@/shared/ui/ui-types'
import type { IconValue } from '@/shared/data/icons'

export interface UiTimelineItem {
  text?: string
  subtitle?: string
  icon?: IconValue
  color?: UiColors
  description?: string
}

export type UiTimelineDisposition = 'horizontal' | 'vertical'
