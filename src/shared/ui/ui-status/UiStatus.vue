<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'
import { status_sizes, status_colors, type UiStatusSizes } from './ui-status-properties'

interface Props {
  size?: UiStatusSizes
  color?: UiColors
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'neutral',
})

const status_classes: string = (() => {
  const c: string[] = ['status']
  c.push(status_sizes[props.size as UiStatusSizes])
  c.push(status_colors[props.color as UiColors])
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <span :class="status_classes"></span>
</template>
