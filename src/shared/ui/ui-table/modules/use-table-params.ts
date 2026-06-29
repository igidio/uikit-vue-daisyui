import { useRoute, useRouter, type LocationQueryRaw } from 'vue-router'
import type { Ref } from 'vue'

export function useTableParams(useParams: Ref<boolean>) {
  const route = useRoute()
  const router = useRouter()

  function set_param(key: string, value: unknown): void {
    if (!useParams.value) return
    const query: LocationQueryRaw = { ...route.query }
    if (value !== undefined && value !== null) {
      query[key] = String(value)
    } else {
      delete query[key]
    }
    router.replace({ query })
  }

  function remove_param(key: string): void {
    if (!useParams.value) return
    const query: LocationQueryRaw = { ...route.query }
    delete query[key]
    router.replace({ query })
  }

  function reset_page(): void {
    remove_param('page')
  }

  return { route, set_param, remove_param, reset_page }
}
