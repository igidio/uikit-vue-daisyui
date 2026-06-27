<script setup lang="ts">
import { type IconValue } from '@/shared/data/icons'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import { badge_sizes, badge_variants, badge_types, type UiBadgeSizes, type UiBadgeColors, type UiBadgeTypes } from './ui-badge-properties'

interface Props {
  size?: UiBadgeSizes
  variant?: UiBadgeColors
  type?: UiBadgeTypes | null
  icon?: IconValue | null
  label?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'primary',
  type: null,
  icon: null,
  label: null,
})

const badge_classes: string = (() => {
  const c: string[] = ['badge']
  const size_class = badge_sizes[props.size as UiBadgeSizes]
  if (size_class) c.push(size_class)
  c.push(badge_variants[props.variant as UiBadgeColors])
  if (props.type) {
    c.push(badge_types[props.type as UiBadgeTypes])
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <span :class="badge_classes">
    <slot>
      <div class="flex items-center gap-2">
        <UiIcon v-if="icon" :icon="icon" />
        <span v-if="label">{{ label }}</span>
      </div>
    </slot>
  </span>
</template>
