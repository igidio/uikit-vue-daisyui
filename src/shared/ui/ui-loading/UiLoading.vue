<script setup lang="ts">
import type { UiColors } from '@/shared/ui/ui-types'
import { loading_types, loading_sizes, type UiLoadingTypes, type UiLoadingSizes } from './ui-loading-properties'

interface Props {
  type?: UiLoadingTypes
  size?: UiLoadingSizes
  color?: UiColors | null
}

const props = withDefaults(defineProps<Props>(), {
  type: 'spinner',
  size: 'md',
  color: null,
})

const loading_classes: string = (() => {
  const c: string[] = ['loading']
  c.push(loading_types[props.type as UiLoadingTypes])
  c.push(loading_sizes[props.size as UiLoadingSizes])
  if (props.color) {
    c.push(`text-${props.color}`)
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <span :class="loading_classes" aria-label="Loading"></span>
</template>
