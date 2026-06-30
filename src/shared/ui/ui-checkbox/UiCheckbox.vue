<script setup lang="ts">
import { inject } from 'vue'
import { FIELD_STATE_KEY } from '../ui-field/ui-field-injection'
import type { UiColors } from '@/shared/ui/ui-types'
import { checkbox_sizes, checkbox_colors, type CheckboxSize } from './ui-checkbox-properties'

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
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'checkbox',
  color: undefined,
  size: 'md',
  disabled: false,
  id: undefined,
})

const field_state = inject(FIELD_STATE_KEY, null)

const model_value = defineModel<any[]>({ default: () => [] })

const checkbox_classes: string = (() => {
  const classes = ['checkbox']
  if (props.color) classes.push(checkbox_colors[props.color])
  classes.push(checkbox_sizes[props.size as CheckboxSize] ?? 'checkbox-md')
  return classes.join(' ')
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
      v-for="(item, index) in data"
      :key="item.value"
      class="flex items-center gap-2 cursor-pointer"
    >
      <input
        :id="field_state?.id.value ? index == 0 ? `${field_state.id.value}` :`${field_state.id.value}-${index}` : undefined"
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
