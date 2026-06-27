<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '@/shared/stores/modal'
import { ui_modal_sizes } from '@/shared/stores/modal'

const modal_service = useModal()

const modal_el = ref<HTMLDialogElement | null>(null)

const show_backdrop = () => {
  return modal_service.backdrop.value === 'dynamic' && modal_service.closable.value
}

import { onMounted } from 'vue'
onMounted(() => {
  if (modal_el.value) {
    modal_service.set_element(modal_el.value)
  }
})
</script>

<template>
  <dialog ref="modal_el" class="modal">
    <div :class="['modal-box', ui_modal_sizes[modal_service.size.value]]">
      <form v-if="modal_service.closable.value" method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <template v-if="modal_service.show_content.value && modal_service.options.value.content">
        <component
          :is="modal_service.options.value.content.component"
          v-bind="modal_service.options.value.content.props"
        />
      </template>
    </div>
    <form v-if="show_backdrop()" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
