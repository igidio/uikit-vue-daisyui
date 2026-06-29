<script setup lang="ts">
import { useModal } from '@/shared/stores/modal.store'
import ModalForm, { type ModalFormButton } from '@/shared/components/modal-form/ModalForm.vue'

const modal_service = useModal()

const buttons: ModalFormButton[] = [
  {
    label: 'Cancel',
    variant: 'secondary',
    size: 'sm',
    action: () => modal_service.close(),
  },
  {
    label: 'Save',
    variant: 'success',
    size: 'sm',
    icon: 'success',
  },
]
</script>

<template>
  <ModalForm title="Modal with action buttons" :buttons="buttons">
    <div class="space-y-3">
      <p class="text-sm text-base-content/70">
        The footer buttons are defined using the <code>buttons</code> input, which accepts an
        array with the same props as <code>UiButton</code> plus an optional
        <code>action</code> callback.
      </p>
      <p class="text-sm text-base-content/70">
        TypeScript valida autocompletado gracias al helper
        <code>ComponentInputs&lt;UiButton&gt;</code>.
      </p>
    </div>
  </ModalForm>
</template>
