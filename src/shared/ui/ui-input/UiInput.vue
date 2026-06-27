<script setup lang="ts">
import type { InputSize, InputType } from './ui-input-properties'
import { input_sizes, input_color_classes } from './ui-input-properties'

interface Props {
  placeholder?: string
  type?: InputType
  color?: keyof typeof input_color_classes
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
    c.push(input_color_classes[props.color])
  }
  c.push(input_sizes[props.size ?? 'md'])
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
