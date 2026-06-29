<script setup lang="ts">
import { ref, computed } from 'vue'
import UiTable from '@/shared/ui/ui-table/UiTable.vue'
import type { TableField, PaginationResponse } from '@/shared/ui/ui-table/ui-table-properties'

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

const search_term = ref<string | null>(null)
const current_page = ref(1)
const current_limit = ref(5)

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

const fields: TableField<User>[] = [
  {
    label: 'ID',
    name: 'id',
    getValue: (row: User) => row.id,
    sortable: true,
  },
  {
    label: 'Nombre',
    name: 'name',
    getValue: (row: User) => row.name,
    sortable: true,
  },
  {
    label: 'Email',
    name: 'email',
    getValue: (row: User) => row.email,
  },
  {
    label: 'Rol',
    name: 'role',
    getValue: (row: User) => row.role,
  },
  {
    label: 'Estado',
    name: 'status',
    getValue: (row: User) => row.status === 'active' ? 'Activo' : 'Inactivo',
  },
  {
    label: 'Creado',
    name: 'created_at',
    getValue: (row: User) => row.created_at,
    sortable: true,
  },
]

function on_sort(event: { sort_by: string | null; order: 'asc' | 'desc' | null }): void {
  console.log('Sort:', event)
}
</script>

<template>
  <section class="space-y-12">
    <!-- Loading -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Loading state</h2>
      <p class="text-base-content/70 mb-6">
        When no content is passed or it's <code>undefined</code>, the table shows a loading spinner.
      </p>
      <UiTable :fields="fields" :content="undefined" />
    </div>

    <hr class="border-base-300" />

    <!-- Default table -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Default table</h2>
      <p class="text-base-content/70 mb-6">
        Basic table with DaisyUI classes. Shows data without additional modifiers.
      </p>
      <UiTable :fields="fields" :content="paginated_data" />
    </div>

    <hr class="border-base-300" />

    <!-- Zebra -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Zebra</h2>
      <p class="text-base-content/70 mb-6">Table with alternating row colors using <code>:zebra="true"</code>.</p>
      <UiTable :fields="fields" :content="paginated_data" zebra />
    </div>

    <hr class="border-base-300" />

    <!-- Table sizes -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Table sizes</h2>
      <p class="text-base-content/70 mb-6">
        DaisyUI offers five sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
        <code>lg</code> and <code>xl</code>.
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

    <!-- With pin-rows -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Table with pin-rows</h2>
      <p class="text-base-content/70 mb-6">
        With <code>:pin_rows="true"</code> the header stays fixed on vertical scroll.
      </p>
      <div class="max-h-64 overflow-y-auto rounded-box border border-base-content/5">
        <UiTable :fields="fields" :content="paginated_data" :pin_rows="true" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Empty state -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Empty state</h2>
      <p class="text-base-content/70 mb-6">
        When there's no data, a message is shown indicating no records were found.
      </p>
      <UiTable
        :fields="fields"
        :content="{ count: 0, data: [], is_last_page: true, limit: 10, offset: 0 }"
      />
    </div>
  </section>
</template>
