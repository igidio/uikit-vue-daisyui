<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import UiSwapItem from './UiSwapItem.vue'
import { use_slot_children } from '@/shared/composables/useSlotChildren'

interface Props {
  rotate?: boolean
  flip?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rotate: false,
  flip: false,
})

const model_value = defineModel<string>({ default: '' })

const slots = useSlots()

interface ExtractedItem {
  value: string
  content_fn: (() => VNode[]) | null
}

const items = computed<ExtractedItem[]>(() =>
  use_slot_children(slots, UiSwapItem, (v) => {
    const p = v.props as Record<string, any> | undefined
    const child_slots = (v as any).children
    return {
      value: p?.value ?? '',
      content_fn: child_slots?.default ?? null,
    }
  }),
)

const swap_off = computed(() => items.value[0] ?? null)
const swap_on = computed(() => items.value[1] ?? null)

const checked = computed(() => model_value.value === swap_on.value?.value)

const swap_classes: string = (() => {
  const c: string[] = ['swap']
  if (props.rotate) c.push('swap-rotate')
  if (props.flip) c.push('swap-flip')
  return c.join(' ')
})()

function toggle(): void {
  const off_value = swap_off.value?.value
  const on_value = swap_on.value?.value
  if (!off_value || !on_value) return
  model_value.value = checked.value ? off_value : on_value
}
</script>

<template>
  <label :class="swap_classes">
    <input type="checkbox" :checked="checked" @change="toggle()" />
    <div v-if="swap_off" class="swap-off">
      <component :is="swap_off.content_fn!" />
    </div>
    <div v-if="swap_on" class="swap-on">
      <component :is="swap_on.content_fn!" />
    </div>
  </label>
</template>
