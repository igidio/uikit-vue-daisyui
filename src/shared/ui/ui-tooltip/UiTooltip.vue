<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'
import { tooltip_positions, tooltip_colors, type UiTooltipPositions } from './ui-tooltip-properties'

interface Props {
  tip: string
  color?: UiColors | null
  position?: UiTooltipPositions
  content?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: null,
  position: 'top',
  content: false,
})

const tooltip_classes: string = (() => {
  const c: string[] = ['tooltip']
  if (props.position !== 'top') {
    c.push(tooltip_positions[props.position as UiTooltipPositions])
  }
  if (props.color) {
    c.push(tooltip_colors[props.color as UiColors])
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <div :class="tooltip_classes" :data-tip="content ? null : tip">
    <div v-if="content" class="tooltip-content">
      <slot name="content">
        <span>{{ tip }}</span>
      </slot>
    </div>
    <slot />
  </div>
</template>
