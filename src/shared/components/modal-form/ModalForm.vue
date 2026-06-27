<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '@/shared/stores/modal.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import type { UiColors } from '@/shared/ui/ui-types'
import type { UiButtonSizes, UiButtonStyle, UiButtonShape } from '@/shared/ui/ui-button/ui-button-properties'
import type { IconValue } from '@/shared/data/icons'

export interface ModalFormButton {
  label?: string
  variant?: UiColors
  size?: UiButtonSizes
  icon?: IconValue
  disabled?: boolean
  spin?: boolean
  block?: boolean
  shape?: UiButtonShape | null
  style_type?: UiButtonStyle | null
  action?: () => void | Promise<void>
}

interface Props {
  title?: string
  closable?: boolean
  buttons?: ModalFormButton[]
  show_footer?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  closable: true,
  buttons: () => [],
  show_footer: true,
})

const modal_service = useModal()
const buttons_disabled = ref(false)

async function on_button_click(action?: () => void | Promise<void>): Promise<void> {
  if (!action) return
  buttons_disabled.value = true
  try {
    await Promise.resolve(action())
  } finally {
    buttons_disabled.value = false
  }
}
</script>

<template>
  <div class="flex flex-col h-full w-full">
    <div
      class="flex items-center justify-between pb-4 md:pb-5 border-b border-base-300 shrink-0"
    >
      <slot name="header">
        <template v-if="title || closable">
          <h5 v-if="title" class="text-lg font-medium text-base-content">{{ title }}</h5>
          <UiButton
            v-if="closable"
            icon="close"
            shape="circle"
            variant="ghost"
            class="ms-auto"
            @click="modal_service.close()"
          />
        </template>
      </slot>
    </div>

    <div class="flex-1 overflow-y-auto py-4 md:py-6">
      <slot />
    </div>

    <div
      v-if="show_footer"
      class="flex items-center justify-end gap-2 pt-4 md:pt-5 border-t border-base-300 shrink-0"
    >
      <slot name="footer">
        <template v-if="buttons.length > 0">
          <UiButton
            v-for="(button, index) in buttons"
            :key="index"
            :size="button.size ?? 'sm'"
            :variant="button.variant ?? 'secondary'"
            :label="button.label ?? null"
            :icon="button.icon ?? null"
            :disabled="buttons_disabled || (button.disabled ?? false)"
            :spin="button.spin ?? false"
            :block="button.block ?? false"
            :shape="button.shape ?? null"
            :style_type="button.style_type ?? null"
            @click="on_button_click(button.action)"
          />
        </template>
      </slot>
    </div>
  </div>
</template>
