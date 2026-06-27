<script setup lang="ts">
import { ref } from 'vue'
import UiSwap from '@/shared/ui/ui-swap/UiSwap.vue'
import UiSwapItem from '@/shared/ui/ui-swap/UiSwapItem.vue'
import UiButton from '@/shared/ui/ui-button/UiButton.vue'

const swap_value = ref('off')
</script>

<template>
  <section class="space-y-12">
    <div>
      <h2 class="text-2xl font-bold mb-2">Default Swap</h2>
      <p class="text-base-content/70 mb-6">A simple swap component that toggles between two states.</p>
      <UiSwap v-model="swap_value">
        <UiSwapItem value="off">
          <UiButton variant="primary" label="OFF" />
        </UiSwapItem>
        <UiSwapItem value="on">
          <UiButton variant="success" label="ON" />
        </UiSwapItem>
      </UiSwap>
      <p class="mt-2 text-sm">Value: {{ swap_value }}</p>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Rotate Effect</h2>
      <p class="text-base-content/70 mb-6">Swap with rotation animation.</p>
      <UiSwap rotate>
        <UiSwapItem value="off">
          <div class="text-4xl">🌙</div>
        </UiSwapItem>
        <UiSwapItem value="on">
          <div class="text-4xl">☀️</div>
        </UiSwapItem>
      </UiSwap>
    </div>

    <hr class="border-base-300" />

    <div>
      <h2 class="text-2xl font-bold mb-2">Flip Effect</h2>
      <p class="text-base-content/70 mb-6">Swap with flip animation.</p>
      <UiSwap flip>
        <UiSwapItem value="off">
          <UiButton variant="error" label="Like" />
        </UiSwapItem>
        <UiSwapItem value="on">
          <UiButton variant="success" label="Liked!" />
        </UiSwapItem>
      </UiSwap>
    </div>
  </section>
</template>
