<script setup lang="ts">
import { useDrawer } from '@/shared/stores/drawer.store'
import DrawerForm, { type DrawerFormButton } from '@/shared/components/drawer-form/DrawerForm.vue'

const drawer_service = useDrawer()

const buttons: DrawerFormButton[] = [
  {
    label: 'Cancel',
    variant: 'secondary',
    size: 'sm',
    action: () => drawer_service.close(),
  },
  {
    label: 'Save',
    variant: 'primary',
    size: 'sm',
    icon: 'success',
  },
]
</script>

<template>
  <DrawerForm title="Drawer with action buttons" :buttons="buttons">
    <div class="space-y-3 px-4">
      <p class="text-sm text-base-content/70">
        The footer buttons are defined using the
        <code>buttons</code> input, which accepts an array with the same props as
        <code>UiButton</code> plus an optional
        <code>action</code>
        opcional.
      </p>
    </div>
  </DrawerForm>
</template>
