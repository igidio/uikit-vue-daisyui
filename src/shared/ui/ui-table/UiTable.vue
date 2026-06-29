<script setup lang="ts" generic="T">
import { computed, ref } from 'vue'
import UiIcon from '@/shared/ui/ui-icon/UiIcon.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import { table_sizes, type UiTableSizes, type TableField, type PaginationResponse } from './ui-table-properties'

interface Props {
  fields: TableField<T>[]
  content?: PaginationResponse<T> | undefined
  size?: UiTableSizes
  zebra?: boolean
  pin_rows?: boolean
  pin_cols?: boolean
  bordered?: boolean
  expandable?: TableField<T> | undefined
}

const props = withDefaults(defineProps<Props>(), {
  content: undefined,
  size: 'md',
  zebra: false,
  pin_rows: false,
  pin_cols: false,
  bordered: false,
  expandable: undefined,
})

const emit = defineEmits<{
  on_sort: [event: { sort_by: string | null; order: 'asc' | 'desc' | null }]
}>()

const sort_column = ref<string | null>(null)
const sort_order = ref<'asc' | 'desc' | null>(null)
const expanded_rows = ref<Set<number>>(new Set())

const sortable_columns = computed(() =>
  props.fields
    .filter((f) => f.options?.sortable && f.name)
    .map((f) => f.name as string),
)

const table_classes = computed(() => {
  const classes = ['table']
  classes.push(table_sizes[props.size])
  if (props.zebra) classes.push('table-zebra')
  if (props.pin_rows) classes.push('table-pin-rows')
  if (props.pin_cols) classes.push('table-pin-cols')
  return classes.filter(Boolean).join(' ')
})

const wrapper_classes = computed(() =>
  props.bordered
    ? 'overflow-x-auto rounded-box border border-base-content/5 bg-base-100'
    : 'overflow-x-auto',
)

function show_loading(): boolean {
  return !props.content
}

function show_empty(): boolean {
  const c = props.content
  return !!c && (!c.data || c.data.length === 0)
}

function showing_from(): number {
  const c = props.content
  if (!c) return 0
  return (c.offset || 0) + 1
}

function showing_to(): number {
  const c = props.content
  if (!c) return 0
  return (c.offset || 0) + (c.data?.length || 0)
}

function sort_by(name: string): void {
  if (!name || !sortable_columns.value.includes(name)) return

  let order: 'asc' | 'desc' | null = null
  if (sort_column.value !== name) {
    order = 'asc'
  } else {
    order = sort_order.value === 'asc' ? 'desc' : sort_order.value === 'desc' ? null : 'asc'
  }

  sort_column.value = order ? name : null
  sort_order.value = order
  emit('on_sort', { sort_by: order ? name : null, order })
}

function is_sortable(name: string): boolean {
  return !!name && sortable_columns.value.includes(name)
}

function field_sort_header_classes(field_name: string): string {
  const parts: string[] = []
  if (is_sortable(field_name)) {
    parts.push('cursor-pointer', 'hover:text-primary')
  }
  if (sort_column.value === field_name && sort_order.value) {
    parts.push('text-primary')
  }
  return parts.join(' ')
}

// Expand
function is_expanded(index: number): boolean {
  return expanded_rows.value.has(index)
}

function toggle_expanded(index: number): void {
  const next = new Set(expanded_rows.value)
  if (next.has(index)) {
    next.delete(index)
  } else {
    next.add(index)
  }
  expanded_rows.value = next
}

function row_classes(row_idx: number): string {
  return is_expanded(row_idx) ? 'bg-base-200' : ''
}

