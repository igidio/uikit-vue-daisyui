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
    <!-- Basic Toast -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Basic Toast</h2>
      <p class="text-base-content/70 mb-6">Click a button to show a toast notification.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiButton variant="info" label="Show Info" @click="show_toast('info', 'Info')" />
        <UiButton variant="success" label="Show Success" @click="show_toast('success', 'Success')" />
        <UiButton variant="warning" label="Show Warning" @click="show_toast('warning', 'Warning')" />
        <UiButton variant="error" label="Show Error" @click="show_toast('error', 'Error')" />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Multiple Toasts -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Multiple Toasts</h2>
      <p class="text-base-content/70 mb-6">Toasts stack automatically in the container.</p>
      <div class="flex flex-wrap items-center gap-4">
        <UiButton variant="info" label="Toast 1" @click="show_toast('info', 'Info #1')" />
        <UiButton variant="success" label="Toast 2" @click="show_toast('success', 'Success #2')" />
        <UiButton variant="warning" label="Toast 3" @click="show_toast('warning', 'Warning #3')" />
        <UiButton variant="error" label="Toast 4" @click="show_toast('error', 'Error #4')" />
        <UiButton
          variant="neutral"
          label="All at once"
          @click="
            show_toast('info', 'Info #5')
            show_toast('success', 'Success #6')
            show_toast('warning', 'Warning #7')
            show_toast('error', 'Error #8')
          "
        />
      </div>
    </div>

    <hr class="border-base-300" />

    <!-- Positions -->
    <div>
      <h2 class="text-2xl font-bold mb-2">Positions</h2>
      <p class="text-base-content/70 mb-6">
        Toast notifications can appear in different positions using the
        <code>position</code> option.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UiButton
          variant="info"
          label="Top Start"
          @click="show_toast('info', 'Top-Start', 'toast-top toast-start')"
        />
        <UiButton
          variant="success"
          label="Top Center"
          @click="show_toast('success', 'Top-Center', 'toast-top toast-center')"
        />
        <UiButton
          variant="warning"
          label="Top End"
          @click="show_toast('warning', 'Top-End', 'toast-top toast-end')"
        />
        <UiButton
          variant="info"
          label="Middle Start"
          @click="show_toast('info', 'Middle-Start', 'toast-middle toast-start')"
        />
        <UiButton
          variant="success"
          label="Middle Center"
          @click="show_toast('success', 'Middle-Center', 'toast-middle toast-center')"
        />
        <UiButton
          variant="warning"
          label="Middle End"
          @click="show_toast('warning', 'Middle-End', 'toast-middle toast-end')"
        />
        <UiButton
          variant="info"
          label="Bottom Start"
          @click="show_toast('info', 'Bottom-Start', 'toast-bottom toast-start')"
        />
        <UiButton
          variant="success"
          label="Bottom Center"
          @click="show_toast('success', 'Bottom-Center', 'toast-bottom toast-center')"
        />
        <UiButton
          variant="error"
          label="Bottom End"
          @click="show_toast('error', 'Bottom-End', 'toast-bottom toast-end')"
        />
      </div>
    </div>
  </section>
</template>
