<script setup lang="ts">
import type { ToggleSize } from './ui-toggle-properties'
import { toggle_sizes, toggle_color_classes } from './ui-toggle-properties'

interface Props {
  color?: keyof typeof toggle_color_classes
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
    c.push(toggle_color_classes[props.color])
  }
  c.push(toggle_sizes[props.size ?? 'md'])
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