function cell_classes(field: TableField<T>): string {
  const parts: string[] = []
  if (field.options?.take_width) parts.push('w-full')
  if (field.onClick) parts.push('cursor-pointer')
  return parts.join(' ')
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <slot name="pre-table" />

    <span v-if="content" class="text-base-content/70 text-end text-sm">
      Se muestran <b>{{ showing_from() }}</b>-<b>{{ showing_to() }}</b> de <b>{{ content.count }}</b> resultados
    </span>

    <div :class="wrapper_classes">
      <table :class="table_classes">
        <thead>
          <tr>
            <th v-if="expandable" scope="col" class="w-10"></th>
            <th
              v-for="field in fields"
              :key="String(field.name ?? field.label)"
              scope="col"
              class="px-6 py-3 font-medium text-base-content"
            >
              <button
                type="button"
                :class="field_sort_header_classes(String(field.name ?? ''))"
                @click="sort_by(String(field.name ?? ''))"
              >
                {{ field.label }}
                <UiIcon
                  v-if="sort_column === String(field.name ?? '') && sort_order"
                  :icon="sort_order === 'asc' ? 'chevron_up' : 'chevron_down'"
                  class="w-4 h-4 inline-block"
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Loading -->
          <tr v-if="show_loading()">
            <td
              class="w-full p-12 text-center"
              :colspan="fields.length + (expandable ? 1 : 0)"
            >
              <div class="flex flex-col items-center gap-3 py-6">
                <UiIcon icon="loading" class="text-4xl text-base-content/60 animate-spin" />
                <span class="text-base-content text-base font-medium">Cargando datos...</span>
                <span class="text-base-content/70 text-sm">Espere un momento mientras se cargan los datos.</span>
              </div>
            </td>
          </tr>

          <!-- Empty -->
          <tr v-else-if="show_empty()">
            <td
              class="w-full p-12 text-center"
              :colspan="fields.length + (expandable ? 1 : 0)"
            >
              <div class="flex flex-col items-center gap-3 py-6">
                <UiIcon icon="table" class="text-3xl text-base-content/60" />
                <span class="text-base-content text-base font-medium">No hay ningún registro</span>
                <span class="text-base-content/70 text-sm">No se encontraron datos que coincidan con los criterios actuales.</span>
              </div>
            </td>
          </tr>

          <template v-else>
            <template v-for="(row, row_idx) in content!.data" :key="row_idx">
              <tr :class="['border-b border-base-200', row_classes(row_idx)]">
                <td v-if="expandable" class="px-6 py-4 whitespace-nowrap w-10">
                  <UiButton
                    :icon="is_expanded(row_idx) ? 'chevron_up' : 'chevron_down'"
                    size="xs"
                    shape="circle"
                    variant="ghost"
                    @click="toggle_expanded(row_idx)"
                  />
                </td>
                <td
                  v-for="field in fields"
                  :key="String(field.name ?? field.label)"
                  class="px-6 py-4 whitespace-nowrap"
                  :class="cell_classes(field)"
                  :style="{ cursor: field.onClick ? 'pointer' : 'default' }"
                  @click="field.onClick?.(row)"
                >
                  <slot
                    :name="`cell-${String(field.name ?? '')}`"
                    :row="row"
                    :value="field.getValue?.(row)"
                  >
                    <component
                      v-if="field.component"
                      :is="field.component"
                      v-bind="field.getInputs?.(row) ?? {}"
                    />
                    <span v-else-if="field.isHtml" v-html="field.getValue?.(row)"></span>
                    <span v-else>{{ field.getValue?.(row) }}</span>
                  </slot>
                </td>
              </tr>
              <!-- Expandable row -->
              <tr v-if="expandable && is_expanded(row_idx)" class="bg-base-200">
                <td></td>
                <td :colspan="fields.length" class="p-4">
                  <div class="flex flex-col gap-2 text-sm text-base-content/70">
                    <span class="text-base-content font-bold">{{ expandable.label }}</span>
                    <span v-if="expandable.isHtml" v-html="expandable.getValue?.(row)"></span>
                    <span v-else>{{ expandable.getValue?.(row) }}</span>
                  </div>
                </td>
              </tr>
            </template>
          </template>
        </tbody>
      </table>
    </div>

    <slot name="post-table" />
  </div>
</template>
