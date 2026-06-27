export type UiRatingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const rating_sizes: Record<UiRatingSizes, string> = {
  xs: 'rating-xs',
  sm: 'rating-sm',
  md: '',
  lg: 'rating-lg',
  xl: 'rating-xl',
}

export type UiRatingColors = 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error'

export const rating_color_classes: Record<UiRatingColors, string> = {
  primary: 'mask-star-2 bg-primary',
  secondary: 'mask-star-2 bg-secondary',
  accent: 'mask-star-2 bg-accent',
  neutral: 'mask-star-2 bg-neutral',
  info: 'mask-star-2 bg-info',
  success: 'mask-star-2 bg-success',
  warning: 'mask-star-2 bg-warning',
  error: 'mask-star-2 bg-error',
}
