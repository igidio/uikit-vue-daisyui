<script setup lang="ts">
import DrawerForm from '@/shared/components/drawer-form/DrawerForm.vue'
</script>

<template>
  <DrawerForm title="Drawer with title" :closable="true">
    <div class="space-y-3 px-4 menu">
      <p class="text-sm text-base-content/70">
        This drawer uses
        <code>drawer-form</code>
        with the
        <code>title</code>
        and
        <code>closable</code>
        inputs.
      </p>
      <p class="text-sm text-base-content/70">
        The close button (X) calls
        <code>drawer_service.close()</code>
        automatically.
      </p>
    </div>
  </DrawerForm>
</template>
