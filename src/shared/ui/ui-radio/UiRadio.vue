<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import type { UiColors } from '@/shared/ui/ui-types'
import { use_slot_children } from '@/shared/composables/useSlotChildren'
import UiRadioItem from './UiRadioItem.vue'

type RadioSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const radio_sizes: Record<RadioSize, string> = {
  xs: 'radio-xs',
  sm: 'radio-sm',
  md: 'radio-md',
  lg: 'radio-lg',
  xl: 'radio-xl',
}

interface Props {
  name?: string
  color?: UiColors
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
    c.push(`radio-${props.color}`)
  }
  c.push(radio_sizes[props.size as RadioSize] ?? 'radio-md')
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
