<script setup lang="ts">
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import type { UiBreadcrumbsItem } from './ui-breadcrumbs-properties'

interface Props {
  data: UiBreadcrumbsItem[]
}

defineProps<Props>()
</script>

<template>
  <div class="breadcrumbs text-sm">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <span v-if="index === data.length - 1" class="inline-flex items-center gap-2">
          <UiIcon v-if="item.icon" :icon="item.icon" />
          {{ item.label }}
        </span>
        <router-link v-else :to="item.route" class="inline-flex items-center gap-2">
          <UiIcon v-if="item.icon" :icon="item.icon" />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
