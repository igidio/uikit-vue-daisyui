export type UiBadgeSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const badge_sizes: Record<UiBadgeSizes, string> = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: '',
  lg: 'badge-lg',
  xl: 'badge-xl',
}

export type UiBadgeColors = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost'

export const badge_variants: Record<UiBadgeColors, string> = {
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  ghost: 'badge-ghost',
}

export type UiBadgeTypes = 'soft' | 'outline' | 'dash'

export const badge_types: Record<UiBadgeTypes, string> = {
  soft: 'badge-soft',
  outline: 'badge-outline',
  dash: 'badge-dash',
}
