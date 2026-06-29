<script setup lang="ts">
import { computed, inject } from 'vue'
import { FIELD_STATE_KEY } from '../ui-field/ui-field-injection'
import { rating_sizes, rating_color_classes, type UiRatingSizes, type UiRatingColors } from './ui-rating-properties'

interface Props {
  _name?: string
  readonly?: boolean
  color?: UiRatingColors
  multiple_colors?: UiRatingColors[]
  size?: UiRatingSizes
  half?: boolean
  quantity?: number
  icon?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  _name: 'rating',
  readonly: false,
  color: 'warning',
  multiple_colors: () => [],
  size: 'md',
  half: false,
  quantity: 5,
  icon: 'mask-star',
  id: undefined,
})

const field_state = inject(FIELD_STATE_KEY, null)

const value = defineModel<number>('value', { default: 3 })

const slots = computed(() => {
  const count = props.half ? props.quantity * 2 : props.quantity
  return Array.from({ length: count }, (_, i) => i)
})

const size_class = computed(() => rating_sizes[props.size])

function star_index(idx: number): number {
  return props.half ? Math.floor(idx / 2) : idx
}

function get_color_class(index: number): string {
  if (props.multiple_colors.length > 0) {
    const color_key = props.multiple_colors[Math.min(index, props.multiple_colors.length - 1)] ?? 'warning'
    return rating_color_classes[color_key] ?? 'bg-warning'
  }
  return rating_color_classes[props.color] ?? 'bg-warning'
}

function mask_class(): string[] {
  return ['mask', props.icon]
}

function select_rating(val: number): void {
  if (props.readonly) return
  value.value = val
}

function clear_rating(): void {
  if (props.readonly) return
  value.value = 0
}
</script>

<template>
  <div :id="id || field_state?.id.value" class="rating" :class="[size_class, { 'rating-half': half }]">
    <input
      v-if="half"
      type="radio"
      :name="_name"
      class="rating-hidden"
      :checked="value === 0"
      @click="clear_rating()"
    />
    <template v-for="(_, idx) in slots" :key="idx">
      <input
        type="radio"
        :name="_name"
        :class="[
          ...mask_class(),
          get_color_class(star_index(idx)),
          half && idx % 2 === 1 ? 'mask-half-2' : half ? 'mask-half-1' : '',
        ]"
        :disabled="readonly"
        :checked="half ? (idx + 1) / 2 === value : idx + 1 === value"
        @change="select_rating(half ? (idx + 1) / 2 : idx + 1)"
      />
    </template>
  </div>
</template>
