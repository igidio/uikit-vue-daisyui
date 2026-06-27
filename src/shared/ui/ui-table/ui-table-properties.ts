export type UiTableSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const table_sizes: Record<UiTableSizes, string> = {
  xs: 'table-xs',
  sm: 'table-sm',
  md: '',
  lg: 'table-lg',
  xl: 'table-xl',
}

export interface TableField<T, C = unknown> {
  label: string
  name: string
  getValue: (row: T) => string | number | boolean | null | undefined
  sortable?: boolean
  renderComponent?: string
  getInputs?: (row: T) => Record<string, unknown>
}

export interface PaginationResponse<T> {
  count: number
  data: T[]
  is_last_page: boolean
  limit: number
  offset: number
}
