import type { UiColors } from '@/shared/ui/ui-types'

export type InputfileSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const inputfile_sizes: Record<InputfileSize, string> = {
  xs: 'file-input-xs',
  sm: 'file-input-sm',
  md: 'file-input-md',
  lg: 'file-input-lg',
  xl: 'file-input-xl',
}
