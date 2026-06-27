<script setup lang="ts">
import type { RangeSize } from './ui-range-properties'
import { range_sizes, range_color_classes } from './ui-range-properties'

interface Props {
  min?: number
  max?: number
  step?: number
  color?: keyof typeof range_color_classes
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
    c.push(range_color_classes[props.color])
  }
  c.push(range_sizes[props.size ?? 'md'])
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
