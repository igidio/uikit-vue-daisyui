<script setup lang="ts">
import type { SelectSize } from './ui-select-properties'
import { select_sizes, select_color_classes } from './ui-select-properties'
import type { SelectOption } from './ui-select-properties'

interface Props {
  options: SelectOption[]
  placeholder?: string
  color?: keyof typeof select_color_classes
  size?: SelectSize
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  color: undefined,
  size: 'md',
  disabled: false,
})

const model_value = defineModel<string | number>({ default: '' })

const select_classes: string = (() => {
  const c: string[] = ['select', 'w-full']
  if (props.color) {
    c.push(select_color_classes[props.color])
  }
  c.push(select_sizes[props.size ?? 'md'])
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <select
    :disabled="disabled"
    :class="select_classes"
    v-model="model_value"
  >
    <option value="" disabled selected>{{ placeholder }}</option>
    <option
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
    >{{ opt.label }}</option>
  </select>
</template>
