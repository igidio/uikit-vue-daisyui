<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiTable from '@/shared/ui/ui-table/UiTable.vue'
import UiTableSearch from '@/shared/ui/ui-table/modules/UiTableSearch.vue'
import UiTableLimits from '@/shared/ui/ui-table/modules/UiTableLimits.vue'
import UiTableFilters from '@/shared/ui/ui-table/modules/UiTableFilters.vue'
import UiTablePagination from '@/shared/ui/ui-table/modules/UiTablePagination.vue'
import UiBadge from '@/shared/ui/ui-badge/UiBadge.vue'
import {
  create_text_field,
  create_table_field,
  create_html_field,
  type TableField,
  type PaginationResponse,
} from '@/shared/ui/ui-table/ui-table-properties'
import type { FilterBy } from '@/shared/ui/ui-table/modules/UiTableFilters.vue'
import type { UiColors } from '@/shared/ui/ui-types'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  created_at: string
}

const mock_users: User[] = [
  { id: 1, name: 'Salva', email: 'salva@example.com', role: 'Admin', status: 'active', created_at: '2025-01-15' },
  { id: 2, name: 'Maria', email: 'maria@example.com', role: 'Editor', status: 'active', created_at: '2025-03-10' },
  { id: 3, name: 'Carlos', email: 'carlos@example.com', role: 'Viewer', status: 'inactive', created_at: '2024-11-22' },
  { id: 4, name: 'Ana', email: 'ana@example.com', role: 'Admin', status: 'active', created_at: '2025-06-01' },
  { id: 5, name: 'Luis', email: 'luis@example.com', role: 'Editor', status: 'active', created_at: '2025-04-18' },
  { id: 6, name: 'Sofia', email: 'sofia@example.com', role: 'Viewer', status: 'inactive', created_at: '2024-09-05' },
  { id: 7, name: 'Pedro', email: 'pedro@example.com', role: 'Admin', status: 'active', created_at: '2025-02-28' },
  { id: 8, name: 'Elena', email: 'elena@example.com', role: 'Editor', status: 'active', created_at: '2025-05-12' },
]

const role_variants: Record<string, UiColors> = {
  Admin: 'primary',
  Editor: 'secondary',
  Viewer: 'ghost',
}

// Router for use_params sections
const route = useRoute()
const router = useRouter()

// State
const sort_state = ref<{ sort_by: string | null; order: 'asc' | 'desc' | null }>({ sort_by: null, order: null })
const search_term = ref<string | null>(null)
const search_value = ref<string>('')
const current_page = ref<number>(1)
const current_limit = ref<number>(5)
const active_filters = ref<Record<string, unknown>>({})
const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1500)

const role_filters: FilterBy[] = [
  {
    name: 'role',
    label: 'Rol',
    show_value_on_badge: true,
    options: [
      { label: 'Admin', value: 'Admin' },
      { label: 'Editor', value: 'Editor' },
      { label: 'Viewer', value: 'Viewer' },
    ],
  },
  {
    name: 'status',
    label: 'Estado',
    only_cancellable: false,
    options: [
      { label: 'Activo', value: 'active' },
      { label: 'Inactivo', value: 'inactive' },
    ],
  },
]

const filtered_users = computed(() => {
  let data = [...mock_users]

  const search = search_term.value
  if (search) {
    const s = search.toLowerCase()
    data = data.filter(
      (u) =>
        u.name.toLowerCase().includes(s) ||
        u.email.toLowerCase().includes(s) ||
        u.role.toLowerCase().includes(s),
    )
  }

  const filters = active_filters.value
  for (const [key, value] of Object.entries(filters)) {
    if (value !== null && value !== undefined && value !== '') {
      data = data.filter((u) => (u as unknown as Record<string, unknown>)[key] === value)
    }
  }

  const sort = sort_state.value
  if (sort.sort_by && sort.order) {
    const col = sort.sort_by as keyof User
    data.sort((a, b) => {
      const a_val = String(a[col] ?? '')
      const b_val = String(b[col] ?? '')
      return sort.order === 'asc'
        ? a_val.localeCompare(b_val)
        : b_val.localeCompare(a_val)
    })
  }

  return data
})

const paginated_data = computed((): PaginationResponse<User> => {
  const data = filtered_users.value
  const page = current_page.value
  const limit = current_limit.value
  const start = (page - 1) * limit
  const paged = data.slice(start, start + limit)
  return {
    count: data.length,
    data: paged,
    is_last_page: start + limit >= data.length,
    limit,
    offset: start,
  }
})

const user_expandable = create_text_field<User>({
  label: 'Email Completo',
  name: 'email',
  getValue: (row: User) => row.email,
})

