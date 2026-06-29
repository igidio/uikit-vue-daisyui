<script setup lang="ts">
import ModalForm from '@/shared/components/modal-form/ModalForm.vue'
</script>

<template>
  <ModalForm title="Modal with title" :closable="true">
    <div class="space-y-3">
      <p class="text-sm text-base-content/70">
        This modal uses <code>modal-form</code> with the <code>title</code> and
        <code>closable</code> inputs. The default interface is rendered.
      </p>
      <p class="text-sm text-base-content/70">
        The close button (X) calls <code>modal_service.close()</code> automatically.
      </p>
    </div>
  </ModalForm>
</template>
