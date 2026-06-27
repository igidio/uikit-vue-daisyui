<script setup lang="ts">
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import type { UiStepsItem, UiStepsDirection } from './ui-steps-properties'

interface Props {
  data: UiStepsItem[]
  direction?: UiStepsDirection
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal',
})

const steps_classes: string = (() => {
  const c: string[] = ['steps']
  if (props.direction === 'vertical') {
    c.push('steps-vertical')
  }
  return c.join(' ')
})()

function step_color_class(color: string | undefined): string {
  return color ? `step-${color}` : ''
}
</script>

<template>
  <ul :class="steps_classes">
    <li
      v-for="(item, i) in data"
      :key="i"
      class="step"
      :class="step_color_class(item.color)"
    >
      <span v-if="item.icon" class="step-icon">
        <UiIcon :icon="item.icon" />
      </span>
      {{ item.label }}
    </li>
  </ul>
</template>
