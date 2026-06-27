<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import UiCarouselItem from './UiCarouselItem.vue'
import { use_slot_children } from '@/shared/composables/useSlotChildren'
import { carousel_snaps, type UiCarouselSnap } from './ui-carousel-properties'

interface Props {
  snap?: UiCarouselSnap
  vertical?: boolean
  indicator?: boolean
  prevnext?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  snap: 'start',
  vertical: false,
  indicator: false,
  prevnext: false,
})

const slots = useSlots()

interface ExtractedItem {
  content_fn: (() => VNode[]) | null
}

const items = computed<ExtractedItem[]>(() =>
  use_slot_children(slots, UiCarouselItem, (v) => {
    const child_slots = (v as any).children
    return {
      content_fn: child_slots?.default ?? null,
    }
  }),
)

const carousel_classes: string = (() => {
  const c: string[] = ['carousel']
  c.push(carousel_snaps[props.snap as UiCarouselSnap])
  if (props.vertical) c.push('carousel-vertical')
  if (props.indicator || props.prevnext) c.push('w-full')
  return c.join(' ')
})()

function item_id(index: number): string {
  return `carousel-slide-${index}`
}

function prev_index(index: number): number {
  return index === 0 ? items.value.length - 1 : index - 1
}

function next_index(index: number): number {
  return index === items.value.length - 1 ? 0 : index + 1
}
</script>

<template>
  <div :class="carousel_classes">
    <div
      v-for="(item, i) in items"
      :key="i"
      :id="item_id(i)"
      :class="prevnext ? 'carousel-item relative w-full' : 'carousel-item'"
    >
      <component v-if="item.content_fn" :is="item.content_fn" />
      <div
        v-if="prevnext"
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a :href="'#' + item_id(prev_index(i))" class="btn btn-circle">❮</a>
        <a :href="'#' + item_id(next_index(i))" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div v-if="indicator" class="flex justify-center w-full py-2 gap-2">
    <a
      v-for="(_, i) in items"
      :key="i"
      :href="'#' + item_id(i)"
      class="btn btn-xs"
    >{{ i + 1 }}</a>
  </div>
</template>
