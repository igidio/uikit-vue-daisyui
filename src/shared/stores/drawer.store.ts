import { ref } from 'vue'

export type DrawerSide = 'start' | 'end'

const is_open = ref(false)
const side = ref<DrawerSide>('start')
let on_show_callback: (() => void) | null = null
let on_hide_callback: (() => void) | null = null
let on_toggle_callback: (() => void) | null = null

export function useDrawer() {
  function configure(config: {
    side?: DrawerSide
    on_show?: () => void
    on_hide?: () => void
    on_toggle?: () => void
  }): void {
    if (config.side !== undefined) side.value = config.side
    if (config.on_show !== undefined) on_show_callback = config.on_show
    if (config.on_hide !== undefined) on_hide_callback = config.on_hide
    if (config.on_toggle !== undefined) on_toggle_callback = config.on_toggle
  }

  function open(): void {
    is_open.value = true
    on_show_callback?.()
    on_toggle_callback?.()
  }

  function close(): void {
    is_open.value = false
    on_hide_callback?.()
    on_toggle_callback?.()
  }

  function toggle(): void {
    if (is_open.value) { close() } else { open() }
  }

  return {
    is_open,
    side,
    configure,
    open,
    close,
    toggle,
  }
}
