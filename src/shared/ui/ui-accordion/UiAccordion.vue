<script setup lang="ts">
import { useSlots, type VNode } from 'vue'
import UiAccordionItem from './UiAccordionItem.vue'

const props = withDefaults(
  defineProps<{
    name?: string
    arrow_icon?: boolean
    join?: boolean
  }>(),
  {
    name: 'ui-accordion',
    arrow_icon: false,
    join: false,
  },
)

const model_value = defineModel<string>({ default: '' })

const slots = useSlots()

interface ExtractedItem {
  value: string
  title: string
  content_fn: (() => VNode[]) | null
}

const items: ExtractedItem[] = (() => {
  const children = slots.default?.() ?? []
  return children
    .filter((v): v is VNode => typeof v !== 'string' && v != null)
    .filter((v) => v.type === UiAccordionItem)
    .map((v) => {
      const p = v.props as Record<string, any> | undefined
      const child_slots = (v as any).children as
        | { default?: () => VNode[] }
        | undefined
      return {
        value: p?.value ?? '',
        title: p?.title ?? '',
        content_fn: child_slots?.default ?? null,
      }
    })
    .filter((item) => item.value !== '')
})()

const item_classes: string = (() => {
  const c = [
    'collapse',
    'bg-base-100',
    'border',
    'border-base-300',
  ]
  if (props.arrow_icon) {
    c.push('collapse-arrow')
  }
  return c.join(' ')
})()

function select(item_value: string) {
  model_value.value = item_value
}
</script>

<template>
  <div v-if="join" class="join join-vertical bg-base-100 w-full">
    <div
      v-for="item in items"
      :key="item.value"
      :class="[item_classes, 'join-item']"
    >
      <input
        type="radio"
        :name="name"
        :value="item.value"
        :checked="model_value === item.value"
        @change="select(item.value)"
      />
      <div class="collapse-title font-semibold">{{ item.title }}</div>
      <div class="collapse-content text-sm">
        <component
          v-if="item.content_fn"
          :is="item.content_fn"
        />
      </div>
    </div>
  </div>

  <template v-else>
    <div
      v-for="item in items"
      :key="item.value"
      :class="item_classes"
      class="mb-2"
    >
      <input
        type="radio"
        :name="name"
        :value="item.value"
        :checked="model_value === item.value"
        @change="select(item.value)"
      />
      <div class="collapse-title font-semibold">{{ item.title }}</div>
      <div class="collapse-content text-sm">
        <component
          v-if="item.content_fn"
          :is="item.content_fn"
        />
      </div>
    </div>
  </template>
</template>
