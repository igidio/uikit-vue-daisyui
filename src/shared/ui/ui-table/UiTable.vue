<script setup lang="ts">
import { computed } from 'vue'
import { table_sizes, type UiTableSizes, type TableField, type PaginationResponse } from './ui-table-properties'

interface Props<T> {
  fields: TableField<T>[]
  content?: PaginationResponse<T> | undefined
  size?: UiTableSizes
  zebra?: boolean
  pin_rows?: boolean
  expandable?: TableField<T> | null
}

const props = withDefaults(
  defineProps<Props<any>>(),
  {
    content: undefined,
    size: 'md',
    zebra: false,
    pin_rows: false,
    expandable: null,
  },
)

const emit = defineEmits<{
  on_sort: [event: { sort_by: string | null; order: 'asc' | 'desc' | null }]
}>()

const has_data = computed(() => {
  const c = props.content
  if (!c) return false
  return c.data && c.data.length > 0
})

const is_loading = computed(() => props.content === undefined)

const expanded_rows = new Set<number>()

function toggle_row(row_index: number): void {
  if (expanded_rows.has(row_index)) {
    expanded_rows.delete(row_index)
  } else {
    expanded_rows.add(row_index)
  }
  // force reactivity by toggling a reactive ref - we use a simple set and force update via computed
}

const sort_state = { sort_by: null as string | null, order: null as 'asc' | 'desc' | null }

function on_header_click(field: TableField<any>): void {
  if (!field.sortable) return
  if (sort_state.sort_by === field.name) {
    sort_state.order = sort_state.order === 'asc' ? 'desc' : sort_state.order === 'desc' ? null : 'asc'
  } else {
    sort_state.sort_by = field.name
    sort_state.order = 'asc'
  }
  if (sort_state.order === null) {
    sort_state.sort_by = null
  }
  emit('on_sort', { sort_by: sort_state.sort_by, order: sort_state.order })
}

const size_class = table_sizes[props.size]
const zebra_class = props.zebra ? 'table-zebra' : ''
const pin_rows_class = props.pin_rows ? 'table-pin-rows' : ''
</script>

<template>
  <div class="overflow-x-auto">
    <!-- Loading state -->
    <div v-if="is_loading" class="flex justify-center items-center py-12">
      <span class="loading loading-spinner loading-lg"></span>
    </div>

    <!-- Empty state -->
    <div v-else-if="!has_data" class="text-center py-12 text-base-content/50">
      <p>No se encontraron registros.</p>
    </div>

    <!-- Table -->
    <table
      v-else
      class="table"
      :class="[size_class, zebra_class, pin_rows_class]"
    >
      <thead>
        <tr>
          <th v-if="expandable" class="w-10"></th>
          <th
            v-for="field in fields"
            :key="field.name"
            :class="[field.sortable ? 'cursor-pointer select-none' : '']"
            @click="on_header_click(field)"
          >
            <div class="flex items-center gap-1">
              <span>{{ field.label }}</span>
              <span
                v-if="field.sortable && sort_state.sort_by === field.name"
                class="text-xs"
              >
                {{ sort_state.order === 'asc' ? '▲' : sort_state.order === 'desc' ? '▼' : '' }}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="pre-table" />
        <template v-for="(row, row_index) in content!.data" :key="row_index">
          <tr>
            <td v-if="expandable" class="w-10">
              <button class="btn btn-ghost btn-xs" @click="toggle_row(row_index)">
                <span class="text-xs">{{ expanded_rows.has(row_index) ? '−' : '+' }}</span>
              </button>
            </td>
            <td v-for="field in fields" :key="field.name">
              <slot
                :name="`cell-${field.name}`"
                :row="row"
                :value="field.getValue(row)"
              >
                {{ field.getValue(row) }}
              </slot>
            </td>
          </tr>
          <tr v-if="expandable && expanded_rows.has(row_index)">
            <td :colspan="fields.length + (expandable ? 1 : 0)">
              <div class="p-4 bg-base-200 rounded-box">
                {{ expandable.getValue(row) }}
              </div>
            </td>
          </tr>
        </template>
        <slot name="post-table" />
      </tbody>
    </table>
  </div>
</template>
