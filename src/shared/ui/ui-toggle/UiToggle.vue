<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'

type ToggleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const toggle_sizes: Record<ToggleSize, string> = {
  xs: 'toggle-xs',
  sm: 'toggle-sm',
  md: 'toggle-md',
  lg: 'toggle-lg',
  xl: 'toggle-xl',
}

interface Props {
  color?: UiColors
  size?: ToggleSize
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  size: 'md',
  disabled: false,
})

const model_value = defineModel<boolean>({ default: false })

const toggle_classes: string = (() => {
  const c: string[] = ['toggle']
  if (props.color) {
    c.push(`toggle-${props.color}`)
  }
  c.push(toggle_sizes[props.size as ToggleSize] ?? 'toggle-md')
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <input
    type="checkbox"
    :disabled="disabled"
    :class="toggle_classes"
    v-model="model_value"
  />
</template>
