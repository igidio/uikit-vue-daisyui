<script setup lang="ts">
import { ref, watchEffect, onUnmounted } from 'vue'
import { divider_colors, divider_positions, type UiDividerOrientation, type UiDividerPosition, type UiDividerColors } from './ui-divider-properties'

interface Props {
  orientation?: UiDividerOrientation
  text?: string | null
  responsive?: number | null
  color?: UiDividerColors | null
  position?: UiDividerPosition
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  text: null,
  responsive: null,
  color: null,
  position: 'center',
})

const is_wide_enough = ref(false)

let media_query_list: MediaQueryList | null = null

function handler(e: MediaQueryListEvent) {
  is_wide_enough.value = e.matches
}

watchEffect(() => {
  const bp = props.responsive
  if (media_query_list) {
    media_query_list.removeEventListener('change', handler)
    media_query_list = null
  }
  if (bp && props.orientation === 'vertical') {
    media_query_list = window.matchMedia(`(min-width: ${bp}px)`)
    is_wide_enough.value = media_query_list.matches
    media_query_list.addEventListener('change', handler)
  } else {
    is_wide_enough.value = false
  }
})

onUnmounted(() => {
  if (media_query_list) {
    media_query_list.removeEventListener('change', handler)
  }
})

const divider_classes: string = (() => {
  const c: string[] = ['divider']
  if (props.orientation === 'vertical' && !is_wide_enough.value) {
    c.push('divider-horizontal', 'min-h-full')
  }
  if (props.color) {
    c.push(divider_colors[props.color as UiDividerColors])
  }
  c.push(divider_positions[props.position as UiDividerPosition])
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <div :class="divider_classes">
    {{ text }}
  </div>
</template>
