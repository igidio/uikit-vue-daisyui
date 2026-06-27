<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'

type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type InputType = 'text' | 'password' | 'email' | 'number' | 'url' | 'tel' | 'search' | 'date' | 'datetime-local' | 'month' | 'time' | 'week'

const input_sizes: Record<InputSize, string> = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
}

interface Props {
  placeholder?: string
  type?: InputType
  color?: UiColors
  size?: InputSize
  readonly?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  color: undefined,
  size: 'md',
  readonly: false,
  disabled: false,
})

const model_value = defineModel<string | number>({ default: '' })

const input_classes: string = (() => {
  const c: string[] = ['input', 'w-full']
  if (props.color) {
    c.push(`input-${props.color}`)
  }
  c.push(input_sizes[props.size as InputSize] ?? 'input-md')
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :class="input_classes"
    v-model="model_value"
  />
</template>
