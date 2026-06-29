<script setup lang="ts">
import ModalForm from '@/shared/components/modal-form/ModalForm.vue'
</script>

<template>
  <ModalForm title="Modal with scroll" :closable="true" :show_footer="false">
    <div class="space-y-3 pb-4">
      <div
        v-for="i in 5"
        :key="i"
        class="h-[40vh] bg-base-200 rounded-box flex items-center justify-center"
      >
        <p class="text-sm text-base-content/70">
          Section {{ i }} — very long content for scrolling
        </p>
      </div>
    </div>
  </ModalForm>
</template>
