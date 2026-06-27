<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from '@/shared/stores/toast.store'
import type { UiToastItem } from '@/shared/stores/toast.store'

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
  return ['alert', `alert-${type}`].join(' ')
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
