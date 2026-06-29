<script setup lang="ts">
import { inject } from 'vue'
import { FIELD_STATE_KEY } from '../ui-field/ui-field-injection'
import type { TextareaSize } from './ui-textarea-properties'
import { textarea_sizes, textarea_color_classes } from './ui-textarea-properties'

interface Props {
  placeholder?: string
  color?: keyof typeof textarea_color_classes
  size?: TextareaSize
  rows?: number
  resizable?: boolean
  readonly?: boolean
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  color: undefined,
  size: 'md',
  rows: 4,
  resizable: true,
  readonly: false,
  disabled: false,
  id: undefined,
})

const field_state = inject(FIELD_STATE_KEY, null)

const model_value = defineModel<string>({ default: '' })

const textarea_classes: string = (() => {
  const c: string[] = ['textarea', 'w-full']
  if (props.color) {
    c.push(textarea_color_classes[props.color])
  }
  c.push(textarea_sizes[props.size ?? 'md'])
  if (!props.resizable) {
    c.push('resize-none')
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <textarea
    :id="id || field_state?.id.value"
    :rows="rows"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :class="textarea_classes"
    v-model="model_value"
  ></textarea>
</template>
