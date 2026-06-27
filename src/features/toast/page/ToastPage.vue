<script setup lang="ts">
import { useToast } from '@/shared/stores/toast.store'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'
import type { MessageColors } from '@/shared/ui/ui-types'

const toast_service = useToast()

function show_toast(type: MessageColors, label: string, position?: string): void {
  toast_service.show({ message: `${label} toast message`, type, position })
}
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Show Toast</h2>
      <p class="text-base-content/70 mb-6">Click a button to show a toast notification.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton label="Info" variant="info" @click="show_toast('info', 'Info')" />
        <UiButton label="Success" variant="success" @click="show_toast('success', 'Success')" />
        <UiButton label="Warning" variant="warning" @click="show_toast('warning', 'Warning')" />
        <UiButton label="Error" variant="error" @click="show_toast('error', 'Error')" />
      </div>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Toast Positions</h2>
      <p class="text-base-content/70 mb-6">Show toasts at different positions.</p>
      <div class="flex flex-wrap gap-4">
        <UiButton label="Top Start" variant="accent" @click="show_toast('info', 'Top Start', 'toast-start toast-top')" />
        <UiButton label="Top Center" variant="accent" @click="show_toast('success', 'Top Center', 'toast-center toast-top')" />
        <UiButton label="Top End" variant="accent" @click="show_toast('warning', 'Top End', 'toast-top')" />
        <UiButton label="Bottom Start" variant="secondary" @click="show_toast('info', 'Bottom Start', 'toast-start toast-bottom')" />
        <UiButton label="Bottom End (Default)" variant="secondary" @click="show_toast('success', 'Bottom End', 'toast-end toast-bottom')" />
      </div>
    </div>
  </section>
</template>
