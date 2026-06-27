export type UiAlertTypes = 'default' | 'soft' | 'outline' | 'dash'

export interface UiAlertTypeInterface {
  class: string
}

export const alert_types: Record<UiAlertTypes, UiAlertTypeInterface> = {
  default: { class: '' },
  soft: { class: 'alert-soft' },
  outline: { class: 'alert-outline' },
  dash: { class: 'alert-dash' },
}

export interface UiAlertColorInterface {
  class: string
}

export type UiAlertColors = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'ghost'

export const alert_variants: Record<UiAlertColors, UiAlertColorInterface> = {
  neutral: { class: 'alert-neutral' },
  primary: { class: 'alert-primary' },
  secondary: { class: 'alert-secondary' },
  accent: { class: 'alert-accent' },
  info: { class: 'alert-info' },
  success: { class: 'alert-success' },
  warning: { class: 'alert-warning' },
  error: { class: 'alert-error' },
  ghost: { class: 'alert-ghost' },
}
