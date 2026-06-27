<script setup lang="ts">
import { inputfile_sizes, inputfile_color_classes, type InputfileSize } from './ui-inputfile-properties'

interface Props {
  accept?: string
  multiple?: boolean
  color?: keyof typeof inputfile_color_classes
  size?: InputfileSize
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  accept: '',
  multiple: false,
  color: undefined,
  size: 'md',
  disabled: false,
})

const model_value = defineModel<string | null>({ default: null })

const inputfile_classes: string = (() => {
  const c: string[] = ['file-input', 'w-full']
  if (props.color) {
    c.push(inputfile_color_classes[props.color])
  }
  c.push(inputfile_sizes[props.size ?? 'md'])
  return c.filter(Boolean).join(' ')
})()

function on_file_change(event: Event): void {
  const input = event.target as HTMLInputElement
  const files = input.files
  if (files && files.length > 0 && files[0]) {
    model_value.value = files[0].name
  } else {
    model_value.value = null
  }
}
</script>

<template>
  <input
    type="file"
    :accept="accept"
    :multiple="multiple"
    :disabled="disabled"
    :class="inputfile_classes"
    @change="on_file_change"
  />
</template>
