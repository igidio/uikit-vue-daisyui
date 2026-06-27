<script setup lang="ts">
import DrawerForm from '@/shared/components/drawer-form/DrawerForm.vue'
</script>

<template>
  <DrawerForm title="Drawer con scroll" :closable="true" :show_footer="false">
    <div class="space-y-3 pb-4">
      <div
        v-for="i in 5"
        :key="i"
        class="h-[40vh] bg-base-200 rounded-box flex items-center justify-center"
      >
        <p class="text-sm text-base-content/70">Sección {{ i }} — contenido muy largo para scroll</p>
      </div>
    </div>
  </DrawerForm>
</template>
