<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '@/shared/stores/modal'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'

const modal_service = useModal()

const modal_content = ref<{ title: string; body: string }>({
  title: 'Modal Title',
  body: 'This is the modal content. Click the close button or outside to dismiss.',
})
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Open Modal</h2>
      <p class="text-base-content/70 mb-6">Click the button to open a modal dialog.</p>
      <UiButton label="Open Modal" variant="primary" @click="modal_service.open()" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Toggle Modal</h2>
      <p class="text-base-content/70 mb-6">Toggle the modal open/closed.</p>
      <UiButton label="Toggle Modal" variant="secondary" @click="modal_service.toggle()" />
    </div>
  </section>
</template>
