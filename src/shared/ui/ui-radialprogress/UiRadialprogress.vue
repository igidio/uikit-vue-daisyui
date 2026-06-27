<script setup lang="ts">
import { computed } from 'vue'
import { radialprogress_colors, radialprogress_backgrounds, type UiRadialprogressColors } from './ui-radialprogress-properties'

interface Props {
  value?: number
  color?: UiRadialprogressColors
  background?: UiRadialprogressColors | null
  size?: number
  thickness?: number
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  color: 'primary',
  background: null,
  size: 4,
  thickness: 0.5,
})

const clamped_value = computed(() => Math.max(0, Math.min(100, props.value ?? 0)))

const circumference = computed(() => 2 * Math.PI * 15.91549430918954) // r=15.9155, dasharray=100

const dash_offset = computed(() => {
  return circumference.value - (clamped_value.value / 100) * circumference.value
})

const color_class = radialprogress_colors[props.color]
const bg_class = computed(() => props.background ? radialprogress_backgrounds[props.background] : 'stroke-transparent')

const style_vars = computed(() => ({
  '--size': `${props.size}rem`,
  '--thickness': `${props.thickness}rem`,
} as Record<string, string>))
</script>

<template>
  <div
    class="radial-progress"
    :class="[color_class]"
    :style="style_vars"
    role="progressbar"
    :aria-valuenow="clamped_value"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    {{ clamped_value }}%
  </div>
</template>
