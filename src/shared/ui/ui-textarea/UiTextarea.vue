<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'

type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const textarea_sizes: Record<TextareaSize, string> = {
  xs: 'textarea-xs',
  sm: 'textarea-sm',
  md: 'textarea-md',
  lg: 'textarea-lg',
  xl: 'textarea-xl',
}

interface Props {
  placeholder?: string
  color?: UiColors
  size?: TextareaSize
  rows?: number
  resizable?: boolean
  readonly?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  color: undefined,
  size: 'md',
  rows: 4,
  resizable: true,
  readonly: false,
  disabled: false,
})

const model_value = defineModel<string>({ default: '' })

const textarea_classes: string = (() => {
  const c: string[] = ['textarea', 'w-full']
  if (props.color) {
    c.push(`textarea-${props.color}`)
  }
  c.push(textarea_sizes[props.size as TextareaSize] ?? 'textarea-md')
  if (!props.resizable) {
    c.push('resize-none')
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <textarea
    :rows="rows"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :class="textarea_classes"
    v-model="model_value"
  ></textarea>
</template>
