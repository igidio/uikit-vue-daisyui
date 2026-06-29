<script setup lang="ts">
import { computed } from 'vue'
import type { IconValue } from '@/shared/data/icons'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import { button_sizes, button_variants, button_styles, button_shapes, type UiButtonSizes, type UiButtonStyle, type UiButtonShape } from './ui-button-properties'
import type { UiColors } from '@/shared/ui/ui-types'

interface Props {
  size?: UiButtonSizes
  variant?: UiColors
  type?: 'button' | 'submit' | 'reset'
  style_type?: UiButtonStyle | null
  disabled?: boolean
  shape?: UiButtonShape | null
  icon?: IconValue | null
  label?: string | null
  spin?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'neutral',
  type: 'button',
  style_type: null,
  disabled: false,
  shape: null,
  icon: null,
  label: null,
  spin: false,
  block: false,
})

const static_classes: string = (() => {
  const c: string[] = ['btn']
  c.push(button_sizes[props.size as UiButtonSizes])
  if (props.style_type) {
    c.push(button_styles[props.style_type])
  }
  if (props.shape) {
    c.push(button_shapes[props.shape])
  }
  if (props.block) {
    c.push('btn-block')
  }
  return c.filter(Boolean).join(' ')
})()

const variant_class = computed(() => button_variants[props.variant as UiColors])
</script>

<template>
  <button :class="[static_classes, variant_class]" :disabled="disabled" :type="type">
    <slot>
      <div class="flex items-center gap-2">
        <UiIcon v-if="icon" :icon="icon" :class="{ 'animate-spin': spin }" />
        <span v-if="label">{{ label }}</span>
      </div>
    </slot>
  </button>
</template>
