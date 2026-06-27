<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'
import { progress_colors } from './ui-progress-properties'

interface Props {
  value?: number | null
  indeterminate?: boolean
  color?: UiColors | null
}

const props = withDefaults(defineProps<Props>(), {
  value: null,
  indeterminate: false,
  color: null,
})

const progress_classes: string = (() => {
  const c: string[] = ['progress']
  if (props.color) {
    c.push(progress_colors[props.color as UiColors])
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <progress
    v-if="indeterminate"
    :class="progress_classes"
  ></progress>
  <progress
    v-else
    :class="progress_classes"
    :value="value ?? undefined"
    max="100"
  ></progress>
</template>
