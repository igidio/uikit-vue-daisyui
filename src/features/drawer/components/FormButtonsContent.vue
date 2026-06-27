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
    label: 'Guardar',
    variant: 'primary',
    size: 'sm',
    icon: 'success',
  },
]
</script>

<template>
  <DrawerForm title="Drawer con botones de acción" :buttons="buttons">
    <div class="space-y-3 px-4">
      <p class="text-sm text-base-content/70">
        Los botones del footer se definen mediante el input
        <code>buttons</code>, que acepta un arreglo con las mismas propiedades de
        <code>UiButton</code>
        más un callback
        <code>action</code>
        opcional.
      </p>
    </div>
  </DrawerForm>
</template>
