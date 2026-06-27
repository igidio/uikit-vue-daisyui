export type UiAvatarSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const avatar_sizes: Record<UiAvatarSizes, string> = {
  xs: 'w-8',
  sm: 'w-12',
  md: 'w-16',
  lg: 'w-24',
  xl: 'w-32',
}

export type UiAvatarVariants = 'none' | 'online' | 'offline'

export const avatar_variants: Record<UiAvatarVariants, string> = {
  none: '',
  online: 'avatar-online',
  offline: 'avatar-offline',
}

export type UiAvatarShapes = 'circle' | 'rounded' | 'rounded-xl' | 'squircle' | 'heart' | 'hexagon'

export const avatar_shapes: Record<UiAvatarShapes, string> = {
  circle: 'rounded-full',
  rounded: 'rounded',
  'rounded-xl': 'rounded-xl',
  squircle: 'mask mask-squircle',
  heart: 'mask mask-heart',
  hexagon: 'mask mask-hexagon-2',
}
