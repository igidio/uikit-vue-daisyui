<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'
import { checkbox_sizes, type CheckboxSize } from './ui-checkbox-properties'

export interface CheckboxOption {
  label: string
  value: any
}

interface Props {
  name?: string
  color?: UiColors
  size?: CheckboxSize
  disabled?: boolean
  data: CheckboxOption[]
}

const props = withDefaults(defineProps<Props>(), {
  name: 'checkbox',
  color: undefined,
  size: 'md',
  disabled: false,
})

const model_value = defineModel<any[]>({ default: () => [] })

const checkbox_classes: string = (() => {
  const c: string[] = ['checkbox']
  if (props.color) {
    c.push(`checkbox-${props.color}`)
  }
  c.push(checkbox_sizes[props.size as CheckboxSize] ?? 'checkbox-md')
  return c.filter(Boolean).join(' ')
})()

function is_checked(value: any): boolean {
  return Array.isArray(model_value.value) && model_value.value.includes(value)
}

function toggle_value(value: any, event: Event): void {
  const checked = (event.target as HTMLInputElement).checked
  const selected = Array.isArray(model_value.value) ? [...model_value.value] : []
  if (checked) {
    selected.push(value)
  } else {
    const idx = selected.indexOf(value)
    if (idx !== -1) selected.splice(idx, 1)
  }
  model_value.value = selected
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <label
      v-for="item in data"
      :key="item.value"
      class="flex items-center gap-2 cursor-pointer"
    >
      <input
        type="checkbox"
        :name="name"
        :class="checkbox_classes"
        :checked="is_checked(item.value)"
        :disabled="disabled"
        @change="toggle_value(item.value, $event)"
      />
      <span class="label-text">{{ item.label }}</span>
    </label>
  </div>
</template>
