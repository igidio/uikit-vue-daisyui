<script setup lang="ts">
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import type { UiTimelineItem, UiTimelineDisposition } from './ui-timeline-properties'

interface Props {
  data: UiTimelineItem[]
  disposition?: UiTimelineDisposition
}

const props = withDefaults(defineProps<Props>(), {
  disposition: 'horizontal',
})

const timeline_classes: string = (() => {
  const c: string[] = ['timeline']
  if (props.disposition === 'vertical') {
    c.push('timeline-vertical')
  }
  return c.join(' ')
})()

function icon_color_class(color: string | undefined): string {
  return color ? `text-${color}` : ''
}

function hr_color_class(color: string | undefined): string {
  return color ? `bg-${color}` : ''
}

function is_not_last(index: number): boolean {
  return index < props.data.length - 1
}
</script>

<template>
  <ul :class="timeline_classes">
    <li v-for="(item, i) in data" :key="i">
      <hr v-if="i > 0" :class="hr_color_class(item.color)" />
      <div v-if="item.subtitle" class="timeline-start timeline-box">{{ item.subtitle }}</div>
      <div class="timeline-middle">
        <UiIcon v-if="item.icon" :icon="item.icon" :class="icon_color_class(item.color)" />
        <UiIcon v-else icon="success" :class="icon_color_class(item.color)" />
      </div>
      <div v-if="item.text" class="timeline-end timeline-box">
        {{ item.text }}
        <div v-if="item.description" class="text-sm opacity-70 mt-1">{{ item.description }}</div>
      </div>
      <hr v-if="is_not_last(i)" :class="hr_color_class(item.color)" />
    </li>
  </ul>
</template>
