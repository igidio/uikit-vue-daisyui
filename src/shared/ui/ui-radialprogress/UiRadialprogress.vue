<script setup lang="ts">
import { computed } from 'vue'
import { radialprogress_colors, radialprogress_backgrounds, type UiRadialprogressColors } from './ui-radialprogress-properties'

interface Props {
  value?: number
  color?: UiRadialprogressColors | null
  background?: UiRadialprogressColors | null
  size?: number | null
  thickness?: number | null
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  color: null,
  background: null,
  size: null,
  thickness: null,
})

const clamped_value = computed(() => Math.max(0, Math.min(100, props.value ?? 0)))

const progress_style = computed<Record<string, string>>(() => {
  const style: Record<string, string> = {
    '--value': String(clamped_value.value),
  }
  if (props.size !== null) {
    style['--size'] = `${props.size}rem`
  }
  if (props.thickness !== null) {
    style['--thickness'] = `${props.thickness}rem`
  }
  return style
})

const progress_classes = computed(() => {
  const classes = ['radial-progress']
  if (props.color) {
    classes.push(radialprogress_colors[props.color])
  }
  if (props.background) {
    classes.push(radialprogress_backgrounds[props.background])
  }
  return classes.filter(Boolean).join(' ')
})
</script>

<template>
  <div
    :class="progress_classes"
    :style="progress_style"
    role="progressbar"
    :aria-valuenow="clamped_value"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    {{ clamped_value }}%
  </div>
</template>
