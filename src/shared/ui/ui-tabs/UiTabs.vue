<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import UiTabsItem from './UiTabsItem.vue'
import { use_slot_children } from '@/shared/composables/useSlotChildren'
import type { UiTabsStyle, UiTabsSize, UiTabsContent } from './ui-tabs-properties'

interface Props {
  name: string
  type?: UiTabsStyle
  size?: UiTabsSize
  content?: UiTabsContent
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'md',
  content: 'bottom',
})

const slots = useSlots()

interface ExtractedItem {
  label: string
  content_fn: (() => VNode[]) | null
}

const items = computed<ExtractedItem[]>(() =>
  use_slot_children(slots, UiTabsItem, (v) => {
    const p = v.props as Record<string, any> | undefined
    const child_slots = (v as any).children
    return {
      label: p?.label ?? '',
      content_fn: child_slots?.default ?? null,
    }
  }),
)

const tabs_classes: string = (() => {
  const c: string[] = ['tabs']
  if (props.type && props.type !== 'default') {
    c.push(`tabs-${props.type}`)
  }
  if (props.size && props.size !== 'md') {
    c.push(`tabs-${props.size}`)
  }
  if (props.content === 'top') {
    c.push('tabs-bottom')
  }
  return c.join(' ')
})()
</script>

<template>
  <div :class="tabs_classes" role="tablist">
    <template v-for="(item, index) in items" :key="item.label">
      <input
        type="radio"
        :name="name"
        class="tab"
        :aria-label="item.label"
        :checked="index === 0"
      />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <component v-if="item.content_fn" :is="item.content_fn" />
      </div>
    </template>
  </div>
</template>
