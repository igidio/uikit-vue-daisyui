<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'
import { calendar_sizes, type CalendarSize } from './ui-calendar-properties'

interface Props {
  placeholder?: string
  color?: UiColors
  size?: CalendarSize
  min?: string
  max?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  color: undefined,
  size: 'md',
  min: '',
  max: '',
  disabled: false,
})

const model_value = defineModel<string>({ default: '' })

const input_classes: string = (() => {
  const c: string[] = ['input', 'w-full']
  if (props.color) {
    c.push(`input-${props.color}`)
  }
  c.push(calendar_sizes[props.size as CalendarSize] ?? 'input-md')
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <input
    type="date"
    :placeholder="placeholder"
    :min="min"
    :max="max"
    :disabled="disabled"
    :class="input_classes"
    v-model="model_value"
  />
</template>
