<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from '@/shared/stores/toast.store'
import type { UiToastItem } from '@/shared/stores/toast.store'
import { toast_color_classes } from './ui-toast-properties'

const toast_service = useToast()

const toast_groups = computed<[string, UiToastItem[]][]>(() => {
  const groups = new Map<string, UiToastItem[]>()
  for (const item of toast_service.toasts.value) {
    const pos = item.position
    if (!groups.has(pos)) groups.set(pos, [])
    groups.get(pos)!.push(item)
  }
  return Array.from(groups.entries())
})

function alert_class(type: string): string {
  const color_class = toast_color_classes[type as keyof typeof toast_color_classes]
  return ['alert', color_class ?? 'alert-info'].join(' ')
}
</script>

<template>
  <template v-for="[position, items] in toast_groups" :key="position">
    <div class="toast pointer-events-none z-50" :class="position">
      <div
        v-for="item in items"
        :key="item.id"
        :class="alert_class(item.type)"
        class="pointer-events-auto"
      >
        <span>{{ item.message }}</span>
      </div>
    </div>
  </template>
</template>
