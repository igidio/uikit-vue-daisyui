<script setup lang="ts">
import { computed } from 'vue'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import { pagination_sizes, type UiPaginationSize, type UiPaginationPageItem } from './ui-pagination-properties'

interface Props {
  total_items: number
  items_per_page: number
  max_pages_to_show?: number
  size?: UiPaginationSize
  small_buttons?: boolean
  nav_buttons?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  max_pages_to_show: 5,
  size: 'md',
  small_buttons: false,
  nav_buttons: true,
})

const page = defineModel<number>('page', { default: 1 })

const total_pages = computed(() => Math.max(1, Math.ceil(props.total_items / props.items_per_page)))

const pages = computed((): UiPaginationPageItem[] => {
  const total = total_pages.value
  const current = page.value
  const max_to_show = props.max_pages_to_show

  if (total <= max_to_show) {
    return Array.from({ length: total }, (_, i) => ({
      page: i + 1,
      label: String(i + 1),
      is_ellipsis: false,
      is_current: i + 1 === current,
    }))
  }

  const half = Math.floor(max_to_show / 2)
  let start = current - half
  let end = current + half

  if (start < 1) {
    start = 1
    end = max_to_show
  }
  if (end > total) {
    end = total
    start = total - max_to_show + 1
  }

  const result: UiPaginationPageItem[] = []

  if (start > 1) {
    result.push({ page: 1, label: '1', is_ellipsis: false, is_current: false })
    if (start > 2) {
      result.push({ page: 0, label: '...', is_ellipsis: true, is_current: false })
    }
  }

  for (let i = start; i <= end; i++) {
    result.push({ page: i, label: String(i), is_ellipsis: false, is_current: i === current })
  }

  if (end < total) {
    if (end < total - 1) {
      result.push({ page: 0, label: '...', is_ellipsis: true, is_current: false })
    }
    result.push({ page: total, label: String(total), is_ellipsis: false, is_current: false })
  }

  return result
})

function go_to_page(p: number): void {
  if (p >= 1 && p <= total_pages.value) {
    page.value = p
  }
}

const size_class = pagination_sizes[props.size]
const is_disabled_nav = (type: 'prev' | 'next'): boolean => {
  if (type === 'prev') return page.value <= 1
  return page.value >= total_pages.value
}
</script>

<template>
  <div class="join flex">
    <button
      v-if="nav_buttons"
      class="join-item btn"
      :class="[size_class, small_buttons ? 'btn-square' : '']"
      :disabled="is_disabled_nav('prev')"
      @click="go_to_page(page - 1)"
    >
      <UiIcon icon="chevron_left" size="sm" />
    </button>
    <template v-for="item in pages" :key="item.page + (item.is_ellipsis ? 'e' : '')">
      <button
        v-if="!item.is_ellipsis"
        class="join-item btn"
        :class="[size_class, item.is_current ? 'btn-active' : '', small_buttons ? 'btn-square' : '']"
        @click="go_to_page(item.page)"
      >
        {{ item.label }}
      </button>
      <button
        v-else
        class="join-item btn btn-disabled"
        :class="[size_class]"
        disabled
      >
        ...
      </button>
    </template>
    <button
      v-if="nav_buttons"
      class="join-item btn"
      :class="[size_class, small_buttons ? 'btn-square' : '']"
      :disabled="is_disabled_nav('next')"
      @click="go_to_page(page + 1)"
    >
      <UiIcon icon="chevron_right" size="sm" />
    </button>
  </div>
</template>
