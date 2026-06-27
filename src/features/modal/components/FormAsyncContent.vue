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
    label: 'Guardando...',
    icon: 'loading',
    variant: 'success',
    size: 'sm',
    spin: true,
    disabled: true,
  },
]
</script>

<template>
  <ModalForm title="Guardar cambios" :buttons="buttons">
    <div class="space-y-3">
      <p class="text-sm text-base-content/70">
        Ejemplo con botón que muestra estado de carga (<code>spin</code> + <code>disabled</code>).
      </p>
      <p class="text-sm text-base-content/70">
        Cuando una acción es asíncrona, todos los botones del footer se deshabilitan automáticamente
        hasta que la acción finalice.
      </p>
    </div>
  </ModalForm>
</template>
