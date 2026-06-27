<script setup lang="ts">
import { loading_types, loading_sizes, loading_color_classes, type UiLoadingTypes, type UiLoadingSizes } from './ui-loading-properties'

interface Props {
  type?: UiLoadingTypes
  size?: UiLoadingSizes
  color?: keyof typeof loading_color_classes | null
}

const props = withDefaults(defineProps<Props>(), {
  type: 'spinner',
  size: 'md',
  color: null,
})

const loading_classes: string = (() => {
  const c: string[] = ['loading']
  c.push(loading_types[props.type ?? 'spinner'])
  c.push(loading_sizes[props.size ?? 'md'])
  if (props.color) {
    c.push(loading_color_classes[props.color])
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <span :class="loading_classes" aria-label="Loading"></span>
</template>
