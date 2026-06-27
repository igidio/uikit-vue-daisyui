import type { UiColors } from '@/shared/ui/ui-types'

export type CalendarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const calendar_sizes: Record<CalendarSize, string> = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
}
