<script setup lang="ts">
import { kbd_sizes, type UiKbdSizes } from './ui-kbd-properties'

interface Props {
  value: string
  size?: UiKbdSizes
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const kbd_classes: string = (() => {
  const c: string[] = ['kbd']
  c.push(kbd_sizes[props.size as UiKbdSizes])
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <kbd :class="kbd_classes">{{ value }}</kbd>
</template>
