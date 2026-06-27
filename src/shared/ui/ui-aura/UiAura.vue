<script setup lang="ts">
import { ui_aura_sizes, ui_aura_types, type UiAuraSizes, type UiAuraTypes } from './ui-aura-properties'

interface Props {
  type?: UiAuraTypes | null
  size?: UiAuraSizes
}

const props = withDefaults(defineProps<Props>(), {
  type: null,
  size: 'md',
})

const aura_classes: string = (() => {
  const classes: string[] = ['aura']
  classes.push(ui_aura_sizes[props.size as UiAuraSizes])
  if (props.type) {
    classes.push(ui_aura_types[props.type as UiAuraTypes])
  }
  return classes.filter(Boolean).join(' ')
})()
</script>

<template>
  <div :class="aura_classes">
    <slot />
  </div>
</template>
