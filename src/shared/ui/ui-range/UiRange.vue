<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'

type RangeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const range_sizes: Record<RangeSize, string> = {
  xs: 'range-xs',
  sm: 'range-sm',
  md: 'range-md',
  lg: 'range-lg',
  xl: 'range-xl',
}

interface Props {
  min?: number
  max?: number
  step?: number
  color?: UiColors
  size?: RangeSize
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  step: 1,
  color: undefined,
  size: 'md',
  disabled: false,
})

const model_value = defineModel<number>({ default: 0 })

const range_classes: string = (() => {
  const c: string[] = ['range']
  if (props.color) {
    c.push(`range-${props.color}`)
  }
  c.push(range_sizes[props.size as RangeSize] ?? 'range-md')
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <input
    type="range"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    :class="range_classes"
    v-model.number="model_value"
  />
</template>
