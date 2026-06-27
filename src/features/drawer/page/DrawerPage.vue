<script setup lang="ts">
import { useDrawer } from '@/shared/stores/drawer.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'

const drawer_service = useDrawer()
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Drawer</h2>
      <p class="text-base-content/70 mb-6">Use the sidebar toggle to open/close the drawer.</p>
      <p class="text-sm text-base-content/60">
        Click the hamburger menu icon in the navigation bar to toggle the drawer.
        The drawer contains the main sidebar navigation.
      </p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Programmatic Control</h2>
      <p class="text-base-content/70 mb-6">Open and close the drawer programmatically.</p>
      <div class="flex gap-4">
        <UiButton label="Open Drawer" variant="primary" @click="drawer_service.open()" />
        <UiButton label="Close Drawer" variant="secondary" @click="drawer_service.close()" />
      </div>
    </div>
  </section>
</template>
