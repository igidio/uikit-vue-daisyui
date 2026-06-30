import type { UiColors } from '@/shared/ui/ui-types'

export type CalendarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const calendar_sizes: Record<CalendarSize, string> = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
}

export type CalendarColor = UiColors

export const calendar_colors: Record<CalendarColor, string> = {
  primary: 'input-primary',
  secondary: 'input-secondary',
  accent: 'input-accent',
  neutral: 'input-neutral',
  info: 'input-info',
  success: 'input-success',
  warning: 'input-warning',
  error: 'input-error',
  ghost: 'input-ghost',
}
