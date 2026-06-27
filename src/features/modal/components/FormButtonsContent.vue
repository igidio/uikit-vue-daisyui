<script setup lang="ts">
import { useModal } from '@/shared/stores/modal.store'
import ModalForm, { type ModalFormButton } from '@/shared/components/modal-form/ModalForm.vue'

const modal_service = useModal()

const buttons: ModalFormButton[] = [
  {
    label: 'Cancelar',
    variant: 'secondary',
    size: 'sm',
    action: () => modal_service.close(),
  },
  {
    label: 'Guardar',
    variant: 'success',
    size: 'sm',
    icon: 'success',
  },
]
</script>

<template>
  <ModalForm title="Modal con botones de acción" :buttons="buttons">
    <div class="space-y-3">
      <p class="text-sm text-base-content/70">
        Los botones del footer se definen mediante el input <code>buttons</code>, que acepta un
        arreglo con las mismas propiedades de <code>UiButton</code> más un callback
        <code>action</code> opcional.
      </p>
      <p class="text-sm text-base-content/70">
        TypeScript valida autocompletado gracias al helper
        <code>ComponentInputs&lt;UiButton&gt;</code>.
      </p>
    </div>
  </ModalForm>
</template>
