import { ref } from 'vue'
import type { MessageColors } from '@/shared/ui/ui-types'

export interface UiToastItem {
  id: number
  message: string
  type: MessageColors
  duration: number
  position: string
}

export interface ToastOptions {
  message: string
  type?: MessageColors
  duration?: number
  position?: string
}

const toasts = ref<UiToastItem[]>([])
let next_id = 0

export function useToast() {
  function show(options: ToastOptions): void {
    const id = next_id++
    const { message, type = 'info', duration = 3000, position = 'toast-end toast-bottom' } = options
    toasts.value = [...toasts.value, { id, message, type, duration, position }]
    if (duration > 0) {
      setTimeout(() => remove(id), duration)
    }
  }

  function remove(id: number): void {
    toasts.value = toasts.value.filter((item) => item.id !== id)
  }

  return { toasts, show, remove }
}