const fields: TableField<User, any>[] = [
  create_text_field<User>({
    label: 'ID',
    name: 'id',
    getValue: (row: User) => row.id,
    options: { sortable: true },
  }),
  create_text_field<User>({
    label: 'Nombre',
    name: 'name',
    getValue: (row: User) => row.name,
    options: { sortable: true },
  }),
  create_text_field<User>({
    label: 'Email',
    name: 'email',
    getValue: (row: User) => row.email,
  }),
  create_table_field<User, typeof UiBadge>({
    label: 'Rol',
    component: UiBadge,
    name: 'role',
    getInputs: (row: User) => ({
      label: row.role,
      variant: role_variants[row.role] ?? 'ghost',
    }),
  }),
  create_table_field<User, typeof UiBadge>({
    label: 'Estado',
    component: UiBadge,
    name: 'status',
    getInputs: (row: User) => ({
      label: row.status === 'active' ? 'Activo' : 'Inactivo',
      variant: row.status === 'active' ? 'success' : 'error',
    }),
  }),
  create_html_field<User>({
    label: 'Creado',
    name: 'created_at',
    getValue: (row: User) =>
      `<span class="font-medium text-base-content">${row.created_at}</span>`,
    options: { sortable: true },
  }),
]

// Paginated data for loading demo (uses loading state)
const loading_content = computed(() => (loading.value ? undefined : paginated_data.value))

function on_sort(event: { sort_by: string | null; order: 'asc' | 'desc' | null }): void {
  sort_state.value = event
}

function on_search(value: string): void {
  search_value.value = value
  search_term.value = value || null
  current_page.value = 1
}

function on_page_change(page: number): void {
  current_page.value = page
}

function on_limit_change(limit: number): void {
  current_limit.value = limit
  current_page.value = 1
}

function on_active_change(filters: Record<string, unknown>): void {
  active_filters.value = filters
  current_page.value = 1
}
</script>

