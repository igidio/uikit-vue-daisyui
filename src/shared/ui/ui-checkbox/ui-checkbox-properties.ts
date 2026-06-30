import type { UiColors } from '@/shared/ui/ui-types'

export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const checkbox_sizes: Record<CheckboxSize, string> = {
  xs: 'checkbox-xs',
  sm: 'checkbox-sm',
  md: 'checkbox-md',
  lg: 'checkbox-lg',
  xl: 'checkbox-xl',
}

export type CheckboxColor = UiColors

export const checkbox_colors: Record<CheckboxColor, string> = {
  primary: 'checkbox-primary',
  secondary: 'checkbox-secondary',
  accent: 'checkbox-accent',
  neutral: 'checkbox-neutral',
  info: 'checkbox-info',
  success: 'checkbox-success',
  warning: 'checkbox-warning',
  error: 'checkbox-error',
  ghost: 'checkbox-ghost',
}
