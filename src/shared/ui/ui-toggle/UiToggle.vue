<script setup lang="ts">
import { inject } from 'vue'
import { FIELD_STATE_KEY } from '../ui-field/ui-field-injection'
import type { ToggleSize } from './ui-toggle-properties'
import { toggle_sizes, toggle_color_classes } from './ui-toggle-properties'

interface Props {
  color?: keyof typeof toggle_color_classes
  size?: ToggleSize
  disabled?: boolean
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  size: 'md',
  disabled: false,
  id: undefined,
})

const field_state = inject(FIELD_STATE_KEY, null)

const model_value = defineModel<boolean>({ default: false })

const toggle_classes: string = (() => {
  const c: string[] = ['toggle']
  if (props.color) {
    c.push(toggle_color_classes[props.color])
  }
  c.push(toggle_sizes[props.size ?? 'md'])
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <input
    :id="id || field_state?.id.value"
    type="checkbox"
    :disabled="disabled"
    :class="toggle_classes"
    v-model="model_value"
  />
</template>
