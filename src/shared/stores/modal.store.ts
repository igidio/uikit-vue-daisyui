import { ref } from 'vue'

export type UiModalBackdrop = 'static' | 'dynamic'
export type UiModalSize = 'sm' | 'md' | 'lg' | 'xl'

export const ui_modal_sizes: Record<UiModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-4xl',
  xl: 'max-w-7xl',
}

const backdrop = ref<UiModalBackdrop>('dynamic')
const closable = ref(true)
const size = ref<UiModalSize>('sm')
const is_open = ref(false)
let modal_el: HTMLDialogElement | null = null
let on_show_callback: (() => void) | null = null
let on_hide_callback: (() => void) | null = null
let on_toggle_callback: (() => void) | null = null

export function useModal() {
  function set_element(el: HTMLDialogElement): void {
    modal_el = el
    el.addEventListener('close', () => {
      is_open.value = false
      on_hide_callback?.()
      on_toggle_callback?.()
    })
  }

  function configure(config: {
    backdrop?: UiModalBackdrop
    closable?: boolean
    size?: UiModalSize
    on_show?: () => void
    on_hide?: () => void
    on_toggle?: () => void
  }): void {
    if (config.backdrop !== undefined) backdrop.value = config.backdrop
    if (config.closable !== undefined) closable.value = config.closable
    if (config.size !== undefined) size.value = config.size
    if (config.on_show !== undefined) on_show_callback = config.on_show
    if (config.on_hide !== undefined) on_hide_callback = config.on_hide
    if (config.on_toggle !== undefined) on_toggle_callback = config.on_toggle
  }

  function open(): void {
    if (!modal_el) return
    modal_el.showModal()
    is_open.value = true
    on_show_callback?.()
    on_toggle_callback?.()
  }

  function close(): void {
    if (!modal_el) return
    modal_el.close()
  }

  function toggle(): void {
    if (is_open.value) { close() } else { open() }
  }

  return {
    backdrop,
    closable,
    size,
    is_open,
    set_element,
    configure,
    open,
    close,
    toggle,
  }
}
