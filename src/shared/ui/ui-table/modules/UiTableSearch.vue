<script setup lang="ts">
import { toRef } from 'vue'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import { useTableParams } from './use-table-params'

interface Props {
  placeholder?: string
  use_params?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search',
  use_params: false,
})

const { set_param, remove_param, route } = useTableParams(toRef(props, 'use_params'))

const value = defineModel<string>('value', { default: '' })

let search_timer: ReturnType<typeof setTimeout> | null = null

if (props.use_params) {
  const search = route.query['search']
  if (search) {
    value.value = String(search)
  }
}

function on_input(val: string): void {
  if (search_timer) clearTimeout(search_timer)

  value.value = val

  if (val === '') {
    remove_param('search')
    return
  }

  search_timer = setTimeout(() => {
    set_param('search', val)
  }, 300)
}
</script>

<template>
  <div class="relative w-full md:max-w-70">
    <div class="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
      <UiIcon icon="search" class="text-base-content/60 z-1" />
    </div>
    <input
      type="text"
      class="input input-bordered w-full ps-9 pe-3 py-2 text-base-content text-sm"
      :placeholder="placeholder"
      :value="value"
      @input="on_input(($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
