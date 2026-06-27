<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'

export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface SelectOption {
  label: string
  value: any
}

const select_sizes: Record<SelectSize, string> = {
  xs: 'select-xs',
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg',
  xl: 'select-xl',
}

interface Props {
  options: SelectOption[]
  placeholder?: string
  color?: UiColors
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
    c.push(`select-${props.color}`)
  }
  c.push(select_sizes[props.size as SelectSize] ?? 'select-md')
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
