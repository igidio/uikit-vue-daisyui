<script setup lang="ts">
import { useDrawer } from '@/shared/stores/drawer.store'
import DrawerForm, { type DrawerFormButton } from '@/shared/components/drawer-form/DrawerForm.vue'

const drawer_service = useDrawer()

const buttons: DrawerFormButton[] = [
  {
    label: 'Cancelar',
    variant: 'secondary',
    size: 'sm',
    action: () => drawer_service.close(),
  },
  {
    label: 'Guardando...',
    icon: 'loading',
    variant: 'primary',
    size: 'sm',
    spin: true,
    disabled: true,
  },
]
</script>

<template>
  <DrawerForm title="Guardar cambios" :buttons="buttons">
    <div class="space-y-3 px-4">
      <p class="text-sm text-base-content/70">
        Ejemplo con botón que muestra estado de carga (spin + disabled).
      </p>
    </div>
  </DrawerForm>
</template>
