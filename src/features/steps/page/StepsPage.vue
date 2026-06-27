<script setup lang="ts">
import UiSteps from '@/shared/ui/ui-steps/UiSteps.vue'
import type { UiStepsItem } from '@/shared/ui/ui-steps/ui-steps-properties'

const basic_data: UiStepsItem[] = [
  { label: 'Register' },
  { label: 'Choose plan' },
  { label: 'Purchase' },
  { label: 'Receive Product' },
]

const colorful_data: UiStepsItem[] = [
  { label: 'Fly to moon', color: 'info' },
  { label: 'Shrink the moon', color: 'info' },
  { label: 'Grab the moon', color: 'info' },
  { label: 'Sit on toilet', color: 'error' },
]

const icon_data: UiStepsItem[] = [
  { label: 'Login', icon: 'login', color: 'primary' },
  { label: 'Verification', icon: 'success', color: 'success' },
  { label: 'Pay', icon: 'stock', color: 'info' },
  { label: 'Done', icon: 'home', color: 'accent' },
]
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Steps</h2>
      <p class="text-base-content/70 mb-6">A horizontal steps indicator.</p>
      <UiSteps :data="basic_data" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Vertical</h2>
      <p class="text-base-content/70 mb-6">Vertical steps layout.</p>
      <UiSteps :data="basic_data" direction="vertical" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Colorful</h2>
      <p class="text-base-content/70 mb-6">Steps with colors.</p>
      <UiSteps :data="colorful_data" />
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">With Icons</h2>
      <p class="text-base-content/70 mb-6">Steps with icons.</p>
      <UiSteps :data="icon_data" />
    </div>
  </section>
</template>
