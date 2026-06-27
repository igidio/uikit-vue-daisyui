<script setup lang="ts">
import DrawerForm from '@/shared/components/drawer-form/DrawerForm.vue'
</script>

<template>
  <DrawerForm title="Drawer con título" :closable="true">
    <div class="space-y-3 px-4 menu">
      <p class="text-sm text-base-content/70">
        Este drawer usa
        <code>drawer-form</code>
        con los inputs
        <code>title</code>
        y
        <code>closable</code>.
      </p>
      <p class="text-sm text-base-content/70">
        El botón de cerrar (X) invoca a
        <code>drawer_service.close()</code>
        automáticamente.
      </p>
    </div>
  </DrawerForm>
</template>
