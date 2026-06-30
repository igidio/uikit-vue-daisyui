<script setup lang="ts">
import { computed, useSlots } from 'vue'
import UiSwapItem from './UiSwapItem.vue'

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

const items = computed(() => {
  const children = slots.default?.() ?? []
  return children.filter(
    (v): v is any => typeof v !== 'string' && v != null && (v.type as any) === UiSwapItem,
  )
})

const swap_off = computed(() => items.value[0] ?? null)
const swap_on = computed(() => items.value[1] ?? null)

const checked = computed(() => model_value.value === swap_on.value?.props?.value)

const swap_classes = computed(() => {
  const c: string[] = ['swap']
  if (props.rotate) c.push('swap-rotate')
  if (props.flip) c.push('swap-flip')
  return c.join(' ')
})

function toggle(): void {
  const off_value = swap_off.value?.props?.value
  const on_value = swap_on.value?.props?.value
  if (!off_value || !on_value) return
  model_value.value = checked.value ? off_value : on_value
}
</script>

<template>
  <label :class="swap_classes">
    <input type="checkbox" :checked="checked" @change="toggle()" />
    <div v-if="swap_off" class="swap-off">
      <component :is="() => swap_off?.children?.default?.()" />
    </div>
    <div v-if="swap_on" class="swap-on">
      <component :is="() => swap_on?.children?.default?.()" />
    </div>
  </label>
</template>
