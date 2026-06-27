<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import { use_slot_children } from '@/shared/composables/useSlotChildren'
import UiRadioItem from './UiRadioItem.vue'
import type { RadioSize } from './ui-radio-properties'
import { radio_sizes, radio_color_classes } from './ui-radio-properties'

interface Props {
  name?: string
  color?: keyof typeof radio_color_classes
  size?: RadioSize
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  name: 'radio',
  color: undefined,
  size: 'md',
  disabled: false,
})

const model_value = defineModel<string | number>({ default: '' })

const slots = useSlots()

interface ExtractedItem {
  value: any
  content_fn: (() => VNode[]) | null
}

const items = computed<ExtractedItem[]>(() =>
  use_slot_children(slots, UiRadioItem, (v) => {
    const p = v.props as Record<string, any> | undefined
    const child_slots = (v as any).children
    return {
      value: p?.value ?? null,
      content_fn: child_slots?.default ?? null,
    }
  }).filter((item) => item.value !== null),
)

const radio_classes: string = (() => {
  const c: string[] = ['radio']
  if (props.color) {
    c.push(radio_color_classes[props.color])
  }
  c.push(radio_sizes[props.size ?? 'md'])
  return c.join(' ')
})()
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <label
      v-for="item in items"
      :key="item.value"
      class="flex items-center gap-2 cursor-pointer"
    >
      <input
        type="radio"
        :name="name"
        :class="radio_classes"
        :value="item.value"
        :disabled="disabled"
        v-model="model_value"
      />
      <span class="label-text">
        <component v-if="item.content_fn" :is="item.content_fn" />
      </span>
    </label>
  </div>
</template>