<template>
  <section class="space-y-12">
    
    <div>
      <h2 class="text-2xl font-bold mb-2">Loading state</h2>
      <p class="text-base-content/70 mb-6">
        Cuando no se pasa contenido o es <code>undefined</code>, la tabla muestra un spinner de carga.
      </p>
      <UiTable :fields="fields" :content="undefined" />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Default table</h2>
      <p class="text-base-content/70 mb-6">
        Tabla básica con clases DaisyUI. Muestra los datos sin modificadores adicionales.
      </p>
      <UiTable :fields="fields" :content="paginated_data" />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Zebra</h2>
      <p class="text-base-content/70 mb-6">
        Con <code>:zebra="true"</code> se aplica el estilo de filas alternadas.
      </p>
      <UiTable :fields="fields" :content="paginated_data" :zebra="true" />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Bordered</h2>
      <p class="text-base-content/70 mb-6">
        Con <code>:bordered="true"</code> se añade un borde y fondo alrededor de la tabla.
      </p>
      <UiTable :fields="fields" :content="paginated_data" :bordered="true" />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With expandable rows</h2>
      <p class="text-base-content/70 mb-6">
        Cada fila se puede expandir para mostrar información adicional usando la prop
        <code>:expandable</code>.
      </p>
      <UiTable :fields="fields" :expandable="user_expandable" :content="paginated_data" />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With sorting</h2>
      <p class="text-base-content/70 mb-6">
        Las columnas con <code>options: { sortable: true }</code> permiten ordenar los
        datos. Haz clic en ID, Nombre o Creado.
      </p>
      <UiTable :fields="fields" :content="paginated_data" @on_sort="on_sort" />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Table sizes</h2>
      <p class="text-base-content/70 mb-6">
        DaisyUI ofrece cinco tamaños: <code>xs</code>, <code>sm</code>, <code>md</code>,
        <code>lg</code> y <code>xl</code>.
      </p>
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-2">xs</h3>
          <UiTable :fields="fields" :content="paginated_data" size="xs" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">sm</h3>
          <UiTable :fields="fields" :content="paginated_data" size="sm" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">md (default)</h3>
          <UiTable :fields="fields" :content="paginated_data" size="md" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">lg</h3>
          <UiTable :fields="fields" :content="paginated_data" size="lg" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">xl</h3>
          <UiTable :fields="fields" :content="paginated_data" size="xl" />
        </div>
      </div>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Table with pin-rows</h2>
      <p class="text-base-content/70 mb-6">
        Con <code>:pin_rows="true"</code> el encabezado se mantiene fijo al hacer scroll vertical.
      </p>
      <div class="max-h-64 overflow-y-auto rounded-box border border-base-content/5">
        <UiTable :fields="fields" :content="paginated_data" :pin_rows="true" />
      </div>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Empty state</h2>
      <p class="text-base-content/70 mb-6">
        Cuando no hay datos, se muestra un mensaje indicando que no se encontraron registros.
      </p>
      <UiTable
        :fields="fields"
        :content="{ count: 0, data: [], is_last_page: true, limit: 10, offset: 0 }"
      />
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With search</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>UiTableSearch</code> en el slot <code>pre-table</code> para añadir un buscador.
      </p>
      <UiTable :fields="fields" :content="paginated_data">
        <template #pre-table>
          <div class="flex flex-row justify-end">
            <UiTableSearch v-model:value="search_value" @update:value="on_search($event as string)" />
          </div>
        </template>
      </UiTable>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With limits</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>UiTableLimits</code> en el slot <code>pre-table</code> para controlar elementos
        por página.
      </p>
      <UiTable :fields="fields" :content="paginated_data">
        <template #pre-table>
          <UiTableLimits
            :limits="[5, 10, 20]"
            v-model:current="current_limit"
            @update:current="on_limit_change($event as number)"
          />
        </template>
      </UiTable>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With filters</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>UiTableFilters</code> para filtrar por Rol y Estado. Al activar un filtro se
        muestra como badge.
      </p>
      <UiTable :fields="fields" :content="paginated_data">
        <template #pre-table>
          <UiTableFilters
            :filters="role_filters"
            v-model:active="active_filters"
            @update:active="on_active_change($event as Record<string, unknown>)"
          />
        </template>
      </UiTable>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With pagination</h2>
      <p class="text-base-content/70 mb-6">
        Usa <code>UiTablePagination</code> en los slots <code>pre-table</code> y
        <code>post-table</code>.
      </p>
      <UiTable :fields="fields" :content="paginated_data">
        <template #pre-table>
          <div class="flex flex-row justify-end">
            <UiTablePagination
              :total_items="paginated_data.count"
              :items_per_page="current_limit"
              v-model:current_page="current_page"
              @update:current_page="on_page_change($event as number)"
            />
          </div>
        </template>
        <template #post-table>
          <UiTablePagination
            class="self-end"
            :total_items="paginated_data.count"
            :items_per_page="current_limit"
            v-model:current_page="current_page"
            @update:current_page="on_page_change($event as number)"
          />
        </template>
      </UiTable>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">Full featured</h2>
      <p class="text-base-content/70 mb-6">
        Combinación de todos los módulos: search, filters, limits, pagination, sorting y expandable
        rows.
      </p>
      <UiTable
        :fields="fields"
        :expandable="user_expandable"
        :content="paginated_data"
        @on_sort="on_sort"
      >
        <template #pre-table>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col md:flex-row justify-between gap-2">
              <UiTableFilters
                :filters="role_filters"
                v-model:active="active_filters"
                @update:active="on_active_change($event as Record<string, unknown>)"
              />
              <UiTablePagination
                :total_items="paginated_data.count"
                :items_per_page="current_limit"
                v-model:current_page="current_page"
                @update:current_page="on_page_change($event as number)"
              />
            </div>
            <div class="flex flex-col-reverse md:flex-row justify-between gap-4">
              <UiTableLimits
                :limits="[5, 10, 20]"
                v-model:current="current_limit"
                @update:current="on_limit_change($event as number)"
              />
              <UiTableSearch v-model:value="search_value" @update:value="on_search($event as string)" />
            </div>
          </div>
        </template>
        <template #post-table>
          <UiTablePagination
            class="self-end"
            :total_items="paginated_data.count"
            :items_per_page="current_limit"
            v-model:current_page="current_page"
            @update:current_page="on_page_change($event as number)"
          />
        </template>
      </UiTable>
    </div>

    <hr class="border-base-300" />

    
    <div>
      <h2 class="text-2xl font-bold mb-2">With query params support</h2>
      <p class="text-base-content/70 mb-6">
        Con <code>:use_params="true"</code> todos los filtros sincronizan automáticamente con los
        query params de la URL (<code>?search=...&page=2&role=Admin</code>). Los cambios persisten al
        recargar la página y permiten compartir URLs con filtros activos.
      </p>
      <UiTable
        :fields="fields"
        :expandable="user_expandable"
        :content="paginated_data"
        @on_sort="on_sort"
      >
        <template #pre-table>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col md:flex-row justify-between gap-2">
              <UiTableFilters :filters="role_filters" :use_params="true" />
              <UiTablePagination
                :total_items="paginated_data.count"
                :items_per_page="current_limit"
                :use_params="true"
                v-model:current_page="current_page"
              />
            </div>
            <div class="flex flex-col-reverse md:flex-row justify-between gap-4">
              <UiTableLimits :limits="[5, 10, 20]" :use_params="true" v-model:current="current_limit" />
              <UiTableSearch :use_params="true" />
            </div>
          </div>
        </template>
        <template #post-table>
          <UiTablePagination
            class="self-end"
            :total_items="paginated_data.count"
            :items_per_page="current_limit"
            :use_params="true"
            v-model:current_page="current_page"
          />
        </template>
      </UiTable>
    </div>
  </section>
</template>
