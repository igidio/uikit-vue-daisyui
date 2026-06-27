<script setup lang="ts">
import type { UiDropdownPosition, UiDropdownAlign } from './ui-dropdown-properties'

interface Props {
  id: string
  position?: UiDropdownPosition
  align?: UiDropdownAlign
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom',
  align: 'center',
})

const content_classes: string = (() => {
  const c: string[] = ['dropdown', 'menu', 'p-2', 'shadow-sm', 'bg-base-100', 'rounded-box']
  c.push(`dropdown-${props.position}`)
  if (props.align !== 'center') {
    c.push(`dropdown-${props.align}`)
  }
  return c.join(' ')
})()
</script>

<template>
  <div class="inline-block">
    <button
      type="button"
      tabindex="0"
      role="button"
      :style="{ 'anchor-name': `--anchor-${id}` }"
      :popovertarget="`popover-${id}`"
    >
      <slot name="trigger">Dropdown</slot>
    </button>
    <ul
      :id="`popover-${id}`"
      popover="auto"
      :style="{ 'position-anchor': `--anchor-${id}` }"
      :class="content_classes"
    >
      <slot />
    </ul>
  </div>
</template>
