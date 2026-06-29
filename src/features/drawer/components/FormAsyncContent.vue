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
    label: 'Saving...',
    icon: 'loading',
    variant: 'primary',
    size: 'sm',
    spin: true,
    disabled: true,
  },
]
</script>

<template>
  <DrawerForm title="Save changes" :buttons="buttons">
    <div class="space-y-3 px-4">
      <p class="text-sm text-base-content/70">
        Example with a button showing loading state (spin + disabled).
      </p>
    </div>
  </DrawerForm>
</template>
