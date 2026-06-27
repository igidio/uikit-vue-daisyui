<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import UiTextrotateItem from './UiTextrotateItem.vue'
import { use_slot_children } from '@/shared/composables/useSlotChildren'

interface ExtractedItem {
  content_fn: (() => VNode[]) | null
}

const slots = useSlots()

const items = computed<ExtractedItem[]>(() =>
  use_slot_children(slots, UiTextrotateItem, (v) => {
    const child_slots = (v as any).children
    return {
      content_fn: child_slots?.default ?? null,
    }
  }),
)
</script>

<template>
  <span class="text-rotate">
    <span>
      <span v-for="(item) in items" :key="item.content_fn?.toString()">
        <component v-if="item.content_fn" :is="item.content_fn" />
      </span>
    </span>
  </span>
</template>
