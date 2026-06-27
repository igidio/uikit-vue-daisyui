<script setup lang="ts">
import { computed } from 'vue'
import { rating_sizes, rating_color_classes, type UiRatingSizes, type UiRatingColors } from './ui-rating-properties'

interface Props {
  _name?: string
  readonly?: boolean
  color?: UiRatingColors | null
  multiple_colors?: UiRatingColors[] | null
  size?: UiRatingSizes
  half?: boolean
  quantity?: number
  icon?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  _name: 'rating',
  readonly: false,
  color: null,
  multiple_colors: null,
  size: 'md',
  half: false,
  quantity: 5,
  icon: null,
})

const value = defineModel<number>('value', { default: 3 })

const size_class = rating_sizes[props.size]

function get_color_class(index: number): string {
  if (props.multiple_colors && props.multiple_colors.length > 0) {
    const color = props.multiple_colors[index % props.multiple_colors.length]
    if (color && color in rating_color_classes) {
      return rating_color_classes[color]
    }
    return rating_color_classes.warning
  }
  if (props.color && props.color in rating_color_classes) {
    return rating_color_classes[props.color]
  }
  return rating_color_classes.warning
}

function get_mask_class(index: number): string {
  if (props.icon) {
    return `mask-${props.icon}`
  }
  const color = props.icon ? props.icon : 'mask-star-2'
  return 'mask-star-2'
}

const stars = computed(() => Array.from({ length: props.quantity }, (_, i) => i))

function on_click(val: number): void {
  if (props.readonly) return
  value.value = val
}

function on_half_click(val: number): void {
  if (props.readonly || !props.half) return
  value.value = val - 0.5
}

function is_star_filled(index: number): boolean {
  return value.value >= index + 1
}

function is_half_filled(index: number): boolean {
  return props.half && value.value > index && value.value < index + 1
}
</script>

<template>
  <div class="rating" :class="[size_class, half ? 'rating-half' : '']">
    <template v-for="(_, i) in stars" :key="i">
      <input
        v-if="half"
        class="mask mask-star-2 mask-half-1"
        :class="[
          props.multiple_colors ? '' : get_color_class(i),
          is_star_filled(i) || is_half_filled(i) ? 'bg-warning' : '',
        ]"
        :style="props.multiple_colors && (is_star_filled(i) || is_half_filled(i)) ? `background-color: var(--color-${props.multiple_colors[i % props.multiple_colors.length] || 'warning'})` : ''"
        type="radio"
        :name="`${_name}-half-${i}`"
        :disabled="readonly"
        :checked="is_half_filled(i)"
        :aria-label="`${i + 1} star half`"
        @click="on_half_click(i + 1)"
      />
      <input
        class="mask mask-star-2"
        :class="[
          is_star_filled(i) ? 'bg-warning' : 'bg-base-content/20',
          props.multiple_colors && is_star_filled(i) ? '' : (is_star_filled(i) && props.color ? get_color_class(i) : ''),
        ]"
        :style="props.multiple_colors && is_star_filled(i) ? `background-color: var(--color-${props.multiple_colors[i % props.multiple_colors.length] || 'warning'})` : ''"
        type="radio"
        :name="_name"
        :disabled="readonly"
        :checked="is_star_filled(i)"
        :aria-label="`${i + 1} star`"
        @click="on_click(i + 1)"
      />
    </template>
  </div>
</template>
