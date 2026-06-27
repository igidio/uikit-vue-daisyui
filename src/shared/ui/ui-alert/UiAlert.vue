<script setup lang="ts">
import { type IconValue } from '@/shared/data/icons'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import { alert_types, alert_variants, type UiAlertTypes, type UiAlertColors } from './ui-alert-properties'

interface Props {
  variant?: UiAlertColors
  type?: UiAlertTypes
  icon?: IconValue | null
  label?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'info',
  type: 'default',
  icon: null,
  label: null,
})

const alert_classes: string = (() => {
  const c: string[] = ['alert', 'flex']
  c.push(alert_variants[props.variant as UiAlertColors].class)
  if (props.type !== 'default') {
    c.push(alert_types[props.type as UiAlertTypes].class)
  }
  return c.filter(Boolean).join(' ')
})()
</script>

<template>
  <div role="alert" :class="alert_classes">
    <slot>
      <div class="flex items-center gap-2">
        <UiIcon v-if="icon" :icon="icon" />
        <span v-if="label">{{ label }}</span>
      </div>
    </slot>
  </div>
</template>
