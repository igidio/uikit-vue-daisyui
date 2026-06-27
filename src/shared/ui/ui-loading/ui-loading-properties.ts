import type { UiColors } from '@/shared/ui/ui-types'

export type UiLoadingTypes = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'

export const loading_types: Record<UiLoadingTypes, string> = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
}

export type UiLoadingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const loading_sizes: Record<UiLoadingSizes, string> = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: '',
  lg: 'loading-lg',
  xl: 'loading-xl',
}

export const loading_color_classes: Record<UiColors, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  ghost: 'text-ghost',
}
