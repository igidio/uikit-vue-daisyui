<script setup lang="ts">
import ModalForm from '@/shared/components/modal-form/ModalForm.vue'
</script>

<template>
  <ModalForm title="Modal con título" :closable="true">
    <div class="space-y-3">
      <p class="text-sm text-base-content/70">
        Este modal usa <code>modal-form</code> con los inputs <code>title</code> y
        <code>closable</code>. Se renderiza la interfaz por defecto.
      </p>
      <p class="text-sm text-base-content/70">
        El botón de cerrar (X) invoca a <code>modal_service.close()</code> automáticamente.
      </p>
    </div>
  </ModalForm>
</template>
