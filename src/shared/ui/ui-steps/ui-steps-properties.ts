import type { UiColors } from '@/shared/ui/ui-types'
import type { IconValue } from '@/shared/data/icons'

export interface UiStepsItem {
  icon?: IconValue
  label: string
  color?: UiColors
}

export type UiStepsDirection = 'horizontal' | 'vertical'
