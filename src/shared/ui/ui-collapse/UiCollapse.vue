<script setup lang="ts">
import { collapse_icons, type UiCollapseIcons } from './ui-collapse-properties'

interface Props {
  title: string
  click_type?: 'again' | 'outside'
  unwrap?: boolean
  icons?: UiCollapseIcons
  icon_position?: 'start' | 'end'
}

const props = withDefaults(defineProps<Props>(), {
  click_type: 'again',
  unwrap: false,
  icons: 'arrow',
  icon_position: 'end',
})

const input_id: string = `ui-collapse-${Math.random().toString(36).substring(2, 11)}`

const collapse_classes: string = (() => {
  const c: string[] = ['collapse']
  if (!props.unwrap) {
    c.push('bg-base-100', 'border', 'border-base-300')
  }
  c.push(collapse_icons[props.icons as UiCollapseIcons])
  return c.join(' ')
})()

const title_classes: string = (() => {
  const c: string[] = ['collapse-title', 'font-semibold']
  if (props.icon_position === 'start') {
    c.push('after:start-5', 'after:end-auto', 'pe-4', 'ps-12')
  }
  return c.join(' ')
})()
</script>

<template>
  <div :class="collapse_classes">
    <template v-if="click_type === 'outside'">
      <input :id="input_id" type="checkbox" class="peer" autocomplete="off" />
      <label :for="input_id" class="fixed inset-0 hidden peer-checked:block"></label>
    </template>
    <template v-else>
      <input type="checkbox" autocomplete="off" />
    </template>
    <div :class="title_classes">{{ title }}</div>
    <div
      class="collapse-content text-sm"
      :class="{ relative: click_type === 'outside', 'z-1': click_type === 'outside' }"
    >
      <slot />
    </div>
  </div>
</template>
