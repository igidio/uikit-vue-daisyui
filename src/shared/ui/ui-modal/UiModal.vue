<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '@/shared/stores/modal.store'
import { ui_modal_sizes } from './ui-modal-properties'

const modal_service = useModal()

const modal_el = ref<HTMLDialogElement | null>(null)

const show_backdrop = () => {
  return modal_service.backdrop.value === 'dynamic'
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
      <div id="ui-modal-panel"></div>
    </div>
    <form v-if="show_backdrop()" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
