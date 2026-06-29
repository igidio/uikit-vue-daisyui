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
    label: 'Saving...',
    icon: 'loading',
    variant: 'success',
    size: 'sm',
    spin: true,
    disabled: true,
  },
]
</script>

<template>
  <ModalForm title="Save changes" :buttons="buttons">
    <div class="space-y-3">
      <p class="text-sm text-base-content/70">
        Example with a button showing loading state (<code>spin</code> + <code>disabled</code>).
      </p>
      <p class="text-sm text-base-content/70">
        When an action is async, all footer buttons are automatically disabled
        until the action completes.
      </p>
    </div>
  </ModalForm>
</template>
